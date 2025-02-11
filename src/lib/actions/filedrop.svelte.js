import {validateMimeType} from "$lib/utilities/validateFile.js";

export function filedrop(node, accept = []) {
    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();

        const [...files] = e.dataTransfer.files;

        const validFiles = files.filter((file) => {
            return validateMimeType(file.type, accept);
        });

        const fileDropped = new CustomEvent('filedropped', {
            detail: {
                files: validFiles
            }
        });

        node.dispatchEvent(fileDropped)
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
