import {validateFileSize, validateMimeType} from "$lib/utilities/validateFile.ts";

export function filedrop(node, params) {
    const {accept, max} = {
        ...{
            accept: [],
            max: 0
        },
        ...params
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();

        const [...files] = e.dataTransfer.files;

        const errors = []

        files.forEach((file) => {
            if (!validateMimeType(file.type, accept)) {
                errors.push('Invalid mime type: ' + file.name)
            }

            if (!validateFileSize(file.size / 1000, max)) {
                errors.push('File too large: ' + file.name)
            }
        })

        const fileDropEvent = new CustomEvent('filedrop', {
            detail: {
                files: files,
                errors: errors
            }
        });

        node.dispatchEvent(fileDropEvent)
    }

    $effect(() => {
        node.addEventListener('drop', handleDrop);
        node.addEventListener('dragover', handleDragOver)

        return () => {
            node.removeEventListener('drop', handleDrop);
            node.removeEventListener('dragover', handleDragOver)
        }
    })
}
