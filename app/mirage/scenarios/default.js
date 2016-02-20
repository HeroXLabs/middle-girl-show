export default function(server) {
  let sites = [
    { name: "cabinet-square", preview_url: "http://cabinetsquare.net" },
    { name: "rodeo-concierge", preview_url: "http://198.199.101.184/sites/rodeo-concierge/index.html" },
    { name: "wang-ivf", preview_url: "http://wangivfusa.com" },
    { name: "nth", preview_url: "http://198.199.101.184/sites/nth/index.html" },
    { name: "ty-travel", preview_url: "http://198.199.101.184/sites/tianrui-travel/index.html" },
    { name: "topivf", preview_url: "http://198.199.101.184/sites/topivfus/index.html" },
    { name: "lkr-travel", preview_url: "http://198.199.101.184/sites/lai-ke-rui-travel/index.html" },
    { name: "sj-travel", preview_url: "http://ussjtravel.com" },
    { name: "pacificbizhub", preview_url: "http://pacificbizhub.com" },
    { name: "pc-travel", preview_url: "http://pengchengtravel.com" },
    { name: "gj-yimin", preview_url: "http://heroxlabs.github.io/guojiyimin" },
    { name: "galaxycarrental", preview_url: "http://galaxycarrental.com" },
    { name: "gogospa", preview_url: "http://heroxlabs.github.io/gogospa" },
    { name: "dj-beauty", preview_url: "http://djbeauty.net" },
    { name: "caprices-dailleurs", preview_url: "http://heyook.github.io/caprices" },
    { name: "sanhewu", preview_url: "http://198.199.101.184/sites/sanhewu/index.html" }
  ];

  sites.forEach( (site) => {
    server.create("site", site);
  });
}
