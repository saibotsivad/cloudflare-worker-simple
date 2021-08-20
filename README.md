# TEMPLATE

This is a template for making and deploying a really simple Cloudflare Worker.

There's no build step, so this is for things like redirects, simple proxies, etc.

The deployment step is not automatic in this template, since this is often used in
private repos which don't have free workflow stuff. (Bitbucket does, fyi.)

## Project Setup

You'll need to update the `wrangler.toml` file with your own properties from Cloudflare.

## Deploy

Copy the configuration example to your own file:

```shell
cp configuration.example.sh configuration.sh
```

Then go to the [Cloudflare dashboard](https://dash.cloudflare.com/profile/api-tokens) to
generate a token, and set it in your `configuration.sh` file.

Finally, simply run `npm run deploy`

## Cloudflare Setup

For a subdomain, you'll need to add an `AAAA` DNS record pointing to `100::` (the
reserved IPv6 discard prefix).

That comes from the [cloudflare docs](https://developers.cloudflare.com/workers/platform/routes):

> Subdomains must have a DNS Record
>
> All subdomains must have a DNS record to be proxied on Cloudflare and
> used to invoke a Worker. For example, if you want to put a worker on
> `myname.example.com`, and you've added `example.com` to Cloudflare but
> have not added any DNS records for `example.com`, any request to
> `myname.example.com` will result in the error `ERR_NAME_NOT_RESOLVED`.
>
> To support this, you should use the Cloudflare dashboard to add an
> `AAAA` record for `myname` to `example.com`, pointing to `100::` (the
> reserved IPv6 discard prefix).
