function chunkString(str, length) {
    // Return an empty array if the input string is null
    if (!str) return [];

    let chunks = [];

    // Loop through the string in increments of the given length
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }

    return chunks;
}

