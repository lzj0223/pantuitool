void window.locals.get("LRURPVSDB", "shareid", "share_uk", function(n, f, p) {
    var g = i.getParam("surl", location.href)
      , h = i.getParam("linksource", location.href);
    h && (g = "7" + g);
    var w;
    n && (n = decodeURIComponent(n),
    /\/link\//.test(n) ? (n = n.split("/"),
    g = n[3],
    h = n[2]) : -1 !== n.indexOf("&") && (n = decodeURIComponent(n).split("&"),
    g = n[0].slice(1),
    w = n[1]));
    var y = "?t=" + (new Date).getTime();
    g ? (y += "&surl=" + g,
    h && (y += "&linksource=" + h)) : f && p && (y += "&shareid=" + f + "&uk=" + p),
    t.post(c.api.verify + y, {
        pwd: m,
        vcode: v,
        vcode_str: window.locals.get("vcodeStr") || ""
    }, function(n) {
        function f() {
            var e = i.getParam("surl", location.href)
              , t = "/s/1" + e;
            m && (t = t + "?pwd=" + m),
            location.assign(t)
        }
        if (0 !== n.errno && u.text("提取文件"),
        s({
            scene: "extract",
            status: 0 === n.errno ? "success" : "fail",
            errno: n.errno
        }),
        r && !d && (d = !0,
        o.log.send(0 !== n.errno ? {
            type: "web_auto_extract_fail",
            value: "自动提取文件失败"
        } : {
            type: "web_auto_extract_succ",
            value: "自动提取文件成功"
        })),
        -62 === n.errno || -19 === n.errno || -63 === n.errno)
            return l("验证码错误"),
            void c.verifyCodeLoad(function() {
                t(".ac-close").addClass("ac-open").removeClass("ac-close"),
                c.domList.codeInput.val("").focus()
            });
        var p = 1 === window.locals.get("loginstate");
        if (-65 === n.errno && p)
            return o.ui.tip({
                mode: "caution",
                msg: n.errmsg || "操作过于频繁，请您稍后重试",
                sticky: !1
            }),
            void e();
        if (-64 === n.errno && !p)
            return void window.yunHeader.login.util.loginNew({
                reload: !1,
                callback: f
            });
        if (-9 === n.errno || 0 !== n.errno)
            return t(".ac-open").addClass("ac-close").removeClass("ac-open"),
            void l("提取码错误");
        if (o.log.send({
            type: "web_third_link_verify_get_file_success",
            value: "提取文件成功"
        }),
        w)
            location.href = w;
        else if (g) {
            var v = "/s/1" + g;
            r && a.getSearch("pwd") && (v = v + "?pwd=" + a.getSearch("pwd")),
            h && (v = v + "?linksource=" + h),
            location.assign(v)
        } else
            location.assign("/share/link" + location.search)
    }, "json").error(function() {
        s({
            scene: "extract",
            status: "error"
        })
    })
}))