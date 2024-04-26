const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bb.JPG","cc.JPG","dd.JPG","favicon.png","logo.png","rr.JPG","s1.png","s2.png","ss.JPG","sw.JPG","tt.JPG"]),
	mimeTypes: {".JPG":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BL-rJVW4.js","app":"_app/immutable/entry/app.DGn9TN3o.js","imports":["_app/immutable/entry/start.BL-rJVW4.js","_app/immutable/chunks/entry.BVwUrbZ_.js","_app/immutable/chunks/scheduler.BDP4YaNG.js","_app/immutable/chunks/index.MhUrJ49T.js","_app/immutable/entry/app.DGn9TN3o.js","_app/immutable/chunks/scheduler.BDP4YaNG.js","_app/immutable/chunks/index.BsGCctcg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DL7CUUMv.js')),
			__memo(() => import('./chunks/1-DlJrhndr.js')),
			__memo(() => import('./chunks/2-CYYPNQoe.js')),
			__memo(() => import('./chunks/3-BUa-vJka.js')),
			__memo(() => import('./chunks/4-_q20PV9V.js')),
			__memo(() => import('./chunks/5-IEATgWj8.js')),
			__memo(() => import('./chunks/6-BOZqne9k.js')),
			__memo(() => import('./chunks/7-BUvAK3Ua.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/chat",
				pattern: /^\/api\/chat\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D706VyJd.js'))
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/manager2",
				pattern: /^\/manager2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/manage",
				pattern: /^\/manage\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portal",
				pattern: /^\/portal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/repair",
				pattern: /^\/repair\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
