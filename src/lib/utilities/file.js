export function validateMimeType(mimeType, acceptedTypes) {
    if (!acceptedTypes || acceptedTypes.length === 0) {
        return true;
    }

    // Normalize the MIME type to lowercase
    const normalizedMimeType = mimeType.toLowerCase();

    // Split the MIME type into type and subtype
    const [fileType] = normalizedMimeType.split('/');

    // Check each accepted type
    return acceptedTypes.some(acceptedType => {
        // Normalize the accepted type to lowercase
        const normalizedAcceptedType = acceptedType.toLowerCase();

        // Handle exact match
        if (normalizedAcceptedType === normalizedMimeType) {
            return true;
        }

        // Handle wildcard matches
        if (normalizedAcceptedType.endsWith('/*')) {
            const [acceptedFileType] = normalizedAcceptedType.split('/');
            return acceptedFileType === fileType;
        }

        return false;
    });
}

export function validateFileSize(size, maxSize) {
    if (!maxSize || maxSize === 0) {
        return true;
    }

    return size <= maxSize;
}

export function readAsDataURL(file) {
    return new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            return resolve({data: fileReader.result, name: file.name, size: file.size, type: file.type});
        }
        fileReader.readAsDataURL(file);
    })
}
