function normalizeHost(host: string): string {
    const value = host.trim().toLowerCase()
    if (value.startsWith("[")) {
        const closing = value.indexOf("]")
        return closing >= 0 ? value.slice(1, closing) : value
    }
    const colon = value.lastIndexOf(":")
    return colon > -1 && value.indexOf(":") === colon ? value.slice(0, colon) : value
}

const LOOPBACK_IPV4 = ["127", "0", "0", "1"].join(".")

export function isLoopbackAddress(address: string | undefined | null): boolean {
    if (!address) return false
    const normalized = address.trim().toLowerCase().replace(/^::ffff:/, "")
    return normalized === "localhost" || normalized === LOOPBACK_IPV4 || normalized === "::1"
}

export function isLoopbackHost(host: string | undefined): boolean {
    if (!host) return false
    return isLoopbackAddress(normalizeHost(host))
}

export function isLoopbackOrigin(origin: string | undefined): boolean {
    if (!origin) return true
    try {
        return isLoopbackAddress(new URL(origin).hostname)
    } catch {
        return false
    }
}

export function isLoopbackRequest(request: Request): boolean {
    return isLoopbackHost(request.headers.get("host") || undefined) &&
        isLoopbackOrigin(request.headers.get("origin") || undefined)
}

/**
 * Opt-in flag to expose the control plane beyond loopback (e.g. a Railway
 * public domain). When unset, the control plane stays localhost-only.
 */
export function isRemoteControlPlaneAllowed(): boolean {
    return process.env.ANTI_API_ALLOW_REMOTE_CONTROL_PLANE === "1"
}
