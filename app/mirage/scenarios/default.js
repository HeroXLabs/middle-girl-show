export default function(server) {
  let sites = [
    { name: "cabinet-square", preview_url: "http://cabinetsquare.net" },
    { name: "rodeo-concierge", preview_url: "http://198.199.101.184/sites/rodeo-concierge/index.html" },
    { name: "wang-ivf", preview_url: "http://wangivfusa.com" },
    { name: "nth", preview_url: "http://198.199.101.184/sites/nth/index.html"}
  ];

  sites.forEach( (site) => {
    server.create("site", site);
  });
}
