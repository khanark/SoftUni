function validateHttp(data) {
    const validMethods = ['GET', 'POST', 'CONNECT', 'DELETE'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validUri = /^[\w.]+$/;
    const validMsg = /^[^<>\\&'"]*$/;

    // check if method exist and its values are valid
    if (!data.method) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!validMethods.includes(data.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    // check if uri exists and its values are valid
    if (!data.uri) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (validUri.test(data.uri) == false && data.uri != '*') {
        throw new Error('Invalid request header: Invalid URI');
    }

    // check if version exists and its values are valid
    if (!data.version) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!validVersions.includes(data.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    // check if msg exist and its values are valid
    if (!data.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    if (!validMsg.test(data.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return data;
}

console.log(
    validateHttp({
        method: 'GET',
        uri: 'mater.dot',
        version: 'HTTP/1.1',
        message: '\r\n',
    })
);
