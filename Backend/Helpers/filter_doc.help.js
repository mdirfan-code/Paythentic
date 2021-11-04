exports.extractRequest = (doc) => {
    console.log(doc)
    let allRequests = doc[0]["connectionRequest"]
    console.log(allRequests)
    let requests = allRequests.filter(request => request.status === "unresolve")
    return requests
}