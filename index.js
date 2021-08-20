async function handleRequest(request) {
	const { pathname, search } = new URL(request.url)
	return Response.redirect(`https://example.com${pathname}${search || ''}`, 301)
}

addEventListener('fetch', event => {
	return event.respondWith(handleRequest(event.request))
})
