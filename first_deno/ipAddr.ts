import { ConnInfo } from "https://deno.land/std@0.140.0/http/server.ts";

export function _getIPAddr(_req: Request, connInfo: ConnInfo) {
    const addr = connInfo.remoteAddr as Deno.NetAddr;
    const ip = addr.hostname;
    return ip;
  }