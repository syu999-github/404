

console.log(blacklist);

for(var i=0;i<blacklist.length;i++){
	var site_key=blacklist[i];
	if(window.location.href.indexOf(site_key)!=-1){
    $("body").html('<h2>404</h2><style>h2{text-align:center;}</style>');
    $(document).attr("title","该网站已经被禁止访问");
	}
}
