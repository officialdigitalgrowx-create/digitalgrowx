'use client';
import { useEffect, useRef, RefObject } from 'react';

// Lazy-load GSAP to keep it off the critical path
async function loadGSAP() {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
    ]);
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
}

export function useGSAP() {
    const scope = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scope.current) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | undefined;

        loadGSAP().then(({ gsap }) => {
            if (!scope.current) return;

            ctx = gsap.context(() => {

                // Fade-up elements
                gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
                    gsap.fromTo(el,
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 3.2,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 88%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

                // Fade-in elements
                gsap.utils.toArray<HTMLElement>('.gsap-fade-in').forEach((el) => {
                    gsap.fromTo(el,
                        { opacity: 0 },
                        {
                            opacity: 1, duration: 2.65,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 88%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

                // Scale-in elements
                gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
                    gsap.fromTo(el,
                        { scale: 0.85, opacity: 0 },
                        {
                            scale: 1, opacity: 1, duration: 1.7,
                            ease: 'back.out(1.4)',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 88%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

                // Slide-in from left
                gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) => {
                    gsap.fromTo(el,
                        { x: -70, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 2.0,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 88%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

                // Slide-in from right
                gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) => {
                    gsap.fromTo(el,
                        { x: 70, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 2.0,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 88%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

                // Stagger children
                gsap.utils.toArray<HTMLElement>('.gsap-stagger-children').forEach((el) => {
                    const children = Array.from(el.children);
                    gsap.fromTo(children,
                        { y: 40, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1.45,
                            stagger: 0.1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 82%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

                // Horizontal stagger (cards from bottom with slight rotation)
                gsap.utils.toArray<HTMLElement>('.gsap-card-stagger').forEach((el) => {
                    const children = Array.from(el.children);
                    gsap.fromTo(children,
                        { y: 60, opacity: 0, rotateX: 8 },
                        {
                            y: 0, opacity: 1, rotateX: 0, duration: 1.7,
                            stagger: 0.12,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 84%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });

            }, scope);
        });

        return () => { if (ctx) ctx.revert(); };
    }, []);

    return scope;
}

// Counter animation hook
export function useCounter(ref: RefObject<HTMLElement | null>, endValue: number, duration = 2) {
    useEffect(() => {
        if (!ref.current) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            if (ref.current) ref.current.textContent = endValue.toString();
            return;
        }

        let tween: { kill: () => void } | undefined;

        loadGSAP().then(({ gsap }) => {
            if (!ref.current) return;
            const obj = { val: 0 };
            tween = gsap.to(obj, {
                val: endValue,
                duration,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                onUpdate: () => {
                    if (ref.current) ref.current.textContent = Math.round(obj.val).toString();
                },
            });
        });

        return () => { if (tween) tween.kill(); };
    }, [ref, endValue, duration]);
}

// Hero load animation — .hero-subtitle is NOT hidden so it paints immediately (fixes LCP)
export function useHeroAnimation(ref: RefObject<HTMLElement | null>) {
    useEffect(() => {
        if (!ref.current) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let ctx: ReturnType<typeof import('gsap')['gsap']['context']> | undefined;

        loadGSAP().then(({ gsap }) => {
            if (!ref.current) return;

            ctx = gsap.context(() => {
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                // Init chart paths
                gsap.set('.chart-path-line', { strokeDasharray: 750, strokeDashoffset: 750 });
                gsap.set('.chart-path-fill', { opacity: 0, transformOrigin: 'bottom', scaleY: 0 });
                // NOTE: .hero-subtitle is intentionally NOT hidden here to allow immediate LCP paint
                gsap.set(['.hero-badge', '.hero-title', '.hero-cta', '.hero-stats', '.hero-visual', '.scroll-indicator'], { opacity: 0 });

                tl
                    .to('.hero-badge', { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }, 0.2)
                    .to('.hero-title', { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, 0.45)
                    // hero-subtitle fades in from its already-visible state — seamless visual
                    .to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }, 0.65)
                    .to('.hero-cta', { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12 }, 0.85)
                    .to('.hero-stats', { y: 0, opacity: 1, duration: 0.6 }, 1.0)
                    .to('.hero-visual', { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' }, 0.5)
                    .to('.chart-path-line', { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.9)
                    .to('.chart-path-fill', { opacity: 1, scaleY: 1, duration: 1.1, ease: 'power2.out' }, 1.1)
                    .to({}, {
                        duration: 1.6,
                        onUpdate: function () {
                            const val = Math.round(1 + 9 * this.progress());
                            const el = document.querySelector('.hero-count-up');
                            if (el) el.textContent = val.toString();
                        }
                    }, 0.9)
                    .to('.scroll-indicator', { opacity: 1, duration: 0.5 }, 1.6);
            }, ref);
        });

        return () => { if (ctx) ctx.revert(); };
    }, [ref]);
}