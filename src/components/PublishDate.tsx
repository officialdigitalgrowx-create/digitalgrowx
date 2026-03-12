export function PublishDate({
    publishedDate,
    modifiedDate,
}: {
    publishedDate: string;
    modifiedDate?: string;
}) {
    return (
        <div className="text-sm text-gray-400 flex flex-wrap gap-x-4 gap-y-1 my-4 items-center">
            <time dateTime={publishedDate} className="flex items-center gap-1">
                <span className="opacity-70">Published:</span>
                <span className="font-medium text-gray-200">
                    {new Date(publishedDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </span>
            </time>
            {modifiedDate && modifiedDate !== publishedDate && (
                <time dateTime={modifiedDate} className="flex items-center gap-1">
                    <span className="opacity-70">Updated:</span>
                    <span className="font-medium text-primary-300">
                        {new Date(modifiedDate).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </span>
                </time>
            )}
        </div>
    );
}
