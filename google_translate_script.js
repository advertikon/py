'use strict';
// https://translate.google.com.ua/translate/releases/twsfe_w_20190617_RC01/r/js/translate_m.js
// 7372 -> 7362
var k, aa = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}, ba = function(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    }
}, ca = function(a) {
    for (var b, c = []; !(b = a.next()).done; )
        c.push(b.value);
    return c
}, da = "function" == typeof Object.create ? Object.create : function(a) {
    var b = function() {};
    b.prototype = a;
    return new b
}
, ea;
if ("function" == typeof Object.setPrototypeOf)
    ea = Object.setPrototypeOf;
else {
    var fa;
    a: {
        var ha = {
            Kj: !0
        }
          , ia = {};
        try {
            ia.__proto__ = ha;
            fa = ia.Kj;
            break a
        } catch (a) {}
        fa = !1
    }
    ea = fa ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible");
        return a
    }
    : null
}
var ja = ea
  , ka = function(a, b) {
    a.prototype = da(b.prototype);
    a.prototype.constructor = a;
    if (ja)
        ja(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else
                    a[c] = b[c];
    a.D = b.prototype
}
  , la = function(a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
        var f = a[e];
        if (b.call(c, f, e, a))
            return {
                ji: e,
                hj: f
            }
    }
    return {
        ji: -1,
        hj: void 0
    }
}
  , ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
}
  , na = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this
  , oa = function(a, b) {
    if (b) {
        var c = na;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ma(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
};
oa("Array.prototype.findIndex", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).ji
    }
});
var pa = function(a, b, c) {
    if (null == a)
        throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp)
        throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
};
oa("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = pa(this, b, "endsWith");
        b += "";
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c; )
            if (d[--c] != b[--e])
                return !1;
        return 0 >= e
    }
});
oa("Array.prototype.find", function(a) {
    return a ? a : function(b, c) {
        return la(this, b, c).hj
    }
});
oa("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = pa(this, b, "startsWith");
        b += "";
        var e = d.length
          , f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e; )
            if (d[c++] != b[g++])
                return !1;
        return g >= f
    }
});
oa("String.prototype.repeat", function(a) {
    return a ? a : function(b) {
        var c = pa(this, null, "repeat");
        if (0 > b || 1342177279 < b)
            throw new RangeError("Invalid count value");
        b |= 0;
        for (var d = ""; b; )
            if (b & 1 && (d += c),
            b >>>= 1)
                c += c;
        return d
    }
});
var qa = function() {
    qa = function() {}
    ;
    na.Symbol || (na.Symbol = ra)
}
  , sa = function(a, b) {
    this.a = a;
    ma(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
    })
};
sa.prototype.toString = function() {
    return this.a
}
;
var ra = function() {
    function a(c) {
        if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
        return new sa("jscomp_symbol_" + (c || "") + "_" + b++,c)
    }
    var b = 0;
    return a
}()
  , ua = function() {
    qa();
    var a = na.Symbol.iterator;
    a || (a = na.Symbol.iterator = na.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && ma(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return ta(aa(this))
        }
    });
    ua = function() {}
}
  , ta = function(a) {
    ua();
    a = {
        next: a
    };
    a[na.Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
  , va = function(a, b) {
    ua();
    a instanceof String && (a += "");
    var c = 0
      , d = {
        next: function() {
            if (c < a.length) {
                var e = c++;
                return {
                    value: b(e, a[e]),
                    done: !1
                }
            }
            d.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return d.next()
        }
    };
    d[Symbol.iterator] = function() {
        return d
    }
    ;
    return d
};
oa("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return va(this, function(b) {
            return b
        })
    }
});
oa("Array.prototype.values", function(a) {
    return a ? a : function() {
        return va(this, function(b, c) {
            return c
        })
    }
});
oa("Promise", function(a) {
    function b() {
        this.a = null
    }
    function c(g) {
        return g instanceof e ? g : new e(function(h) {
            h(g)
        }
        )
    }
    if (a)
        return a;
    b.prototype.b = function(g) {
        if (null == this.a) {
            this.a = [];
            var h = this;
            this.c(function() {
                h.h()
            })
        }
        this.a.push(g)
    }
    ;
    var d = na.setTimeout;
    b.prototype.c = function(g) {
        d(g, 0)
    }
    ;
    b.prototype.h = function() {
        for (; this.a && this.a.length; ) {
            var g = this.a;
            this.a = [];
            for (var h = 0; h < g.length; ++h) {
                var l = g[h];
                g[h] = null;
                try {
                    l()
                } catch (m) {
                    this.g(m)
                }
            }
        }
        this.a = null
    }
    ;
    b.prototype.g = function(g) {
        this.c(function() {
            throw g;
        })
    }
    ;
    var e = function(g) {
        this.b = 0;
        this.c = void 0;
        this.a = [];
        var h = this.g();
        try {
            g(h.resolve, h.reject)
        } catch (l) {
            h.reject(l)
        }
    };
    e.prototype.g = function() {
        function g(m) {
            return function(q) {
                l || (l = !0,
                m.call(h, q))
            }
        }
        var h = this
          , l = !1;
        return {
            resolve: g(this.C),
            reject: g(this.h)
        }
    }
    ;
    e.prototype.C = function(g) {
        if (g === this)
            this.h(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof e)
            this.L(g);
        else {
            a: switch (typeof g) {
            case "object":
                var h = null != g;
                break a;
            case "function":
                h = !0;
                break a;
            default:
                h = !1
            }
            h ? this.G(g) : this.o(g)
        }
    }
    ;
    e.prototype.G = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (l) {
            this.h(l);
            return
        }
        "function" == typeof h ? this.K(h, g) : this.o(g)
    }
    ;
    e.prototype.h = function(g) {
        this.m(2, g)
    }
    ;
    e.prototype.o = function(g) {
        this.m(1, g)
    }
    ;
    e.prototype.m = function(g, h) {
        if (0 != this.b)
            throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
        this.b = g;
        this.c = h;
        this.w()
    }
    ;
    e.prototype.w = function() {
        if (null != this.a) {
            for (var g = 0; g < this.a.length; ++g)
                f.b(this.a[g]);
            this.a = null
        }
    }
    ;
    var f = new b;
    e.prototype.L = function(g) {
        var h = this.g();
        g.Ve(h.resolve, h.reject)
    }
    ;
    e.prototype.K = function(g, h) {
        var l = this.g();
        try {
            g.call(h, l.resolve, l.reject)
        } catch (m) {
            l.reject(m)
        }
    }
    ;
    e.prototype.then = function(g, h) {
        function l(u, y) {
            return "function" == typeof u ? function(Q) {
                try {
                    m(u(Q))
                } catch (L) {
                    q(L)
                }
            }
            : y
        }
        var m, q, r = new e(function(u, y) {
            m = u;
            q = y
        }
        );
        this.Ve(l(g, m), l(h, q));
        return r
    }
    ;
    e.prototype.catch = function(g) {
        return this.then(void 0, g)
    }
    ;
    e.prototype.Ve = function(g, h) {
        function l() {
            switch (m.b) {
            case 1:
                g(m.c);
                break;
            case 2:
                h(m.c);
                break;
            default:
                throw Error("Unexpected state: " + m.b);
            }
        }
        var m = this;
        null == this.a ? f.b(l) : this.a.push(l)
    }
    ;
    e.resolve = c;
    e.reject = function(g) {
        return new e(function(h, l) {
            l(g)
        }
        )
    }
    ;
    e.race = function(g) {
        return new e(function(h, l) {
            for (var m = ba(g), q = m.next(); !q.done; q = m.next())
                c(q.value).Ve(h, l)
        }
        )
    }
    ;
    e.all = function(g) {
        var h = ba(g)
          , l = h.next();
        return l.done ? c([]) : new e(function(m, q) {
            function r(Q) {
                return function(L) {
                    u[Q] = L;
                    y--;
                    0 == y && m(u)
                }
            }
            var u = []
              , y = 0;
            do
                u.push(void 0),
                y++,
                c(l.value).Ve(r(u.length - 1), q),
                l = h.next();
            while (!l.done)
        }
        )
    }
    ;
    return e
});
oa("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
});
oa("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b))
                return !0
        }
        return !1
    }
});
oa("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
    }
});
oa("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(h) {
            return h
        }
        ;
        var e = []
          , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length,
            g = 0; g < f; g++)
                e.push(c.call(d, b[g], g));
        return e
    }
});
var wa = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
oa("WeakMap", function(a) {
    function b() {}
    function c(h) {
        if (!wa(h, e)) {
            var l = new b;
            ma(h, e, {
                value: l
            })
        }
    }
    function d(h) {
        var l = Object[h];
        l && (Object[h] = function(m) {
            if (m instanceof b)
                return m;
            c(m);
            return l(m)
        }
        )
    }
    if (function() {
        if (!a || !Object.seal)
            return !1;
        try {
            var h = Object.seal({})
              , l = Object.seal({})
              , m = new a([[h, 2], [l, 3]]);
            if (2 != m.get(h) || 3 != m.get(l))
                return !1;
            m.delete(h);
            m.set(l, 4);
            return !m.has(h) && 4 == m.get(l)
        } catch (q) {
            return !1
        }
    }())
        return a;
    var e = "$jscomp_hidden_" + Math.random();
    d("freeze");
    d("preventExtensions");
    d("seal");
    var f = 0
      , g = function(h) {
        this.ra = (f += Math.random() + 1).toString();
        if (h) {
            h = ba(h);
            for (var l; !(l = h.next()).done; )
                l = l.value,
                this.set(l[0], l[1])
        }
    };
    g.prototype.set = function(h, l) {
        c(h);
        if (!wa(h, e))
            throw Error("WeakMap key fail: " + h);
        h[e][this.ra] = l;
        return this
    }
    ;
    g.prototype.get = function(h) {
        return wa(h, e) ? h[e][this.ra] : void 0
    }
    ;
    g.prototype.has = function(h) {
        return wa(h, e) && wa(h[e], this.ra)
    }
    ;
    g.prototype.delete = function(h) {
        return wa(h, e) && wa(h[e], this.ra) ? delete h[e][this.ra] : !1
    }
    ;
    return g
});
oa("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [], d;
        for (d in b)
            wa(b, d) && c.push(b[d]);
        return c
    }
});
oa("Map", function(a) {
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
            return !1;
        try {
            var h = Object.seal({
                x: 4
            })
              , l = new a(ba([[h, "s"]]));
            if ("s" != l.get(h) || 1 != l.size || l.get({
                x: 4
            }) || l.set({
                x: 4
            }, "t") != l || 2 != l.size)
                return !1;
            var m = l.entries()
              , q = m.next();
            if (q.done || q.value[0] != h || "s" != q.value[1])
                return !1;
            q = m.next();
            return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
        } catch (r) {
            return !1
        }
    }())
        return a;
    ua();
    var b = new WeakMap
      , c = function(h) {
        this.b = {};
        this.a = f();
        this.size = 0;
        if (h) {
            h = ba(h);
            for (var l; !(l = h.next()).done; )
                l = l.value,
                this.set(l[0], l[1])
        }
    };
    c.prototype.set = function(h, l) {
        h = 0 === h ? 0 : h;
        var m = d(this, h);
        m.list || (m.list = this.b[m.id] = []);
        m.ob ? m.ob.value = l : (m.ob = {
            next: this.a,
            Gc: this.a.Gc,
            head: this.a,
            key: h,
            value: l
        },
        m.list.push(m.ob),
        this.a.Gc.next = m.ob,
        this.a.Gc = m.ob,
        this.size++);
        return this
    }
    ;
    c.prototype.delete = function(h) {
        h = d(this, h);
        return h.ob && h.list ? (h.list.splice(h.index, 1),
        h.list.length || delete this.b[h.id],
        h.ob.Gc.next = h.ob.next,
        h.ob.next.Gc = h.ob.Gc,
        h.ob.head = null,
        this.size--,
        !0) : !1
    }
    ;
    c.prototype.clear = function() {
        this.b = {};
        this.a = this.a.Gc = f();
        this.size = 0
    }
    ;
    c.prototype.has = function(h) {
        return !!d(this, h).ob
    }
    ;
    c.prototype.get = function(h) {
        return (h = d(this, h).ob) && h.value
    }
    ;
    c.prototype.entries = function() {
        return e(this, function(h) {
            return [h.key, h.value]
        })
    }
    ;
    c.prototype.keys = function() {
        return e(this, function(h) {
            return h.key
        })
    }
    ;
    c.prototype.values = function() {
        return e(this, function(h) {
            return h.value
        })
    }
    ;
    c.prototype.forEach = function(h, l) {
        for (var m = this.entries(), q; !(q = m.next()).done; )
            q = q.value,
            h.call(l, q[1], q[0], this)
    }
    ;
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, l) {
        var m = l && typeof l;
        "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g,
        b.set(l, m)) : m = "p_" + l;
        var q = h.b[m];
        if (q && wa(h.b, m))
            for (h = 0; h < q.length; h++) {
                var r = q[h];
                if (l !== l && r.key !== r.key || l === r.key)
                    return {
                        id: m,
                        list: q,
                        index: h,
                        ob: r
                    }
            }
        return {
            id: m,
            list: q,
            index: -1,
            ob: void 0
        }
    }
      , e = function(h, l) {
        var m = h.a;
        return ta(function() {
            if (m) {
                for (; m.head != h.a; )
                    m = m.Gc;
                for (; m.next != m.head; )
                    return m = m.next,
                    {
                        done: !1,
                        value: l(m)
                    };
                m = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }
      , f = function() {
        var h = {};
        return h.Gc = h.next = h.head = h
    }
      , g = 0;
    return c
});
var xa = xa || {}
  , n = this || self
  , p = function(a) {
    return void 0 !== a
}
  , t = function(a) {
    return "string" == typeof a
}
  , ya = function(a) {
    return "number" == typeof a
}
  , za = function(a, b) {
    a = a.split(".");
    var c = n;
    a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
        !a.length && p(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
}
  , Ca = function(a) {
    if (a && a != n)
        return Aa(a.document);
    null === Ba && (Ba = Aa(n.document));
    return Ba
}
  , Da = /^[\w+/_-]+[=]{0,2}$/
  , Ba = null
  , Aa = function(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Da.test(a) ? a : ""
}
  , Ea = function(a, b) {
    a = a.split(".");
    b = b || n;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]],
        null == b)
            return null;
    return b
}
  , Fa = function() {}
  , Ga = function(a) {
    a.Kg = void 0;
    a.M = function() {
        return a.Kg ? a.Kg : a.Kg = new a
    }
}
  , Ia = function(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function"
        } else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b
}
  , Ja = function(a) {
    return "array" == Ia(a)
}
  , Ka = function(a) {
    var b = Ia(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
  , La = function(a) {
    return "function" == Ia(a)
}
  , Ma = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
  , Qa = function(a) {
    return a[Oa] || (a[Oa] = ++Pa)
}
  , Oa = "closure_uid_" + (1E9 * Math.random() >>> 0)
  , Pa = 0
  , Ra = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
  , Sa = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
  , v = function(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = Ra : v = Sa;
    return v.apply(null, arguments)
}
  , Ta = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}
  , Ua = Date.now || function() {
    return +new Date
}
  , w = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.D = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.qq = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
            g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
};
var Va = function(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, Va);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
w(Va, Error);
Va.prototype.name = "CustomError";
var Wa;
var Xa = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
    Va.call(this, c + a[d])
};
w(Xa, Va);
Xa.prototype.name = "AssertionError";
var Ya = function(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
        e += ": " + c;
        var f = d
    } else
        a && (e += ": " + a,
        f = b);
    throw new Xa("" + e,f || []);
}
  , x = function(a, b, c) {
    a || Ya("", null, b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , Za = function(a, b) {
    throw new Xa("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
}
  , $a = function(a, b, c) {
    ya(a) || Ya("Expected number but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , ab = function(a, b, c) {
    t(a) || Ya("Expected string but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , bb = function(a, b, c) {
    La(a) || Ya("Expected function but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , cb = function(a, b, c) {
    Ma(a) || Ya("Expected object but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , db = function(a, b, c) {
    Ja(a) || Ya("Expected array but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , eb = function(a, b, c) {
    "boolean" == typeof a || Ya("Expected boolean but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , fb = function(a, b, c) {
    Ma(a) && 1 == a.nodeType || Ya("Expected Element but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
    return a
}
  , hb = function(a, b, c, d) {
    a instanceof b || Ya("Expected instanceof %s but got %s.", [gb(b), gb(a)], c, Array.prototype.slice.call(arguments, 3));
    return a
}
  , gb = function(a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
};
var ib = function(a) {
    return a[a.length - 1]
}
  , jb = Array.prototype.indexOf ? function(a, b) {
    x(null != a.length);
    return Array.prototype.indexOf.call(a, b, void 0)
}
: function(a, b) {
    if (t(a))
        return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}
  , z = Array.prototype.forEach ? function(a, b, c) {
    x(null != a.length);
    Array.prototype.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}
  , kb = Array.prototype.filter ? function(a, b) {
    x(null != a.length);
    return Array.prototype.filter.call(a, b, void 0)
}
: function(a, b) {
    for (var c = a.length, d = [], e = 0, f = t(a) ? a.split("") : a, g = 0; g < c; g++)
        if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h)
        }
    return d
}
  , lb = Array.prototype.map ? function(a, b, c) {
    x(null != a.length);
    return Array.prototype.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}
  , mb = Array.prototype.reduce ? function(a, b, c) {
    x(null != a.length);
    return Array.prototype.reduce.call(a, b, c)
}
: function(a, b, c) {
    var d = c;
    z(a, function(e, f) {
        d = b.call(void 0, d, e, f, a)
    });
    return d
}
  , nb = Array.prototype.some ? function(a, b) {
    x(null != a.length);
    return Array.prototype.some.call(a, b, void 0)
}
: function(a, b) {
    for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a))
            return !0;
    return !1
}
  , ob = Array.prototype.every ? function(a, b) {
    x(null != a.length);
    return Array.prototype.every.call(a, b, void 0)
}
: function(a, b) {
    for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && !b.call(void 0, d[e], e, a))
            return !1;
    return !0
}
  , pb = function(a, b) {
    var c = 0;
    z(a, function(d, e, f) {
        b.call(void 0, d, e, f) && ++c
    }, void 0);
    return c
}
  , qb = function(a, b) {
    a: {
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b = -1
    }
    return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
}
  , rb = function(a, b) {
    a: {
        for (var c = t(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) {
                b = d;
                break a
            }
        b = -1
    }
    return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
}
  , sb = function(a, b) {
    return 0 <= jb(a, b)
}
  , tb = function(a, b) {
    sb(a, b) || a.push(b)
}
  , vb = function(a, b) {
    b = jb(a, b);
    var c;
    (c = 0 <= b) && ub(a, b);
    return c
}
  , ub = function(a, b) {
    x(null != a.length);
    Array.prototype.splice.call(a, b, 1)
}
  , wb = function(a) {
    return Array.prototype.concat.apply([], arguments)
}
  , xb = function(a) {
    return Array.prototype.concat.apply([], arguments)
}
  , yb = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}
  , zb = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Ka(d)) {
            var e = a.length || 0
              , f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++)
                a[e + g] = d[g]
        } else
            a.push(d)
    }
}
  , Bb = function(a, b, c, d) {
    x(null != a.length);
    Array.prototype.splice.apply(a, Ab(arguments, 1))
}
  , Ab = function(a, b, c) {
    x(null != a.length);
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
}
  , Cb = function(a, b) {
    return wb.apply([], lb(a, b, void 0))
};
var Fb = function(a) {
    var b = Db(a);
    b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && Za("Argument is not a Location (or a non-Element mock); got: %s", Eb(a))
}
  , Gb = function(a, b) {
    var c = Db(a);
    c && "undefined" != typeof c[b] && (a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)) || Za("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, Eb(a)))
}
  , Eb = function(a) {
    if (Ma(a))
        try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (b) {
            return "<object could not be stringified>"
        }
    else
        return void 0 === a ? "undefined" : null === a ? "null" : typeof a
}
  , Db = function(a) {
    try {
        var b = a && a.ownerDocument
          , c = b && (b.defaultView || b.parentWindow);
        c = c || n;
        if (c.Element && c.Location)
            return c
    } catch (d) {}
    return null
};
var Jb = function() {
    return null
}
  , Kb = function(a) {
    var b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
}
  , Lb = function(a) {
    var b = !1, c;
    return function() {
        b || (c = a(),
        b = !0);
        return c
    }
};
var Mb = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}
  , Nb = function(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a))
            return !0;
    return !1
}
  , Ob = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}
  , Pb = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}
  , Qb = function(a, b) {
    return null !== a && b in a
}
  , Rb = function(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
}
  , Tb = function() {
    var a = Sb, b;
    for (b in a)
        return !1;
    return !0
}
  , Ub = function(a, b, c) {
    if (null !== a && b in a)
        throw Error('The object already contains the key "' + b + '"');
    a[b] = c
}
  , Vb = function(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}
  , Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
  , Xb = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Wb.length; f++)
            c = Wb[f],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
  , Yb = function(a) {
    var b = arguments.length;
    if (1 == b && Ja(arguments[0]))
        return Yb.apply(null, arguments[0]);
    if (b % 2)
        throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)
        c[arguments[d]] = arguments[d + 1];
    return c
}
  , Zb = function(a) {
    var b = arguments.length;
    if (1 == b && Ja(arguments[0]))
        return Zb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]] = !0;
    return c
};
var $b = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var cc = function(a, b) {
    this.a = a === ac && b || "";
    this.b = bc
};
cc.prototype.sc = !0;
cc.prototype.sb = function() {
    return this.a
}
;
cc.prototype.toString = function() {
    return "Const{" + this.a + "}"
}
;
var dc = function(a) {
    if (a instanceof cc && a.constructor === cc && a.b === bc)
        return a.a;
    Za("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}
  , ec = function(a) {
    return new cc(ac,a)
}
  , bc = {}
  , ac = {}
  , fc = ec("");
var gc = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/
  , hc = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/
  , ic = /^http:\/\/.*/
  , jc = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i
  , kc = function(a) {
    return jc.test(a)
}
  , lc = /\s+/
  , mc = /[\d\u06f0-\u06f9]/
  , nc = function(a) {
    var b = 0
      , c = 0
      , d = !1;
    a = a.split(lc);
    for (var e = 0; e < a.length; e++) {
        var f = a[e];
        hc.test(f) ? (b++,
        c++) : ic.test(f) ? d = !0 : gc.test(f) ? c++ : mc.test(f) && (d = !0)
    }
    return -1 == (0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1)
};
var pc = function() {
    this.a = "";
    this.b = oc
};
k = pc.prototype;
k.sc = !0;
k.sb = function() {
    return this.a.toString()
}
;
k.Ig = !0;
k.Pc = function() {
    return 1
}
;
k.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}"
}
;
var rc = function(a) {
    return qc(a).toString()
}
  , qc = function(a) {
    if (a instanceof pc && a.constructor === pc && a.b === oc)
        return a.a;
    Za("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ia(a));
    return "type_error:TrustedResourceUrl"
}
  , sc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
  , oc = {}
  , tc = function(a) {
    var b = new pc;
    b.a = a;
    return b
}
  , uc = function(a, b, c) {
    if (null == c)
        return b;
    if (t(c))
        return c ? a + encodeURIComponent(c) : "";
    for (var d in c) {
        var e = c[d];
        e = Ja(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g && (b || (b = a),
            b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
        }
    }
    return b
};
var vc = function(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}
  , wc = function(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
}
  , xc = function(a) {
    return /^[\s\xa0]*$/.test(a)
}
  , yc = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
}
  , zc = function(a, b) {
    a = String(a).toLowerCase();
    b = String(b).toLowerCase();
    return a < b ? -1 : a == b ? 0 : 1
}
  , Ac = function(a) {
    return a.replace(/(\r\n|\r|\n)/g, "<br>")
}
  , Ic = function(a, b) {
    if (b)
        a = a.replace(Bc, "&amp;").replace(Cc, "&lt;").replace(Dc, "&gt;").replace(Ec, "&quot;").replace(Fc, "&#39;").replace(Gc, "&#0;");
    else {
        if (!Hc.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Bc, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Cc, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Dc, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Ec, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Fc, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Gc, "&#0;"))
    }
    return a
}
  , Bc = /&/g
  , Cc = /</g
  , Dc = />/g
  , Ec = /"/g
  , Fc = /'/g
  , Gc = /\x00/g
  , Hc = /[\x00&<>"']/
  , Jc = function(a, b) {
    return -1 != a.indexOf(b)
}
  , Lc = function(a, b) {
    var c = 0;
    a = yc(String(a)).split(".");
    b = yc(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || ""
          , g = b[e] || "";
        do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f[0].length && 0 == g[0].length)
                break;
            c = Kc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Kc(0 == f[2].length, 0 == g[2].length) || Kc(f[2], g[2]);
            f = f[3];
            g = g[3]
        } while (0 == c)
    }
    return c
}
  , Kc = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};
var Nc = function() {
    this.a = "";
    this.b = Mc
};
k = Nc.prototype;
k.sc = !0;
k.sb = function() {
    return this.a.toString()
}
;
k.Ig = !0;
k.Pc = function() {
    return 1
}
;
k.toString = function() {
    return "SafeUrl{" + this.a + "}"
}
;
var Pc = function(a) {
    return Oc(a).toString()
}
  , Oc = function(a) {
    if (a instanceof Nc && a.constructor === Nc && a.b === Mc)
        return a.a;
    Za("expected object of type SafeUrl, got '" + a + "' of type " + Ia(a));
    return "type_error:SafeUrl"
}
  , Qc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i
  , Rc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i
  , Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
  , Uc = function(a) {
    if (a instanceof Nc)
        return a;
    a = "object" == typeof a && a.sc ? a.sb() : String(a);
    Sc.test(a) || (a = "about:invalid#zClosurez");
    return Tc(a)
}
  , Vc = function(a, b) {
    if (a instanceof Nc)
        return a;
    a = "object" == typeof a && a.sc ? a.sb() : String(a);
    if (b && /^data:/i.test(a)) {
        b = a.replace(/(%0A|%0D)/g, "");
        var c = b.match(Rc);
        c = c && Qc.test(c[1]);
        b = Tc(c ? b : "about:invalid#zClosurez");
        if (b.sb() == a)
            return b
    }
    x(Sc.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
    return Tc(a)
}
  , Mc = {}
  , Tc = function(a) {
    var b = new Nc;
    b.a = a;
    return b
};
Tc("about:blank");
var Xc = function() {
    this.a = "";
    this.b = Wc
};
Xc.prototype.sc = !0;
var Wc = {};
Xc.prototype.sb = function() {
    return this.a
}
;
Xc.prototype.toString = function() {
    return "SafeStyle{" + this.a + "}"
}
;
var Yc = function(a) {
    if (a instanceof Xc && a.constructor === Xc && a.b === Wc)
        return a.a;
    Za("expected object of type SafeStyle, got '" + a + "' of type " + Ia(a));
    return "type_error:SafeStyle"
}
  , Zc = function(a) {
    var b = new Xc;
    b.a = a;
    return b
}
  , $c = Zc("")
  , bd = function(a) {
    var b = "", c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        null != d && (d = Ja(d) ? lb(d, ad).join(" ") : ad(d),
        b += c + ":" + d + ";")
    }
    return b ? Zc(b) : $c
}
  , ad = function(a) {
    if (a instanceof Nc)
        return 'url("' + Pc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a = a instanceof cc ? dc(a) : cd(String(a));
    if (/[{;}]/.test(a))
        throw new Xa("Value does not allow [{;}], got: %s.",[a]);
    return a
}
  , cd = function(a) {
    var b = a.replace(dd, "$1").replace(dd, "$1").replace(ed, "url");
    if (fd.test(b)) {
        if (gd.test(a))
            return Za("String value disallows comments, got: " + a),
            "zClosurez";
        for (var c = b = !0, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
        }
        if (!b || !c)
            return Za("String value requires balanced quotes, got: " + a),
            "zClosurez";
        if (!hd(a))
            return Za("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a),
            "zClosurez"
    } else
        return Za("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a),
        "zClosurez";
    return id(a)
}
  , hd = function(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
            if (b)
                return !1;
            b = !0
        } else if ("[" == e) {
            if (!b)
                return !1;
            b = !1
        } else if (!b && !c.test(e))
            return !1
    }
    return b
}
  , fd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
  , ed = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
  , dd = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
  , gd = /\/\*/
  , id = function(a) {
    return a.replace(ed, function(b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function(g, h, l) {
            f = h;
            return l
        });
        b = Uc(d).sb();
        return c + f + b + f + e
    })
};
var kd = function() {
    this.a = "";
    this.b = jd
};
kd.prototype.sc = !0;
var jd = {}
  , md = function(a, b) {
    if (Jc(a, "<"))
        throw Error("Selector does not allow '<', got: " + a);
    var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
    a: {
        for (var d = {
            "(": ")",
            "[": "]"
        }, e = [], f = 0; f < c.length; f++) {
            var g = c[f];
            if (d[g])
                e.push(d[g]);
            else if (Rb(d, g) && e.pop() != g) {
                c = !1;
                break a
            }
        }
        c = 0 == e.length
    }
    if (!c)
        throw Error("() and [] in selector must be balanced, got: " + a);
    b instanceof Xc || (b = bd(b));
    a = a + "{" + Yc(b).replace(/</g, "\\3C ") + "}";
    return ld(a)
}
  , od = function(a) {
    var b = ""
      , c = function(d) {
        Ja(d) ? z(d, c) : b += nd(d)
    };
    z(arguments, c);
    return ld(b)
};
kd.prototype.sb = function() {
    return this.a
}
;
kd.prototype.toString = function() {
    return "SafeStyleSheet{" + this.a + "}"
}
;
var nd = function(a) {
    if (a instanceof kd && a.constructor === kd && a.b === jd)
        return a.a;
    Za("expected object of type SafeStyleSheet, got '" + a + "' of type " + Ia(a));
    return "type_error:SafeStyleSheet"
}
  , ld = function(a) {
    var b = new kd;
    b.a = a;
    return b
}
  , pd = ld("");
var qd;
a: {
    var rd = n.navigator;
    if (rd) {
        var sd = rd.userAgent;
        if (sd) {
            qd = sd;
            break a
        }
    }
    qd = ""
}
var A = function(a) {
    return Jc(qd, a)
}
  , td = function(a) {
    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
        c.push([d[1], d[2], d[3] || void 0]);
    return c
};
var ud = function() {
    return A("Trident") || A("MSIE")
}
  , vd = function() {
    return A("Firefox") || A("FxiOS")
}
  , xd = function() {
    return A("Safari") && !(wd() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || vd() || A("Silk") || A("Android"))
}
  , wd = function() {
    return (A("Chrome") || A("CriOS")) && !A("Edge")
}
  , yd = function() {
    function a(e) {
        e = qb(e, d);
        return c[e] || ""
    }
    var b = qd;
    if (!ud()) {
        b = td(b);
        var c = {};
        z(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ta(Qb, c);
        A("Opera") ? a(["Version", "Opera"]) : A("Edge") ? a(["Edge"]) : A("Edg/") ? a(["Edg"]) : wd() && a(["Chrome", "CriOS"])
    }
};
var Ad = function() {
    this.a = "";
    this.c = zd;
    this.b = null
};
k = Ad.prototype;
k.Ig = !0;
k.Pc = function() {
    return this.b
}
;
k.sc = !0;
k.sb = function() {
    return this.a.toString()
}
;
k.toString = function() {
    return "SafeHtml{" + this.a + "}"
}
;
var Bd = function(a) {
    if (a instanceof Ad && a.constructor === Ad && a.c === zd)
        return a.a;
    Za("expected object of type SafeHtml, got '" + a + "' of type " + Ia(a));
    return "type_error:SafeHtml"
}
  , Dd = function(a) {
    if (a instanceof Ad)
        return a;
    var b = "object" == typeof a
      , c = null;
    b && a.Ig && (c = a.Pc());
    return Cd(Ic(b && a.sc ? a.sb() : String(a)), c)
}
  , Ed = function(a) {
    if (a instanceof Ad)
        return a;
    a = Dd(a);
    return Cd(Ac(Bd(a).toString()), a.Pc())
}
  , Fd = /^[a-zA-Z0-9-]+$/
  , Gd = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
}
  , Hd = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
}
  , Jd = function(a, b, c) {
    var d = String(a);
    if (!Fd.test(d))
        throw Error("Invalid tag name <" + d + ">.");
    if (d.toUpperCase()in Hd)
        throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
    return Id(String(a), b, c)
}
  , Ld = function(a) {
    var b = Dd(Kd)
      , c = b.Pc()
      , d = []
      , e = function(f) {
        Ja(f) ? z(f, e) : (f = Dd(f),
        d.push(Bd(f).toString()),
        f = f.Pc(),
        0 == c ? c = f : 0 != f && c != f && (c = null))
    };
    z(a, e);
    return Cd(d.join(Bd(b).toString()), c)
}
  , Md = function(a) {
    return Ld(Array.prototype.slice.call(arguments))
}
  , zd = {}
  , Cd = function(a, b) {
    return Nd(a, b)
}
  , Nd = function(a, b) {
    var c = new Ad;
    c.a = a;
    c.b = b;
    return c
}
  , Id = function(a, b, c) {
    var d = null
      , e = "";
    if (b)
        for (l in b) {
            if (!Fd.test(l))
                throw Error('Invalid attribute name "' + l + '".');
            var f = b[l];
            if (null != f) {
                var g = a;
                var h = l;
                if (f instanceof cc)
                    f = dc(f);
                else if ("style" == h.toLowerCase()) {
                    if (!Ma(f))
                        throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                    f instanceof Xc || (f = bd(f));
                    f = Yc(f)
                } else {
                    if (/^on/i.test(h))
                        throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + f + '" given.');
                    if (h.toLowerCase()in Gd)
                        if (f instanceof pc)
                            f = rc(f);
                        else if (f instanceof Nc)
                            f = Pc(f);
                        else if (t(f))
                            f = Uc(f).sb();
                        else
                            throw Error('Attribute "' + h + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                }
                f.sc && (f = f.sb());
                x(t(f) || ya(f), "String or number value expected, got " + typeof f + " with value: " + f);
                h = h + '="' + Ic(String(f)) + '"';
                e += " " + h
            }
        }
    var l = "<" + a + e;
    null != c ? Ja(c) || (c = [c]) : c = [];
    !0 === $b[a.toLowerCase()] ? (x(!c.length, "Void tag <" + a + "> does not allow content."),
    l += ">") : (d = Md(c),
    l += ">" + Bd(d).toString() + "</" + a + ">",
    d = d.Pc());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return Nd(l, d)
};
Nd("<!DOCTYPE html>", 0);
var Kd = Nd("", 0)
  , Od = Nd("<br>", 0);
var Pd = function(a, b, c) {
    ab(dc(a), "must provide justification");
    x(!xc(dc(a)), "must provide non-empty justification");
    return Nd(b, c || null)
}
  , Qd = function(a) {
    var b = ec("Output of CSS sanitizer");
    ab(dc(b), "must provide justification");
    x(!xc(dc(b)), "must provide non-empty justification");
    return Zc(a)
};
var Rd = {
    MATH: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0
}
  , Sd = Lb(function() {
    if ("undefined" === typeof document)
        return !1;
    var a = document.createElement("div")
      , b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    if (!a.firstChild)
        return !1;
    b = a.firstChild.firstChild;
    a.innerHTML = Bd(Kd);
    return !b.parentElement
})
  , Td = function(a, b) {
    if (Sd())
        for (; a.lastChild; )
            a.removeChild(a.lastChild);
    a.innerHTML = Bd(b)
}
  , Ud = function(a, b) {
    if (Rd[a.tagName.toUpperCase()])
        throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
    Td(a, b)
}
  , Vd = function(a, b) {
    Gb(a, "HTMLAnchorElement");
    b = b instanceof Nc ? b : Vc(b);
    a.href = Oc(b)
}
  , Wd = function(a, b) {
    Gb(a, "HTMLIFrameElement");
    a.src = rc(b)
}
  , Xd = function(a, b) {
    Gb(a, "HTMLScriptElement");
    a.src = qc(b);
    (b = Ca()) && a.setAttribute("nonce", b)
}
  , Yd = function(a, b) {
    Fb(a);
    b = b instanceof Nc ? b : Vc(b);
    a.href = Oc(b)
}
  , Zd = function(a, b) {
    Fb(a);
    b = b instanceof Nc ? b : Vc(b);
    a.replace(Oc(b))
}
  , $d = function(a) {
    a = a instanceof Nc ? a : Vc(a);
    n.open(Oc(a), "", void 0, void 0)
};
var ae = function(a) {
    return a.replace(/(\r\n|\r|\n)/g, "\n")
}
  , be = function(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
  , ce = function(a) {
    return encodeURIComponent(String(a))
}
  , de = function(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}
  , ee = function(a) {
    return a = Ic(a, void 0)
}
  , he = function(a) {
    return Jc(a, "&") ? "document"in n ? fe(a) : ge(a) : a
}
  , fe = function(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var c = n.document.createElement("div");
    return a.replace(ie, function(d, e) {
        var f = b[d];
        if (f)
            return f;
        "#" == e.charAt(0) && (e = Number("0" + e.substr(1)),
        isNaN(e) || (f = String.fromCharCode(e)));
        f || (Ud(c, Pd(ec("Single HTML entity."), d + " ")),
        f = c.firstChild.nodeValue.slice(0, -1));
        return b[d] = f
    })
}
  , ge = function(a) {
    return a.replace(/&([^;]+);/g, function(b, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)),
            isNaN(c)) ? b : String.fromCharCode(c)
        }
    })
}
  , ie = /&([^;\s<&]+);?/g
  , je = function(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
  , ke = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
}
: function(a, b) {
    return Array(b + 1).join(a)
}
  , le = function(a) {
    return null == a ? "" : String(a)
}
  , me = function(a) {
    return Array.prototype.join.call(arguments, "")
}
  , ne = function(a) {
    var b = Number(a);
    return 0 == b && xc(a) ? NaN : b
}
  , oe = function(a) {
    return String(a).replace(/\-([a-z])/g, function(b, c) {
        return c.toUpperCase()
    })
}
  , pe = function(a) {
    var b = t(void 0) ? je(void 0) : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(c, d, e) {
        return d + e.toUpperCase()
    })
};
var qe = function() {
    return A("iPhone") && !A("iPod") && !A("iPad")
}
  , re = function() {
    return qe() || A("iPad") || A("iPod")
}
  , se = function(a) {
    var b = qd
      , c = "";
    A("Windows") ? (c = /Windows (?:NT|Phone) ([0-9.]+)/,
    c = (b = c.exec(b)) ? b[1] : "0.0") : re() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
    c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : A("Macintosh") ? (c = /Mac OS X ([0-9_.]+)/,
    c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : Jc(qd.toLowerCase(), "kaios") ? (c = /(?:KaiOS)\/(\S+)/i,
    c = (b = c.exec(b)) && b[1]) : A("Android") ? (c = /Android\s+([^\);]+)(\)|;)/,
    c = (b = c.exec(b)) && b[1]) : A("CrOS") && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
    c = (b = c.exec(b)) && b[1]);
    return 0 <= Lc(c || "", a)
};
var te = function(a) {
    te[" "](a);
    return a
};
te[" "] = Fa;
var ue = function(a, b) {
    try {
        return te(a[b]),
        !0
    } catch (c) {}
    return !1
}
  , ve = function(a, b, c) {
    return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
};
var we = A("Opera"), B = ud(), xe = A("Edge"), ye = xe || B, ze = A("Gecko") && !(Jc(qd.toLowerCase(), "webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"), Ae = Jc(qd.toLowerCase(), "webkit") && !A("Edge"), Ce = Ae && A("Mobile"), De = A("Macintosh"), Ee = A("Windows"), Fe = A("Android"), Ge = qe(), He = A("iPad"), Ie = A("iPod"), Je = re(), Ke = function() {
    var a = n.document;
    return a ? a.documentMode : void 0
}, Le;
a: {
    var Me = ""
      , Ne = function() {
        var a = qd;
        if (ze)
            return /rv:([^\);]+)(\)|;)/.exec(a);
        if (xe)
            return /Edge\/([\d\.]+)/.exec(a);
        if (B)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ae)
            return /WebKit\/(\S+)/.exec(a);
        if (we)
            return /(?:Version)[ \/]?(\S+)/.exec(a)
    }();
    Ne && (Me = Ne ? Ne[1] : "");
    if (B) {
        var Oe = Ke();
        if (null != Oe && Oe > parseFloat(Me)) {
            Le = String(Oe);
            break a
        }
    }
    Le = Me
}
var Pe = Le, Qe = {}, Re = function(a) {
    return ve(Qe, a, function() {
        return 0 <= Lc(Pe, a)
    })
}, Te = function(a) {
    return Number(Se) >= a
}, Ue;
Ue = n.document && B ? Ke() : void 0;
var Se = Ue;
var Ve = vd()
  , We = qe() || A("iPod")
  , Xe = A("iPad")
  , Ye = A("Android") && !(wd() || vd() || A("Opera") || A("Silk"))
  , Ze = wd()
  , $e = xd() && !re();
var af = null
  , bf = null
  , cf = function(a, b) {
    x(Ka(a), "encodeByteArray takes an array as a parameter");
    if (!af) {
        af = {};
        bf = {};
        for (var c = 0; 65 > c; c++)
            af[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),
            bf[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
    }
    b = b ? bf : af;
    c = [];
    for (var d = 0; d < a.length; d += 3) {
        var e = a[d]
          , f = d + 1 < a.length
          , g = f ? a[d + 1] : 0
          , h = d + 2 < a.length
          , l = h ? a[d + 2] : 0
          , m = e >> 2;
        e = (e & 3) << 4 | g >> 4;
        g = (g & 15) << 2 | l >> 6;
        l &= 63;
        h || (l = 64,
        f || (g = 64));
        c.push(b[m], b[e], b[g], b[l])
    }
    return c.join("")
};
var df = function() {}
  , ef = "function" == typeof Uint8Array
  , hf = function(a, b, c, d) {
    a.a = null;
    b || (b = []);
    a.m = void 0;
    a.g = -1;
    a.b = b;
    a: {
        var e = a.b.length;
        b = -1;
        if (e && (b = e - 1,
        e = a.b[b],
        !(null === e || "object" != typeof e || Ja(e) || ef && e instanceof Uint8Array))) {
            a.h = b - a.g;
            a.c = e;
            break a
        }
        -1 < c ? (a.h = Math.max(c, b + 1 - a.g),
        a.c = null) : a.h = Number.MAX_VALUE
    }
    a.o = {};
    if (d)
        for (c = 0; c < d.length; c++)
            b = d[c],
            b < a.h ? (b += a.g,
            a.b[b] = a.b[b] || ff) : (gf(a),
            a.c[b] = a.c[b] || ff)
}
  , ff = Object.freeze ? Object.freeze([]) : []
  , gf = function(a) {
    var b = a.h + a.g;
    a.b[b] || (a.c = a.b[b] = {})
}
  , jf = function(a, b) {
    if (b < a.h) {
        b += a.g;
        var c = a.b[b];
        return c === ff ? a.b[b] = [] : c
    }
    if (a.c)
        return c = a.c[b],
        c === ff ? a.c[b] = [] : c
}
  , kf = function(a, b) {
    a = jf(a, 1);
    return null == a ? b : a
}
  , C = function(a, b, c) {
    b < a.h ? a.b[b + a.g] = c : (gf(a),
    a.c[b] = c)
}
  , lf = function(a, b, c) {
    a.a || (a.a = {});
    if (!a.a[c]) {
        for (var d = jf(a, c), e = [], f = 0; f < d.length; f++)
            e[f] = new b(d[f]);
        a.a[c] = e
    }
}
  , mf = function(a, b, c) {
    a.a || (a.a = {});
    var d = c ? c.yb() : c;
    a.a[b] = c;
    C(a, b, d)
}
  , nf = function(a, b, c) {
    a.a || (a.a = {});
    c = c || [];
    for (var d = [], e = 0; e < c.length; e++)
        d[e] = c[e].yb();
    a.a[b] = c;
    C(a, b, d)
}
  , of = function(a, b, c) {
    lf(a, c, b);
    var d = a.a[b];
    d || (d = a.a[b] = []);
    c = new c;
    a = jf(a, b);
    d.push(c);
    a.push(c.yb());
    return c
}
  , pf = function(a) {
    if (a.a)
        for (var b in a.a) {
            var c = a.a[b];
            if (Ja(c))
                for (var d = 0; d < c.length; d++)
                    c[d] && c[d].yb();
            else
                c && c.yb()
        }
};
df.prototype.yb = function() {
    pf(this);
    return this.b
}
;
df.prototype.$c = ef ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
        return cf(this)
    }
    ;
    try {
        return JSON.stringify(this.b && this.yb(), qf)
    } finally {
        Uint8Array.prototype.toJSON = a
    }
}
: function() {
    return JSON.stringify(this.b && this.yb(), qf)
}
;
var qf = function(a, b) {
    return ya(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
};
df.prototype.toString = function() {
    pf(this);
    return this.b.toString()
}
;
var sf = function(a) {
    return new a.constructor(rf(a.yb()))
}
  , rf = function(a) {
    if (Ja(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
            var d = a[c];
            null != d && (b[c] = "object" == typeof d ? rf(x(d)) : d)
        }
        return b
    }
    if (ef && a instanceof Uint8Array)
        return new Uint8Array(a);
    b = {};
    for (c in a)
        d = a[c],
        null != d && (b[c] = "object" == typeof d ? rf(x(d)) : d);
    return b
};
var uf = function(a) {
    hf(this, a, -1, tf)
};
w(uf, df);
var tf = [1, 2, 3, 4];
var vf = function(a) {
    if (!a)
        return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3)
      , c = b.indexOf("/");
    -1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a)
        throw Error("Invalid URI scheme in origin: " + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e)
            c = ":" + e
    }
    return a + "://" + b + c
};
var wf = {
    ascii_tlds: "aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig aigo airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnl bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars cartier casa case caseih cash casino cat catering catholic cba cbn cbre cbs cc cd ceb center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome chrysler church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dodge dog doha domains dot download drive dtv dubai duck dunlop duns dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate esurance et etisalat eu eurovision eus events everbank exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda honeywell horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int intel international intuit investments io ipiranga iq ir irish is iselect ismaili ist istanbul it itau itv iveco jaguar java jcb jcp je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa ladbrokes lamborghini lamer lancaster lancia lancome land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li liaison lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck lupin luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd metlife mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile mobily moda moe moi mom monash money monster mopar mormon mortgage moscow moto motorcycles mov movie movistar mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nadex nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new newholland news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio piaget pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh rightathome ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scor scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime shriram si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy space sport spot spreadbetting sr srl srt ss st stada staples star starhub statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney symantec systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel telefonica temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs uconnect ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision vistaprint viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou warman watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xn--11b4c3d xn--1ck2e1b xn--1qqw23a xn--2scrj9c xn--30rr7y xn--3bst00m xn--3ds443g xn--3e0b707e xn--3hcrj9c xn--3oq18vl8pn36a xn--3pxu8k xn--42c2d9a xn--45br5cyl xn--45brj9c xn--45q11c xn--4gbrim xn--54b7fta0cc xn--55qw42g xn--55qx5d xn--5su34j936bgsg xn--5tzm5g xn--6frz82g xn--6qq986b3xl xn--80adxhks xn--80ao21a xn--80aqecdr1a xn--80asehdb xn--80aswg xn--8y0a063a xn--90a3ac xn--90ae xn--90ais xn--9dbq2a xn--9et52u xn--9krt00a xn--b4w605ferd xn--bck1b9a5dre4c xn--c1avg xn--c2br7g xn--cck2b3b xn--cg4bki xn--clchc0ea0b2g2a9gcd xn--czr694b xn--czrs0t xn--czru2d xn--d1acj3b xn--d1alf xn--e1a4c xn--eckvdtc9d xn--efvy88h xn--estv75g xn--fct429k xn--fhbei xn--fiq228c5hs xn--fiq64b xn--fiqs8s xn--fiqz9s xn--fjq720a xn--flw351e xn--fpcrj9c3d xn--fzc2c9e2c xn--fzys8d69uvgm xn--g2xx48c xn--gckr3f0f xn--gecrj9c xn--gk3at1e xn--h2breg3eve xn--h2brj9c xn--h2brj9c8c xn--hxt814e xn--i1b6b1a6a2e xn--imr513n xn--io0a7i xn--j1aef xn--j1amh xn--j6w193g xn--jlq61u9w7b xn--jvr189m xn--kcrx77d1x4a xn--kprw13d xn--kpry57d xn--kpu716f xn--kput3i xn--l1acc xn--lgbbat1ad8j xn--mgb9awbf xn--mgba3a3ejt xn--mgba3a4f16a xn--mgba7c0bbn0a xn--mgbaakc7dvf xn--mgbaam7a8h xn--mgbab2bd xn--mgbah1a3hjkrd xn--mgbai9azgqp6j xn--mgbayh7gpa xn--mgbb9fbpob xn--mgbbh1a xn--mgbbh1a71e xn--mgbc0a9azcg xn--mgbca7dzdo xn--mgberp4a5d4ar xn--mgbgu82a xn--mgbi4ecexp xn--mgbpl2fh xn--mgbt3dhd xn--mgbtx2b xn--mgbx4cd0ab xn--mix891f xn--mk1bu44c xn--mxtq1m xn--ngbc5azd xn--ngbe9e0a xn--ngbrx xn--node xn--nqv7f xn--nqv7fs00ema xn--nyqy26a xn--o3cw4h xn--ogbpf8fl xn--otu796d xn--p1acf xn--p1ai xn--pbt977c xn--pgbs0dh xn--pssy2u xn--q9jyb4c xn--qcka1pmc xn--qxam xn--rhqv96g xn--rovu88b xn--rvc1e0am3e xn--s9brj9c xn--ses554g xn--t60b56a xn--tckwe xn--tiq49xqyj xn--unup4y xn--vermgensberater-ctb xn--vermgensberatung-pwb xn--vhquv xn--vuq861b xn--w4r85el8fhu5dnra xn--w4rs40l xn--wgbh1c xn--wgbl6a xn--xhq521b xn--xkc2al3hye2a xn--xkc2dl3a5ee0h xn--y9a3aq xn--yfro4i67o xn--ygbi2ammx xn--zfr164b xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw".split(" "),
    unicode_tlds: "\u0915\u0949\u092e \u30bb\u30fc\u30eb \u4f5b\u5c71 \u0cad\u0cbe\u0cb0\u0ca4 \u6148\u5584 \u96c6\u56e2 \u5728\u7ebf \ud55c\uad6d \u0b2d\u0b3e\u0b30\u0b24 \u5927\u4f17\u6c7d\u8f66 \u70b9\u770b \u0e04\u0e2d\u0e21 \u09ad\u09be\u09f0\u09a4 \u09ad\u09be\u09b0\u09a4 \u516b\u5366 \u0645\u0648\u0642\u0639 \u09ac\u09be\u0982\u09b2\u09be \u516c\u76ca \u516c\u53f8 \u9999\u683c\u91cc\u62c9 \u7f51\u7ad9 \u79fb\u52a8 \u6211\u7231\u4f60 \u043c\u043e\u0441\u043a\u0432\u0430 \u049b\u0430\u0437 \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0430\u0439\u0442 \u8054\u901a \u0441\u0440\u0431 \u0431\u0433 \u0431\u0435\u043b \u05e7\u05d5\u05dd \u65f6\u5c1a \u5fae\u535a \u6de1\u9a6c\u9521 \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u043e\u0440\u0433 \u0928\u0947\u091f \u30b9\u30c8\u30a2 \uc0bc\uc131 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u5546\u6807 \u5546\u5e97 \u5546\u57ce \u0434\u0435\u0442\u0438 \u043c\u043a\u0434 \u0435\u044e \u30dd\u30a4\u30f3\u30c8 \u65b0\u95fb \u5de5\u884c \u5bb6\u96fb \u0643\u0648\u0645 \u4e2d\u6587\u7f51 \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u5a31\u4e50 \u8c37\u6b4c \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0dbd\u0d82\u0d9a\u0dcf \u96fb\u8a0a\u76c8\u79d1 \u8d2d\u7269 \u30af\u30e9\u30a6\u30c9 \u0aad\u0abe\u0ab0\u0aa4 \u901a\u8ca9 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u094b\u0924 \u7f51\u5e97 \u0938\u0902\u0917\u0920\u0928 \u9910\u5385 \u7f51\u7edc \u043a\u043e\u043c \u0443\u043a\u0440 \u9999\u6e2f \u8bfa\u57fa\u4e9a \u98df\u54c1 \u98de\u5229\u6d66 \u53f0\u6e7e \u53f0\u7063 \u624b\u8868 \u624b\u673a \u043c\u043e\u043d \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0639\u0645\u0627\u0646 \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u06cc\u0631\u0627\u0646 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0645\u0627\u0631\u0627\u062a \u0628\u0627\u0632\u0627\u0631 \u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0627\u0644\u0627\u0631\u062f\u0646 \u0645\u0648\u0628\u0627\u064a\u0644\u064a \u0628\u0627\u0631\u062a \u0628\u06be\u0627\u0631\u062a \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0680\u0627\u0631\u062a \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0633\u0648\u062f\u0627\u0646 \u0647\u0645\u0631\u0627\u0647 \u0639\u0631\u0627\u0642 \u0645\u0644\u064a\u0633\u064a\u0627 \u6fb3\u9580 \ub2f7\ucef4 \u653f\u5e9c \u0634\u0628\u0643\u0629 \u0628\u064a\u062a\u0643 \u0639\u0631\u0628 \u10d2\u10d4 \u673a\u6784 \u7ec4\u7ec7\u673a\u6784 \u5065\u5eb7 \u0e44\u0e17\u0e22 \u0633\u0648\u0631\u064a\u0629 \u62db\u8058 \u0440\u0443\u0441 \u0440\u0444 \u73e0\u5b9d \u062a\u0648\u0646\u0633 \u5927\u62ff \u307f\u3093\u306a \u30b0\u30fc\u30b0\u30eb \u03b5\u03bb \u4e16\u754c \u66f8\u7c4d \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0a2d\u0a3e\u0a30\u0a24 \u7f51\u5740 \ub2f7\ub137 \u30b3\u30e0 \u5929\u4e3b\u6559 \u6e38\u620f verm\u00f6gensberater verm\u00f6gensberatung \u4f01\u4e1a \u4fe1\u606f \u5609\u91cc\u5927\u9152\u5e97 \u5609\u91cc \u0645\u0635\u0631 \u0642\u0637\u0631 \u5e7f\u4e1c \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0570\u0561\u0575 \u65b0\u52a0\u5761 \u0641\u0644\u0633\u0637\u064a\u0646 \u653f\u52a1".split(" ")
};
var xf = !B || Te(9)
  , yf = !ze && !B || B && Te(9) || ze && Re("1.9.1")
  , zf = B && !Re("9")
  , Af = B || we || Ae
  , Bf = B && !Te(9);
var Cf = function(a, b) {
    return a + Math.random() * (b - a)
};
var Df = function(a, b) {
    this.x = p(a) ? a : 0;
    this.a = p(b) ? b : 0
};
Df.prototype.toString = function() {
    return "(" + this.x + ", " + this.a + ")"
}
;
var Ef = function(a, b) {
    return new Df(a.x - b.x,a.a - b.a)
};
Df.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.a = Math.ceil(this.a);
    return this
}
;
Df.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.a = Math.floor(this.a);
    return this
}
;
Df.prototype.round = function() {
    this.x = Math.round(this.x);
    this.a = Math.round(this.a);
    return this
}
;
var Ff = function(a, b) {
    this.width = a;
    this.height = b
};
k = Ff.prototype;
k.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
}
;
k.aspectRatio = function() {
    return this.width / this.height
}
;
k.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
}
;
k.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
}
;
k.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
}
;
var If = function(a) {
    return a ? new Gf(Hf(a)) : Wa || (Wa = new Gf)
}
  , Jf = function(a) {
    return t(a) ? document.getElementById(a) : a
}
  , Kf = function(a, b) {
    return (b || document).getElementsByTagName(String(a))
}
  , Mf = function(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Lf(document, "*", a, b)
}
  , D = function(a, b) {
    var c = b || document
      , d = null;
    c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : d = Nf("*", a, b);
    return d || null
}
  , E = function(a, b) {
    b = D(a, b);
    return x(b, "No element found with className: " + a)
}
  , Lf = function(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
            d = {};
            for (var e = 0, f = 0, g; g = a[f]; f++)
                b == g.nodeName && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
        d = {};
        for (f = e = 0; g = a[f]; f++)
            b = g.className,
            "function" == typeof b.split && sb(b.split(/\s+/), c) && (d[e++] = g);
        d.length = e;
        return d
    }
    return a
}
  , Nf = function(a, b, c) {
    var d = document
      , e = c || d
      , f = a && "*" != a ? String(a).toUpperCase() : "";
    return e.querySelectorAll && e.querySelector && (f || b) ? e.querySelector(f + (b ? "." + b : "")) : Lf(d, a, b, c)[0] || null
}
  , Pf = function(a, b) {
    Mb(b, function(c, d) {
        c && "object" == typeof c && c.sc && (c = c.sb());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Of.hasOwnProperty(d) ? a.setAttribute(Of[d], c) : vc(d, "aria-") || vc(d, "data-") ? a.setAttribute(d, c) : a[d] = c
    })
}
  , Of = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}
  , Rf = function(a) {
    a = a.document;
    a = Qf(a) ? a.documentElement : a.body;
    return new Ff(a.clientWidth,a.clientHeight)
}
  , Tf = function(a) {
    var b = Sf(a);
    a = a.parentWindow || a.defaultView;
    return B && Re("10") && a.pageYOffset != b.scrollTop ? new Df(b.scrollLeft,b.scrollTop) : new Df(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
}
  , Sf = function(a) {
    return a.scrollingElement ? a.scrollingElement : !Ae && Qf(a) ? a.documentElement : a.body || a.documentElement
}
  , Uf = function(a) {
    return a ? a.parentWindow || a.defaultView : window
}
  , F = function(a, b, c) {
    return Vf(document, arguments)
}
  , Vf = function(a, b) {
    var c = String(b[0])
      , d = b[1];
    if (!xf && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', ee(d.name), '"');
        if (d.type) {
            c.push(' type="', ee(d.type), '"');
            var e = {};
            Xb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (t(d) ? c.className = d : Ja(d) ? c.className = d.join(" ") : Pf(c, d));
    2 < b.length && Wf(a, c, b, 2);
    return c
}
  , Wf = function(a, b, c, d) {
    function e(g) {
        g && b.appendChild(t(g) ? a.createTextNode(g) : g)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !Ka(f) || Ma(f) && 0 < f.nodeType ? e(f) : z(Xf(f) ? yb(f) : f, e)
    }
}
  , Yf = function(a) {
    return document.createElement(String(a))
}
  , Zf = function(a) {
    return document.createTextNode(String(a))
}
  , $f = function(a, b) {
    var c = a.createElement("DIV");
    B ? (Ud(c, Md(Od, b)),
    c.removeChild(x(c.firstChild))) : Ud(c, b);
    if (1 == c.childNodes.length)
        c = c.removeChild(x(c.firstChild));
    else {
        for (a = a.createDocumentFragment(); c.firstChild; )
            a.appendChild(c.firstChild);
        c = a
    }
    return c
}
  , Qf = function(a) {
    return "CSS1Compat" == a.compatMode
}
  , ag = function(a) {
    if (1 != a.nodeType)
        return !1;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
        return !1
    }
    return !0
}
  , bg = function(a, b) {
    x(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
    a.appendChild(b)
}
  , cg = function(a, b) {
    Wf(Hf(a), a, arguments, 1)
}
  , dg = function(a) {
    for (var b; b = a.firstChild; )
        a.removeChild(b)
}
  , eg = function(a, b) {
    x(null != a && null != b, "goog.dom.insertSiblingBefore expects non-null arguments");
    b.parentNode && b.parentNode.insertBefore(a, b)
}
  , fg = function(a, b) {
    x(null != a && null != b, "goog.dom.insertSiblingAfter expects non-null arguments");
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
  , gg = function(a, b, c) {
    x(null != a, "goog.dom.insertChildAt expects a non-null parent");
    a.insertBefore(b, a.childNodes[c] || null)
}
  , hg = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
  , ig = function(a) {
    return yf && void 0 != a.children ? a.children : kb(a.childNodes, function(b) {
        return 1 == b.nodeType
    })
}
  , kg = function(a) {
    return p(a.firstElementChild) ? a.firstElementChild : jg(a.firstChild, !0)
}
  , jg = function(a, b) {
    for (; a && 1 != a.nodeType; )
        a = b ? a.nextSibling : a.previousSibling;
    return a
}
  , lg = function(a) {
    return Ma(a) && 1 == a.nodeType
}
  , mg = function(a) {
    var b;
    if (Af && !(B && Re("9") && !Re("10") && n.SVGElement && a instanceof n.SVGElement) && (b = a.parentElement))
        return b;
    b = a.parentNode;
    return lg(b) ? b : null
}
  , ng = function(a, b) {
    if (!a || !b)
        return !1;
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; )
        b = b.parentNode;
    return b == a
}
  , qg = function(a, b) {
    if (a == b)
        return 0;
    if (a.compareDocumentPosition)
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (B && !Te(9)) {
        if (9 == a.nodeType)
            return -1;
        if (9 == b.nodeType)
            return 1
    }
    if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
        var c = 1 == a.nodeType
          , d = 1 == b.nodeType;
        if (c && d)
            return a.sourceIndex - b.sourceIndex;
        var e = a.parentNode
          , f = b.parentNode;
        return e == f ? og(a, b) : !c && ng(e, b) ? -1 * pg(a, b) : !d && ng(f, a) ? pg(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
    }
    d = Hf(a);
    c = d.createRange();
    c.selectNode(a);
    c.collapse(!0);
    a = d.createRange();
    a.selectNode(b);
    a.collapse(!0);
    return c.compareBoundaryPoints(n.Range.START_TO_END, a)
}
  , pg = function(a, b) {
    var c = a.parentNode;
    if (c == b)
        return -1;
    for (; b.parentNode != c; )
        b = b.parentNode;
    return og(b, a)
}
  , og = function(a, b) {
    for (; b = b.previousSibling; )
        if (b == a)
            return -1;
    return 1
}
  , rg = function(a) {
    var b, c = arguments.length;
    if (!c)
        return null;
    if (1 == c)
        return arguments[0];
    var d = []
      , e = Infinity;
    for (b = 0; b < c; b++) {
        for (var f = [], g = arguments[b]; g; )
            f.unshift(g),
            g = g.parentNode;
        d.push(f);
        e = Math.min(e, f.length)
    }
    f = null;
    for (b = 0; b < e; b++) {
        g = d[0][b];
        for (var h = 1; h < c; h++)
            if (g != d[h][b])
                return f;
        f = g
    }
    return f
}
  , Hf = function(a) {
    x(a, "Node cannot be null or undefined.");
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
  , sg = function(a) {
    return a.contentDocument || a.contentWindow.document
}
  , G = function(a, b) {
    x(null != a, "goog.dom.setTextContent expects a non-null value for node");
    if ("textContent"in a)
        a.textContent = b;
    else if (3 == a.nodeType)
        a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; )
            a.removeChild(x(a.lastChild));
        a.firstChild.data = String(b)
    } else {
        dg(a);
        var c = Hf(a);
        a.appendChild(c.createTextNode(String(b)))
    }
}
  , tg = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
}
  , ug = {
    IMG: " ",
    BR: "\n"
}
  , vg = function(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1,
    a.removeAttribute("tabIndex"))
}
  , xg = function(a) {
    return B && !Re("9") ? (a = a.getAttributeNode("tabindex"),
    null != a && a.specified) : a.hasAttribute("tabindex")
}
  , yg = function(a) {
    a = a.tabIndex;
    return ya(a) && 0 <= a && 32768 > a
}
  , Ag = function(a) {
    if (zf && null !== a && "innerText"in a)
        a = ae(a.innerText);
    else {
        var b = [];
        zg(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    zf || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}
  , Bg = function(a) {
    var b = [];
    zg(a, b, !1);
    return b.join("")
}
  , zg = function(a, b, c) {
    if (!(a.nodeName in tg))
        if (3 == a.nodeType)
            c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in ug)
            b.push(ug[a.nodeName]);
        else
            for (a = a.firstChild; a; )
                zg(a, b, c),
                a = a.nextSibling
}
  , Xf = function(a) {
    if (a && "number" == typeof a.length) {
        if (Ma(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (La(a))
            return "function" == typeof a.item
    }
    return !1
}
  , Dg = function(a) {
    return Cg(a, function(b) {
        return t(b.className) && sb(b.className.split(/\s+/), "gt-baf-entry-clickable")
    }, void 0)
}
  , Cg = function(a, b, c) {
    for (var d = 0; a && (null == c || d <= c); ) {
        x("parentNode" != a.name);
        if (b(a))
            return a;
        a = a.parentNode;
        d++
    }
    return null
}
  , Eg = function(a) {
    try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null
    } catch (c) {
        return null
    }
}
  , Gf = function(a) {
    this.a = a || n.document || document
};
Gf.prototype.j = function(a) {
    return t(a) ? this.a.getElementById(a) : a
}
;
Gf.prototype.c = Gf.prototype.j;
Gf.prototype.qd = function(a, b) {
    return D(a, b || this.a)
}
;
Gf.prototype.b = function(a, b, c) {
    return Vf(this.a, arguments)
}
;
var Fg = function(a, b) {
    return a.a.createElement(String(b))
}
  , Gg = function(a) {
    a = a.a;
    return a.parentWindow || a.defaultView
};
k = Gf.prototype;
k.appendChild = bg;
k.Ph = cg;
k.kf = dg;
k.Sh = hg;
k.Qh = ig;
k.Oh = kg;
k.Ql = lg;
k.contains = ng;
k.lf = G;
k.Rh = Ag;
var Hg = function() {
    this.lc = this.lc;
    this.Fa = this.Fa
};
Hg.prototype.lc = !1;
Hg.prototype.Ja = function() {
    this.lc || (this.lc = !0,
    this.W())
}
;
var Jg = function(a, b) {
    b = Ta(Ig, b);
    a.lc ? p(void 0) ? b.call(void 0) : b() : (a.Fa || (a.Fa = []),
    a.Fa.push(p(void 0) ? v(b, void 0) : b))
};
Hg.prototype.W = function() {
    if (this.Fa)
        for (; this.Fa.length; )
            this.Fa.shift()()
}
;
var Ig = function(a) {
    a && "function" == typeof a.Ja && a.Ja()
};
var Kg = function(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.c = !1;
    this.Ii = !0
};
Kg.prototype.stopPropagation = function() {
    this.c = !0
}
;
Kg.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.Ii = !1
}
;
var Lg = Object.freeze || function(a) {
    return a
}
;
var Mg = !B || Te(9)
  , Ng = !B || Te(9)
  , Og = B && !Re("9")
  , Pg = function() {
    if (!n.addEventListener || !Object.defineProperty)
        return !1;
    var a = !1
      , b = Object.defineProperty({}, "passive", {
        get: function() {
            a = !0
        }
    });
    try {
        n.addEventListener("test", Fa, b),
        n.removeEventListener("test", Fa, b)
    } catch (c) {}
    return a
}();
var Qg;
Qg = Ae ? "webkitTransitionEnd" : we ? "otransitionend" : "transitionend";
var Rg = {
    he: "mousedown",
    ie: "mouseup",
    ge: "mousecancel",
    sp: "mousemove",
    up: "mouseover",
    tp: "mouseout",
    qp: "mouseenter",
    rp: "mouseleave"
};
var Tg = function(a, b) {
    Kg.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.g = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.b = null;
    if (a) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        (b = a.relatedTarget) ? ze && (ue(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.g = De ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = t(a.pointerType) ? a.pointerType : Sg[a.pointerType] || "";
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    }
};
w(Tg, Kg);
var Ug = Lg([1, 4, 2])
  , Sg = Lg({
    2: "touch",
    3: "pen",
    4: "mouse"
})
  , Vg = function(a) {
    return (Mg ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Ug[0])) && !(Ae && De && a.ctrlKey)
};
Tg.prototype.stopPropagation = function() {
    Tg.D.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
}
;
Tg.prototype.preventDefault = function() {
    Tg.D.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue = !1,
    Og)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode = -1
        } catch (b) {}
}
;
var Wg = "closure_listenable_" + (1E6 * Math.random() | 0)
  , Xg = function(a) {
    return !(!a || !a[Wg])
}
  , Yg = 0;
var Zg = function(a, b, c, d, e) {
    this.listener = a;
    this.a = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Af = e;
    this.key = ++Yg;
    this.Vd = this.Ue = !1
}
  , $g = function(a) {
    a.Vd = !0;
    a.listener = null;
    a.a = null;
    a.src = null;
    a.Af = null
};
var ah = function(a) {
    this.src = a;
    this.a = {};
    this.b = 0
};
ah.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [],
    this.b++);
    var g = bh(a, b, d, e);
    -1 < g ? (b = a[g],
    c || (b.Ue = !1)) : (b = new Zg(b,this.src,f,!!d,e),
    b.Ue = c,
    a.push(b));
    return b
}
;
var ch = function(a, b) {
    var c = b.type;
    if (!(c in a.a))
        return !1;
    var d = vb(a.a[c], b);
    d && ($g(b),
    0 == a.a[c].length && (delete a.a[c],
    a.b--));
    return d
};
ah.prototype.df = function(a, b) {
    a = this.a[a.toString()];
    var c = [];
    if (a)
        for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
    return c
}
;
ah.prototype.ue = function(a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = bh(a, b, c, d));
    return -1 < e ? a[e] : null
}
;
ah.prototype.hasListener = function(a, b) {
    var c = p(a)
      , d = c ? a.toString() : ""
      , e = p(b);
    return Nb(this.a, function(f) {
        for (var g = 0; g < f.length; ++g)
            if (!(c && f[g].type != d || e && f[g].capture != b))
                return !0;
        return !1
    })
}
;
var bh = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Vd && f.listener == b && f.capture == !!c && f.Af == d)
            return e
    }
    return -1
};
var dh = "closure_lm_" + (1E6 * Math.random() | 0)
  , eh = {}
  , fh = 0
  , H = function(a, b, c, d, e) {
    if (d && d.once)
        return gh(a, b, c, d, e);
    if (Ja(b)) {
        for (var f = 0; f < b.length; f++)
            H(a, b[f], c, d, e);
        return null
    }
    c = hh(c);
    return Xg(a) ? a.O(b, c, Ma(d) ? !!d.capture : !!d, e) : ih(a, b, c, !1, d, e)
}
  , ih = function(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g = Ma(e) ? !!e.capture : !!e
      , h = jh(a);
    h || (a[dh] = h = new ah(a));
    c = h.add(b, c, d, g, f);
    if (c.a)
        return c;
    d = kh();
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Pg || (e = g),
        void 0 === e && (e = !1),
        a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(lh(b.toString()), d);
    else if (a.addListener && a.removeListener)
        x("change" === b, "MediaQueryList only has a change event"),
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    fh++;
    return c
}
  , kh = function() {
    var a = mh
      , b = Ng ? function(c) {
        return a.call(b.src, b.listener, c)
    }
    : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
            return c
    }
    ;
    return b
}
  , gh = function(a, b, c, d, e) {
    if (Ja(b)) {
        for (var f = 0; f < b.length; f++)
            gh(a, b[f], c, d, e);
        return null
    }
    c = hh(c);
    return Xg(a) ? a.Pg(b, c, Ma(d) ? !!d.capture : !!d, e) : ih(a, b, c, !0, d, e)
}
  , nh = function(a, b, c, d, e) {
    if (Ja(b))
        for (var f = 0; f < b.length; f++)
            nh(a, b[f], c, d, e);
    else
        d = Ma(d) ? !!d.capture : !!d,
        c = hh(c),
        Xg(a) ? a.Ha(b, c, d, e) : a && (a = jh(a)) && (b = a.ue(b, c, d, e)) && oh(b)
}
  , oh = function(a) {
    if (ya(a) || !a || a.Vd)
        return !1;
    var b = a.src;
    if (Xg(b))
        return ch(b.Pb, a);
    var c = a.type
      , d = a.a;
    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(lh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
    fh--;
    (c = jh(b)) ? (ch(c, a),
    0 == c.b && (c.src = null,
    b[dh] = null)) : $g(a);
    return !0
}
  , ph = function(a, b) {
    if (!a)
        return 0;
    if (Xg(a))
        return a.Vg(b);
    a = jh(a);
    if (!a)
        return 0;
    var c = 0;
    b = b && b.toString();
    for (var d in a.a)
        if (!b || d == b)
            for (var e = a.a[d].concat(), f = 0; f < e.length; ++f)
                oh(e[f]) && ++c;
    return c
}
  , lh = function(a) {
    return a in eh ? eh[a] : eh[a] = "on" + a
}
  , rh = function(a, b, c, d) {
    var e = !0;
    if (a = jh(a))
        if (b = a.a[b.toString()])
            for (b = b.concat(),
            a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.capture == c && !f.Vd && (f = qh(f, d),
                e = e && !1 !== f)
            }
    return e
}
  , qh = function(a, b) {
    var c = a.listener
      , d = a.Af || a.src;
    a.Ue && oh(a);
    return c.call(d, b)
}
  , sh = function(a, b) {
    x(Xg(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
    a.dispatchEvent(b)
}
  , mh = function(a, b) {
    if (a.Vd)
        return !0;
    if (!Ng) {
        var c = b || Ea("window.event");
        b = new Tg(c,this);
        var d = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            a: {
                var e = !1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                if (e || void 0 == c.returnValue)
                    c.returnValue = !0
            }
            c = [];
            for (e = b.a; e; e = e.parentNode)
                c.push(e);
            a = a.type;
            for (e = c.length - 1; !b.c && 0 <= e; e--) {
                b.a = c[e];
                var f = rh(c[e], a, !0, b);
                d = d && f
            }
            for (e = 0; !b.c && e < c.length; e++)
                b.a = c[e],
                f = rh(c[e], a, !1, b),
                d = d && f
        }
        return d
    }
    return qh(a, new Tg(b,this))
}
  , jh = function(a) {
    a = a[dh];
    return a instanceof ah ? a : null
}
  , th = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
  , hh = function(a) {
    x(a, "Listener can not be null.");
    if (La(a))
        return a;
    x(a.handleEvent, "An object listener must have handleEvent method.");
    a[th] || (a[th] = function(b) {
        return a.handleEvent(b)
    }
    );
    return a[th]
};
var vh = function(a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
        return !1;
    if (uh(a.keyCode))
        return !0;
    switch (a.keyCode) {
    case 18:
    case 20:
    case 93:
    case 17:
    case 40:
    case 35:
    case 27:
    case 36:
    case 45:
    case 37:
    case 224:
    case 91:
    case 144:
    case 12:
    case 34:
    case 33:
    case 19:
    case 255:
    case 44:
    case 39:
    case 145:
    case 16:
    case 38:
    case 252:
    case 224:
    case 92:
        return !1;
    case 0:
        return !ze;
    default:
        return 166 > a.keyCode || 183 < a.keyCode
    }
}
  , xh = function(a, b, c, d, e, f) {
    if (Ae && !Re("525"))
        return !0;
    if (De && e)
        return uh(a);
    if (e && !d)
        return !1;
    if (!ze) {
        ya(b) && (b = wh(b));
        var g = 17 == b || 18 == b || De && 91 == b;
        if ((!c || De) && g || De && 16 == b && (d || f))
            return !1
    }
    if ((Ae || xe) && d && c)
        switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
    if (B && d && b == a)
        return !1;
    switch (a) {
    case 13:
        return ze ? f || e ? !1 : !(c && d) : !0;
    case 27:
        return !(Ae || xe || ze)
    }
    return ze && (d || e || f) ? !1 : uh(a)
}
  , uh = function(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Ae || xe) && 0 == a)
        return !0;
    switch (a) {
    case 32:
    case 43:
    case 63:
    case 64:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
    case 163:
        return !0;
    case 173:
        return ze;
    default:
        return !1
    }
}
  , wh = function(a) {
    if (ze)
        a = yh(a);
    else if (De && Ae)
        switch (a) {
        case 93:
            a = 91
        }
    return a
}
  , yh = function(a) {
    switch (a) {
    case 61:
        return 187;
    case 59:
        return 186;
    case 173:
        return 189;
    case 224:
        return 91;
    case 0:
        return 224;
    default:
        return a
    }
};
var zh = function(a, b) {
    b = yb(b);
    var c = Eg(document);
    if (c) {
        var d = b.indexOf(c);
        c = d + 1 === b.length ? 0 : d + 1;
        d = 0 > d - 1 ? b.length - 1 : d - 1;
        switch (a.keyCode) {
        case 39:
            b[c].focus();
            break;
        case 37:
            b[d].focus()
        }
    }
}
  , Ah = function(a, b) {
    H(a, "click", b, !1);
    H(a, "keypress", function(c) {
        13 === c.keyCode && b(c)
    }, !1)
};
var Bh = function(a, b, c, d) {
    window.__gaTracker && __gaTracker("send", "event", a, b, c, d)
};
var Jh = function(a) {
    this.b = !1;
    this.a = [];
    this.c = {};
    for (var b = 0; b < I(a, 1); b++) {
        var c = Ch(a, b)
          , d = J(c, 0)
          , e = "";
        Dh(c, 3) && (e = J(c, 3));
        d in this.c ? d = this.c[d] : (c = new Eh(d,e),
        this.c[d] = c,
        this.a.push(c),
        d = c);
        for (c = 0; c < Ch(a, b).b(); c++) {
            var f = Ch(a, b).c(c);
            e = f;
            e = 0 == I(e, 2) ? -Qa(e) : Fh(e, 2, 0);
            var g = d;
            if (e in g.b)
                e = g.b[e];
            else {
                var h = new Gh;
                g.b[e] = h;
                g.a.push(h);
                e = h
            }
            g = J(f, 0);
            h = J(f, 4);
            var l = Dh(f, 3) ? Hh(f, 3) : -1;
            var m = [];
            for (var q = 0; q < I(f, 1); q++)
                m.push(Fh(f, 1, q));
            f = e;
            g in f.b || (h = new Ih(g,h,l,m),
            f.b[g] = h,
            f.a.push(h));
            this.b |= 1 < e.a.length
        }
    }
}
  , Kh = function(a) {
    for (var b = 0, c = 0; c < a.a.length; c++) {
        for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++)
            e += d.a[f].a.length;
        b += e
    }
    for (d = c = 0; d < a.a.length; d++) {
        e = a.a[d];
        for (var g = f = 0; g < e.a.length; g++) {
            for (var h = e.a[g], l = 0, m = 0; m < h.a.length; m++)
                l += h.a[m].a ? 1 : 0;
            f += l
        }
        c += f
    }
    return b - c
}
  , Lh = function(a) {
    for (var b = [], c = 0; c < a.a.length; c++)
        for (var d = 0; d < a.a[c].a.length; d++)
            Array.prototype.push.apply(b, a.a[c].a[d].a);
    return b
}
  , Mh = function(a) {
    for (var b = 0; b < a.a.length; b++)
        for (var c = 0; c < a.a[b].a.length; c++)
            a.a[b].a[c].a.sort(function(d, e) {
                return e.Lb - d.Lb
            })
}
  , Eh = function(a, b) {
    this.g = a;
    this.c = b;
    this.a = [];
    this.b = {}
};
Eh.prototype.Lb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++)
        a = Math.max(a, this.a[b].Lb());
    return a
}
;
var Oh = function(a) {
    for (var b = 0; b < a.a.length; b++)
        if (Nh(a.a[b]))
            return !0;
    return !1
}
  , Gh = function() {
    this.a = [];
    this.b = {}
};
Gh.prototype.Lb = function() {
    for (var a = 0, b = 0; b < this.a.length; b++)
        a = Math.max(a, this.a[b].Lb);
    return a
}
;
var Nh = function(a) {
    for (var b = 0; b < a.a.length; b++)
        if (a.a[b].a)
            return !0;
    return !1
}
  , Ih = function(a, b, c, d) {
    this.text = a;
    this.Ge = b;
    this.Lb = c;
    this.Qf = d;
    this.a = !1;
    this.b = 0
};
var K = function() {
    Hg.call(this);
    this.Pb = new ah(this);
    this.Mj = this;
    this.Ug = null
};
w(K, Hg);
K.prototype[Wg] = !0;
k = K.prototype;
k.ef = function() {
    return this.Ug
}
;
k.Bd = function(a) {
    this.Ug = a
}
;
k.addEventListener = function(a, b, c, d) {
    H(this, a, b, c, d)
}
;
k.removeEventListener = function(a, b, c, d) {
    nh(this, a, b, c, d)
}
;
k.dispatchEvent = function(a) {
    Ph(this);
    var b = this.ef();
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.ef())
            c.push(b),
            x(1E3 > ++d, "infinite loop")
    }
    b = this.Mj;
    d = a.type || a;
    if (t(a))
        a = new Kg(a,b);
    else if (a instanceof Kg)
        a.target = a.target || b;
    else {
        var e = a;
        a = new Kg(d,b);
        Xb(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.c && 0 <= f; f--) {
            var g = a.a = c[f];
            e = Qh(g, d, !0, a) && e
        }
    a.c || (g = a.a = b,
    e = Qh(g, d, !0, a) && e,
    a.c || (e = Qh(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.c && f < c.length; f++)
            g = a.a = c[f],
            e = Qh(g, d, !1, a) && e;
    return e
}
;
k.W = function() {
    K.D.W.call(this);
    this.Vg();
    this.Ug = null
}
;
k.O = function(a, b, c, d) {
    Ph(this);
    return this.Pb.add(String(a), b, !1, c, d)
}
;
k.Pg = function(a, b, c, d) {
    return this.Pb.add(String(a), b, !0, c, d)
}
;
k.Ha = function(a, b, c, d) {
    var e = this.Pb;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = bh(f, b, c, d);
        -1 < b ? ($g(f[b]),
        ub(f, b),
        0 == f.length && (delete e.a[a],
        e.b--),
        e = !0) : e = !1
    } else
        e = !1;
    return e
}
;
k.Vg = function(a) {
    if (this.Pb) {
        var b = this.Pb;
        a = a && a.toString();
        var c = 0, d;
        for (d in b.a)
            if (!a || d == a) {
                for (var e = b.a[d], f = 0; f < e.length; f++)
                    ++c,
                    $g(e[f]);
                delete b.a[d];
                b.b--
            }
        b = c
    } else
        b = 0;
    return b
}
;
var Qh = function(a, b, c, d) {
    b = a.Pb.a[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Vd && g.capture == c) {
            var h = g.listener
              , l = g.Af || g.src;
            g.Ue && ch(a.Pb, g);
            e = !1 !== h.call(l, d) && e
        }
    }
    return e && 0 != d.Ii
};
K.prototype.df = function(a, b) {
    return this.Pb.df(String(a), b)
}
;
K.prototype.ue = function(a, b, c, d) {
    return this.Pb.ue(String(a), b, c, d)
}
;
K.prototype.hasListener = function(a, b) {
    return this.Pb.hasListener(p(a) ? String(a) : void 0, b)
}
;
var Ph = function(a) {
    x(a.Pb, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Rh = function(a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
};
Rh.prototype.get = function() {
    if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null
    } else
        a = this.c();
    return a
}
;
var Sh = function(a, b) {
    a.g(b);
    100 > a.b && (a.b++,
    b.next = a.a,
    a.a = b)
};
var Th = function(a) {
    n.setTimeout(function() {
        throw a;
    }, 0)
}, Uh, Vh = function() {
    var a = n.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
        var e = document.createElement("IFRAME");
        e.style.display = "none";
        Wd(e, tc(dc(fc)));
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.write(Bd(Kd));
        e.close();
        var g = "callImmediate" + Math.random()
          , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = v(function(l) {
            if (("*" == h || l.origin == h) && l.data == g)
                this.port1.onmessage()
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                f.postMessage(g, h)
            }
        }
    }
    );
    if ("undefined" !== typeof a && !ud()) {
        var b = new a
          , c = {}
          , d = c;
        b.port1.onmessage = function() {
            if (p(c.next)) {
                c = c.next;
                var e = c.Gh;
                c.Gh = null;
                e()
            }
        }
        ;
        return function(e) {
            d.next = {
                Gh: e
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(e) {
        var f = document.createElement("SCRIPT");
        f.onreadystatechange = function() {
            f.onreadystatechange = null;
            f.parentNode.removeChild(f);
            f = null;
            e();
            e = null
        }
        ;
        document.documentElement.appendChild(f)
    }
    : function(e) {
        n.setTimeout(e, 0)
    }
};
var Wh = function() {
    this.b = this.a = null
}
  , Yh = new Rh(function() {
    return new Xh
}
,function(a) {
    a.reset()
}
);
Wh.prototype.add = function(a, b) {
    var c = Yh.get();
    c.set(a, b);
    this.b ? this.b.next = c : (x(!this.a),
    this.a = c);
    this.b = c
}
;
var $h = function() {
    var a = Zh
      , b = null;
    a.a && (b = a.a,
    a.a = a.a.next,
    a.a || (a.b = null),
    b.next = null);
    return b
}
  , Xh = function() {
    this.next = this.a = this.zc = null
};
Xh.prototype.set = function(a, b) {
    this.zc = a;
    this.a = b;
    this.next = null
}
;
Xh.prototype.reset = function() {
    this.next = this.a = this.zc = null
}
;
var di = function(a, b) {
    ai || bi();
    ci || (ai(),
    ci = !0);
    Zh.add(a, b)
}, ai, bi = function() {
    if (n.Promise && n.Promise.resolve) {
        var a = n.Promise.resolve(void 0);
        ai = function() {
            a.then(ei)
        }
    } else
        ai = function() {
            var b = ei;
            !La(n.setImmediate) || n.Window && n.Window.prototype && !A("Edge") && n.Window.prototype.setImmediate == n.setImmediate ? (Uh || (Uh = Vh()),
            Uh(b)) : n.setImmediate(b)
        }
}, ci = !1, Zh = new Wh, ei = function() {
    for (var a; a = $h(); ) {
        try {
            a.zc.call(a.a)
        } catch (b) {
            Th(b)
        }
        Sh(Yh, a)
    }
    ci = !1
};
var fi = function(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};
var ii = function(a) {
    this.a = 0;
    this.m = void 0;
    this.g = this.b = this.c = null;
    this.h = this.o = !1;
    if (a != Fa)
        try {
            var b = this;
            a.call(void 0, function(c) {
                gi(b, 2, c)
            }, function(c) {
                if (!(c instanceof hi))
                    try {
                        if (c instanceof Error)
                            throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                gi(b, 3, c)
            })
        } catch (c) {
            gi(this, 3, c)
        }
}
  , ji = function() {
    this.next = this.context = this.c = this.b = this.a = null;
    this.g = !1
};
ji.prototype.reset = function() {
    this.context = this.c = this.b = this.a = null;
    this.g = !1
}
;
var ki = new Rh(function() {
    return new ji
}
,function(a) {
    a.reset()
}
)
  , li = function(a, b, c) {
    var d = ki.get();
    d.b = a;
    d.c = b;
    d.context = c;
    return d
}
  , ni = function(a, b, c) {
    mi(a, b, c, null) || di(Ta(b, a))
}
  , oi = function(a) {
    new ii(function(b, c) {
        var d = a.length
          , e = [];
        if (d)
            for (var f = function(m, q) {
                d--;
                e[m] = q;
                0 == d && b(e)
            }, g = function(m) {
                c(m)
            }, h = 0, l; h < a.length; h++)
                l = a[h],
                ni(l, Ta(f, h), g);
        else
            b(e)
    }
    )
};
ii.prototype.then = function(a, b, c) {
    null != a && bb(a, "opt_onFulfilled should be a function.");
    null != b && bb(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return pi(this, La(a) ? a : null, La(b) ? b : null, c)
}
;
ii.prototype.$goog_Thenable = !0;
ii.prototype.cancel = function(a) {
    0 == this.a && di(function() {
        var b = new hi(a);
        qi(this, b)
    }, this)
}
;
var qi = function(a, b) {
    if (0 == a.a)
        if (a.c) {
            var c = a.c;
            if (c.b) {
                for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++,
                g.a == a && (e = g),
                !(e && 1 < d))); g = g.next)
                    e || (f = g);
                e && (0 == c.a && 1 == d ? qi(c, b) : (f ? (d = f,
                x(c.b),
                x(null != d),
                d.next == c.g && (c.g = d),
                d.next = d.next.next) : ri(c),
                si(c, e, 3, b)))
            }
            a.c = null
        } else
            gi(a, 3, b)
}
  , ui = function(a, b) {
    a.b || 2 != a.a && 3 != a.a || ti(a);
    x(null != b.b);
    a.g ? a.g.next = b : a.b = b;
    a.g = b
}
  , pi = function(a, b, c, d) {
    var e = li(null, null, null);
    e.a = new ii(function(f, g) {
        e.b = b ? function(h) {
            try {
                var l = b.call(d, h);
                f(l)
            } catch (m) {
                g(m)
            }
        }
        : f;
        e.c = c ? function(h) {
            try {
                var l = c.call(d, h);
                !p(l) && h instanceof hi ? g(h) : f(l)
            } catch (m) {
                g(m)
            }
        }
        : g
    }
    );
    e.a.c = a;
    ui(a, e);
    return e.a
};
ii.prototype.G = function(a) {
    x(1 == this.a);
    this.a = 0;
    gi(this, 2, a)
}
;
ii.prototype.C = function(a) {
    x(1 == this.a);
    this.a = 0;
    gi(this, 3, a)
}
;
var gi = function(a, b, c) {
    0 == a.a && (a === c && (b = 3,
    c = new TypeError("Promise cannot resolve to itself")),
    a.a = 1,
    mi(c, a.G, a.C, a) || (a.m = c,
    a.a = b,
    a.c = null,
    ti(a),
    3 != b || c instanceof hi || vi(a, c)))
}
  , mi = function(a, b, c, d) {
    if (a instanceof ii)
        return null != b && bb(b, "opt_onFulfilled should be a function."),
        null != c && bb(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
        ui(a, li(b || Fa, c || null, d)),
        !0;
    if (fi(a))
        return a.then(b, c, d),
        !0;
    if (Ma(a))
        try {
            var e = a.then;
            if (La(e))
                return wi(a, e, b, c, d),
                !0
        } catch (f) {
            return c.call(d, f),
            !0
        }
    return !1
}
  , wi = function(a, b, c, d, e) {
    var f = !1
      , g = function(l) {
        f || (f = !0,
        c.call(e, l))
    }
      , h = function(l) {
        f || (f = !0,
        d.call(e, l))
    };
    try {
        b.call(a, g, h)
    } catch (l) {
        h(l)
    }
}
  , ti = function(a) {
    a.o || (a.o = !0,
    di(a.w, a))
}
  , ri = function(a) {
    var b = null;
    a.b && (b = a.b,
    a.b = b.next,
    b.next = null);
    a.b || (a.g = null);
    null != b && x(null != b.b);
    return b
};
ii.prototype.w = function() {
    for (var a; a = ri(this); )
        si(this, a, this.a, this.m);
    this.o = !1
}
;
var si = function(a, b, c, d) {
    if (3 == c && b.c && !b.g)
        for (; a && a.h; a = a.c)
            a.h = !1;
    if (b.a)
        b.a.c = null,
        xi(b, c, d);
    else
        try {
            b.g ? b.b.call(b.context) : xi(b, c, d)
        } catch (e) {
            yi.call(null, e)
        }
    Sh(ki, b)
}
  , xi = function(a, b, c) {
    2 == b ? a.b.call(a.context, c) : a.c && a.c.call(a.context, c)
}
  , vi = function(a, b) {
    a.h = !0;
    di(function() {
        a.h && yi.call(null, b)
    })
}
  , yi = Th
  , hi = function(a) {
    Va.call(this, a)
};
w(hi, Va);
hi.prototype.name = "cancel";
var zi = function(a, b) {
    K.call(this);
    this.c = a || 1;
    this.b = b || n;
    this.g = v(this.o, this);
    this.h = Ua()
};
w(zi, K);
zi.prototype.enabled = !1;
zi.prototype.a = null;
var Ai = function(a, b) {
    a.c = b;
    a.a && a.enabled ? (a.stop(),
    a.start()) : a.a && a.stop()
};
zi.prototype.o = function() {
    if (this.enabled) {
        var a = Ua() - this.h;
        0 < a && a < .8 * this.c ? this.a = this.b.setTimeout(this.g, this.c - a) : (this.a && (this.b.clearTimeout(this.a),
        this.a = null),
        this.dispatchEvent("tick"),
        this.enabled && (this.stop(),
        this.start()))
    }
}
;
zi.prototype.start = function() {
    this.enabled = !0;
    this.a || (this.a = this.b.setTimeout(this.g, this.c),
    this.h = Ua())
}
;
zi.prototype.stop = function() {
    this.enabled = !1;
    this.a && (this.b.clearTimeout(this.a),
    this.a = null)
}
;
zi.prototype.W = function() {
    zi.D.W.call(this);
    this.stop();
    delete this.b
}
;
var Bi = function(a, b, c) {
    if (La(a))
        c && (a = v(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = v(a.handleEvent, a);
    else
        throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
}
  , Ci = function(a) {
    n.clearTimeout(a)
};
var Di = function() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = m = 0
    }
    function b(r) {
        for (var u = g, y = 0; 64 > y; y += 4)
            u[y / 4] = r[y] << 24 | r[y + 1] << 16 | r[y + 2] << 8 | r[y + 3];
        for (y = 16; 80 > y; y++)
            r = u[y - 3] ^ u[y - 8] ^ u[y - 14] ^ u[y - 16],
            u[y] = (r << 1 | r >>> 31) & 4294967295;
        r = e[0];
        var Q = e[1]
          , L = e[2]
          , Na = e[3]
          , Hb = e[4];
        for (y = 0; 80 > y; y++) {
            if (40 > y)
                if (20 > y) {
                    var Ha = Na ^ Q & (L ^ Na);
                    var Ib = 1518500249
                } else
                    Ha = Q ^ L ^ Na,
                    Ib = 1859775393;
            else
                60 > y ? (Ha = Q & L | Na & (Q | L),
                Ib = 2400959708) : (Ha = Q ^ L ^ Na,
                Ib = 3395469782);
            Ha = ((r << 5 | r >>> 27) & 4294967295) + Ha + Hb + Ib + u[y] & 4294967295;
            Hb = Na;
            Na = L;
            L = (Q << 30 | Q >>> 2) & 4294967295;
            Q = r;
            r = Ha
        }
        e[0] = e[0] + r & 4294967295;
        e[1] = e[1] + Q & 4294967295;
        e[2] = e[2] + L & 4294967295;
        e[3] = e[3] + Na & 4294967295;
        e[4] = e[4] + Hb & 4294967295
    }
    function c(r, u) {
        if ("string" === typeof r) {
            r = unescape(encodeURIComponent(r));
            for (var y = [], Q = 0, L = r.length; Q < L; ++Q)
                y.push(r.charCodeAt(Q));
            r = y
        }
        u || (u = r.length);
        y = 0;
        if (0 == m)
            for (; y + 64 < u; )
                b(r.slice(y, y + 64)),
                y += 64,
                q += 64;
        for (; y < u; )
            if (f[m++] = r[y++],
            q++,
            64 == m)
                for (m = 0,
                b(f); y + 64 < u; )
                    b(r.slice(y, y + 64)),
                    y += 64,
                    q += 64
    }
    function d() {
        var r = []
          , u = 8 * q;
        56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
        for (var y = 63; 56 <= y; y--)
            f[y] = u & 255,
            u >>>= 8;
        b(f);
        for (y = u = 0; 5 > y; y++)
            for (var Q = 24; 0 <= Q; Q -= 8)
                r[u++] = e[y] >> Q & 255;
        return r
    }
    for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l)
        h[l] = 0;
    var m, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        bk: function() {
            for (var r = d(), u = "", y = 0; y < r.length; y++)
                u += "0123456789ABCDEF".charAt(Math.floor(r[y] / 16)) + "0123456789ABCDEF".charAt(r[y] % 16);
            return u
        }
    }
};
var Fi = function(a, b, c) {
    var d = []
      , e = [];
    if (1 == (Ja(c) ? 2 : 1))
        return e = [b, a],
        z(d, function(h) {
            e.push(h)
        }),
        Ei(e.join(" "));
    var f = []
      , g = [];
    z(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    z(d, function(h) {
        e.push(h)
    });
    a = Ei(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}
  , Ei = function(a) {
    var b = Di();
    b.update(a);
    return b.bk().toLowerCase()
};
var Gi = function() {
    this.a = document || {
        cookie: ""
    }
};
k = Gi.prototype;
k.isEnabled = function() {
    return navigator.cookieEnabled
}
;
k.set = function(a, b, c, d, e, f) {
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    p(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Ua() + 1E3 * c)).toUTCString();
    this.a.cookie = a + "=" + b + e + d + c + f
}
;
k.get = function(a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = yc(d[e]);
        if (0 == f.lastIndexOf(c, 0))
            return f.substr(c.length);
        if (f == a)
            return ""
    }
    return b
}
;
k.Bb = function() {
    return Hi(this).keys
}
;
k.Rb = function() {
    return Hi(this).values
}
;
k.qg = function() {
    return this.a.cookie ? (this.a.cookie || "").split(";").length : 0
}
;
var Hi = function(a) {
    a = (a.a.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        e = yc(a[f]),
        d = e.indexOf("="),
        -1 == d ? (b.push(""),
        c.push(e)) : (b.push(e.substring(0, d)),
        c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var Ii = function(a) {
    var b = vf(String(n.location.href))
      , c = n.__OVERRIDE_SID;
    null == c && (c = (new Gi).get("SID"));
    if (c && (b = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? n.__SAPISID : n.__APISID,
    null == b && (b = (new Gi).get(c ? "SAPISID" : "APISID")),
    b)) {
        c = c ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(n.location.href);
        return d && b && c ? [c, Fi(vf(d), b, a || null)].join(" ") : null
    }
    return null
};
var Ji = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0)
};
Ji.prototype.a = null;
var Ki = 0;
Ji.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || Ki++;
    d || Ua();
    delete this.a
}
;
var Li = function(a) {
    this.g = a;
    this.b = this.c = this.a = null
}
  , Mi = function(a, b) {
    this.name = a;
    this.value = b
};
Mi.prototype.toString = function() {
    return this.name
}
;
var Ni = new Mi("SEVERE",1E3)
  , Oi = new Mi("WARNING",900)
  , Pi = new Mi("INFO",800)
  , Qi = new Mi("CONFIG",700)
  , Ri = new Mi("FINE",500);
Li.prototype.getParent = function() {
    return this.a
}
;
var Si = function(a) {
    if (a.c)
        return a.c;
    if (a.a)
        return Si(a.a);
    Za("Root logger has no level set.");
    return null
};
Li.prototype.log = function(a, b, c) {
    if (a.value >= Si(this).value)
        for (La(b) && (b = b()),
        a = new Ji(a,String(b),this.g),
        c && (a.a = c),
        c = this; c; )
            c = c.getParent()
}
;
var Ti = {}
  , Ui = null
  , Vi = function(a) {
    Ui || (Ui = new Li(""),
    Ti[""] = Ui,
    Ui.c = Qi);
    var b;
    if (!(b = Ti[a])) {
        b = new Li(a);
        var c = a.lastIndexOf(".")
          , d = a.substr(c + 1);
        c = Vi(a.substr(0, c));
        c.b || (c.b = {});
        c.b[d] = b;
        b.a = c;
        Ti[a] = b
    }
    return b
};
var Wi = function(a, b) {
    a && a.log(Ni, b, void 0)
}
  , Xi = function(a, b) {
    a && a.log(Oi, b, void 0)
}
  , Yi = function(a, b) {
    a && a.log(Pi, b, void 0)
}
  , Zi = function(a, b) {
    a && a.log(Ri, b, void 0)
};
var $i = function(a) {
    x(0 < a, "Initial value must be greater than zero.");
    x(3E5 >= a, "Max value should be at least as large as initial value.");
    p(.1) && x(!0, "Randomness factor should be between 0 and 1.");
    p(void 0) && x(!1, "Backoff factor should be greater than 1");
    p(void 0) && x(!1, "Decay factor should be greater than 1");
    this.a = this.b = this.c = a
};
$i.prototype.reset = function() {
    this.a = this.b = this.c
}
;
$i.prototype.Z = function() {
    return this.b
}
;
var aj = function(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
        } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}
  , bj = function() {};
bj.prototype.$c = function(a) {
    var b = [];
    cj(this, a, b);
    return b.join("")
}
;
var cj = function(a, b, c) {
    if (null == b)
        c.push("null");
    else {
        if ("object" == typeof b) {
            if (Ja(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                for (var e = "", f = 0; f < b; f++)
                    c.push(e),
                    cj(a, d[f], c),
                    e = ",";
                c.push("]");
                return
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean)
                b = b.valueOf();
            else {
                c.push("{");
                e = "";
                for (d in b)
                    Object.prototype.hasOwnProperty.call(b, d) && (f = b[d],
                    "function" != typeof f && (c.push(e),
                    dj(d, c),
                    c.push(":"),
                    cj(a, f, c),
                    e = ","));
                c.push("}");
                return
            }
        }
        switch (typeof b) {
        case "string":
            dj(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
        case "boolean":
            c.push(String(b));
            break;
        case "function":
            c.push("null");
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    }
}
  , ej = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}
  , fj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
  , dj = function(a, b) {
    b.push('"', a.replace(fj, function(c) {
        var d = ej[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
        ej[c] = d);
        return d
    }), '"')
};
var gj = function() {};
gj.prototype.a = null;
var ij = function(a) {
    var b;
    (b = a.a) || (b = {},
    hj(a) && (b[0] = !0,
    b[1] = !0),
    b = a.a = b);
    return b
};
var jj, kj = function() {};
w(kj, gj);
var lj = function(a) {
    return (a = hj(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
  , hj = function(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d),
                a.b = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
};
jj = new kj;
var mj = "StopIteration"in n ? n.StopIteration : {
    message: "StopIteration",
    stack: ""
}
  , nj = function() {};
nj.prototype.next = function() {
    throw mj;
}
;
nj.prototype.hc = function() {
    return this
}
;
var oj = function(a) {
    if (a instanceof nj)
        return a;
    if ("function" == typeof a.hc)
        return a.hc(!1);
    if (Ka(a)) {
        var b = 0
          , c = new nj;
        c.next = function() {
            for (; ; ) {
                if (b >= a.length)
                    throw mj;
                if (b in a)
                    return a[b++];
                b++
            }
        }
        ;
        return c
    }
    throw Error("Not implemented");
}
  , pj = function(a, b, c) {
    if (Ka(a))
        try {
            z(a, b, c)
        } catch (d) {
            if (d !== mj)
                throw d;
        }
    else {
        a = oj(a);
        try {
            for (; ; )
                b.call(c, a.next(), void 0, a)
        } catch (d) {
            if (d !== mj)
                throw d;
        }
    }
}
  , qj = function(a, b, c) {
    a = oj(a);
    try {
        for (; b.call(c, a.next(), void 0, a); )
            ;
    } catch (d) {
        if (d !== mj)
            throw d;
    }
};
var rj = function(a, b) {
    this.b = {};
    this.a = [];
    this.g = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof rj)
            for (c = a.Bb(),
            d = 0; d < c.length; d++)
                this.set(c[d], a.get(c[d]));
        else
            for (d in a)
                this.set(d, a[d])
};
rj.prototype.qg = function() {
    return this.c
}
;
rj.prototype.Rb = function() {
    sj(this);
    for (var a = [], b = 0; b < this.a.length; b++)
        a.push(this.b[this.a[b]]);
    return a
}
;
rj.prototype.Bb = function() {
    sj(this);
    return this.a.concat()
}
;
var uj = function(a, b) {
    return tj(a.b, b)
};
rj.prototype.Qc = function() {
    this.b = {};
    this.g = this.c = this.a.length = 0
}
;
var sj = function(a) {
    if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length; ) {
            var d = a.a[b];
            tj(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.c != a.a.length) {
        var e = {};
        for (c = b = 0; b < a.a.length; )
            d = a.a[b],
            tj(e, d) || (a.a[c++] = d,
            e[d] = 1),
            b++;
        a.a.length = c
    }
};
rj.prototype.get = function(a, b) {
    return tj(this.b, a) ? this.b[a] : b
}
;
rj.prototype.set = function(a, b) {
    tj(this.b, a) || (this.c++,
    this.a.push(a),
    this.g++);
    this.b[a] = b
}
;
rj.prototype.forEach = function(a, b) {
    for (var c = this.Bb(), d = 0; d < c.length; d++) {
        var e = c[d]
          , f = this.get(e);
        a.call(b, f, e, this)
    }
}
;
rj.prototype.hc = function(a) {
    sj(this);
    var b = 0
      , c = this.g
      , d = this
      , e = new nj;
    e.next = function() {
        if (c != d.g)
            throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length)
            throw mj;
        var f = d.a[b++];
        return a ? f : d.b[f]
    }
    ;
    return e
}
;
var tj = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var vj = function(a) {
    if (a.Rb && "function" == typeof a.Rb)
        return a.Rb();
    if (t(a))
        return a.split("");
    if (Ka(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Ob(a)
}
  , wj = function(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach)
        a.forEach(b, c);
    else if (Ka(a) || t(a))
        z(a, b, c);
    else {
        if (a.Bb && "function" == typeof a.Bb)
            var d = a.Bb();
        else if (a.Rb && "function" == typeof a.Rb)
            d = void 0;
        else if (Ka(a) || t(a)) {
            d = [];
            for (var e = a.length, f = 0; f < e; f++)
                d.push(f)
        } else
            d = Pb(a);
        e = vj(a);
        f = e.length;
        for (var g = 0; g < f; g++)
            b.call(c, e[g], d && d[g], a)
    }
};
var xj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
  , yj = function(a, b) {
    if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].indexOf("=")
              , e = null;
            if (0 <= d) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1)
            } else
                f = a[c];
            b(f, e ? de(e) : "")
        }
    }
}
  , zj = function(a, b) {
    if (!b)
        return a;
    var c = a.indexOf("#");
    0 > c && (c = a.length);
    var d = a.indexOf("?");
    if (0 > d || d > c) {
        d = c;
        var e = ""
    } else
        e = a.substring(d + 1, c);
    a = [a.substr(0, d), e, a.substr(c)];
    c = a[1];
    a[1] = b ? c ? c + "&" + b : b : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
}
  , Aj = function(a, b, c) {
    ab(a);
    if (Ja(b)) {
        db(b);
        for (var d = 0; d < b.length; d++)
            Aj(a, String(b[d]), c)
    } else
        null != b && c.push(a + ("" === b ? "" : "=" + ce(b)))
}
  , Bj = function(a, b) {
    x(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
    var c = [];
    for (b = b || 0; b < a.length; b += 2)
        Aj(a[b], a[b + 1], c);
    return c.join("&")
}
  , Cj = function(a) {
    var b = [], c;
    for (c in a)
        Aj(c, a[c], b);
    return b.join("&")
}
  , Dj = function(a, b) {
    var c = 2 == arguments.length ? Bj(arguments[1], 0) : Bj(arguments, 1);
    return zj(a, c)
}
  , Ej = function(a, b, c) {
    c = null != c ? "=" + ce(c) : "";
    return zj(a, b + c)
}
  , Fj = function(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d; ) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f)
            if (f = a.charCodeAt(b + e),
            !f || 61 == f || 38 == f || 35 == f)
                return b;
        b += e + 1
    }
    return -1
}
  , Gj = /#|$/
  , Hj = function() {
    var a = n.location.href
      , b = a.search(Gj)
      , c = Fj(a, 0, "authuser", b);
    if (0 > c)
        return null;
    var d = a.indexOf("&", c);
    if (0 > d || d > b)
        d = b;
    c += 9;
    return de(a.substr(c, d - c))
}
  , Ij = /[?&]($|#)/
  , Jj = function(a, b) {
    x(0 > a.indexOf("#") && 0 > a.indexOf("?"), "goog.uri.utils: Fragment or query identifiers are not supported: [%s]", a);
    wc(a, "/") && (a = a.substr(0, a.length - 1));
    vc(b, "/") && (b = b.substr(1));
    return me(a, "/", b)
};
var Kj = function(a) {
    K.call(this);
    this.headers = new rj;
    this.Tf = a || null;
    this.Gb = !1;
    this.Sf = this.za = null;
    this.pi = this.Sd = "";
    this.xd = 0;
    this.Fe = "";
    this.wd = this.Jg = this.Df = this.kg = !1;
    this.Xd = 0;
    this.Of = null;
    this.Hi = "";
    this.Rf = this.Le = !1
};
w(Kj, K);
Kj.prototype.F = Vi("goog.net.XhrIo");
var Lj = /^https?$/i
  , Mj = ["POST", "PUT"]
  , Nj = []
  , Oj = function(a, b, c, d, e, f, g) {
    var h = new Kj;
    Nj.push(h);
    b && h.O("complete", b);
    h.Pg("ready", h.Qj);
    f && (h.Xd = Math.max(0, f));
    g && (h.Le = g);
    h.send(a, c, d, e);
    return h
};
Kj.prototype.Qj = function() {
    this.Ja();
    vb(Nj, this)
}
;
Kj.prototype.send = function(a, b, c, d) {
    if (this.za)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Sd + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Sd = a;
    this.Fe = "";
    this.xd = 0;
    this.pi = b;
    this.kg = !1;
    this.Gb = !0;
    this.za = this.Tf ? lj(this.Tf) : lj(jj);
    this.Sf = this.Tf ? ij(this.Tf) : ij(jj);
    this.za.onreadystatechange = v(this.Di, this);
    try {
        Zi(this.F, Qj(this, "Opening Xhr")),
        this.Jg = !0,
        this.za.open(b, String(a), !0),
        this.Jg = !1
    } catch (f) {
        Zi(this.F, Qj(this, "Error opening Xhr: " + f.message));
        this.bf(5, f);
        return
    }
    a = c || "";
    var e = new rj(this.headers);
    d && wj(d, function(f, g) {
        e.set(g, f)
    });
    d = qb(e.Bb(), Rj);
    c = n.FormData && a instanceof n.FormData;
    !sb(Mj, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
        this.za.setRequestHeader(g, f)
    }, this);
    this.Hi && (this.za.responseType = this.Hi);
    "withCredentials"in this.za && this.za.withCredentials !== this.Le && (this.za.withCredentials = this.Le);
    try {
        Sj(this),
        0 < this.Xd && (this.Rf = Tj(this.za),
        Zi(this.F, Qj(this, "Will abort after " + this.Xd + "ms if incomplete, xhr2 " + this.Rf)),
        this.Rf ? (this.za.timeout = this.Xd,
        this.za.ontimeout = v(this.cd, this)) : this.Of = Bi(this.cd, this.Xd, this)),
        Zi(this.F, Qj(this, "Sending request")),
        this.Df = !0,
        this.za.send(a),
        this.Df = !1
    } catch (f) {
        Zi(this.F, Qj(this, "Send error: " + f.message)),
        this.bf(5, f)
    }
}
;
var Tj = function(a) {
    return B && Re(9) && ya(a.timeout) && p(a.ontimeout)
}
  , Rj = function(a) {
    return "content-type" == a.toLowerCase()
};
Kj.prototype.cd = function() {
    "undefined" != typeof xa && this.za && (this.Fe = "Timed out after " + this.Xd + "ms, aborting",
    this.xd = 8,
    Zi(this.F, Qj(this, this.Fe)),
    this.dispatchEvent("timeout"),
    this.abort(8))
}
;
Kj.prototype.bf = function(a, b) {
    this.Gb = !1;
    this.za && (this.wd = !0,
    this.za.abort(),
    this.wd = !1);
    this.Fe = b;
    this.xd = a;
    Uj(this);
    Vj(this)
}
;
var Uj = function(a) {
    a.kg || (a.kg = !0,
    a.dispatchEvent("complete"),
    a.dispatchEvent("error"))
};
Kj.prototype.abort = function(a) {
    this.za && this.Gb && (Zi(this.F, Qj(this, "Aborting")),
    this.Gb = !1,
    this.wd = !0,
    this.za.abort(),
    this.wd = !1,
    this.xd = a || 7,
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    Vj(this))
}
;
Kj.prototype.W = function() {
    this.za && (this.Gb && (this.Gb = !1,
    this.wd = !0,
    this.za.abort(),
    this.wd = !1),
    Vj(this, !0));
    Kj.D.W.call(this)
}
;
Kj.prototype.Di = function() {
    this.lc || (this.Jg || this.Df || this.wd ? Wj(this) : this.Dm())
}
;
Kj.prototype.Dm = function() {
    Wj(this)
}
;
var Wj = function(a) {
    if (a.Gb && "undefined" != typeof xa)
        if (a.Sf[1] && 4 == Xj(a) && 2 == a.Mc())
            Zi(a.F, Qj(a, "Local request error detected and ignored"));
        else if (a.Df && 4 == Xj(a))
            Bi(a.Di, 0, a);
        else if (a.dispatchEvent("readystatechange"),
        4 == Xj(a)) {
            Zi(a.F, Qj(a, "Request complete"));
            a.Gb = !1;
            try {
                if (Yj(a))
                    a.dispatchEvent("complete"),
                    a.dispatchEvent("success");
                else {
                    a.xd = 6;
                    try {
                        var b = 2 < Xj(a) ? a.za.statusText : ""
                    } catch (c) {
                        Zi(a.F, "Can not get status: " + c.message),
                        b = ""
                    }
                    a.Fe = b + " [" + a.Mc() + "]";
                    Uj(a)
                }
            } finally {
                Vj(a)
            }
        }
}
  , Vj = function(a, b) {
    if (a.za) {
        Sj(a);
        var c = a.za
          , d = a.Sf[0] ? Fa : null;
        a.za = null;
        a.Sf = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            Wi(a.F, "Problem encountered resetting onreadystatechange: " + e.message)
        }
    }
}
  , Sj = function(a) {
    a.za && a.Rf && (a.za.ontimeout = null);
    a.Of && (Ci(a.Of),
    a.Of = null)
};
Kj.prototype.jb = function() {
    return !!this.za
}
;
var Yj = function(a) {
    var b = a.Mc();
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        var c = !0;
        break a;
    default:
        c = !1
    }
    if (!c) {
        if (b = 0 === b)
            a = String(a.Sd).match(xj)[1] || null,
            !a && n.self && n.self.location && (a = n.self.location.protocol,
            a = a.substr(0, a.length - 1)),
            b = !Lj.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
  , Xj = function(a) {
    return a.za ? a.za.readyState : 0
};
Kj.prototype.Mc = function() {
    try {
        return 2 < Xj(this) ? this.za.status : -1
    } catch (a) {
        return -1
    }
}
;
var Zj = function(a) {
    try {
        return a.za ? a.za.responseText : ""
    } catch (b) {
        return Zi(a.F, "Can not get responseText: " + b.message),
        ""
    }
}
  , ak = function(a) {
    if (a.za) {
        a: {
            a = a.za.responseText;
            if (n.JSON)
                try {
                    var b = n.JSON.parse(a);
                    x("object" == typeof b);
                    var c = b;
                    break a
                } catch (d) {}
            c = aj(a)
        }
        return c
    }
};
Kj.prototype.getResponseHeader = function(a) {
    if (this.za && 4 == Xj(this))
        return a = this.za.getResponseHeader(a),
        null === a ? void 0 : a
}
;
Kj.prototype.getAllResponseHeaders = function() {
    return this.za && 4 == Xj(this) ? this.za.getAllResponseHeaders() || "" : ""
}
;
var Qj = function(a, b) {
    return b + " [" + a.pi + " " + a.Sd + " " + a.Mc() + "]"
};
var bk = function(a, b, c) {
    Oj(a.url, function(d) {
        d = d.target;
        Yj(d) ? b(Zj(d)) : c(d.Mc())
    }, a.b, a.body, a.a, a.c, a.withCredentials)
};
var ck = function(a) {
    hf(this, a, -1, null)
};
w(ck, df);
var dk = function(a) {
    hf(this, a, -1, null)
};
w(dk, df);
var fk = function(a) {
    hf(this, a, -1, ek)
};
w(fk, df);
var ek = [2];
var hk = function(a) {
    hf(this, a, 29, gk)
};
w(hk, df);
var gk = [3, 20, 27];
var jk = function(a) {
    hf(this, a, 17, ik)
};
w(jk, df);
var ik = [3, 5]
  , kk = function(a) {
    var b = Ua().toString();
    C(a, 4, b)
};
var mk = function(a) {
    hf(this, a, 6, lk)
};
w(mk, df);
var lk = [5];
var nk = function(a) {
    hf(this, a, -1, null)
};
w(nk, df);
var ok = new function() {
    this.a = nk
}
;
var qk = function(a, b, c, d, e, f, g, h, l, m) {
    K.call(this);
    this.aa = a;
    this.N = b || Fa;
    this.h = new jk;
    this.ba = d;
    this.a = [];
    this.T = "";
    this.sa = Ta(Cf, 0, 1);
    this.G = e || null;
    this.m = c || null;
    this.C = g || !1;
    this.K = l || null;
    this.X = this.ma = !1;
    this.V = this.R = -1;
    this.c = null;
    this.F = Vi("playlog.clearcut.ClearcutBase");
    this.Le = !h;
    this.L = 0;
    this.Na = 1;
    this.Y = f || !1;
    a = new dk;
    C(a, 1, 1);
    f || (f = new ck,
    b = document.documentElement.getAttribute("lang"),
    C(f, 5, b),
    mf(a, 11, f));
    mf(this.h, 1, a);
    C(this.h, 2, this.aa);
    this.g = new $i(1E4);
    this.b = new zi(this.g.Z());
    Jg(this, this.b);
    H(this.b, "tick", Kb(pk(this, m)), !1, this);
    this.w = new zi(6E5);
    Jg(this, this.w);
    H(this.w, "tick", Kb(pk(this, m)), !1, this);
    this.C || this.w.start();
    this.Y || (H(Uf(), "beforeunload", this.o, !1, this),
    H(Uf(), "unload", this.o, !1, this),
    H(document, "pagehide", this.o, !1, this))
};
w(qk, K);
var pk = function(a, b) {
    return b ? function() {
        b().then(a.flush.bind(a))
    }
    : a.flush
};
qk.prototype.W = function() {
    this.o();
    qk.D.W.call(this)
}
;
var rk = function(a) {
    a.G || (a.G = .01 > a.sa() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.G
};
qk.prototype.log = function(a) {
    a = sf(a);
    var b = this.Na++;
    C(a, 21, b);
    if (!jf(a, 1)) {
        b = a;
        var c = Ua().toString();
        C(b, 1, c)
    }
    this.c && (b = sf(this.c),
    mf(a, 16, b));
    for (; 1E3 <= this.a.length; )
        this.a.shift(),
        ++this.L;
    this.a.push(a);
    this.dispatchEvent(new sk(a));
    this.C || this.b.enabled || this.b.start()
}
;
qk.prototype.flush = function(a, b) {
    if (0 == this.a.length)
        a && a();
    else {
        var c = Ua();
        if (this.V > c && this.R < c)
            Yi(this.F, "Not flushing because server requested delay."),
            b && b("throttled");
        else {
            var d = sf(this.h);
            kk(d);
            nf(d, 3, this.a);
            C(d, 14, this.L);
            c = {};
            var e = this.N();
            e && (c.Authorization = e);
            var f = rk(this);
            this.m && (c["X-Goog-AuthUser"] = this.m,
            f = Ej(f, "authuser", this.m));
            this.K && (c["X-Goog-PageId"] = this.K,
            f = Ej(f, "pageId", this.K));
            if (e && this.T == e)
                Yi(this.F, "XHR with unauthorized request not retried"),
                b && b("stale-auth-token");
            else {
                Yi(this.F, "Flushing log to clearcut.");
                this.a = [];
                this.b.enabled && this.b.stop();
                this.L = 0;
                var g = d.$c();
                c = {
                    url: f,
                    body: g,
                    g: 1,
                    a: c,
                    b: "POST",
                    withCredentials: this.Le,
                    c: 0
                };
                f = v(function(h) {
                    this.g.reset();
                    Ai(this.b, this.g.Z());
                    if (h) {
                        try {
                            var l = JSON.parse(h.replace(")]}'\n", ""));
                            var m = new mk(l)
                        } catch (q) {
                            Xi(this.F, "Response parse failed: " + q)
                        }
                        m && (h = kf(m, "-1"),
                        h = Number(h),
                        0 < h && (this.R = Ua(),
                        this.V = this.R + h),
                        m.c ? (m.a || (m.a = {}),
                        ok.a ? (!m.a[175237375] && m.c[175237375] && (m.a[175237375] = new ok.a(m.c[175237375])),
                        m = m.a[175237375]) : m = m.c[175237375]) : m = void 0,
                        m && (m = kf(m, -1),
                        -1 != m && (this.g = new $i(1 > m ? 1 : m),
                        Ai(this.b, this.g.Z()))))
                    }
                    a && a()
                }, this);
                g = v(function(h) {
                    lf(d, hk, 3);
                    var l = d.a[3];
                    l == ff && (l = d.a[3] = []);
                    var m = this.g;
                    m.a = Math.min(3E5, 2 * m.a);
                    m.b = Math.min(3E5, m.a + Math.round(.2 * (Math.random() - .5) * m.a));
                    Ai(this.b, this.g.Z());
                    401 == h && e && (this.T = e);
                    if (500 <= h && 600 > h || 401 == h || 0 == h)
                        this.a = l.concat(this.a),
                        this.C || this.b.enabled || this.b.start();
                    Xi(this.F, "Flush failed. Status code: " + h);
                    b && b("net-send-failed", h)
                }, this);
                this.ba(c, f, g)
            }
        }
    }
}
;
qk.prototype.o = function() {
    this.ma && tk(this);
    this.X && uk(this);
    this.flush()
}
;
var tk = function(a) {
    Yi(a.F, "Flushing log using sendBeacon.");
    vk(a, 32, 10, function(b, c) {
        b = Ej(b, "format", "json");
        return Uf().navigator.sendBeacon(b, c.$c())
    })
}
  , uk = function(a) {
    Yi(a.F, "Flushing log using Image GET.");
    vk(a, 6, 5, v(function(b, c) {
        c = c.$c();
        for (var d = [], e = 0, f = 0; f < c.length; f++) {
            var g = c.charCodeAt(f);
            255 < g && (d[e++] = g & 255,
            g >>= 8);
            d[e++] = g
        }
        c = cf(d, !0);
        c = Dj(b, "format", "base64json", "p", c);
        b = new Image;
        Gb(b, "HTMLImageElement");
        c = c instanceof Nc ? c : Vc(c, /^data:image\//i.test(c));
        b.src = Oc(c);
        return !0
    }, a))
}
  , vk = function(a, b, c, d) {
    if (0 != a.a.length) {
        var e = rk(a);
        for (var f = e.search(Gj), g = 0, h, l = []; 0 <= (h = Fj(e, g, "format", f)); )
            l.push(e.substring(g, h)),
            g = Math.min(e.indexOf("&", h) + 1 || f, f);
        l.push(e.substr(g));
        e = l.join("").replace(Ij, "$1");
        e = Dj(e, "auth", a.N(), "authuser", a.m || "0");
        for (f = 0; f < c && a.a.length; ++f) {
            g = a.a.slice(0, b);
            h = sf(a.h);
            kk(h);
            nf(h, 3, g);
            if (!d(e, h))
                break;
            a.a = a.a.slice(g.length)
        }
    }
}
  , sk = function() {
    this.type = "event-logged"
};
w(sk, Kg);
var wk = function(a, b, c, d, e, f, g) {
    qk.call(this, a, Ii, b, bk, c, d, e, void 0, f, g)
};
w(wk, qk);
var xk = function(a, b) {
    this.a = new wk(375,a,void 0,!1,!0);
    Jg(this, this.a);
    this.a.ma = !!Uf().navigator.sendBeacon && (Ze || Ve && Re(45));
    this.a.X = !0;
    b && 0 < b.length && (a = new uf,
    C(a, 3, b || []),
    b = this.a,
    a ? (b.c || (b.c = new fk),
    a = a.$c(),
    C(b.c, 4, a)) : b.c && C(b.c, 4, void 0));
    this.g = 0;
    this.b = new zi(1E3);
    Jg(this, this.b);
    H(this.b, "tick", this.c, !1, this);
    this.b.start()
};
w(xk, K);
xk.prototype.W = function() {
    this.b.stop();
    nh(this.b, "tick", this.c, !1, this);
    this.c();
    xk.D.W.call(this)
}
;
xk.prototype.c = function() {
    0 < this.g && this.a.flush(v(this.h, this))
}
;
xk.prototype.h = function() {
    this.g = 0
}
;
xk.prototype.log = function(a) {
    this.a.log(a);
    900 <= ++this.g && this.c()
}
;
var yk = function(a) {
    return (a = a.exec(qd)) ? a[1] : ""
}
  , zk = function() {
    if (Ve)
        return yk(/Firefox\/([0-9.]+)/);
    if (B || xe || we)
        return Pe;
    if (Ze)
        return re() ? yk(/CriOS\/([0-9.]+)/) : yk(/Chrome\/([0-9.]+)/);
    if ($e && !re())
        return yk(/Version\/([0-9.]+)/);
    if (We || Xe) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(qd);
        if (a)
            return a[1] + "." + a[2]
    } else if (Ye)
        return (a = yk(/Android\s+([0-9.]+)/)) ? a : yk(/Version\/([0-9.]+)/);
    return ""
}()
  , Ak = function(a) {
    return 0 <= Lc(zk, a)
};
var Bk = function() {
    this.a = B ? Ak(9) : Ze && Ak(25) || B && Ak(8) || xe || Ve && Ak(19) || we && Ak(12.1) || $e && Ak(5.1) || Xe && Ak(3.2) || Ye && Ak(2.1)
};
Ga(Bk);
var Ek = function(a, b) {
    var c = Ck[b];
    b = Dk[b];
    c = null != c ? yb(c) : [];
    if (a.a && null != b)
        for (a = 0; a < b.length; a++)
            c.push(b[a]);
    return c
}
  , Hk = function(a) {
    return 0 <= a.indexOf("-i0-") && !Gk(a)
}
  , Gk = function(a) {
    return 0 <= a.indexOf("-i0-handwrit")
}
  , Ck = {
    af: ["latn-002-t-k0-und"],
    am: ["am-t-i0-und", "und-ethi-t-k0-und"],
    ar: ["ar-t-i0-und", "ar-t-k0-und"],
    be: ["be-t-i0-und", "be-t-k0-und"],
    bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
    bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
    bs: ["bs-t-k0-und"],
    ca: ["ca-t-k0-und"],
    chr: ["chr-t-k0-und", "chr-t-und-latn-k0-und"],
    cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
    cy: ["latn-002-t-k0-und"],
    da: ["da-t-k0-und"],
    de: ["de-t-k0-und", "de-ch-t-k0-und", "en-us-t-k0-intl"],
    el: ["el-t-i0-und", "el-t-k0-und"],
    en: ["en-t-k0-und", "en-t-k0-dvorak"],
    es: ["es-t-k0-und", "en-us-t-k0-intl"],
    et: ["et-t-k0-und"],
    eu: ["eu-t-k0-und"],
    fa: ["fa-t-i0-und", "fa-t-k0-und"],
    fi: ["fi-t-k0-und"],
    fr: ["fr-t-k0-und", "en-us-t-k0-intl"],
    ga: ["latn-002-t-k0-und"],
    gl: ["gl-t-k0-und"],
    gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
    ha: ["latn-002-t-k0-und"],
    hi: ["hi-t-i0-und", "hi-t-k0-und", "hi-t-k0-qwerty"],
    hr: ["hr-t-k0-und"],
    ht: ["fr-t-k0-und"],
    hu: ["hu-t-k0-101key"],
    hy: ["hy-hyr-t-k0-und", "hy-hyt-t-k0-und"],
    id: ["latn-002-t-k0-und"],
    ig: ["latn-002-t-k0-und"],
    is: ["is-t-k0-und"],
    it: ["it-t-k0-und", "en-us-t-k0-intl"],
    iw: ["he-t-i0-und", "he-t-k0-und"],
    jw: ["latn-002-t-k0-und"],
    ja: ["ja-t-ja-hira-i0-und"],
    ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
    kk: ["kk-t-k0-und"],
    km: ["km-t-k0-und"],
    kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
    ko: ["ko-t-k0-und"],
    ku: ["ku-t-k0-und"],
    ky: ["ky-cyrl-t-k0-und"],
    lb: ["fr-t-k0-und", "en-us-t-k0-intl"],
    lo: ["lo-t-k0-und"],
    lt: ["lt-t-k0-und"],
    lv: ["lv-t-k0-und"],
    mg: ["latn-002-t-k0-und"],
    mi: ["mi-t-k0-und"],
    mk: ["mk-t-k0-und"],
    ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
    mn: ["mn-cyrl-t-k0-und"],
    mr: ["mr-t-i0-und", "hi-t-k0-qwerty"],
    ms: ["latn-002-t-k0-und"],
    mt: ["mt-t-k0-und"],
    my: ["my-t-k0-und", "my-t-k0-myansan"],
    ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
    nl: ["nl-t-k0-und", "en-us-t-k0-intl"],
    no: ["no-t-k0-und"],
    ny: ["latn-002-t-k0-und"],
    pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
    pl: ["pl-t-k0-und"],
    ps: ["ps-t-k0-und"],
    pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", "en-us-t-k0-intl"],
    ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
    ru: ["ru-t-i0-und", "ru-t-k0-und"],
    rw: ["latn-002-t-k0-und"],
    sd: ["sd-t-k0-und"],
    si: ["si-t-i0-und", "si-t-k0-und"],
    sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
    sl: ["sl-t-k0-und"],
    sn: ["latn-002-t-k0-und"],
    so: ["latn-002-t-k0-und"],
    sq: ["sq-t-k0-und"],
    sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und", "sr-latn-t-k0-und"],
    st: ["latn-002-t-k0-und"],
    su: ["latn-002-t-k0-und"],
    sv: ["sv-t-k0-und"],
    sw: ["latn-002-t-k0-und"],
    ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
    te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
    tg: ["tg-t-k0-und"],
    th: ["th-t-i0-und", "th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
    tk: ["latn-002-t-k0-und"],
    tl: ["latn-002-t-k0-und"],
    tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
    tt: ["tt-t-k0-und"],
    ug: ["ug-t-k0-und"],
    uk: ["uk-t-i0-und", "uk-t-k0-101key"],
    ur: ["ur-t-i0-und", "ur-t-k0-und"],
    uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
    vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
    wo: ["latn-002-t-k0-und"],
    xh: ["latn-002-t-k0-und"],
    yi: ["yi-t-k0-und"],
    yo: ["latn-002-t-k0-und"],
    yue: ["yue-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982"],
    zu: ["latn-002-t-k0-und"],
    "zh-CN": "zh-t-i0-pinyin zh-t-i0-wubi-1986 zh-hant-t-i0-und zh-hant-t-i0-cangjie-1982 zh-hant-t-i0-pinyin yue-hant-t-i0-und".split(" "),
    "zh-TW": ["zh-hant-t-i0-und", "zh-hant-t-i0-cangjie-1982", "zh-hant-t-i0-pinyin", "yue-hant-t-i0-und"]
}
  , Dk = {
    af: ["af-t-i0-handwrit"],
    am: ["am-t-i0-handwrit"],
    ar: ["ar-t-i0-handwrit"],
    auto: ["mul-t-i0-handwrit"],
    az: ["az-t-i0-handwrit"],
    be: ["be-t-i0-handwrit"],
    bg: ["bg-t-i0-handwrit"],
    bn: ["bn-t-i0-handwrit"],
    bs: ["bs-t-i0-handwrit"],
    ca: ["ca-t-i0-handwrit"],
    ceb: ["ceb-t-i0-handwrit"],
    co: ["co-t-i0-handwrit"],
    cs: ["cs-t-i0-handwrit"],
    cy: ["cy-t-i0-handwrit"],
    da: ["da-t-i0-handwrit"],
    de: ["de-t-i0-handwrit"],
    el: ["el-t-i0-handwrit"],
    en: ["en-t-i0-handwrit"],
    eo: ["eo-t-i0-handwrit"],
    es: ["es-t-i0-handwrit"],
    et: ["et-t-i0-handwrit"],
    eu: ["eu-t-i0-handwrit"],
    fa: ["fa-t-i0-handwrit"],
    fi: ["fi-t-i0-handwrit"],
    fr: ["fr-t-i0-handwrit"],
    fy: ["fy-t-i0-handwrit"],
    ga: ["ga-t-i0-handwrit"],
    gd: ["gd-t-i0-handwrit"],
    gl: ["gl-t-i0-handwrit"],
    gu: ["gu-t-i0-handwrit"],
    haw: ["haw-t-i0-handwrit"],
    hi: ["hi-t-i0-handwrit"],
    hmn: ["hmn-t-i0-handwrit"],
    hr: ["hr-t-i0-handwrit"],
    ht: ["ht-t-i0-handwrit"],
    hu: ["hu-t-i0-handwrit"],
    hy: ["hy-t-i0-handwrit"],
    id: ["id-t-i0-handwrit"],
    is: ["is-t-i0-handwrit"],
    it: ["it-t-i0-handwrit"],
    iw: ["he-t-i0-handwrit"],
    ja: ["ja-t-i0-handwrit"],
    jv: ["jv-t-i0-handwrit"],
    ka: ["ka-t-i0-handwrit"],
    kk: ["kk-t-i0-handwrit"],
    km: ["km-t-i0-handwrit"],
    kn: ["kn-t-i0-handwrit"],
    ko: ["ko-t-i0-handwrit"],
    ku: ["ku-t-i0-handwrit"],
    ky: ["ky-t-i0-handwrit"],
    la: ["la-t-i0-handwrit"],
    lb: ["lb-t-i0-handwrit"],
    lo: ["lo-t-i0-handwrit"],
    lt: ["lt-t-i0-handwrit"],
    lv: ["lv-t-i0-handwrit"],
    mg: ["mg-t-i0-handwrit"],
    mi: ["mi-t-i0-handwrit"],
    mk: ["mk-t-i0-handwrit"],
    ml: ["ml-t-i0-handwrit"],
    mn: ["mn-t-i0-handwrit"],
    mr: ["mr-t-i0-handwrit"],
    ms: ["ms-t-i0-handwrit"],
    mt: ["mt-t-i0-handwrit"],
    my: ["my-t-i0-handwrit"],
    ne: ["ne-t-i0-handwrit"],
    nl: ["nl-t-i0-handwrit"],
    no: ["no-t-i0-handwrit"],
    ny: ["ny-t-i0-handwrit"],
    pa: ["pa-t-i0-handwrit"],
    pl: ["pl-t-i0-handwrit"],
    pt: ["pt-t-i0-handwrit"],
    ro: ["ro-t-i0-handwrit"],
    ru: ["ru-t-i0-handwrit"],
    si: ["si-t-i0-handwrit"],
    sk: ["sk-t-i0-handwrit"],
    sl: ["sl-t-i0-handwrit"],
    sm: ["sm-t-i0-handwrit"],
    sn: ["sn-t-i0-handwrit"],
    so: ["so-t-i0-handwrit"],
    sq: ["sq-t-i0-handwrit"],
    sr: ["sr-t-i0-handwrit"],
    su: ["su-t-i0-handwrit"],
    sv: ["sv-t-i0-handwrit"],
    sw: ["sw-t-i0-handwrit"],
    ta: ["ta-t-i0-handwrit"],
    te: ["te-t-i0-handwrit"],
    tg: ["tg-t-i0-handwrit"],
    th: ["th-t-i0-handwrit"],
    tl: ["fil-t-i0-handwrit"],
    tr: ["tr-t-i0-handwrit"],
    uk: ["uk-t-i0-handwrit"],
    ur: ["ur-t-i0-handwrit"],
    uz: ["uz-t-i0-handwrit"],
    vi: ["vi-t-i0-handwrit"],
    xh: ["xh-t-i0-handwrit"],
    "zh-CN": ["zh-t-i0-handwrit"],
    zu: ["zu-t-i0-handwrit"]
};
var Ik = function(a) {
    hf(this, a, -1, null)
};
w(Ik, df);
Ik.prototype.Jd = function() {
    return jf(this, 1)
}
;
Ik.prototype.ib = function() {
    return jf(this, 4)
}
;
var Jk = function(a) {
    hf(this, a, -1, null)
};
w(Jk, df);
var Kk = function(a) {
    hf(this, a, -1, null)
};
w(Kk, df);
var Lk = function(a) {
    hf(this, a, -1, null)
};
w(Lk, df);
var Nk = function(a) {
    hf(this, a, -1, Mk)
};
w(Nk, df);
var Mk = [1];
var Ok = function(a) {
    hf(this, a, -1, null)
};
w(Ok, df);
var Pk = function(a) {
    hf(this, a, -1, null)
};
w(Pk, df);
var Qk = function(a) {
    hf(this, a, -1, null)
};
w(Qk, df);
var Rk = function(a) {
    hf(this, a, -1, null)
};
w(Rk, df);
var Sk = function(a) {
    hf(this, a, -1, null)
};
w(Sk, df);
Sk.prototype.Va = function() {
    return jf(this, 1)
}
;
var Tk = function(a) {
    hf(this, a, -1, null)
};
w(Tk, df);
var Vk = function(a) {
    hf(this, a, -1, Uk)
};
w(Vk, df);
var Uk = [1, 3, 4];
var Wk = function(a) {
    hf(this, a, -1, null)
};
w(Wk, df);
var Xk = function(a) {
    hf(this, a, -1, null)
};
w(Xk, df);
Xk.prototype.Ib = function() {
    return jf(this, 1)
}
;
var Yk = function(a) {
    hf(this, a, -1, null)
};
w(Yk, df);
var $k = function(a) {
    hf(this, a, -1, Zk)
};
w($k, df);
var Zk = [1];
$k.prototype.ib = function() {
    return jf(this, 5)
}
;
var al = function(a) {
    hf(this, a, -1, null)
};
w(al, df);
var cl = function(a) {
    hf(this, a, -1, bl)
};
w(cl, df);
var bl = [2];
var dl = function(a) {
    hf(this, a, -1, null)
};
w(dl, df);
var el = function(a) {
    hf(this, a, -1, null)
};
w(el, df);
var fl = function(a) {
    hf(this, a, -1, null)
};
w(fl, df);
var gl = function(a) {
    hf(this, a, -1, null)
};
w(gl, df);
var il = function(a) {
    hf(this, a, -1, hl)
};
w(il, df);
var hl = [3, 4];
var kl = function(a) {
    hf(this, a, -1, jl)
};
w(kl, df);
var jl = [3];
var ml = function(a) {
    hf(this, a, -1, ll)
};
w(ml, df);
var ll = [2];
var ol = function(a) {
    hf(this, a, -1, nl)
};
w(ol, df);
var nl = [26, 80];
ol.prototype.ve = function() {
    return jf(this, 1)
}
;
var pl = function() {
    this.h = 0;
    this.G = this.o = this.g = this.c = this.w = "";
    this.m = this.b = this.C = 0;
    Bk.M();
    this.a = null
}
  , ql = {
    bh: 27,
    btn: 1,
    clks: 2,
    clkt: 3,
    pb: 4,
    sel: 5,
    selalt: 6,
    tws_confirm: 7,
    tws_lsugg: 8,
    tws_revert: 9,
    tws_spell: 10,
    is: 11
};
Ga(pl);
var rl = function() {
    var a = DATA.DisplayLanguage
      , b = pl.M();
    b.h = 2;
    b.w = a;
    return b
}
  , sl = function(a) {
    var b = 0;
    0 <= a.indexOf("-k0-") ? b = 2 : Hk(a) ? b = 1 : Gk(a) && (b = 5);
    return b
}
  , tl = function(a, b) {
    t(b) && (b = ql[b],
    b = null != b ? b : 0);
    a.C = b
};
pl.prototype.store = function(a) {
    C(a, 65, this.h);
    C(a, 16, this.c);
    C(a, 14, this.o);
    C(a, 1, this.g);
    C(a, 50, this.w);
    C(a, 52, this.G);
    C(a, 32, this.b)
}
;
new ArrayBuffer(0);
var vl = function(a, b) {
    var c = a[b - 1];
    if (null == c || ul(c))
        a = a[a.length - 1],
        ul(a) && (c = a[b]);
    return c
}
  , ul = function(a) {
    return Ma(a) && !Ka(a)
}
  , wl = function(a, b) {
    a[b] || (a[b] = []);
    return a[b]
};
var yl = function(a, b) {
    return a === b ? !0 : ob(a, function(c, d) {
        if (ul(c)) {
            d = cb(c);
            for (var e in d) {
                c = d[e];
                var f = vl(b, +e);
                if (!xl(c, f))
                    return !1
            }
            return !0
        }
        e = vl(b, d + 1);
        return xl(c, e)
    }) && ob(b, function(c, d) {
        if (ul(c)) {
            c = cb(c);
            for (var e in c)
                if (null == vl(a, +e))
                    return !1;
            return !0
        }
        return null == c == (null == vl(a, d + 1))
    })
}
  , xl = function(a, b) {
    return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Ja(a) && Ja(b) ? yl(db(a), db(b)) : !1
};
var zl = function() {}
  , Al = function(a, b, c) {
    a = a.Ra = b = b || [];
    if (a.length) {
        var d = a.length - 1;
        b = a[d];
        if (ul(b) && (delete a[d],
        d < c)) {
            d = 0;
            for (var e in b) {
                var f = +e;
                f <= c ? (a[f - 1] = b[e],
                delete b[e]) : d++
            }
            d && (a[c] = b)
        }
    }
}
  , Dh = function(a, b) {
    return null != a.Ra[b]
}
  , Bl = function(a, b, c) {
    a = a.Ra[b];
    return null != a ? a : c
}
  , Cl = function(a, b) {
    return !!Bl(a, b, void 0)
}
  , Hh = function(a, b) {
    return Bl(a, b, 0)
}
  , J = function(a, b, c) {
    return Bl(a, b, c || "")
}
  , Fh = function(a, b, c) {
    return wl(a.Ra, b)[c]
}
  , Dl = function(a, b, c) {
    return wl(a.Ra, b)[c]
}
  , El = function(a, b, c) {
    for (var d = [], e = 0; e < I(a, b); e++)
        d.push(new c(Dl(a, b, e)));
    return d
}
  , I = function(a, b) {
    return a.Ra[b] ? a.Ra[b].length : 0
};
zl.prototype.yb = function() {
    return this.Ra
}
;
var Fl = function(a) {
    var b = a.a();
    a = a.Ra;
    for (var c = {}, d = 0; d < a.length; d++)
        if (void 0 !== a[d] && null !== a[d]) {
            var e = !1, f = void 0, g = void 0, h;
            for (h in b)
                if (g = b[h],
                f = h,
                g.H == d) {
                    e = !0;
                    break
                }
            if (e)
                if (g = x(g),
                g.va)
                    if (g.J)
                        for (c[f] = [],
                        e = 0; e < a[d].length; e++)
                            c[f].push(g.va(a[d][e]));
                    else
                        c[f] = g.va(a[d]);
                else
                    c[f] = a[d]
        }
    return c
};
zl.prototype.toString = function() {
    return JSON.stringify(Fl(this))
}
;
var Gl = function(a, b) {
    var c = [];
    a = new a(c);
    var d = hb(a, zl).a(), e;
    for (e in b) {
        var f = x(d[e])
          , g = b[e];
        if (f.wa)
            if (g instanceof Array) {
                var h = [];
                for (var l = 0; l < g.length; l++)
                    h.push(f.wa(g[l]).yb())
            } else
                h = f.wa(g).yb();
        else
            h = g;
        c[f.H] = h
    }
    return a
};
var Hl = function(a) {
    Al(this, a, 1)
};
w(Hl, zl);
var Il = {
    romanization: {
        H: 0,
        J: !1
    }
};
Hl.prototype.a = function() {
    return Il
}
;
var Jl = function(a) {
    Al(this, a, 3)
};
w(Jl, zl);
var Kl = {
    source_span_index: {
        H: 0,
        J: !1
    },
    target_span_index: {
        H: 1,
        J: !1
    },
    direction: {
        H: 2,
        J: !1
    }
};
Jl.prototype.a = function() {
    return Kl
}
;
var Ll = function(a) {
    Al(this, a, 2)
};
w(Ll, zl);
var Ml = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
Ll.prototype.a = function() {
    return Ml
}
;
var Nl = function(a) {
    Al(this, a, 3)
};
w(Nl, zl);
var Ol = {
    source_span: {
        H: 0,
        wa: function(a) {
            return Gl(Ll, a)
        },
        va: function(a) {
            return Fl(new Ll(a))
        },
        J: !0
    },
    target_span: {
        H: 1,
        wa: function(a) {
            return Gl(Ll, a)
        },
        va: function(a) {
            return Fl(new Ll(a))
        },
        J: !0
    },
    link: {
        H: 2,
        wa: function(a) {
            return Gl(Jl, a)
        },
        va: function(a) {
            return Fl(new Jl(a))
        },
        J: !0
    }
};
Nl.prototype.a = function() {
    return Ol
}
;
var Pl = function(a) {
    Al(this, a, 2)
};
w(Pl, zl);
var Ql = {
    model_path: {
        H: 0,
        J: !1
    },
    label: {
        H: 1,
        J: !1
    }
};
Pl.prototype.a = function() {
    return Ql
}
;
var Rl = function(a) {
    Al(this, a, 2)
};
w(Rl, zl);
var Sl = {
    checkpoint_md5: {
        H: 0,
        J: !1
    },
    launch_doc: {
        H: 1,
        J: !1
    }
};
Rl.prototype.a = function() {
    return Sl
}
;
var Tl = function(a) {
    Al(this, a, 1)
};
w(Tl, zl);
var Ul = {
    model_tracking: {
        H: 0,
        wa: function(a) {
            return Gl(Rl, a)
        },
        va: function(a) {
            return Fl(new Rl(a))
        },
        J: !1
    }
};
Tl.prototype.a = function() {
    return Ul
}
;
var Vl = function(a) {
    Al(this, a, 9)
};
w(Vl, zl);
var Wl = {
    trans: {
        H: 0,
        J: !1
    },
    orig: {
        H: 1,
        J: !1
    },
    translit: {
        H: 2,
        J: !1
    },
    src_translit: {
        H: 3,
        J: !1
    },
    backend: {
        H: 4,
        J: !1
    },
    model: {
        H: 5,
        J: !0
    },
    word_alignment: {
        H: 6,
        wa: function(a) {
            return Gl(Nl, a)
        },
        va: function(a) {
            return Fl(new Nl(a))
        },
        J: !1
    },
    model_specification: {
        H: 7,
        wa: function(a) {
            return Gl(Pl, a)
        },
        va: function(a) {
            return Fl(new Pl(a))
        },
        J: !0
    },
    translation_engine_debug_info: {
        H: 8,
        wa: function(a) {
            return Gl(Tl, a)
        },
        va: function(a) {
            return Fl(new Tl(a))
        },
        J: !0
    }
};
Vl.prototype.a = function() {
    return Wl
}
;
Vl.prototype.Nc = function() {
    return J(this, 0)
}
;
var Xl = function(a) {
    Al(this, a, 4)
};
w(Xl, zl);
var Yl = {
    gender: {
        H: 0,
        J: !1
    },
    translation: {
        H: 1,
        J: !1
    },
    sentences: {
        H: 2,
        wa: function(a) {
            return Gl(Vl, a)
        },
        va: function(a) {
            return Fl(new Vl(a))
        },
        J: !0
    },
    romanization: {
        H: 3,
        wa: function(a) {
            return Gl(Hl, a)
        },
        va: function(a) {
            return Fl(new Hl(a))
        },
        J: !1
    }
};
Xl.prototype.a = function() {
    return Yl
}
;
Xl.prototype.rb = function() {
    return J(this, 1)
}
;
Xl.prototype.cc = function() {
    return I(this, 2)
}
;
Xl.prototype.$a = function(a) {
    return new Vl(Dl(this, 2, a))
}
;
var Zl = function(a) {
    Al(this, a, 2)
};
w(Zl, zl);
var $l = {
    gendered_translations: {
        H: 0,
        wa: function(a) {
            return Gl(Xl, a)
        },
        va: function(a) {
            return Fl(new Xl(a))
        },
        J: !0
    },
    status: {
        H: 1,
        J: !1
    }
};
Zl.prototype.a = function() {
    return $l
}
;
Zl.prototype.Mc = function() {
    return Bl(this, 1, 0)
}
;
var M = function() {
    this.b = null;
    this.a = pl.M()
};
w(M, Hg);
Ga(M);
var am = function(a) {
    var b = Hj() || "0";
    a.b = new xk(b,EXPERIMENT_IDS);
    Jg(a, a.b)
}
  , dm = function(a, b, c, d, e) {
    b = bm(a, 237, b, void 0, void 0, void 0, e);
    if (null != c) {
        e = new Nk;
        var f = a.a.a;
        null != f && C(e, 1, f || []);
        C(e, 2, cm(c));
        mf(b, 83, e)
    }
    p(d) && 0 != d && C(b, 74, d);
    N(a, b)
}
  , em = function(a, b, c) {
    N(a, bm(a, 190, b, c, !0, 0))
}
  , fm = function(a, b, c, d) {
    N(a, bm(a, 78, b, c, d, 0))
}
  , gm = function(a, b) {
    var c = O(a, 21)
      , d = new dl;
    C(d, 1, 3);
    mf(c, 56, d);
    if (null != b) {
        d = new Nk;
        var e = a.a.a;
        null != e && C(d, 1, e || []);
        C(d, 2, cm(b));
        mf(c, 83, d)
    }
    N(a, c)
}
  , hm = {}
  , im = (hm.st = 231,
hm.unst = 232,
hm.sw = 229,
hm.lnk = 230,
hm)
  , jm = function(a, b, c) {
    var d = O(a, 148)
      , e = new Kk;
    C(e, 1, b);
    c && C(e, 5, c);
    mf(d, 63, e);
    N(a, d)
}
  , km = function(a, b) {
    b = O(a, b);
    var c = new Wk;
    C(c, 1, 1);
    mf(b, 46, c);
    N(a, b)
}
  , lm = function(a, b, c, d, e, f) {
    b = O(a, b ? 84 : 85);
    var g = new Wk;
    C(g, 1, 1);
    C(g, 2, c);
    C(g, 3, d);
    C(g, 4, e + 1);
    0 < f.length && C(g, 5, f);
    mf(b, 46, g);
    N(a, b)
}
  , nm = function(a, b, c) {
    N(a, mm(a, 251, b, c))
}
  , pm = function(a, b) {
    N(a, om(a, 71, b))
}
  , qm = function(a, b) {
    N(a, om(a, 72, b))
}
  , rm = function(a, b) {
    var c = O(a, 244);
    C(c, 74, b);
    N(a, c)
}
  , tm = function(a, b) {
    N(a, sm(a, 245, b))
}
  , um = function(a) {
    N(a, O(a, 223))
}
  , vm = function(a) {
    var b = M.M()
      , c = O(b, 22)
      , d = new dl;
    C(d, 1, 3);
    C(d, 2, a);
    mf(c, 56, d);
    N(b, c)
};
M.prototype.c = function() {
    N(this, O(this, 145))
}
;
var wm = function(a, b, c, d, e, f, g, h) {
    b = O(a, b);
    var l = new fl;
    C(l, 1, c);
    C(l, 4, 1);
    C(l, 7, d);
    C(l, 5, e);
    f && C(l, 8, f);
    p(g) && C(l, 6, g + 1);
    mf(b, 43, l);
    null != h && (c = new Nk,
    C(c, 2, cm(h)),
    h = a.a.a,
    null != h && C(c, 1, h || []),
    mf(b, 83, c));
    N(a, b)
}
  , xm = function(a) {
    var b = O(a, 1);
    C(b, 53, a.a.C);
    N(a, b);
    tl(a.a, 0)
}
  , ym = function(a, b, c, d) {
    b = O(a, b);
    var e = new gl;
    C(e, 1, c);
    C(e, 2, d);
    mf(b, 75, e);
    N(a, b)
};
M.prototype.g = function() {
    N(this, O(this, 25))
}
;
var zm = function(a, b) {
    for (var c = O(a, 339), d = new Nk, e = 0; e < b.length; e++) {
        var f = cm(Bl(b[e], 0, 0));
        jf(d, 1).push(f)
    }
    b = jf(d, 1);
    a.a.a = b;
    mf(c, 83, d);
    N(a, c)
}
  , O = function(a, b) {
    var c = new ol;
    a.a.store(c);
    C(c, 31, b);
    return c
}
  , bm = function(a, b, c, d, e, f, g) {
    var h = new Ik;
    C(h, 1, c);
    p(d) && C(h, 4, d);
    p(e) && C(h, 2, e);
    p(f) && 0 != f && C(h, 3, f);
    p(g) && 0 != g && C(h, 5, g);
    a = O(a, b);
    mf(a, 61, h);
    return a
}
  , Am = function(a, b, c, d) {
    var e = new Ok;
    C(e, 1, c + 1);
    C(e, 2, d);
    a = O(a, b);
    mf(a, 60, e);
    return a
}
  , Bm = function(a, b, c, d, e, f, g, h) {
    for (var l = new Vk, m = [], q = 0; q < c.length; q++) {
        var r = c[q]
          , u = new Pk;
        C(u, 1, r[0]);
        C(u, 2, !!r[1]);
        m.push(u)
    }
    nf(l, 1, m);
    c = new Tk;
    C(c, 1, !!d);
    mf(l, 2, c);
    d = [];
    for (c = 0; c < e.length; c++)
        m = new Sk,
        C(m, 1, e[c]),
        d.push(m);
    nf(l, 3, d);
    e = [];
    for (d = 0; d < f.length; d++)
        c = f[d],
        m = new Qk,
        C(m, 1, !!c[0]),
        C(m, 2, !!c[1]),
        e.push(m);
    nf(l, 4, e);
    g && (f = new Rk,
    C(f, 1, !0),
    mf(l, 5, f));
    0 != h && C(l, 6, h);
    a = O(a, b);
    mf(a, 66, l);
    return a
}
  , Cm = function(a, b) {
    a = O(a, b);
    b = new $k;
    C(b, 1, []);
    C(b, 4, 1);
    mf(a, 59, b);
    return a
}
  , mm = function(a, b, c, d) {
    var e = new Yk;
    C(e, 1, d);
    a = O(a, b);
    C(a, 74, c);
    mf(a, 71, e);
    return a
}
  , om = function(a, b, c) {
    var d = new al;
    C(d, 1, c);
    a = O(a, b);
    mf(a, 44, d);
    return a
}
  , sm = function(a, b, c) {
    a = O(a, b);
    b = new $k;
    C(b, 5, c);
    p(void 0) && C(b, 6, void 0);
    mf(a, 59, b);
    return a
}
  , N = function(a, b) {
    if (a.b) {
        var c = new hk;
        b = b.$c();
        C(c, 8, b);
        a.b.log(c)
    }
}
  , cm = function(a) {
    switch (a) {
    case 2:
        return 1;
    case 1:
        return 2;
    default:
        return 0
    }
};
var Dm = function() {
    this.g = [];
    this.b = {};
    this.a = {};
    this.h = !1;
    this.Wg = 1;
    this.je = {};
    this.c = null;
    this.o = "";
    H(window, "beforeunload", this.G, !1, this)
};
Ga(Dm);
var Em = function(a, b, c) {
    if (null == b)
        return "1";
    switch (Ia(b)) {
    case "string":
        return a = b,
        !(64 < a.length) || null != c && c || (a = a.substr(0, 64)),
        ce(a);
    case "number":
        return "" + b;
    case "boolean":
        return b ? "1" : "0";
    case "array":
        var d = [], e;
        for (e in b)
            d.push(Em(a, b[e], c));
        return d.join(",");
    case "object":
        d = [];
        for (e in b)
            d.push(Fm(a, e, b[e], c));
        return d.join(",");
    default:
        return ""
    }
}
  , Fm = function(a, b, c, d) {
    return [ce(b), Em(a, c, d || "smtalt" == b)].join("=")
};
Dm.prototype.log = function(a, b) {
    this.g.push([a, b]);
    this.h || (this.h = !0,
    Bi(this.m, 0, this))
}
;
var Im = function(a, b, c, d, e) {
    b = a.o + "/gen204?" + Fm(a, c, d) + "&" + Fm(a, "client", b, !0);
    e && (b += Gm(a, e));
    Hm(a, b)
}
  , Gm = function(a, b) {
    var c = "";
    p(b) && Mb(b, function(d, e) {
        if (d instanceof Array)
            for (var f = 0; f < d.length; f++)
                c += "&" + Fm(this, e, d[f]);
        else
            c += "&" + Fm(this, e, d)
    }, a);
    return c
};
Dm.prototype.m = function() {
    for (var a = 0; a < this.g.length; a++) {
        var b = this.g[a];
        Jm(this, b[0], b[1])
    }
    this.g = [];
    this.h = !1
}
;
var Jm = function(a, b, c) {
    Hm(a, a.o + "/gen204?" + (a.c ? ["client=", a.c, "&"].join("") : "") + Fm(a, b, c))
}
  , Hm = function(a, b) {
    var c = new Image
      , d = a.Wg++;
    a.je[d] = c;
    c.onload = c.onerror = function() {
        delete Dm.M().je[d]
    }
    ;
    c.src = b;
    c = null
}
  , Lm = function(a, b, c, d) {
    var e = null;
    b in a.b && (e = a.b[b]);
    a.b[b] = Km(e, c, d)
}
  , Mm = function(a, b) {
    var c = 0
      , d = null;
    b in a.a && (d = a.a[b],
    c = d[0],
    d = d[1]);
    d = Km(d, 1, "accumulate");
    a.a[b] = [c, d];
    Ci(a.a[b][0]);
    c = Bi(v(a.w, a, b), 2E3);
    a.a[b][0] = c
};
Dm.prototype.w = function(a) {
    Jm(this, a, this.a[a][1]);
    a in this.a && (Ci(this.a[a][0]),
    delete this.a[a])
}
;
var Nm = function(a, b, c) {
    null != b || (b = 1);
    "accumulate" == c ? (isNaN(a) && (a = parseInt(a, 10)),
    isNaN(b) && (b = parseInt(b, 10)),
    a += b) : a = b;
    return a
}
  , Km = function(a, b, c) {
    if ("object" == Ia(b)) {
        "object" != Ia(a) && (a = {});
        for (var d in b)
            a[d] = Nm(d in a ? a[d] : null, b[d], c)
    } else
        a = Nm(a, b, c);
    return a
}
  , Om = function(a) {
    var b = [], c;
    for (c in a.b)
        b.push(Fm(a, c, a.b[c]));
    a.b = {};
    return b.join("&")
};
Dm.prototype.G = function() {
    this.m();
    for (var a in this.a)
        0 != this.a[a] && this.w(a)
}
;
var Pm = function(a, b) {
    this.b = this.m = this.c = "";
    this.w = null;
    this.g = this.h = "";
    this.o = !1;
    var c;
    a instanceof Pm ? (this.o = p(b) ? b : a.o,
    Rm(this, a.c),
    this.m = a.m,
    this.b = a.b,
    Sm(this, a.w),
    Tm(this, a.h),
    Um(this, Vm(a.a)),
    this.g = a.g) : a && (c = String(a).match(xj)) ? (this.o = !!b,
    Rm(this, c[1] || "", !0),
    this.m = Wm(c[2] || ""),
    this.b = Wm(c[3] || "", !0),
    Sm(this, c[4]),
    Tm(this, c[5] || "", !0),
    Um(this, c[6] || "", !0),
    this.g = Wm(c[7] || "")) : (this.o = !!b,
    this.a = new Xm(null,this.o))
};
Pm.prototype.toString = function() {
    var a = []
      , b = this.c;
    b && a.push(Ym(b, Zm, !0), ":");
    var c = this.b;
    if (c || "file" == b)
        a.push("//"),
        (b = this.m) && a.push(Ym(b, Zm, !0), "@"),
        a.push(ce(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        c = this.w,
        null != c && a.push(":", String(c));
    if (c = this.h)
        this.b && "/" != c.charAt(0) && a.push("/"),
        a.push(Ym(c, "/" == c.charAt(0) ? $m : an, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", Ym(c, bn));
    return a.join("")
}
;
Pm.prototype.resolve = function(a) {
    var b = new Pm(this)
      , c = !!a.c;
    c ? Rm(b, a.c) : c = !!a.m;
    c ? b.m = a.m : c = !!a.b;
    c ? b.b = a.b : c = null != a.w;
    var d = a.h;
    if (c)
        Sm(b, a.w);
    else if (c = !!a.h) {
        if ("/" != d.charAt(0))
            if (this.b && !this.h)
                d = "/" + d;
            else {
                var e = b.h.lastIndexOf("/");
                -1 != e && (d = b.h.substr(0, e + 1) + d)
            }
        e = d;
        if (".." == e || "." == e)
            d = "";
        else if (Jc(e, "./") || Jc(e, "/.")) {
            d = vc(e, "/");
            e = e.split("/");
            for (var f = [], g = 0; g < e.length; ) {
                var h = e[g++];
                "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                d && g == e.length && f.push("")) : (f.push(h),
                d = !0)
            }
            d = f.join("/")
        } else
            d = e
    }
    c ? Tm(b, d) : c = "" !== a.a.toString();
    c ? Um(b, Vm(a.a)) : c = !!a.g;
    c && (b.g = a.g);
    return b
}
;
var Rm = function(a, b, c) {
    a.c = c ? Wm(b, !0) : b;
    a.c && (a.c = a.c.replace(/:$/, ""))
}
  , Sm = function(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.w = b
    } else
        a.w = null
}
  , Tm = function(a, b, c) {
    a.h = c ? Wm(b, !0) : b
}
  , Um = function(a, b, c) {
    b instanceof Xm ? (a.a = b,
    cn(a.a, a.o)) : (c || (b = Ym(b, dn)),
    a.a = new Xm(b,a.o))
}
  , fn = function(a, b, c) {
    Ja(c) || (c = [String(c)]);
    en(a.a, b, c)
}
  , gn = function(a) {
    return a instanceof Pm ? new Pm(a) : new Pm(a,void 0)
}
  , Wm = function(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}
  , Ym = function(a, b, c) {
    return t(a) ? (a = encodeURI(a).replace(b, hn),
    c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
    a) : null
}
  , hn = function(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
  , Zm = /[#\/\?@]/g
  , an = /[#\?:]/g
  , $m = /[#\?]/g
  , dn = /[#\?@]/g
  , bn = /#/g
  , Xm = function(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.h = !!b
}
  , jn = function(a) {
    a.a || (a.a = new rj,
    a.b = 0,
    a.c && yj(a.c, function(b, c) {
        a.add(de(b), c)
    }))
};
Xm.prototype.qg = function() {
    jn(this);
    return this.b
}
;
Xm.prototype.add = function(a, b) {
    jn(this);
    this.c = null;
    a = kn(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = $a(this.b) + 1;
    return this
}
;
var ln = function(a, b) {
    jn(a);
    b = kn(a, b);
    uj(a.a, b) && (a.c = null,
    a.b = $a(a.b) - a.a.get(b).length,
    a = a.a,
    tj(a.b, b) && (delete a.b[b],
    a.c--,
    a.g++,
    a.a.length > 2 * a.c && sj(a)))
}
  , mn = function(a, b) {
    jn(a);
    b = kn(a, b);
    return uj(a.a, b)
};
k = Xm.prototype;
k.forEach = function(a, b) {
    jn(this);
    this.a.forEach(function(c, d) {
        z(c, function(e) {
            a.call(b, e, d, this)
        }, this)
    }, this)
}
;
k.Bb = function() {
    jn(this);
    for (var a = this.a.Rb(), b = this.a.Bb(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
}
;
k.Rb = function(a) {
    jn(this);
    var b = [];
    if (t(a))
        mn(this, a) && (b = wb(b, this.a.get(kn(this, a))));
    else {
        a = this.a.Rb();
        for (var c = 0; c < a.length; c++)
            b = wb(b, a[c])
    }
    return b
}
;
k.set = function(a, b) {
    jn(this);
    this.c = null;
    a = kn(this, a);
    mn(this, a) && (this.b = $a(this.b) - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = $a(this.b) + 1;
    return this
}
;
k.get = function(a, b) {
    if (!a)
        return b;
    a = this.Rb(a);
    return 0 < a.length ? String(a[0]) : b
}
;
var en = function(a, b, c) {
    ln(a, b);
    0 < c.length && (a.c = null,
    a.a.set(kn(a, b), yb(c)),
    a.b = $a(a.b) + c.length)
};
Xm.prototype.toString = function() {
    if (this.c)
        return this.c;
    if (!this.a)
        return "";
    for (var a = [], b = this.a.Bb(), c = 0; c < b.length; c++) {
        var d = b[c]
          , e = ce(d);
        d = this.Rb(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + ce(d[f]));
            a.push(g)
        }
    }
    return this.c = a.join("&")
}
;
var Vm = function(a) {
    var b = new Xm;
    b.c = a.c;
    a.a && (b.a = new rj(a.a),
    b.b = a.b);
    return b
}
  , kn = function(a, b) {
    b = String(b);
    a.h && (b = b.toLowerCase());
    return b
}
  , cn = function(a, b) {
    b && !a.h && (jn(a),
    a.c = null,
    a.a.forEach(function(c, d) {
        var e = d.toLowerCase();
        d != e && (ln(this, d),
        en(this, e, c))
    }, a));
    a.h = b
};
Xm.prototype.g = function(a) {
    for (var b = 0; b < arguments.length; b++)
        wj(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
}
;
var nn = {
    yq: !0
}
  , on = {
    Aq: !0
}
  , pn = {
    zq: !0
}
  , qn = {
    xq: !0
}
  , rn = {
    wq: !0
}
  , sn = function() {
    throw Error("Do not instantiate directly");
};
sn.prototype.md = null;
sn.prototype.Ta = function() {
    return this.content
}
;
sn.prototype.toString = function() {
    return this.content
}
;
var tn = function(a) {
    if (a.jc !== nn)
        throw Error("Sanitized content was not of kind HTML.");
    return Pd(ec("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.md)
}
  , un = function() {
    sn.call(this)
};
w(un, sn);
un.prototype.jc = nn;
var vn = function() {
    sn.call(this)
};
w(vn, sn);
vn.prototype.jc = on;
vn.prototype.md = 1;
var wn = function() {
    sn.call(this)
};
w(wn, sn);
wn.prototype.jc = pn;
wn.prototype.md = 1;
var xn = function() {
    sn.call(this)
};
w(xn, sn);
xn.prototype.jc = qn;
xn.prototype.md = 1;
var yn = function() {
    sn.call(this)
};
w(yn, sn);
yn.prototype.jc = rn;
yn.prototype.md = 1;
var zn = function(a, b, c) {
    (b = null != a && a.jc === b) && x(a.constructor === c);
    return b
};
var An = function(a) {
    if (null != a)
        switch (a.md) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
        }
    return null
}
  , R = function(a) {
    return zn(a, nn, un) ? a : a instanceof Ad ? P(Bd(a).toString(), a.Pc()) : P(ee(String(String(a))), An(a))
}
  , P = function(a) {
    function b(c) {
        this.content = c
    }
    b.prototype = a.prototype;
    return function(c, d) {
        c = new b(String(c));
        void 0 !== d && (c.md = d);
        return c
    }
}(un)
  , Bn = function(a, b) {
    return La(a) && La(b) ? a.jc !== b.jc ? !1 : a.toString() === b.toString() : a instanceof sn && b instanceof sn ? a.jc != b.jc ? !1 : a.toString() == b.toString() : a == b
}
  , Cn = function(a) {
    return a instanceof sn ? !!a.Ta() : !!a
}
  , Dn = function(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
}
  , S = function(a) {
    zn(a, nn, un) ? (a = a.Ta(),
    a = String(a).replace(En, "").replace(Fn, "&lt;"),
    a = String(a).replace(Gn, Hn)) : a = ee(String(a));
    return a
}
  , In = /['()]/g
  , Jn = function(a) {
    return "%" + a.charCodeAt(0).toString(16)
}
  , Kn = function(a) {
    a = ce(String(a));
    In.lastIndex = 0;
    return In.test(a) ? a.replace(In, Jn) : a
}
  , On = function(a) {
    zn(a, on, vn) || zn(a, pn, wn) ? a = String(a).replace(Ln, Mn) : a instanceof Nc ? a = String(Pc(a)).replace(Ln, Mn) : a instanceof pc ? a = String(rc(a)).replace(Ln, Mn) : (a = String(a),
    Nn.test(a) ? a = a.replace(Ln, Mn) : (Za("Bad value `%s` for |filterNormalizeUri", [a]),
    a = "about:invalid#zSoyz"));
    return a
}
  , Qn = function(a) {
    zn(a, rn, yn) ? a = Dn(a.Ta()) : null == a ? a = "" : a instanceof Xc ? a = Dn(Yc(a)) : a instanceof kd ? a = Dn(nd(a)) : (a = String(a),
    Pn.test(a) || (Za("Bad value `%s` for |filterCssValue", [a]),
    a = "zSoyz"));
    return a
}
  , Rn = function(a, b, c, d) {
    a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c,
    Za("expected param " + b + " of type " + d + (", but got " + a) + "."));
    return c
}
  , Sn = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
}
  , Hn = function(a) {
    return Sn[a]
}
  , Tn = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\x0B": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    $: "\\x24",
    "&": "\\x26",
    "'": "\\x27",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    "/": "\\/",
    ":": "\\x3a",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "?": "\\x3f",
    "[": "\\x5b",
    "\\": "\\\\",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , Un = function(a) {
    return Tn[a]
}
  , Vn = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
}
  , Mn = function(a) {
    return Vn[a]
}
  , Gn = /[\x00\x22\x27\x3c\x3e]/g
  , Wn = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g
  , Ln = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
  , Pn = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i
  , Nn = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
  , Xn = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
  , Yn = function(a) {
    return String(a).replace(Wn, Un)
}
  , En = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
  , Fn = /</g;
var Zn = function(a) {
    var b = a.Zl
      , c = a.Yl
      , d = a.zn
      , e = a.pn
      , f = a.url;
    return P('<div id="' + S(a.id) + '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="' + S(On(f)) + '" target="_blank" class="cp-promo-href"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">' + R(d) + '</div><div class="cp-promo-subtext">' + R(e) + '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">' + R(b) + '</div><div class="cp-promo-link-subtext">' + R(c) + "</div></div></div></a></div></div>")
};
Zn.a = "trans.common.templates.communityPromotion";
var $n = function(a) {
    return P('<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">' + R(a.label) + "</div></div>")
};
$n.a = "trans.common.templates.speechInput";
var ao = function(a) {
    var b = a.Nf
      , c = a.Wl
      , d = a.Xl
      , e = a.gh
      , f = a.Qn;
    return P('<div class="gt-ex-info">' + (a.gn ? '<span class="gt-ex-quote">\x3c!--This SVG renders a quotation mark.--\x3e<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>' : "") + '<div class="gt-ex-top"><div class="gt-ex-text" dir="' + S(a.ln) + '">' + R(b) + '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="' + S(e) + '"></span><br><span class="gt-cd-mt-label">' + R(f) + '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="' + S(On(c)) + '">' + R(d) + "</a></span></div></div>")
};
ao.a = "trans.common.templates.exampleSentence";
var bo = function(a) {
    var b = a.vm;
    a = a.wm;
    return P('<div class="st-stp1">' + (b ? "" : '<div class="st-stp1-text"><div>' + R(a) + "</div></div>") + '<div id="st-buttons"></div>' + (b ? '<div class="st-stp1-epu-text">' + R(a) + "</div>" : "") + "</div>")
};
bo.a = "trans.common.templates.submitTranslation";
var co = function() {
    return P('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>')
};
co.a = "trans.common.templates.cardContainer";
var eo = function() {
    return P('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button" role="button" tabindex="0"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>')
};
eo.a = "trans.common.templates.card";
var fo = function() {
    return P('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>')
};
fo.a = "trans.common.templates.lexiconTitle";
var go = function(a) {
    var b = a.$j
      , c = a.rj
      , d = a.ak
      , e = a.xk
      , f = a.un
      , g = a.rn
      , h = a.gh
      , l = a.Sj;
    a = '<div class="gt-def-info" lang="' + S(a.Ca) + '">' + (c ? '<span class="gt-def-num">' + R(b) + "</span>" : "") + '<div class="gt-def-row">' + R(d) + '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>' + (e ? '<div class="gt-def-example"><q>' + R(e) + '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="' + S(h) + '"></q></div></div>' : "");
    if (0 < g.length) {
        a += '<div class="gt-def-synonym"><span class="gt-def-synonym-title">' + R(f) + ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>';
        f = g.length;
        for (b = 0; b < f; b++)
            for (d = g[b],
            e = d.length,
            h = 0; h < e; h++) {
                var m = d[h];
                var q = c ? "" : h != e - 1 ? ", " : b != f - 1 ? "; " : "";
                a += (l ? c ? '<span class="gt-cd-cl"> ' + R(m) + " </span>" : '<span class="gt-cd-cl">' + R(m) + "</span>" : '<span class="gt-cd-ncl">' + R(m) + "</span>") + q
            }
        a += "</div>"
    }
    return P(a + "</div>")
};
go.a = "trans.common.templates.definitionRow";
var ho = function(a) {
    var b = a.fk
      , c = a.Ck
      , d = a.Dk
      , e = a.Im;
    a = a.Dd;
    return P((a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-pos-head">' + (e ? '<span class="gt-cd-pos">' + R(e) + "</span>" : "") + (b ? '<div class="gt-cd-pos-pop">' + R(c) + '<div class="help-icon-container tlid-frequency-help-icon-container"><div class="help-icon tlid-frequency-help-icon"></div><div class="help-tooltip tlid-frequency-help-tooltip"><p>' + R(d) + "</p></div></div></div>" : "") + "</div>" + (a ? "" : "</div>"))
};
ho.a = "trans.common.templates.partOfSpeechEntryHeading";
var io = function(a) {
    var b = a.Mg
      , c = a.Ge
      , d = a.wn
      , e = a.Dd
      , f = a.Xn;
    a = a.Yn;
    return P((e ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-term-text-parent"' + (d ? ' style="direction: ' + S(Qn(d)) + ';"' : "") + '><span class="gt-baf-term-text' + (b ? " gt-baf-word-selected" : "") + '">' + (c ? '<span class="gt-baf-cell gt-baf-previous-word gt-baf-previous-word-mobile">' + R(c) + "</span>" : "") + '<span class="' + S(a) + '">' + R(f) + "</span></span></div>" + (e ? "" : "</div>"))
};
io.a = "trans.common.templates.termText";
var jo = function(a) {
    var b = a.We
      , c = a.ck
      , d = a.Qf;
    a = a.Dd;
    c = (a ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-translations gt-baf-translations-mobile"' + (c ? ' style="direction: ' + S(Qn(c)) + ';"' : "") + ">";
    for (var e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        c += "<span" + (b ? ' class="' + S(b) + '"' : "") + ">" + R(g) + "</span>" + (f != e - 1 ? ", " : "")
    }
    return P(c + ("</div>" + (a ? "" : "</div>")))
};
jo.a = "trans.common.templates.translationsCell";
var lo = function(a) {
    var b = a.Lb
      , c = a.Dd;
    a = (c ? "" : '<div class="gt-card-expand-wrapper gt-card-collapsed">') + '<div class="gt-baf-cell gt-baf-entry-score" title="' + S(a.vc) + '">';
    for (var d = Math.max(0, Math.ceil(b + 1 - 1)), e = 0; e < d; e++) {
        var f = P(ko({
            className: "filled"
        }));
        a += f
    }
    if (3 > b)
        for (b = Math.max(0, Math.ceil(4 - (b + 1))),
        d = 0; d < b; d++)
            e = P(ko({
                className: "empty"
            })),
            a += e;
    return P(a + ("</div>" + (c ? "" : "</div>")))
};
lo.a = "trans.common.templates.backAndForthViewEntryScore";
var ko = function(a) {
    return P('<div class="' + S(a.className) + ' gt-score-dot"></div>')
};
var mo = null != window.KNOWLEDGE_PANEL
  , no = null != window.MSG_SPEECH_INPUT_TURN_ON
  , oo = null != window.ADD_INFLECTION;
var po = {
    es: {
        en: !0
    },
    fr: {
        en: !0
    },
    it: {
        en: !0
    },
    nl: {
        en: !0
    },
    pt: {
        en: !0
    },
    en: {
        tr: !0
    }
};
function qo(a, b) {
    if ("auto" === a)
        throw Error('detectedSourceLanguage should not be "auto". Did you mean shouldRequestGenderedTranslations()?');
    return !!po[b] && !!po[b][a]
}
;var ro = function(a, b) {
    try {
        return JSON.parse(a)
    } catch (d) {
        var c = Dm.M();
        b.js = a;
        b.error = d.message;
        c.log("jsonParseErr", b);
        throw d;
    }
};
var so = function(a) {
    return function() {
        return a
    }
}
  , to = function(a, b) {
    for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
    }
    return a
}
  , uo = null
  , vo = function(a) {
    if (null !== uo)
        var b = uo;
    else {
        b = so(String.fromCharCode(84));
        var c = so(String.fromCharCode(75));
        b = [b(), b()];
        b[1] = c();
        b = (uo = window[b.join(c())] || "") || ""
    }
    var d = so(String.fromCharCode(116));
    c = so(String.fromCharCode(107));
    d = [d(), d()];
    d[1] = c();
    c = "&" + d.join("") + "=";
    d = b.split(".");
    b = Number(d[0]) || 0;
    for (var e = [], f = 0, g = 0; g < a.length; g++) {
        var h = a.charCodeAt(g);
        128 > h ? e[f++] = h : (2048 > h ? e[f++] = h >> 6 | 192 : (55296 == (h & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (h = 65536 + ((h & 1023) << 10) + (a.charCodeAt(++g) & 1023),
        e[f++] = h >> 18 | 240,
        e[f++] = h >> 12 & 63 | 128) : e[f++] = h >> 12 | 224,
        e[f++] = h >> 6 & 63 | 128),
        e[f++] = h & 63 | 128)
    }
    a = b;
    for (f = 0; f < e.length; f++)
        a += e[f],
        a = to(a, "+-a^+6");
    a = to(a, "+-3^+b+-f");
    a ^= Number(d[1]) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1E6;
    return c + (a.toString() + "." + (a ^ b))
};
var wo = function(a) {
    Al(this, a, 4)
};
w(wo, zl);
var xo = {
    word_postproc: {
        H: 0,
        J: !1
    },
    score: {
        H: 1,
        J: !1
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    }
};
wo.prototype.a = function() {
    return xo
}
;
var yo = function(a) {
    Al(this, a, 2)
};
w(yo, zl);
var zo = {
    begin: {
        H: 0,
        J: !1
    },
    end: {
        H: 1,
        J: !1
    }
};
yo.prototype.a = function() {
    return zo
}
;
var Ao = function(a) {
    Al(this, a, 7)
};
w(Ao, zl);
var Bo = {
    src_phrase: {
        H: 0,
        J: !1
    },
    alternative: {
        H: 2,
        wa: function(a) {
            return Gl(wo, a)
        },
        va: function(a) {
            return Fl(new wo(a))
        },
        J: !0
    },
    srcunicodeoffsets: {
        H: 3,
        wa: function(a) {
            return Gl(yo, a)
        },
        va: function(a) {
            return Fl(new yo(a))
        },
        J: !0
    },
    raw_src_segment: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    }
};
Ao.prototype.a = function() {
    return Bo
}
;
var Co = function(a, b) {
    return new wo(Dl(a, 2, b))
}
  , Do = function(a, b) {
    return new yo(Dl(a, 3, b))
};
var Eo = function(a) {
    Al(this, a, 8)
};
w(Eo, zl);
var Fo = {
    word: {
        H: 0,
        J: !1
    },
    styles: {
        H: 1,
        J: !0
    },
    has_preceding_space: {
        H: 2,
        J: !1
    },
    attach_to_next_token: {
        H: 3,
        J: !1
    },
    confidence: {
        H: 4,
        J: !1
    },
    start_pos: {
        H: 5,
        J: !1
    },
    end_pos: {
        H: 6,
        J: !1
    },
    not_from_first_segment: {
        H: 7,
        J: !1
    }
};
Eo.prototype.a = function() {
    return Fo
}
;
var Go = function(a) {
    Al(this, a, 3)
};
w(Go, zl);
var Ho = {
    gloss: {
        H: 0,
        J: !1
    },
    definition_id: {
        H: 1,
        J: !1
    },
    example: {
        H: 2,
        J: !1
    }
};
Go.prototype.a = function() {
    return Ho
}
;
var Io = function(a) {
    Al(this, a, 3)
};
w(Io, zl);
var Jo = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        wa: function(a) {
            return Gl(Go, a)
        },
        va: function(a) {
            return Fl(new Go(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
Io.prototype.a = function() {
    return Jo
}
;
Io.prototype.b = function() {
    return I(this, 1)
}
;
Io.prototype.c = function(a) {
    return new Go(Dl(this, 1, a))
}
;
var Ko = function(a) {
    Al(this, a, 6)
};
w(Ko, zl);
var Lo = {
    word: {
        H: 0,
        J: !1
    },
    reverse_translation: {
        H: 1,
        J: !0
    },
    synset_id: {
        H: 2,
        J: !0
    },
    score: {
        H: 3,
        J: !1
    },
    previous_word: {
        H: 4,
        J: !1
    },
    gender: {
        H: 5,
        J: !1
    }
};
Ko.prototype.a = function() {
    return Lo
}
;
var Mo = function(a) {
    Al(this, a, 5)
};
w(Mo, zl);
var No = {
    pos: {
        H: 0,
        J: !1
    },
    terms: {
        H: 1,
        J: !0
    },
    entry: {
        H: 2,
        wa: function(a) {
            return Gl(Ko, a)
        },
        va: function(a) {
            return Fl(new Ko(a))
        },
        J: !0
    },
    base_form: {
        H: 3,
        J: !1
    },
    pos_enum: {
        H: 4,
        J: !1
    }
};
Mo.prototype.a = function() {
    return No
}
;
var Oo = function(a, b) {
    return Fh(a, 1, b)
};
Mo.prototype.b = function() {
    return I(this, 2)
}
;
Mo.prototype.c = function(a) {
    return new Ko(Dl(this, 2, a))
}
;
var Po = function(a) {
    Al(this, a, 17)
};
w(Po, zl);
var Qo = {
    animacy: {
        H: 0,
        J: !1
    },
    inflection_aspect: {
        H: 1,
        J: !1
    },
    grammatical_case: {
        H: 2,
        J: !1
    },
    degree: {
        H: 3,
        J: !1
    },
    gender: {
        H: 4,
        J: !1
    },
    mood: {
        H: 5,
        J: !1
    },
    nonfinite_form: {
        H: 6,
        J: !1
    },
    number: {
        H: 7,
        J: !1
    },
    person: {
        H: 8,
        J: !1
    },
    polarity: {
        H: 9,
        J: !1
    },
    referent: {
        H: 10,
        J: !1
    },
    strength: {
        H: 11,
        J: !1
    },
    tense: {
        H: 12,
        J: !1
    },
    imperfect_suffix: {
        H: 13,
        J: !1
    },
    voice: {
        H: 14,
        J: !1
    },
    infinitive_number: {
        H: 15,
        J: !1
    },
    precedes: {
        H: 16,
        J: !1
    }
};
Po.prototype.a = function() {
    return Qo
}
;
var Ro = function(a) {
    Al(this, a, 2)
};
w(Ro, zl);
var So = {
    written_form: {
        H: 0,
        J: !1
    },
    features: {
        H: 1,
        wa: function(a) {
            return Gl(Po, a)
        },
        va: function(a) {
            return Fl(new Po(a))
        },
        J: !1
    }
};
Ro.prototype.a = function() {
    return So
}
;
var To = function(a) {
    Al(this, a, 4)
};
w(To, zl);
var Uo = {
    title: {
        H: 0,
        J: !1
    },
    description: {
        H: 1,
        J: !1
    },
    image_url: {
        H: 2,
        J: !1
    },
    image_ref_url: {
        H: 3,
        J: !1
    }
};
To.prototype.a = function() {
    return Uo
}
;
var Vo = function(a) {
    Al(this, a, 4)
};
w(Vo, zl);
var Wo = {
    srclangs: {
        H: 0,
        J: !0
    },
    extended_srclangs: {
        H: 3,
        J: !0
    },
    detected_target: {
        H: 1,
        J: !1
    },
    srclangs_confidences: {
        H: 2,
        J: !0
    }
};
Vo.prototype.a = function() {
    return Wo
}
;
var Xo = function(a) {
    Al(this, a, 1)
};
w(Xo, zl);
var Yo = {
    word: {
        H: 0,
        J: !0
    }
};
Xo.prototype.a = function() {
    return Yo
}
;
var Zo = function(a) {
    Al(this, a, 6)
};
w(Zo, zl);
var $o = {
    spell_html_res: {
        H: 0,
        J: !1
    },
    spell_res: {
        H: 1,
        J: !1
    },
    correction_type: {
        H: 2,
        J: !0
    },
    correction_translation: {
        H: 3,
        J: !1
    },
    related: {
        H: 4,
        J: !1
    },
    confident: {
        H: 5,
        J: !1
    }
};
Zo.prototype.a = function() {
    return $o
}
;
var ap = function(a) {
    Al(this, a, 2)
};
w(ap, zl);
var bp = {
    synonym: {
        H: 0,
        J: !0
    },
    definition_id: {
        H: 1,
        J: !1
    }
};
ap.prototype.a = function() {
    return bp
}
;
var cp = function(a) {
    Al(this, a, 3)
};
w(cp, zl);
var dp = {
    pos: {
        H: 0,
        J: !1
    },
    entry: {
        H: 1,
        wa: function(a) {
            return Gl(ap, a)
        },
        va: function(a) {
            return Fl(new ap(a))
        },
        J: !0
    },
    base_form: {
        H: 2,
        J: !1
    }
};
cp.prototype.a = function() {
    return dp
}
;
cp.prototype.b = function() {
    return I(this, 1)
}
;
cp.prototype.c = function(a) {
    return new ap(Dl(this, 1, a))
}
;
var ep = function(a) {
    Al(this, a, 6)
};
w(ep, zl);
var fp = {
    text: {
        H: 0,
        J: !1
    },
    source: {
        H: 1,
        J: !1
    },
    link: {
        H: 2,
        J: !1
    },
    translation: {
        H: 3,
        J: !1
    },
    source_type: {
        H: 4,
        J: !1
    },
    definition_id: {
        H: 5,
        J: !1
    }
};
ep.prototype.a = function() {
    return fp
}
;
ep.prototype.rb = function() {
    return J(this, 3)
}
;
var gp = function(a) {
    Al(this, a, 1)
};
w(gp, zl);
var hp = {
    example: {
        H: 0,
        wa: function(a) {
            return Gl(ep, a)
        },
        va: function(a) {
            return Fl(new ep(a))
        },
        J: !0
    }
};
gp.prototype.a = function() {
    return hp
}
;
var ip = function(a) {
    Al(this, a, 19)
};
w(ip, zl);
var jp = {
    sentences: {
        H: 0,
        wa: function(a) {
            return Gl(Vl, a)
        },
        va: function(a) {
            return Fl(new Vl(a))
        },
        J: !0
    },
    dict: {
        H: 1,
        wa: function(a) {
            return Gl(Mo, a)
        },
        va: function(a) {
            return Fl(new Mo(a))
        },
        J: !0
    },
    src: {
        H: 2,
        J: !1
    },
    err: {
        H: 3,
        J: !1
    },
    styled_words: {
        H: 4,
        wa: function(a) {
            return Gl(Eo, a)
        },
        va: function(a) {
            return Fl(new Eo(a))
        },
        J: !0
    },
    alternative_translations: {
        H: 5,
        wa: function(a) {
            return Gl(Ao, a)
        },
        va: function(a) {
            return Fl(new Ao(a))
        },
        J: !0
    },
    confidence: {
        H: 6,
        J: !1
    },
    spell: {
        H: 7,
        wa: function(a) {
            return Gl(Zo, a)
        },
        va: function(a) {
            return Fl(new Zo(a))
        },
        J: !1
    },
    autocorrection: {
        H: 10,
        J: !1
    },
    ld_result: {
        H: 8,
        wa: function(a) {
            return Gl(Vo, a)
        },
        va: function(a) {
            return Fl(new Vo(a))
        },
        J: !1
    },
    server_time: {
        H: 9,
        J: !1
    },
    synsets: {
        H: 11,
        wa: function(a) {
            return Gl(cp, a)
        },
        va: function(a) {
            return Fl(new cp(a))
        },
        J: !0
    },
    definitions: {
        H: 12,
        wa: function(a) {
            return Gl(Io, a)
        },
        va: function(a) {
            return Fl(new Io(a))
        },
        J: !0
    },
    examples: {
        H: 13,
        wa: function(a) {
            return Gl(gp, a)
        },
        va: function(a) {
            return Fl(new gp(a))
        },
        J: !1
    },
    related_words: {
        H: 14,
        wa: function(a) {
            return Gl(Xo, a)
        },
        va: function(a) {
            return Fl(new Xo(a))
        },
        J: !1
    },
    knowledge_results: {
        H: 15,
        wa: function(a) {
            return Gl(To, a)
        },
        va: function(a) {
            return Fl(new To(a))
        },
        J: !0
    },
    query_inflections: {
        H: 16,
        wa: function(a) {
            return Gl(Ro, a)
        },
        va: function(a) {
            return Fl(new Ro(a))
        },
        J: !0
    },
    target_inflections: {
        H: 17,
        wa: function(a) {
            return Gl(Ro, a)
        },
        va: function(a) {
            return Fl(new Ro(a))
        },
        J: !0
    },
    gendered_translation_result: {
        H: 18,
        wa: function(a) {
            return Gl(Zl, a)
        },
        va: function(a) {
            return Fl(new Zl(a))
        },
        J: !1
    }
};
ip.prototype.a = function() {
    return jp
}
;
var kp = function(a) {
    return new Zo(a.Ra[7])
}
  , lp = function(a) {
    return new Xo(a.Ra[14])
};
ip.prototype.cc = function() {
    return I(this, 0)
}
;
ip.prototype.$a = function(a) {
    return new Vl(Dl(this, 0, a))
}
;
var Ch = function(a, b) {
    return new Mo(Dl(a, 1, b))
}
  , mp = function(a, b) {
    return new Ao(Dl(a, 5, b))
};
var np = function(a, b) {
    this.b = a;
    this.a = "";
    b && (this.a = b);
    this.c = 0;
    this.F = M.M()
}
  , op = function(a) {
    a = a.Rb("q").join("");
    return vo(a)
}
  , pp = function(a, b, c, d, e, f) {
    c = c.toString();
    c += op(d);
    d = d.toString();
    var g = "POST";
    b += "?" + c;
    2E3 > b.length + d.length && (g = "GET",
    b += "&" + d,
    d = "");
    ++a.c;
    return Oj(b, function(h) {
        --a.c;
        e(h)
    }, g, d, void 0, f)
}
  , qp = function(a, b, c, d, e, f, g, h, l) {
    var m = a.a + "/translate_a/t"
      , q = new Xm
      , r = new Xm;
    q.set("client", a.b);
    q.set("sl", b);
    q.set("tl", c);
    q.set("hl", d);
    q.set("v", "1.0");
    null != g && q.set("source", g);
    h && q.g(h);
    (b = !Ja(e) || Ja(e) && 1 == e.length) ? r.set("q", e) : en(r, "q", e);
    e = v(a.h, a, b, f);
    return pp(a, m, q, r, e, l)
}
  , rp = function(a, b, c, d) {
    var e = new Xm
      , f = new Xm;
    e.set("client", a.b);
    e.set("sl", c);
    c = a.a + "/translate_a/single";
    e.set("dt", "rm");
    f.set("q", b);
    pp(a, c, e, f, v(a.o, a, d), void 0)
}
  , sp = function(a, b, c, d, e, f, g, h, l, m, q) {
    var r = a.a + "/translate_a/single"
      , u = new Xm
      , y = new Xm;
    u.set("client", a.b);
    u.set("sl", b);
    u.set("tl", c);
    u.set("hl", d);
    en(u, "dt", f);
    null != h && (u.set("ie", h),
    u.set("oe", h));
    m && u.set("dj", "1");
    l && u.g(l);
    y.set("q", e);
    pp(a, r, u, y, v(a.g, a, g, q), void 0)
}
  , tp = function(a, b, c, d, e, f, g, h, l, m) {
    var q = "at bd ex ld md qc rw rm ss t".split(" ");
    g && (q = "at bd ex ld md qca rw rm ss t".split(" "));
    mo && q.push("kr");
    oo && po[c] && (po[c][b] || "auto" === b) && q.push("gt");
    sp(a, b, c, d, e, q, f, h, l, void 0, m)
};
np.prototype.o = function(a, b) {
    b = b.target;
    up(b) && (b = vp(b, "handleTransliterationResult_"),
    b = new ip(b),
    0 < b.cc() && a(J(b.$a(0), 3)))
}
;
np.prototype.g = function(a, b, c) {
    c = c.target;
    up(c) ? (b = vp(c, "handleSingleResult_"),
    Ja(b) && (b = new ip(b)),
    a(b)) : (wp(this, c),
    b && b(c.Mc()))
}
;
np.prototype.h = function(a, b, c) {
    c = c.target;
    if (Yj(c)) {
        c = vp(c, "handleTextResult_");
        var d = [];
        if (a)
            d.push(Ja(c) ? c[0] : c);
        else if (Ja(c))
            for (a = 0; a < c.length; ++a)
                d.push(Ja(c[a]) ? c[a][0] : c[a]);
        b(d)
    } else
        wp(this, c),
        b(null, c.xd)
}
;
var vp = function(a, b) {
    return ro(Zj(a), {
        "class": "trans.common.TranslationAPI",
        func: b,
        url: String(a.Sd)
    })
}
  , up = function(a) {
    return Yj(a) && ("[" == Zj(a)[0] || "{" == Zj(a)[0])
}
  , xp = {}
  , yp = (xp[1] = 15,
xp[2] = 16,
xp[3] = 17,
xp[4] = 18,
xp[5] = 19,
xp[6] = 20,
xp[7] = 21,
xp[8] = 22,
xp[9] = 23,
xp)
  , wp = function(a, b) {
    var c = b.xd;
    jm(a.F, 156, c in yp ? yp[c] : 0);
    a = Dm.M();
    c = String(b.Sd);
    b = Zj(b);
    a.log("invalidResponse", {
        q: c.substring(0, 500),
        ql: c.length,
        r: b.substring(0, 500),
        rl: b.length
    })
};
np.prototype.m = function() {
    return this.c
}
;
var zp, Ap = {
    bo: "activedescendant",
    mo: "atomic",
    oo: "autocomplete",
    qo: "busy",
    xo: "checked",
    zo: "colindex",
    Eo: "controls",
    Go: "describedby",
    Jo: "disabled",
    Lo: "dropeffect",
    Mo: "expanded",
    No: "flowto",
    Po: "grabbed",
    To: "haspopup",
    Vo: "hidden",
    Xo: "invalid",
    Yo: "label",
    Zo: "labelledby",
    $o: "level",
    fp: "live",
    vp: "multiline",
    wp: "multiselectable",
    Ap: "orientation",
    Bp: "owns",
    Cp: "posinset",
    Ep: "pressed",
    Ip: "readonly",
    Kp: "relevant",
    Lp: "required",
    Pp: "rowindex",
    Sp: "selected",
    Vp: "setsize",
    SORT: "sort",
    kq: "valuemax",
    lq: "valuemin",
    mq: "valuenow",
    nq: "valuetext"
};
var Bp = {
    fo: "alert",
    ho: "alertdialog",
    io: "application",
    jo: "article",
    po: "banner",
    uo: "button",
    vo: "checkbox",
    Ao: "columnheader",
    Bo: "combobox",
    Co: "complementary",
    Do: "contentinfo",
    Fo: "definition",
    Ho: "dialog",
    Io: "directory",
    Ko: "document",
    Oo: "form",
    Qo: "grid",
    Ro: "gridcell",
    So: "group",
    Uo: "heading",
    Wo: "img",
    ap: "link",
    bp: "list",
    cp: "listbox",
    ep: "listitem",
    gp: "log",
    hp: "main",
    ip: "marquee",
    jp: "math",
    kp: "menu",
    lp: "menubar",
    mp: "menuitem",
    np: "menuitemcheckbox",
    pp: "menuitemradio",
    xp: "navigation",
    yp: "note",
    zp: "option",
    Dp: "presentation",
    Fp: "progressbar",
    Gp: "radio",
    Hp: "radiogroup",
    Jp: "region",
    Mp: "row",
    Np: "rowgroup",
    Op: "rowheader",
    Qp: "scrollbar",
    Rp: "search",
    Tp: "separator",
    Wp: "slider",
    Xp: "spinbutton",
    Yp: "status",
    Zp: "tab",
    $p: "tablist",
    aq: "tabpanel",
    bq: "textbox",
    cq: "textinfo",
    eq: "timer",
    fq: "toolbar",
    gq: "tooltip",
    hq: "tree",
    iq: "treegrid",
    jq: "treeitem"
};
Zb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var Cp = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" ")
  , Dp = function(a, b) {
    b ? (x(Rb(Bp, b), "No such ARIA role " + b),
    a.setAttribute("role", b)) : a.removeAttribute("role")
}
  , Fp = function(a, b, c) {
    Ja(c) && (c = c.join(" "));
    var d = Ep(b);
    "" === c || void 0 == c ? (zp || (zp = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }),
    c = zp,
    b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
  , Gp = function(a, b) {
    a = a.getAttribute(Ep(b));
    return null == a || void 0 == a ? "" : String(a)
}
  , Hp = function(a) {
    var b = Gp(a, "activedescendant");
    return Hf(a).getElementById(b)
}
  , Ip = function(a, b) {
    var c = "";
    b && (c = b.id,
    x(c, "The active element should have an id."));
    Fp(a, "activedescendant", c)
}
  , Jp = function(a, b) {
    Fp(a, "label", b)
}
  , Ep = function(a) {
    x(a, "ARIA attribute cannot be empty.");
    x(Rb(Ap, a), "No such ARIA attribute " + a);
    return "aria-" + a
};
var Kp = function(a) {
    if (a.classList)
        return a.classList;
    a = a.className;
    return t(a) && a.match(/\S+/g) || []
}
  , Lp = function(a, b) {
    return a.classList ? a.classList.contains(b) : sb(Kp(a), b)
}
  , T = function(a, b) {
    a.classList ? a.classList.add(b) : Lp(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}
  , Mp = function(a, b) {
    if (a.classList)
        z(b, function(e) {
            T(a, e)
        });
    else {
        var c = {};
        z(Kp(a), function(e) {
            c[e] = !0
        });
        z(b, function(e) {
            c[e] = !0
        });
        a.className = "";
        for (var d in c)
            a.className += 0 < a.className.length ? " " + d : d
    }
}
  , U = function(a, b) {
    a.classList ? a.classList.remove(b) : Lp(a, b) && (a.className = kb(Kp(a), function(c) {
        return c != b
    }).join(" "))
}
  , Np = function(a, b) {
    a.classList ? z(b, function(c) {
        U(a, c)
    }) : a.className = kb(Kp(a), function(c) {
        return !sb(b, c)
    }).join(" ")
}
  , V = function(a, b, c) {
    c ? T(a, b) : U(a, b)
};
var Rp = function(a, b) {
    x(a, "Soy template may not be null.");
    var c = If();
    a = a(b || Op, void 0, void 0);
    a = Pp(a);
    Qp(a.sb());
    return $f(c.a, a)
}
  , Sp = function(a, b, c, d) {
    x(a, "Soy template may not be null.");
    a = a(b || Op, void 0, c);
    d = Fg(d || If(), "DIV");
    a = Pp(a);
    Qp(a.sb());
    Td(d, a);
    1 == d.childNodes.length && (a = d.firstChild,
    1 == a.nodeType && (d = a));
    return d
}
  , Pp = function(a) {
    if (!Ma(a))
        return Dd(String(a));
    if (a instanceof sn)
        return tn(a);
    Za("Soy template output is unsafe for use as HTML: " + a);
    return Dd("zSoyz")
}
  , Qp = function(a) {
    var b = a.match(Tp);
    x(!b, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", b && b[0], a)
}
  , Tp = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
  , Op = {};
var Up = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
k = Up.prototype;
k.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
}
;
k.contains = function(a) {
    return this && a ? a instanceof Up ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.a >= this.top && a.a <= this.bottom : !1
}
;
k.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
}
;
k.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
}
;
k.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
}
;
var Vp = function(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
  , Wp = function(a) {
    return new Up(a.top,a.left + a.width,a.top + a.height,a.left)
};
k = Vp.prototype;
k.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
}
;
k.contains = function(a) {
    return a instanceof Df ? a.x >= this.left && a.x <= this.left + this.width && a.a >= this.top && a.a <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
}
;
k.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
}
;
k.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
}
;
k.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
}
;
var Yp = function(a, b, c) {
    if (t(b))
        (b = Xp(a, b)) && (a.style[b] = c);
    else
        for (var d in b) {
            c = a;
            var e = b[d]
              , f = Xp(c, d);
            f && (c.style[f] = e)
        }
}
  , Zp = {}
  , Xp = function(a, b) {
    var c = Zp[b];
    if (!c) {
        var d = oe(b);
        c = d;
        void 0 === a.style[d] && (d = (Ae ? "Webkit" : ze ? "Moz" : B ? "ms" : we ? "O" : null) + pe(d),
        void 0 !== a.style[d] && (c = d));
        Zp[b] = c
    }
    return c
}
  , $p = function(a, b) {
    var c = Hf(a);
    return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
}
  , aq = function(a, b) {
    return $p(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
  , cq = function(a, b, c) {
    if (b instanceof Df) {
        var d = b.x;
        b = b.a
    } else
        d = b,
        b = c;
    a.style.left = bq(d, !1);
    a.style.top = bq(b, !1)
}
  , dq = function(a) {
    a = a ? Hf(a) : document;
    return !B || Te(9) || Qf(If(a).a) ? a.documentElement : a.body
}
  , eq = function(a) {
    var b = a.body;
    a = a.documentElement;
    return new Df(b.scrollLeft || a.scrollLeft,b.scrollTop || a.scrollTop)
}
  , fq = function(a) {
    try {
        var b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    B && a.ownerDocument.body && (a = a.ownerDocument,
    b.left -= a.documentElement.clientLeft + a.body.clientLeft,
    b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
  , gq = function(a) {
    if (B && !Te(8))
        return x(a && "offsetParent"in a),
        a.offsetParent;
    var b = Hf(a)
      , c = aq(a, "position")
      , d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (11 == a.nodeType && a.host && (a = a.host),
        c = aq(a, "position"),
        d = d && "static" == c && a != b.documentElement && a != b.body,
        !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}
  , iq = function(a) {
    for (var b = new Up(0,Infinity,Infinity,0), c = If(a), d = c.a.body, e = c.a.documentElement, f = Sf(c.a); a = gq(a); )
        if (!(B && 0 == a.clientWidth || Ae && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != aq(a, "overflow")) {
            var g = hq(a)
              , h = new Df(a.clientLeft,a.clientTop);
            g.x += h.x;
            g.a += h.a;
            b.top = Math.max(b.top, g.a);
            b.right = Math.min(b.right, g.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, g.a + a.clientHeight);
            b.left = Math.max(b.left, g.x)
        }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = Rf(Gg(c) || window);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}
  , lq = function(a, b) {
    b = b || Sf(document);
    var c = b || Sf(document);
    var d = hq(a)
      , e = hq(c)
      , f = jq(c);
    if (c == Sf(document)) {
        var g = d.x - c.scrollLeft;
        d = d.a - c.scrollTop;
        B && !Te(10) && (g += f.left,
        d += f.top)
    } else
        g = d.x - e.x - f.left,
        d = d.a - e.a - f.top;
    a = kq(a);
    f = c.clientHeight - a.height;
    e = c.scrollLeft;
    var h = c.scrollTop;
    e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
    h += Math.min(d, Math.max(d - f, 0));
    c = new Df(e,h);
    b.scrollLeft = c.x;
    b.scrollTop = c.a
}
  , hq = function(a) {
    var b = Hf(a);
    cb(a, "Parameter is required");
    var c = new Df(0,0)
      , d = dq(b);
    if (a == d)
        return c;
    a = fq(a);
    b = Tf(If(b).a);
    c.x = a.left + b.x;
    c.a = a.top + b.a;
    return c
}
  , nq = function(a, b) {
    a = mq(a);
    b = mq(b);
    return new Df(a.x - b.x,a.a - b.a)
}
  , oq = function(a) {
    a = fq(a);
    return new Df(a.left,a.top)
}
  , mq = function(a) {
    x(a);
    if (1 == a.nodeType)
        return oq(a);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new Df(a.clientX,a.clientY)
}
  , pq = function(a, b, c) {
    if (b instanceof Ff)
        c = b.height,
        b = b.width;
    else if (void 0 == c)
        throw Error("missing height argument");
    a.style.width = bq(b, !0);
    a.style.height = bq(c, !0)
}
  , bq = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
  , qq = function(a) {
    var b = kq;
    if ("none" != aq(a, "display"))
        return b(a);
    var c = a.style
      , d = c.display
      , e = c.visibility
      , f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}
  , kq = function(a) {
    var b = a.offsetWidth
      , c = a.offsetHeight
      , d = Ae && !b && !c;
    return p(b) && !d || !a.getBoundingClientRect ? new Ff(b,c) : (a = fq(a),
    new Ff(a.right - a.left,a.bottom - a.top))
}
  , rq = function(a) {
    var b = hq(a);
    a = qq(a);
    return new Vp(b.x,b.a,a.width,a.height)
}
  , sq = function(a, b) {
    x(a);
    a = a.style;
    "opacity"in a ? a.opacity = b : "MozOpacity"in a ? a.MozOpacity = b : "filter"in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
}
  , W = function(a, b) {
    a.style.display = b ? "" : "none"
}
  , tq = function(a) {
    return "none" != a.style.display
}
  , vq = function(a) {
    var b = If(void 0)
      , c = b.a;
    if (B && c.createStyleSheet)
        return b = c.createStyleSheet(),
        uq(b, a),
        b;
    c = Lf(b.a, "HEAD", void 0, void 0)[0];
    if (!c) {
        var d = Lf(b.a, "BODY", void 0, void 0)[0];
        c = b.b("HEAD");
        d.parentNode.insertBefore(c, d)
    }
    d = b.b("STYLE");
    uq(d, a);
    b.appendChild(c, d);
    return d
}
  , uq = function(a, b) {
    b = nd(b);
    B && p(a.cssText) ? a.cssText = b : a.innerHTML = b
}
  , wq = function(a) {
    return "rtl" == aq(a, "direction")
}
  , xq = ze ? "MozUserSelect" : Ae || xe ? "WebkitUserSelect" : null
  , yq = function(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (xq) {
        if (b = b ? "none" : "",
        a.style && (a.style[xq] = b),
        c) {
            a = 0;
            for (var d; d = c[a]; a++)
                d.style && (d.style[xq] = b)
        }
    } else if (B || we)
        if (b = b ? "on" : "",
        a.setAttribute("unselectable", b),
        c)
            for (a = 0; d = c[a]; a++)
                d.setAttribute("unselectable", b)
}
  , zq = function(a, b, c) {
    a = a.style;
    ze ? a.MozBoxSizing = c : Ae ? a.WebkitBoxSizing = c : a.boxSizing = c;
    a.width = Math.max(b.width, 0) + "px";
    a.height = Math.max(b.height, 0) + "px"
}
  , Aq = function(a, b, c, d) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var e = a.style[c]
      , f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return +b
}
  , Bq = function(a, b) {
    return (b = a.currentStyle ? a.currentStyle[b] : null) ? Aq(a, b, "left", "pixelLeft") : 0
}
  , Cq = function(a, b) {
    if (B) {
        var c = Bq(a, b + "Left")
          , d = Bq(a, b + "Right")
          , e = Bq(a, b + "Top");
        a = Bq(a, b + "Bottom");
        return new Up(e,d,a,c)
    }
    c = $p(a, b + "Left");
    d = $p(a, b + "Right");
    e = $p(a, b + "Top");
    a = $p(a, b + "Bottom");
    return new Up(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
}
  , Dq = function(a) {
    return Cq(a, "padding")
}
  , Eq = {
    thin: 2,
    medium: 4,
    thick: 6
}
  , Fq = function(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return b in Eq ? Eq[b] : Aq(a, b, "left", "pixelLeft")
}
  , jq = function(a) {
    if (B && !Te(9)) {
        var b = Fq(a, "borderLeft")
          , c = Fq(a, "borderRight")
          , d = Fq(a, "borderTop");
        a = Fq(a, "borderBottom");
        return new Up(d,c,a,b)
    }
    b = $p(a, "borderLeftWidth");
    c = $p(a, "borderRightWidth");
    d = $p(a, "borderTopWidth");
    a = $p(a, "borderBottomWidth");
    return new Up(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))
};
var Gq = function(a) {
    Hg.call(this);
    this.m = a;
    this.c = {}
};
w(Gq, Hg);
var Hq = [];
Gq.prototype.O = function(a, b, c, d) {
    return Iq(this, a, b, c, d)
}
;
var Jq = function(a, b, c, d) {
    Iq(a, b, "click", c, !1, d)
}
  , Iq = function(a, b, c, d, e, f) {
    Ja(c) || (c && (Hq[0] = c.toString()),
    c = Hq);
    for (var g = 0; g < c.length; g++) {
        var h = H(b, c[g], d || a.handleEvent, e || !1, f || a.m || a);
        if (!h)
            break;
        a.c[h.key] = h
    }
    return a
};
Gq.prototype.Pg = function(a, b, c, d) {
    return Kq(this, a, b, c, d)
}
;
var Kq = function(a, b, c, d, e, f) {
    if (Ja(c))
        for (var g = 0; g < c.length; g++)
            Kq(a, b, c[g], d, e, f);
    else {
        b = gh(b, c, d || a.handleEvent, e, f || a.m || a);
        if (!b)
            return a;
        a.c[b.key] = b
    }
    return a
};
Gq.prototype.Ha = function(a, b, c, d, e) {
    if (Ja(b))
        for (var f = 0; f < b.length; f++)
            this.Ha(a, b[f], c, d, e);
    else
        c = c || this.handleEvent,
        d = Ma(d) ? !!d.capture : !!d,
        e = e || this.m || this,
        c = hh(c),
        d = !!d,
        b = Xg(a) ? a.ue(b, c, d, e) : a ? (a = jh(a)) ? a.ue(b, c, d, e) : null : null,
        b && (oh(b),
        delete this.c[b.key]);
    return this
}
;
var Lq = function(a) {
    Mb(a.c, function(b, c) {
        this.c.hasOwnProperty(c) && oh(b)
    }, a);
    a.c = {}
};
Gq.prototype.W = function() {
    Gq.D.W.call(this);
    Lq(this)
}
;
Gq.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
}
;
var Mq = function() {};
Ga(Mq);
Mq.prototype.a = 0;
var X = function(a) {
    K.call(this);
    this.a = a || If();
    this.Na = Nq;
    this.ra = null;
    this.Aa = !1;
    this.v = null;
    this.R = void 0;
    this.L = this.o = this.G = this.ma = null;
    this.nb = !1
};
w(X, K);
X.prototype.Ed = Mq.M();
var Nq = null
  , Oq = function(a, b) {
    switch (a) {
    case 1:
        return b ? "disable" : "enable";
    case 2:
        return b ? "highlight" : "unhighlight";
    case 4:
        return b ? "activate" : "deactivate";
    case 8:
        return b ? "select" : "unselect";
    case 16:
        return b ? "check" : "uncheck";
    case 32:
        return b ? "focus" : "blur";
    case 64:
        return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}
  , Pq = function(a) {
    return a.ra || (a.ra = ":" + (a.Ed.a++).toString(36))
}
  , Qq = function(a, b) {
    if (a.G && a.G.L) {
        var c = a.G.L
          , d = a.ra;
        d in c && delete c[d];
        Ub(a.G.L, b, a)
    }
    a.ra = b
};
X.prototype.j = function() {
    return this.v
}
;
var Rq = function(a) {
    a = a.v;
    x(a, "Can not call getElementStrict before rendering/decorating.");
    return a
};
X.prototype.qd = function(a) {
    return this.v ? this.a.qd(a, this.v) : null
}
;
var Y = function(a) {
    a.R || (a.R = new Gq(a));
    return x(a.R)
}
  , Tq = function(a, b) {
    if (a == b)
        throw Error("Unable to set parent component");
    if (b && a.G && a.ra && Sq(a.G, a.ra) && a.G != b)
        throw Error("Unable to set parent component");
    a.G = b;
    X.D.Bd.call(a, b)
};
X.prototype.getParent = function() {
    return this.G
}
;
X.prototype.Bd = function(a) {
    if (this.G && this.G != a)
        throw Error("Method not supported");
    X.D.Bd.call(this, a)
}
;
X.prototype.Ka = function() {
    this.v = Fg(this.a, "DIV")
}
;
X.prototype.Ua = function(a) {
    Uq(this, a)
}
;
var Uq = function(a, b, c) {
    if (a.Aa)
        throw Error("Component already rendered");
    a.v || a.Ka();
    b ? b.insertBefore(a.v, c || null) : a.a.a.body.appendChild(a.v);
    a.G && !a.G.Aa || a.ea()
};
k = X.prototype;
k.ia = function(a) {
    if (this.Aa)
        throw Error("Component already rendered");
    if (a && this.Rc(a)) {
        this.nb = !0;
        var b = Hf(a);
        this.a && this.a.a == b || (this.a = If(a));
        this.Da(a);
        this.ea()
    } else
        throw Error("Invalid element to decorate");
}
;
k.Rc = function() {
    return !0
}
;
k.Da = function(a) {
    this.v = a
}
;
k.ea = function() {
    this.Aa = !0;
    Vq(this, function(a) {
        !a.Aa && a.j() && a.ea()
    })
}
;
k.mb = function() {
    Vq(this, function(a) {
        a.Aa && a.mb()
    });
    this.R && Lq(this.R);
    this.Aa = !1
}
;
k.W = function() {
    this.Aa && this.mb();
    this.R && (this.R.Ja(),
    delete this.R);
    Vq(this, function(a) {
        a.Ja()
    });
    !this.nb && this.v && hg(this.v);
    this.G = this.ma = this.v = this.L = this.o = null;
    X.D.W.call(this)
}
;
k.gb = function(a, b) {
    this.ld(a, Wq(this), b)
}
;
k.ld = function(a, b, c) {
    x(!!a, "Provided element must not be null.");
    if (a.Aa && (c || !this.Aa))
        throw Error("Component already rendered");
    if (0 > b || b > Wq(this))
        throw Error("Child component index out of bounds");
    this.L && this.o || (this.L = {},
    this.o = []);
    if (a.getParent() == this) {
        var d = Pq(a);
        this.L[d] = a;
        vb(this.o, a)
    } else
        Ub(this.L, Pq(a), a);
    Tq(a, this);
    Bb(this.o, b, 0, a);
    a.Aa && this.Aa && a.getParent() == this ? (c = this.$b(),
    b = c.childNodes[b] || null,
    b != a.j() && c.insertBefore(a.j(), b)) : c ? (this.v || this.Ka(),
    b = Xq(this, b + 1),
    Uq(a, this.$b(), b ? b.v : null)) : this.Aa && !a.Aa && a.v && a.v.parentNode && 1 == a.v.parentNode.nodeType && a.ea()
}
;
k.$b = function() {
    return this.v
}
;
var Yq = function(a) {
    null == a.Na && (a.Na = wq(a.Aa ? a.v : a.a.a.body));
    return a.Na
}
  , Wq = function(a) {
    return a.o ? a.o.length : 0
}
  , Sq = function(a, b) {
    a.L && b ? (a = a.L,
    b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
    return b
}
  , Xq = function(a, b) {
    return a.o ? a.o[b] || null : null
}
  , Vq = function(a, b, c) {
    a.o && z(a.o, b, c)
}
  , Zq = function(a, b) {
    return a.o && b ? jb(a.o, b) : -1
};
X.prototype.removeChild = function(a, b) {
    if (a) {
        var c = t(a) ? a : Pq(a);
        a = Sq(this, c);
        if (c && a) {
            var d = this.L;
            c in d && delete d[c];
            vb(this.o, a);
            b && (a.mb(),
            a.v && hg(a.v));
            Tq(a, null)
        }
    }
    if (!a)
        throw Error("Child is not in parent component");
    return a
}
;
var ar = function(a, b) {
    K.call(this);
    a && $q(this, a, b)
};
w(ar, K);
k = ar.prototype;
k.v = null;
k.Hf = null;
k.Ng = null;
k.If = null;
k.Db = -1;
k.qc = -1;
k.vg = !1;
var br = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}
  , cr = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}
  , dr = !Ae || Re("525")
  , er = De && ze;
ar.prototype.a = function(a) {
    if (Ae || xe)
        if (17 == this.Db && !a.ctrlKey || 18 == this.Db && !a.altKey || De && 91 == this.Db && !a.metaKey)
            this.qc = this.Db = -1;
    -1 == this.Db && (a.ctrlKey && 17 != a.keyCode ? this.Db = 17 : a.altKey && 18 != a.keyCode ? this.Db = 18 : a.metaKey && 91 != a.keyCode && (this.Db = 91));
    dr && !xh(a.keyCode, this.Db, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.qc = wh(a.keyCode),
    er && (this.vg = a.altKey))
}
;
ar.prototype.b = function(a) {
    this.qc = this.Db = -1;
    this.vg = a.altKey
}
;
ar.prototype.handleEvent = function(a) {
    var b = a.b
      , c = b.altKey;
    if (B && "keypress" == a.type) {
        var d = this.qc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
    } else
        (Ae || xe) && "keypress" == a.type ? (d = this.qc,
        e = 0 <= b.charCode && 63232 > b.charCode && uh(d) ? b.charCode : 0) : we && !Ae ? (d = this.qc,
        e = uh(d) ? b.keyCode : 0) : ("keypress" == a.type ? (er && (c = this.vg),
        b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode,
        e = 0) : (d = this.qc,
        e = b.charCode) : (d = b.keyCode || this.qc,
        e = b.charCode || 0)) : (d = b.keyCode || this.qc,
        e = b.charCode || 0),
        De && 63 == e && 224 == d && (d = 191));
    var f = d = wh(d);
    d ? 63232 <= d && d in br ? f = br[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in cr && (f = cr[b.keyIdentifier]);
    ze && dr && "keypress" == a.type && !xh(f, this.Db, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.Db,
    this.Db = f,
    b = new fr(f,e,a,b),
    b.altKey = c,
    this.dispatchEvent(b))
}
;
ar.prototype.j = function() {
    return this.v
}
;
var $q = function(a, b, c) {
    a.If && gr(a);
    a.v = b;
    a.Hf = H(a.v, "keypress", a, c);
    a.Ng = H(a.v, "keydown", a.a, c, a);
    a.If = H(a.v, "keyup", a.b, c, a)
}
  , gr = function(a) {
    a.Hf && (oh(a.Hf),
    oh(a.Ng),
    oh(a.If),
    a.Hf = null,
    a.Ng = null,
    a.If = null);
    a.v = null;
    a.Db = -1;
    a.qc = -1
};
ar.prototype.W = function() {
    ar.D.W.call(this);
    gr(this)
}
;
var fr = function(a, b, c, d) {
    Tg.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
};
w(fr, Tg);
var hr = function() {}, ir;
Ga(hr);
var jr = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
hr.prototype.Vc = function() {}
;
hr.prototype.tb = function(a) {
    return a.a.b("DIV", kr(this, a).join(" "), a.Ta())
}
;
hr.prototype.Ub = function(a) {
    return a
}
;
var mr = function(a, b, c) {
    if (a = a.j ? a.j() : a) {
        var d = [b];
        B && !Re("7") && (d = lr(Kp(a), b),
        d.push(b));
        (c ? Mp : Np)(a, d)
    }
};
hr.prototype.Uc = function() {
    return !0
}
;
hr.prototype.Xa = function(a, b) {
    b.id && Qq(a, b.id);
    var c = this.Ub(b);
    c && c.firstChild ? nr(a, c.firstChild.nextSibling ? yb(c.childNodes) : c.firstChild) : a.Wc = null;
    var d = 0
      , e = this.xa()
      , f = this.xa()
      , g = !1
      , h = !1
      , l = !1
      , m = yb(Kp(b));
    z(m, function(r) {
        g || r != e ? h || r != f ? d |= this.g(r) : h = !0 : (g = !0,
        f == e && (h = !0));
        1 == this.g(r) && (fb(c),
        xg(c) && yg(c) && vg(c, !1))
    }, this);
    a.Xc = d;
    g || (m.push(e),
    f == e && (h = !0));
    h || m.push(f);
    (a = a.Xb) && m.push.apply(m, a);
    if (B && !Re("7")) {
        var q = lr(m);
        0 < q.length && (m.push.apply(m, q),
        l = !0)
    }
    if (!g || !h || a || l)
        b.className = m.join(" ");
    return b
}
;
hr.prototype.Vh = function(a) {
    Yq(a) && this.zg(a.j(), !0);
    a.isEnabled() && this.Ld(a, a.isVisible())
}
;
var or = function(a, b, c) {
    if (a = c || a.Vc())
        x(b, "The element passed as a first parameter cannot be null."),
        c = b.getAttribute("role") || null,
        a != c && Dp(b, a)
}
  , qr = function(a, b, c) {
    x(b);
    x(c);
    var d = b.Ya;
    null != d && Jp(c, d);
    b.isVisible() || Fp(c, "hidden", !b.isVisible());
    b.isEnabled() || a.fc(c, 1, !b.isEnabled());
    pr(b, 8) && a.fc(c, 8, b.Mg());
    pr(b, 16) && a.fc(c, 16, b.Ea(16));
    pr(b, 64) && a.fc(c, 64, b.Ea(64))
};
k = hr.prototype;
k.qf = function(a, b) {
    yq(a, !b, !B && !we)
}
;
k.zg = function(a, b) {
    mr(a, this.xa() + "-rtl", b)
}
;
k.yg = function(a) {
    var b;
    return pr(a, 32) && (b = a.j()) ? xg(b) && yg(b) : !1
}
;
k.Ld = function(a, b) {
    var c;
    if (pr(a, 32) && (c = a.j())) {
        if (!b && a.Ea(32)) {
            try {
                c.blur()
            } catch (d) {}
            a.Ea(32) && a.rf(null)
        }
        (xg(c) && yg(c)) != b && vg(c, b)
    }
}
;
k.setVisible = function(a, b) {
    W(a, b);
    a && Fp(a, "hidden", !b)
}
;
k.ud = function(a, b, c) {
    var d = a.j();
    if (d) {
        var e = this.a(b);
        e && mr(a, e, c);
        this.fc(d, b, c)
    }
}
;
k.fc = function(a, b, c) {
    ir || (ir = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    x(a, "The element passed as a first parameter cannot be null.");
    b = ir[b];
    var d = a.getAttribute("role") || null;
    d && (d = jr[d] || b,
    b = "checked" == b || "selected" == b ? d : b);
    b && Fp(a, b, c)
}
;
k.ac = function(a, b) {
    var c = this.Ub(a);
    c && (dg(c),
    b && (t(b) ? G(c, b) : (a = function(d) {
        if (d) {
            var e = Hf(c);
            c.appendChild(t(d) ? e.createTextNode(d) : d)
        }
    }
    ,
    Ja(b) ? z(b, a) : !Ka(b) || "nodeType"in b ? a(b) : z(yb(b), a))))
}
;
k.xa = function() {
    return "goog-control"
}
;
var kr = function(a, b) {
    var c = a.xa()
      , d = [c]
      , e = a.xa();
    e != c && d.push(e);
    c = b.Xc;
    for (e = []; c; ) {
        var f = c & -c;
        e.push(a.a(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (a = b.Xb) && d.push.apply(d, a);
    B && !Re("7") && d.push.apply(d, lr(d));
    return d
}
  , lr = function(a, b) {
    var c = [];
    b && (a = wb(a, [b]));
    z([], function(d) {
        !ob(d, Ta(sb, a)) || b && !sb(d, b) || c.push(d.join("_"))
    });
    return c
};
hr.prototype.a = function(a) {
    this.b || rr(this);
    return this.b[a]
}
;
hr.prototype.g = function(a) {
    if (!this.R) {
        this.b || rr(this);
        var b = this.b, c = {}, d;
        for (d in b)
            c[b[d]] = d;
        this.R = c
    }
    a = parseInt(this.R[a], 10);
    return isNaN(a) ? 0 : a
}
;
var rr = function(a) {
    var b = a.xa()
      , c = !Jc(b.replace(/\xa0|\s/g, " "), " ");
    x(c, "ControlRenderer has an invalid css class: '" + b + "'");
    a.b = {
        1: b + "-disabled",
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var sr = function() {};
w(sr, hr);
Ga(sr);
k = sr.prototype;
k.Vc = function() {
    return "button"
}
;
k.fc = function(a, b, c) {
    switch (b) {
    case 8:
    case 16:
        x(a, "The button DOM element cannot be null.");
        Fp(a, "pressed", c);
        break;
    default:
    case 64:
    case 1:
        sr.D.fc.call(this, a, b, c)
    }
}
;
k.tb = function(a) {
    var b = sr.D.tb.call(this, a);
    tr(b, a.h);
    var c = a.Z();
    c && this.mf(b, c);
    pr(a, 16) && this.fc(b, 16, a.Ea(16));
    return b
}
;
k.Xa = function(a, b) {
    b = sr.D.Xa.call(this, a, b);
    var c = this.Z(b);
    a.aa = c;
    a.h = b.title;
    pr(a, 16) && this.fc(b, 16, a.Ea(16));
    return b
}
;
k.Z = Fa;
k.mf = Fa;
var tr = function(a, b) {
    a && (b ? a.title = b : a.removeAttribute("title"))
}
  , vr = function(a, b, c) {
    var d = Yq(b)
      , e = a.xa() + "-collapse-left";
    a = a.xa() + "-collapse-right";
    ur(b, d ? a : e, !!(c & 1));
    ur(b, d ? e : a, !!(c & 2))
};
sr.prototype.xa = function() {
    return "goog-button"
}
;
var xr = function(a, b) {
    if (!a)
        throw Error("Invalid class name " + a);
    if (!La(b))
        throw Error("Invalid decorator function " + b);
    wr[a] = b
}
  , yr = {}
  , wr = {};
var Z = function(a, b, c) {
    X.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b; ) {
            d = Qa(b);
            if (d = yr[d])
                break;
            b = b.D ? b.D.constructor : null
        }
        b = d ? La(d.M) ? d.M() : new d : null
    }
    this.c = b;
    this.Wc = p(a) ? a : null;
    this.Ya = null
};
w(Z, X);
k = Z.prototype;
k.Wc = null;
k.Xc = 0;
k.Ke = 39;
k.xc = 255;
k.Je = 0;
k.sf = !0;
k.Xb = null;
k.Fg = !0;
k.Pe = !1;
k.Bg = null;
var Ar = function(a, b) {
    a.Aa && b != a.Fg && zr(a, b);
    a.Fg = b
}
  , Br = function(a, b) {
    b && (a.Xb ? sb(a.Xb, b) || a.Xb.push(b) : a.Xb = [b],
    mr(a, b, !0))
}
  , Cr = function(a, b) {
    b && a.Xb && vb(a.Xb, b) && (0 == a.Xb.length && (a.Xb = null),
    mr(a, b, !1))
}
  , ur = function(a, b, c) {
    c ? Br(a, b) : Cr(a, b)
};
Z.prototype.Ka = function() {
    var a = this.c.tb(this);
    this.v = a;
    or(this.c, a, this.C());
    this.Pe || this.c.qf(a, !1);
    this.isVisible() || this.c.setVisible(a, !1)
}
;
Z.prototype.C = function() {
    return this.Bg
}
;
var Dr = function(a, b) {
    a.Ya = b;
    (a = a.j()) && Jp(a, b)
};
Z.prototype.$b = function() {
    return this.c.Ub(this.j())
}
;
Z.prototype.Rc = function(a) {
    return this.c.Uc(a)
}
;
Z.prototype.Da = function(a) {
    this.v = a = this.c.Xa(this, a);
    or(this.c, a, this.C());
    this.Pe || this.c.qf(a, !1);
    this.sf = "none" != a.style.display
}
;
Z.prototype.ea = function() {
    Z.D.ea.call(this);
    qr(this.c, this, Rq(this));
    this.c.Vh(this);
    if (this.Ke & -2 && (this.Fg && zr(this, !0),
    pr(this, 32))) {
        var a = this.j();
        if (a) {
            var b = this.w || (this.w = new ar);
            $q(b, a);
            Y(this).O(b, "key", this.ab).O(a, "focus", this.Ik).O(a, "blur", this.rf)
        }
    }
}
;
var zr = function(a, b) {
    var c = Y(a)
      , d = a.j();
    b ? (c.O(d, Rg.he, a.ub).O(d, [Rg.ie, Rg.ge], a.Cb).O(d, "mouseover", a.Ag).O(d, "mouseout", a.Gg),
    a.Ce != Fa && c.O(d, "contextmenu", a.Ce),
    B && (Re(9) || c.O(d, "dblclick", a.Zh),
    a.K || (a.K = new Er(a),
    Jg(a, a.K)))) : (c.Ha(d, Rg.he, a.ub).Ha(d, [Rg.ie, Rg.ge], a.Cb).Ha(d, "mouseover", a.Ag).Ha(d, "mouseout", a.Gg),
    a.Ce != Fa && c.Ha(d, "contextmenu", a.Ce),
    B && (Re(9) || c.Ha(d, "dblclick", a.Zh),
    Ig(a.K),
    a.K = null))
};
Z.prototype.mb = function() {
    Z.D.mb.call(this);
    this.w && gr(this.w);
    this.isVisible() && this.isEnabled() && this.c.Ld(this, !1)
}
;
Z.prototype.W = function() {
    Z.D.W.call(this);
    this.w && (this.w.Ja(),
    delete this.w);
    delete this.c;
    this.K = this.Xb = this.Wc = null
}
;
Z.prototype.Ta = function() {
    return this.Wc
}
;
Z.prototype.g = function(a) {
    this.c.ac(this.j(), a);
    this.Wc = a
}
;
var nr = function(a, b) {
    a.Wc = b
};
k = Z.prototype;
k.qb = function() {
    var a = this.Ta();
    if (!a)
        return "";
    a = t(a) ? a : Ja(a) ? lb(a, Bg).join("") : Ag(a);
    return be(a)
}
;
k.isVisible = function() {
    return this.sf
}
;
k.setVisible = function(a, b) {
    return b || this.sf != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.j()) && this.c.setVisible(b, a),
    this.isEnabled() && this.c.Ld(this, a),
    this.sf = a,
    !0) : !1
}
;
k.isEnabled = function() {
    return !this.Ea(1)
}
;
k.qa = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Fr(this, 1, !a) || (a || (Gr(this, !1),
    Hr(this, !1)),
    this.isVisible() && this.c.Ld(this, a),
    Ir(this, 1, !a, !0))
}
;
var Hr = function(a, b) {
    Fr(a, 2, b) && Ir(a, 2, b)
};
Z.prototype.jb = function() {
    return this.Ea(4)
}
;
var Gr = function(a, b) {
    Fr(a, 4, b) && Ir(a, 4, b)
};
k = Z.prototype;
k.Mg = function() {
    return this.Ea(8)
}
;
k.bd = function(a) {
    Fr(this, 8, a) && Ir(this, 8, a)
}
;
k.ad = function(a) {
    Fr(this, 16, a) && Ir(this, 16, a)
}
;
k.Wd = function(a) {
    Fr(this, 32, a) && Ir(this, 32, a)
}
;
k.Wa = function(a) {
    Fr(this, 64, a) && Ir(this, 64, a)
}
;
k.Ea = function(a) {
    return !!(this.Xc & a)
}
;
var Ir = function(a, b, c, d) {
    d || 1 != b ? pr(a, b) && c != a.Ea(b) && (a.c.ud(a, b, c),
    a.Xc = c ? a.Xc | b : a.Xc & ~b) : a.qa(!c)
}
  , pr = function(a, b) {
    return !!(a.Ke & b)
};
Z.prototype.Oa = function(a, b) {
    if (this.Aa && this.Ea(a) && !b)
        throw Error("Component already rendered");
    !b && this.Ea(a) && Ir(this, a, !1);
    this.Ke = b ? this.Ke | a : this.Ke & ~a
}
;
var Jr = function(a, b) {
    return !!(a.xc & b) && pr(a, b)
}
  , Fr = function(a, b, c) {
    return pr(a, b) && a.Ea(b) != c && (!(a.Je & b) || a.dispatchEvent(Oq(b, c))) && !a.lc
};
k = Z.prototype;
k.Ag = function(a) {
    (!a.relatedTarget || !ng(this.j(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Jr(this, 2) && Hr(this, !0)
}
;
k.Gg = function(a) {
    a.relatedTarget && ng(this.j(), a.relatedTarget) || !this.dispatchEvent("leave") || (Jr(this, 4) && Gr(this, !1),
    Jr(this, 2) && Hr(this, !1))
}
;
k.Ce = Fa;
k.ub = function(a) {
    this.isEnabled() && (Jr(this, 2) && Hr(this, !0),
    Vg(a) && (Jr(this, 4) && Gr(this, !0),
    this.c && this.c.yg(this) && this.j().focus()));
    !this.Pe && Vg(a) && a.preventDefault()
}
;
k.Cb = function(a) {
    this.isEnabled() && (Jr(this, 2) && Hr(this, !0),
    this.jb() && this.Yc(a) && Jr(this, 4) && Gr(this, !1))
}
;
k.Zh = function(a) {
    this.isEnabled() && this.Yc(a)
}
;
k.Yc = function(a) {
    Jr(this, 16) && this.ad(!this.Ea(16));
    Jr(this, 8) && this.bd(!0);
    Jr(this, 64) && this.Wa(!this.Ea(64));
    var b = new Kg("action",this);
    a && (b.altKey = a.altKey,
    b.ctrlKey = a.ctrlKey,
    b.metaKey = a.metaKey,
    b.shiftKey = a.shiftKey,
    b.g = a.g);
    return this.dispatchEvent(b)
}
;
k.Ik = function() {
    Jr(this, 32) && this.Wd(!0)
}
;
k.rf = function() {
    Jr(this, 4) && Gr(this, !1);
    Jr(this, 32) && this.Wd(!1)
}
;
k.ab = function(a) {
    return this.isVisible() && this.isEnabled() && this.Md(a) ? (a.preventDefault(),
    a.stopPropagation(),
    !0) : !1
}
;
k.Md = function(a) {
    return 13 == a.keyCode && this.Yc(a)
}
;
if (!La(Z))
    throw Error("Invalid component class " + Z);
if (!La(hr))
    throw Error("Invalid renderer class " + hr);
var Kr = Qa(Z);
yr[Kr] = hr;
xr("goog-control", function() {
    return new Z(null)
});
var Er = function(a) {
    Hg.call(this);
    this.b = a;
    this.a = !1;
    this.c = new Gq(this);
    Jg(this, this.c);
    a = Rq(this.b);
    this.c.O(a, "mousedown", this.h).O(a, "mouseup", this.o).O(a, "click", this.g)
};
w(Er, Hg);
var Lr = !B || Te(9);
Er.prototype.h = function() {
    this.a = !1
}
;
Er.prototype.o = function() {
    this.a = !0
}
;
var Mr = function(a, b) {
    if (!Lr)
        return a.button = 0,
        a.type = b,
        a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
};
Er.prototype.g = function(a) {
    if (this.a)
        this.a = !1;
    else {
        var b = a.b
          , c = b.button
          , d = b.type
          , e = Mr(b, "mousedown");
        this.b.ub(new Tg(e,a.a));
        e = Mr(b, "mouseup");
        this.b.Cb(new Tg(e,a.a));
        Lr || (b.button = c,
        b.type = d)
    }
}
;
Er.prototype.W = function() {
    this.b = null;
    Er.D.W.call(this)
}
;
var Nr = function() {};
w(Nr, sr);
Ga(Nr);
k = Nr.prototype;
k.Vc = function() {}
;
k.tb = function(a) {
    Ar(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    return a.a.b("BUTTON", {
        "class": kr(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.h || "",
        value: a.Z() || ""
    }, a.qb() || "")
}
;
k.Uc = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
}
;
k.Xa = function(a, b) {
    Ar(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    if (b.disabled) {
        var c = ab(this.a(1));
        T(b, c)
    }
    return Nr.D.Xa.call(this, a, b)
}
;
k.Vh = function(a) {
    Y(a).O(a.j(), "click", a.Yc)
}
;
k.qf = Fa;
k.zg = Fa;
k.yg = function(a) {
    return a.isEnabled()
}
;
k.Ld = Fa;
k.ud = function(a, b, c) {
    Nr.D.ud.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
}
;
k.Z = function(a) {
    return a.value
}
;
k.mf = function(a, b) {
    a && (a.value = b)
}
;
k.fc = Fa;
var Or = function(a, b, c) {
    Z.call(this, a, b || Nr.M(), c)
};
w(Or, Z);
k = Or.prototype;
k.Z = function() {
    return this.aa
}
;
k.nf = function(a) {
    this.aa = a;
    this.c.mf(this.j(), a)
}
;
k.rd = function(a) {
    this.h = a;
    tr(this.j(), a)
}
;
k.W = function() {
    Or.D.W.call(this);
    delete this.aa;
    delete this.h
}
;
k.ea = function() {
    Or.D.ea.call(this);
    if (pr(this, 32)) {
        var a = this.j();
        a && Y(this).O(a, "keyup", this.Md)
    }
}
;
k.Md = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Yc(a) : 32 == a.keyCode
}
;
xr("goog-button", function() {
    return new Or(null)
});
var Pr = function(a) {
    a = a || {};
    var b = a.attributes
      , c = a.content
      , d = a.disabled
      , e = a.id
      , f = a.Eq
      , g = a.title
      , h = a.Sn
      , l = a.value
      , m = P;
    e = '<div role="button"' + (e ? ' id="' + S(e) + '"' : "") + ' class="';
    var q = a || {};
    a = q.rq;
    var r = q.disabled
      , u = q.checked
      , y = q.width
      , Q = "goog-inline-block jfk-button ";
    q = q.style;
    switch (Ma(q) ? q.toString() : q) {
    case 0:
        Q += "jfk-button-standard";
        break;
    case 2:
        Q += "jfk-button-action";
        break;
    case 3:
        Q += "jfk-button-primary";
        break;
    case 1:
        Q += "jfk-button-default";
        break;
    case 4:
        Q += "jfk-button-flat";
        break;
    case 5:
        Q += "jfk-button-mini";
        break;
    case 6:
        Q += "jfk-button-contrast";
        break;
    default:
        Q += "jfk-button-standard"
    }
    Q += (Bn(y, 1) ? " jfk-button-narrow" : "") + (u ? " jfk-button-checked" : "") + (a ? " " + a : "") + (r ? " jfk-button-disabled" : "");
    d = e + S(Q) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? S(f) : "0") + '"') + (g ? h ? ' data-tooltip="' + S(g) + '"' : ' title="' + S(g) + '"' : "") + (l ? ' value="' + S(l) + '"' : "");
    b ? (zn(b, qn, xn) ? b = b.Ta().replace(/([^"'\s])$/, "$1 ") : (b = String(b),
    Xn.test(b) || (Za("Bad value `%s` for |filterHtmlAttributes", [b]),
    b = "zSoyz")),
    b = " " + b) : b = "";
    return m(d + b + ">" + R(null != c ? c : "") + "</div>")
};
Pr.a = "jfk.templates.button.strict";
var Qr = function(a, b, c) {
    Hg.call(this);
    this.tc = a;
    this.c = b || 0;
    this.a = c;
    this.b = v(this.rg, this)
};
w(Qr, Hg);
k = Qr.prototype;
k.ra = 0;
k.W = function() {
    Qr.D.W.call(this);
    this.stop();
    delete this.tc;
    delete this.a
}
;
k.start = function(a) {
    this.stop();
    this.ra = Bi(this.b, p(a) ? a : this.c)
}
;
k.stop = function() {
    this.jb() && Ci(this.ra);
    this.ra = 0
}
;
k.jb = function() {
    return 0 != this.ra
}
;
k.rg = function() {
    this.ra = 0;
    this.tc && this.tc.call(this.a)
}
;
var Tr = function(a) {
    return he(yc(a.replace(Rr, function(b, c) {
        return Sr.test(c) ? "" : " "
    }).replace(/[\t\n ]+/g, " ")))
}
  , Sr = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i
  , Rr = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
var Ur = function() {
    if (Ee) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(qd)) ? a[1] : "0"
    }
    return De ? (a = /10[_.][0-9_.]+/,
    (a = a.exec(qd)) ? a[0].replace(/_/g, ".") : "10") : Fe ? (a = /Android\s+([^\);]+)(\)|;)/,
    (a = a.exec(qd)) ? a[1] : "") : Ge || He || Ie ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
    (a = a.exec(qd)) ? a[1].replace(/_/g, ".") : "") : ""
}();
var Yr = function(a, b, c, d, e, f, g, h, l) {
    x(c);
    var m = Vr(c)
      , q = rq(a)
      , r = iq(a);
    if (r) {
        var u = new Vp(r.left,r.top,r.right - r.left,r.bottom - r.top);
        r = Math.max(q.left, u.left);
        var y = Math.min(q.left + q.width, u.left + u.width);
        if (r <= y) {
            var Q = Math.max(q.top, u.top);
            u = Math.min(q.top + q.height, u.top + u.height);
            Q <= u && (q.left = r,
            q.top = Q,
            q.width = y - r,
            q.height = u - Q)
        }
    }
    r = If(a);
    Q = If(c);
    if (r.a != Q.a) {
        y = r.a.body;
        Q = Gg(Q);
        u = new Df(0,0);
        var L = Uf(Hf(y));
        if (ue(L, "parent")) {
            var Na = y;
            do {
                var Hb = L == Q ? hq(Na) : oq(x(Na));
                u.x += Hb.x;
                u.a += Hb.a
            } while (L && L != Q && L != L.parent && (Na = L.frameElement) && (L = L.parent))
        }
        y = Ef(u, hq(y));
        !B || Te(9) || Qf(r.a) || (y = Ef(y, Tf(r.a)));
        q.left += y.x;
        q.top += y.a
    }
    a = Wr(a, b);
    b = q.left;
    a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
    q = new Df(b,q.top + (a & 1 ? q.height : 0));
    q = Ef(q, m);
    e && (q.x += (a & 4 ? -1 : 1) * e.x,
    q.a += (a & 1 ? -1 : 1) * e.a);
    if (g)
        if (l)
            var Ha = l;
        else if (Ha = iq(c))
            Ha.top -= m.a,
            Ha.right -= m.x,
            Ha.bottom -= m.a,
            Ha.left -= m.x;
    return Xr(q, c, d, f, Ha, g, h)
}
  , Vr = function(a) {
    if (a = a.offsetParent) {
        var b = "HTML" == a.tagName || "BODY" == a.tagName;
        if (!b || "static" != aq(a, "position")) {
            var c = hq(a);
            if (!b) {
                b = wq(a);
                var d;
                if (d = b) {
                    d = $e && Ak(10);
                    var e = Je && 0 <= Lc(Ur, 10);
                    d = ze || d || e
                }
                b = d ? -a.scrollLeft : !b || ye && Re("8") || "visible" == aq(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                c = Ef(c, new Df(b,a.scrollTop))
            }
        }
    }
    return c || new Df
}
  , Xr = function(a, b, c, d, e, f, g) {
    a = new Df(a.x,a.a);
    var h = Wr(b, c);
    c = qq(b);
    g = g ? new Ff(g.width,g.height) : new Ff(c.width,c.height);
    a = new Df(a.x,a.a);
    g = new Ff(g.width,g.height);
    var l = 0;
    if (d || 0 != h)
        h & 4 ? a.x -= g.width + (d ? d.right : 0) : h & 2 ? a.x -= g.width / 2 : d && (a.x += d.left),
        h & 1 ? a.a -= g.height + (d ? d.bottom : 0) : d && (a.a += d.top);
    if (f) {
        if (e) {
            d = a;
            h = g;
            l = 0;
            65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
            132 == (f & 132) && (d.a < e.top || d.a >= e.bottom) && (f &= -5);
            d.x < e.left && f & 1 && (d.x = e.left,
            l |= 1);
            if (f & 16) {
                var m = d.x;
                d.x < e.left && (d.x = e.left,
                l |= 4);
                d.x + h.width > e.right && (h.width = Math.min(e.right - d.x, m + h.width - e.left),
                h.width = Math.max(h.width, 0),
                l |= 4)
            }
            d.x + h.width > e.right && f & 1 && (d.x = Math.max(e.right - h.width, e.left),
            l |= 1);
            f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0));
            d.a < e.top && f & 4 && (d.a = e.top,
            l |= 2);
            f & 32 && (m = d.a,
            d.a < e.top && (d.a = e.top,
            l |= 8),
            d.a + h.height > e.bottom && (h.height = Math.min(e.bottom - d.a, m + h.height - e.top),
            h.height = Math.max(h.height, 0),
            l |= 8));
            d.a + h.height > e.bottom && f & 4 && (d.a = Math.max(e.bottom - h.height, e.top),
            l |= 2);
            f & 8 && (l |= (d.a < e.top ? 64 : 0) | (d.a + h.height > e.bottom ? 128 : 0));
            e = l
        } else
            e = 256;
        l = e
    }
    f = new Vp(0,0,0,0);
    f.left = a.x;
    f.top = a.a;
    f.width = g.width;
    f.height = g.height;
    e = l;
    if (e & 496)
        return e;
    cq(b, new Df(f.left,f.top));
    g = new Ff(f.width,f.height);
    c == g || c && g && c.width == g.width && c.height == g.height || (c = g,
    a = Hf(b),
    g = Qf(If(a).a),
    !B || Re("10") || g && Re("8") ? zq(b, c, "border-box") : (a = b.style,
    g ? (g = Dq(b),
    b = jq(b),
    a.pixelWidth = c.width - b.left - g.left - g.right - b.right,
    a.pixelHeight = c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width,
    a.pixelHeight = c.height)));
    return e
}
  , Wr = function(a, b) {
    return (b & 8 && wq(a) ? b ^ 4 : b) & -9
};
var Zr = function() {};
Zr.prototype.c = function() {}
;
var $r = function(a, b) {
    this.g = a;
    this.m = !!b;
    this.o = {
        0: this.g + "-arrowright",
        1: this.g + "-arrowup",
        2: this.g + "-arrowdown",
        3: this.g + "-arrowleft"
    }
};
w($r, Zr);
k = $r.prototype;
k.Ef = !1;
k.Wf = 2;
k.Bh = 20;
k.Yf = 3;
k.Sg = -5;
k.Oe = !1;
var as = function(a, b, c, d, e) {
    null != b && (a.Yf = b);
    null != c && (a.Wf = c);
    ya(d) && (a.Bh = Math.max(d, 15));
    ya(e) && (a.Sg = e)
};
$r.prototype.c = function(a, b, c) {
    x(this.h, "Must call setElements first.");
    a = this.Wf;
    2 == a && (a = 0);
    bs(this, this.Yf, a, 2 == this.Wf ? cs(this.Yf) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.Bh, 0, c)
}
;
var bs = function(a, b, c, d, e, f) {
    if (a.b) {
        var g = ds(b, c);
        var h = a.b;
        var l = qq(h);
        l = (cs(b) ? l.height / 2 : l.width / 2) - d;
        var m = Wr(h, g), q;
        if (q = iq(h))
            h = Wp(rq(h)),
            cs(b) ? h.top < q.top && !(m & 1) ? l -= q.top - h.top : h.bottom > q.bottom && m & 1 && (l -= h.bottom - q.bottom) : h.left < q.left && !(m & 4) ? l -= q.left - h.left : h.right > q.right && m & 4 && (l -= h.right - q.right);
        h = l;
        h = cs(b) ? new Df(a.Sg,h) : new Df(h,a.Sg);
        l = cs(b) ? 6 : 9;
        a.Oe && 2 == e && (l = cs(b) ? 4 : 1);
        m = b ^ 3;
        cs(b) && "rtl" == a.b.dir && (m = b);
        g = Yr(a.b, ds(m, c), a.a, g, h, f, a.Ef ? l : 0, void 0, null);
        if (2 != e && g & 496) {
            bs(a, b ^ 3, c, d, a.Oe && 0 == e ? 1 : 2, f);
            return
        }
        !a.m || g & 496 || (e = parseFloat(a.a.style.left),
        f = parseFloat(a.a.style.top),
        x(!isNaN(e) && !isNaN(f), "Could not parse position."),
        isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || cq(a.a, Math.round(e), Math.round(f)))
    }
    es(a, b, c, d)
}
  , es = function(a, b, c, d) {
    var e = a.h;
    Mb(a.o, function(f) {
        V(e, f, !1)
    }, a);
    T(e, a.o[b]);
    e.style.top = e.style.left = e.style.right = e.style.bottom = "";
    a.b ? (c = nq(a.b, a.a),
    d = fs(a.b, b),
    cs(b) ? e.style.top = gs(c.a + d.a, a.a.offsetHeight - 15) + "px" : e.style.left = gs(c.x + d.x, a.a.offsetWidth - 15) + "px") : e.style[0 == c ? cs(b) ? "top" : "left" : cs(b) ? "bottom" : "right"] = d + "px"
}
  , gs = function(a, b) {
    return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
}
  , ds = function(a, b) {
    switch (a) {
    case 2:
        return 0 == b ? 1 : 5;
    case 1:
        return 0 == b ? 0 : 4;
    case 0:
        return 0 == b ? 12 : 13;
    default:
        return 0 == b ? 8 : 9
    }
}
  , fs = function(a, b) {
    var c = 0
      , d = 0;
    a = qq(a);
    switch (b) {
    case 2:
        c = a.width / 2;
        break;
    case 1:
        c = a.width / 2;
        d = a.height;
        break;
    case 0:
        d = a.height / 2;
        break;
    case 3:
        c = a.width,
        d = a.height / 2
    }
    return new Df(c,d)
}
  , cs = function(a) {
    return 0 == a || 3 == a
};
var hs = function(a) {
    Hg.call(this);
    this.b = a || If()
};
w(hs, Hg);
hs.prototype.h = function() {
    Dp(this.j(), "tooltip");
    Fp(this.j(), "live", "polite")
}
;
var is = function(a) {
    hs.call(this, a);
    this.a = this.b.b("DIV", "jfk-tooltip-contentId");
    this.g = this.b.b("DIV", "jfk-tooltip-arrow", this.b.b("DIV", "jfk-tooltip-arrowimplbefore"), this.b.b("DIV", "jfk-tooltip-arrowimplafter"));
    this.c = this.b.b("DIV", {
        "class": "jfk-tooltip",
        role: "tooltip"
    }, this.a, this.g);
    this.h()
};
w(is, hs);
is.prototype.j = function() {
    return this.c
}
;
is.prototype.W = function() {
    is.D.W.call(this);
    this.c && hg(this.c)
}
;
var js = function(a) {
    is.call(this, a)
};
w(js, is);
js.prototype.h = function() {
    Dp(this.j(), "tooltip")
}
;
var ls = function(a) {
    var b = a.getAttribute("title");
    b && ks(a, b)
}
  , ks = function(a, b, c) {
    c || (c = b instanceof Ad ? Tr(Bd(b).toString()) : b);
    a.removeAttribute("title");
    a.removeAttribute("data-tooltip-contained");
    a.removeAttribute("data-tooltip");
    b ? (b instanceof Ad ? a.a = b : (a.setAttribute("data-tooltip", b),
    a.a = null),
    a.setAttribute("aria-label", c)) : (a.a = null,
    a.removeAttribute("aria-label"));
    a = If(a) || If();
    b = Qa(a.a);
    ms[b] || (ms[b] = new ns(a))
}
  , os = function(a, b) {
    var c = "";
    switch (b) {
    case 0:
        c += "l";
        break;
    case 2:
        c += "t";
        break;
    case 3:
        c += "r";
        break;
    default:
        c += "b"
    }
    a.setAttribute("data-tooltip-align", c + ",c")
}
  , ms = {}
  , ns = function(a) {
    Gq.call(this);
    this.K = a;
    this.L = new Qr(this.Y,0,this);
    Jg(this, this.L);
    var b = Uf();
    this.w = La(b.MutationObserver) ? new b.MutationObserver(v(this.V, this)) : null;
    a = a.a;
    this.O(a, "mouseout mousedown click blur focusout keydown".split(" "), this.T, !0);
    this.O(a, ["mouseover", "focus", "focusin"], this.ma, !0)
};
w(ns, Gq);
ns.prototype.W = function() {
    ps(this);
    ns.D.W.call(this)
}
;
var qs = function(a, b) {
    switch (b.type) {
    case "mousedown":
    case "mouseover":
    case "mouseout":
    case "click":
        a.R = !1;
        break;
    case "keydown":
        a.R = !0
    }
};
ns.prototype.ma = function(a) {
    this.w && this.w.disconnect();
    qs(this, a);
    var b = a.target;
    a = "focus" == a.type || "focusin" == a.type;
    var c = this.a && ng(this.a.a, b);
    if (this.R || !a || c) {
        this.X = a;
        if (a = b && b.getAttribute && this.w)
            a = b.getAttribute("role") || null,
            a = sb(Cp, a);
        a && (this.w.observe(b, {
            attributes: !0
        }),
        (a = Hp(b)) && (b = a));
        this.g = b
    } else
        this.g = null;
    rs(this)
}
;
ns.prototype.T = function(a) {
    qs(this, a);
    var b = a.target;
    a = "mousedown" == a.type || "click" == a.type;
    b = this.a && ng(this.a.a, b);
    a && b || (this.g = null,
    rs(this))
}
;
ns.prototype.V = function(a) {
    z(a, v(function(b) {
        var c = Hp(b.target);
        c && "aria-activedescendant" == b.attributeName && (this.g = c,
        rs(this))
    }, this))
}
;
var rs = function(a) {
    if (!(a.L.jb() && a.b && a.o)) {
        ps(a);
        var b = null != a.o ? a.o : 50;
        a.L.start(a.b ? b : 300)
    }
}
  , ps = function(a) {
    a.G && (Ci(a.G),
    a.G = 0,
    a.b = null)
};
ns.prototype.Y = function() {
    if (!this.g)
        ss(this),
        this.o = this.b = null;
    else if (!(this.b && this.a && ng(this.a.j(), this.g)) || this.b.getAttribute("data-tooltip-unhoverable")) {
        var a = Cg(this.g, function(h) {
            return h.getAttribute && (h.getAttribute("data-tooltip-contained") || h.getAttribute("data-tooltip") || h.a) && !h.getAttribute("data-tooltip-suspended")
        })
          , b = !1;
        this.b && this.b != a && (ss(this),
        this.o = this.b = null,
        b = !0);
        if (!this.b && a && (this.b = a,
        ts(this, a))) {
            var c = Kd;
            if (a.getAttribute("data-tooltip-contained"))
                for (var d = Mf("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
                    if (d[e].parentNode == a) {
                        c = d[e].cloneNode(!0);
                        break
                    }
                }
            else
                c = a.a ? a.a : Ed(a.getAttribute("data-tooltip"));
            d = a.getAttribute("data-tooltip-align");
            e = a.getAttribute("data-tooltip-class");
            var f = a.getAttribute("data-tooltip-offset");
            f = xc(le(f)) ? -1 : Number(f);
            var g = a.getAttribute("data-tooltip-hide-delay");
            g = xc(le(g)) ? null : Number(g);
            if (!b && (a = a.getAttribute("data-tooltip-delay"),
            a = Math.max(0, a - 300))) {
                this.G = Bi(Ta(this.N, this.b, c, d, f, e, g), a, this);
                return
            }
            this.N(this.b, c, d, f, e, g)
        }
    }
}
;
var ts = function(a, b) {
    return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.X && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
}
  , us = function(a) {
    if (a)
        switch (a.toLowerCase().split(",")[0]) {
        case "l":
            return 0;
        case "t":
            return 2;
        case "r":
            return 3
        }
    return 1
};
ns.prototype.N = function(a, b, c, d, e, f) {
    this.G = 0;
    this.o = f;
    if (!this.a) {
        this.a = new js(this.K);
        ss(this);
        bg(this.K.a.body, this.a.j());
        Jg(this, this.a);
        this.h = new $r("jfk-tooltip",!0);
        this.h.Ef = !0;
        this.h.Oe = !0;
        f = this.h;
        var g = this.a.g;
        f.a = this.a.j();
        f.h = g
    }
    a: {
        if (c)
            switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f = 0;
                break a;
            case "r":
                f = 1;
                break a
            }
        f = 2
    }
    as(this.h, us(c), f, void 0, d);
    U(this.a.j(), "jfk-tooltip-hide");
    this.C != e && (this.C && !xc(le(this.C)) && U(this.a.j(), this.C),
    xc(le(e)) || T(this.a.j(), e),
    this.C = e);
    cq(this.a.j(), 0, 0);
    if (b instanceof Ad)
        Ud(this.a.a, b);
    else
        for (dg(this.a.a); c = b.firstChild; )
            this.a.a.appendChild(c);
    this.h.b = a;
    this.h.c(null, 0)
}
;
var ss = function(a) {
    a.a && T(a.a.j(), "jfk-tooltip-hide")
};
var ws = function(a, b, c, d) {
    Or.call(this, a, vs.M(), b);
    this.m = c || 0;
    this.N = d || 0;
    this.Pa = !1
};
w(ws, Or);
var ys = function(a, b) {
    a.m != b && (a.m = b,
    xs(a))
};
k = ws.prototype;
k.rd = function(a) {
    this.h = a;
    var b = this.j();
    b && (this.Pa ? ks(b, a, void 0) : a ? b.title = a : b.removeAttribute("title"))
}
;
k.qa = function(a) {
    this.isEnabled() != a && (ws.D.qa.call(this, a),
    xs(this))
}
;
k.Wd = function(a) {
    ws.D.Wd.call(this, a);
    zs(this, !1)
}
;
k.ub = function(a) {
    ws.D.ub.call(this, a);
    this.isEnabled() && zs(this, !0)
}
;
k.Cb = function(a) {
    ws.D.Cb.call(this, a);
    this.isEnabled() && zs(this, !0)
}
;
var zs = function(a, b) {
    a.j() && V(a.j(), "jfk-button-clear-outline", b)
}
  , xs = function(a) {
    a.j() && As(a.c, a)
}
  , vs = function() {
    this.K = this.xa() + "-standard";
    this.c = this.xa() + "-action";
    this.L = this.xa() + "-primary";
    this.m = this.xa() + "-default";
    this.w = this.xa() + "-flat";
    this.C = this.xa() + "-narrow";
    this.G = this.xa() + "-mini";
    this.o = this.xa() + "-contrast"
};
w(vs, sr);
Ga(vs);
k = vs.prototype;
k.dd = function(a, b, c) {
    a && ys(c, a);
    b && c.N != b && (c.N = b,
    xs(c))
}
;
k.xa = function() {
    return "jfk-button"
}
;
k.tb = function(a) {
    hb(a, ws, "Button is expected to be instance of jfk.Button");
    var b = a.a
      , c = Sp(Pr, {
        disabled: !a.isEnabled(),
        checked: a.Ea(16),
        style: a.m,
        title: a.h,
        Sn: a.Pa,
        value: a.Z(),
        width: a.N
    }, void 0, b);
    b.Ph(c, a.Ta());
    this.Xa(a, c);
    return c
}
;
k.Xa = function(a, b) {
    vs.D.Xa.call(this, a, b);
    this.h || (this.h = Yb(this.K, Ta(this.dd, 0, null), this.c, Ta(this.dd, 2, null), this.L, Ta(this.dd, 3, null), this.m, Ta(this.dd, 1, null), this.w, Ta(this.dd, 4, null), this.G, Ta(this.dd, 5, null), this.o, Ta(this.dd, 6, null), this.C, Ta(this.dd, null, 1)));
    for (var c = Kp(b), d = 0; d < c.length; ++d) {
        var e = this.h[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute("data-tooltip"))
        a.h = c,
        a.Pa = !0;
    return b
}
;
k.Z = function(a) {
    return a.getAttribute("value") || ""
}
;
k.mf = function(a, b) {
    a && a.setAttribute("value", b)
}
;
var As = function(a, b) {
    function c(g, h) {
        (g ? d : e).push(h)
    }
    x(b.j(), "Button element must already exist when updating style.");
    var d = []
      , e = []
      , f = b.m;
    c(0 == f, a.K);
    c(2 == f, a.c);
    c(3 == f, a.L);
    c(4 == f, a.w);
    c(5 == f, a.G);
    c(1 == f, a.m);
    c(6 == f, a.o);
    c(1 == b.N, a.C);
    c(!b.isEnabled(), a.xa() + "-disabled");
    Np(b.j(), e);
    Mp(b.j(), d)
};
var Bs = function(a, b) {
    X.call(this);
    this.X = b;
    this.Sa = a;
    this.Te = this.text = this.Ma = this.Ca = "";
    this.data = null;
    this.vb = Dm.M()
};
w(Bs, X);
k = Bs.prototype;
k.update = function(a, b, c, d) {
    this.text = a;
    this.Ca = b;
    this.Ma = c;
    this.data = d;
    this.setVisible(!1);
    return !1
}
;
k.setVisible = function(a) {
    var b = this.j();
    b && W(b, a)
}
;
k.isVisible = function() {
    var a = this.j();
    return a ? tq(a) : !1
}
;
k.aj = function() {
    return {}
}
;
k.Ib = function() {
    return this.X
}
;
k.log = function(a, b) {
    var c = {};
    c.dt = this.X;
    c.sl = this.Ca;
    c.tl = this.Ma;
    c.hl = this.Sa;
    c.q = this.text;
    c.e = a;
    null != b && Xb(c, b);
    Xb(c, this.aj());
    this.vb.log("lexicon", c);
    b = this.Ca;
    c = this.Ma;
    window.__gaTracker && (__gaTracker("set", "dimension1", this.Sa),
    __gaTracker("set", "dimension2", b + "|" + c),
    __gaTracker("set", "dimension3", b),
    __gaTracker("set", "dimension4", c));
    Bh("lexicon", this.X + ":" + a, "", 1)
}
;
var Cs = function(a, b, c, d, e) {
    Bs.call(this, a, b);
    this.Jc = this.b = null;
    this.V = c;
    this.Zi = d;
    this.Y = e;
    this.N = this.h = null;
    this.m = !1;
    this.ba = "More";
    this.mc = !1;
    this.Ba = "Less";
    this.Kb = [];
    new np("mt");
    this.yh = !1;
    this.F = M.M();
    this.c = []
};
w(Cs, Bs);
k = Cs.prototype;
k.Ka = function() {
    Cs.D.Ka.call(this);
    this.Da(Yf("DIV"))
}
;
k.Da = function(a) {
    Cs.D.Da.call(this, a);
    T(this.j(), "gt-cd");
    T(this.j(), "gt-cd-" + this.X);
    vg(this.j(), !0);
    this.j().appendChild(Rp(eo));
    this.Jc = D("gt-cd-tl", this.j());
    this.b = D("gt-cd-c", this.j());
    this.h = D("cd-expand-button", this.j());
    this.N = D("cd-expand-label", this.j());
    W(this.h, !1)
}
;
k.W = function() {
    this.Ad();
    Cs.D.W.call(this)
}
;
k.Jd = function() {
    return this.Y
}
;
k.re = function() {
    return this.c.length
}
;
k.pg = function(a) {
    return this.c.indexOf(a)
}
;
k.Ad = function() {
    this.c = []
}
;
k.ib = function() {
    return this.re()
}
;
k.update = function(a, b, c, d) {
    Cs.D.update.call(this, a, b, c, d);
    this.m = this.mc = !1;
    hg(null);
    W(this.h, !1);
    U(this.h, "collapse");
    Ds(this, a);
    return !1
}
;
k.ea = function() {
    var a = this;
    Cs.D.ea.call(this);
    this.h && Ah(this.h, this.Bn.bind(this));
    Y(this).O(this, "a", v(this.ti, this, "clks"), !1);
    Y(this).O(this, "b", v(this.ti, this, "clkt"), !1);
    this.j() && (Y(this).O(this.j(), "focusout", function(b) {
        ng(a.j(), b.relatedTarget) || U(a.j(), "clear-outline")
    }),
    Y(this).O(this.j(), "mousedown", function() {
        T(a.j(), "clear-outline")
    }),
    Y(this).O(this.j(), "mouseup", function() {
        T(a.j(), "clear-outline")
    }))
}
;
k.Bn = function() {
    this.m = !this.m;
    this.Yd(this.m);
    if (this.m)
        T(this.h, "collapse"),
        G(this.N, this.Ba),
        this.log("expand"),
        em(this.F, this.Y, this.ib());
    else {
        U(this.h, "collapse");
        G(this.N, this.ba);
        this.log("collapse");
        var a = this.F
          , b = this.ib();
        N(a, bm(a, 189, this.Y, b, !0, 0))
    }
}
;
k.ti = function(a, b) {
    b = b.target;
    var c = this.F;
    N(c, bm(c, 79, this.Y, this.re(), this.mc, this.pg(b) + 1));
    b = Ag(b);
    this.log(a, {
        clk: b
    })
}
;
var Ds = function(a, b) {
    var c = F("DIV")
      , d = a.V.indexOf("%1$s");
    if (-1 != d) {
        var e = a.V.slice(0, d);
        d = a.V.slice(d + 4, a.V.length);
        e && cg(c, e);
        e = F("SPAN", {
            "class": "gt-card-ttl-txt"
        });
        Yp(e, "direction", kc(a.Ca) ? "rtl" : "ltr");
        G(e, b);
        c.appendChild(e);
        d && cg(c, d);
        a.Jc && (dg(a.Jc),
        a.Jc.appendChild(c))
    } else
        a.Jc && G(a.Jc, a.Zi)
}
  , Es = function(a, b, c) {
    a.mc = !0;
    W(a.h, !0);
    null != b && (a.ba = b);
    null != c && (a.Ba = c);
    G(a.N, a.ba)
};
Cs.prototype.Yd = function(a) {
    for (var b, c, d = Mf("gt-card-expand-wrapper", this.j()), e = 0; e < d.length; e++) {
        b = d[e];
        Yp(b, "max-height", $p(b, "height"));
        c = b.firstChild;
        var f = Cq(c, "margin");
        c = qq(c).height + f.top + f.bottom;
        Yp(b, "max-height", a ? c + "px" : 0);
        a ? (U(b, "gt-card-collapsed"),
        T(b, "gt-card-expanded"),
        Fp(b, "hidden", !1),
        gh(b, Qg, function(g) {
            Yp(g.target, "max-height", "unset")
        }, !1)) : (U(b, "gt-card-expanded"),
        T(b, "gt-card-collapsed"),
        Fp(b, "hidden", !0))
    }
}
;
var Fs = function(a, b) {
    if (b)
        return a;
    a = F("DIV", {
        "class": "gt-card-expand-wrapper gt-card-collapsed"
    }, a);
    Fp(a, "hidden", !0);
    return a
}
  , Gs = function(a, b, c) {
    a.Kb.push([b, c])
};
var Is = function(a, b) {
    var c = Array.prototype.slice.call(arguments)
      , d = c.shift();
    if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, l, m, q, r) {
        if ("%" == m)
            return "%";
        var u = c.shift();
        if ("undefined" == typeof u)
            throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = u;
        return Hs[m].apply(null, arguments)
    })
}
  , Hs = {
    s: function(a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + ke(" ", Number(c) - a.length) : ke(" ", Number(c) - a.length) + a
    },
    f: function(a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c))
            return d;
        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return d = 0 <= b.indexOf("-", 0) ? f + d + ke(" ", a) : f + ke(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
    },
    d: function(a, b, c, d, e, f, g, h) {
        return Hs.f(parseInt(a, 10), b, c, d, 0, f, g, h)
    }
};
Hs.i = Hs.d;
Hs.u = Hs.d;
var Js = function(a, b, c, d, e, f, g) {
    Cs.call(this, a, null != c && c ? "mbd" : "bd", MSG_TRANSLATIONS_OF, "", 11);
    this.g = c;
    this.T = null != d ? d : !1;
    this.ya = "";
    this.ya = this.g && this.T ? "gt-baf-cell gt-baf-word" : this.g ? "gt-baf-cell gt-baf-word-clickable" : "gt-baf-word-clickable";
    this.C = this.T ? null : "gt-baf-back";
    this.Vb = f || "";
    this.Wb = g || "";
    this.w = null;
    this.sa = !1;
    this.aa = null != e ? e : !0;
    this.K = {};
    this.K[1] = b[2];
    this.K[2] = b[1];
    this.K[3] = b[0];
    this.Pa = b[3]
};
w(Js, Cs);
Js.prototype.update = function(a, b, c, d) {
    Js.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 1))
        return !1;
    dg(this.b);
    this.Ad();
    this.w = new Jh(d);
    Ks(this, this.w);
    a = F("TBODY");
    b = F("TABLE", {
        "class": "gt-baf-table"
    }, a);
    c = this.w.a;
    for (var e = 0; e < c.length; e++) {
        var f = c[e]
          , g = Ls(this, f, this.g && this.aa && 0 === e);
        bg(a, g);
        f = f.a;
        for (var h = g = 0; h < f.length; h++) {
            var l = f[h];
            if (!this.g && this.w.b && 0 < h) {
                var m = Nh(l);
                var q = F("DIV", {
                    "class": "gt-baf-cell gt-baf-sep"
                });
                m = Fs(q, m);
                this.g || (m = F("TD", {
                    colspan: 4
                }, m),
                m = F("TR", null, m));
                bg(a, m)
            }
            l = l.a;
            for (m = 0; m < l.length; m++) {
                q = l[m];
                var r = d.$a(0).Nc();
                q = Ms(this, q, r, g);
                a.appendChild(q);
                g++
            }
        }
        this.b.appendChild(b);
        0 < Kh(this.w) && (f = this.Pa.replace("%1$s", Kh(this.w).toLocaleString(this.Sa)),
        Es(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
    }
    this.setVisible(!0);
    return !0
}
;
Js.prototype.ea = function() {
    Js.D.ea.call(this);
    T(this.j(), "gt-cd-baf");
    Y(this).O(this.j(), "click", this.wb);
    Y(this).O(this.j(), "mouseover", this.bb);
    Y(this).O(this.j(), "mouseout", this.Ya)
}
;
var Ks = function(a, b) {
    var c = Lh(b);
    c = c.sort(function(g, h) {
        return h.Lb - g.Lb
    });
    var d = 0;
    a.sa = !1;
    for (var e = 0; e < c.length; e++) {
        var f = c[e];
        -1 < f.Lb && (a.sa = !0);
        f.b = .05 <= f.Lb ? 3 : .0025 <= f.Lb ? 2 : 1;
        f.a = 12 > e || 3 == f.b;
        d += f.a ? 0 : 1
    }
    if (4 >= d)
        for (e = 0; e < c.length; e++)
            c[e].a = !0;
    b.b && Mh(b)
}
  , Ns = function(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
        var e = F("SPAN", null, b[d]);
        null != a.C && (T(e, a.C),
        a.c.push(e));
        c.push(e);
        d < b.length - 1 && c.push(Zf(", "))
    }
    return c
}
  , Ls = function(a, b, c) {
    var d = b.c;
    d && (a.Te = d,
    Ds(a, d));
    b = Sp(ho, {
        fk: c,
        Ck: a.Vb,
        Dk: a.Wb,
        Im: b.g,
        Dd: Oh(b)
    });
    if (c) {
        c = E("tlid-frequency-help-icon", b);
        var e = E("tlid-frequency-help-icon-container", b)
          , f = E("tlid-frequency-help-tooltip", b);
        Y(a).O(c, "click", function() {
            V(e, "show-tooltip", !Lp(e, "show-tooltip"))
        });
        Y(a).O(document, "click", function(g) {
            var h = fb(g.target);
            Lp(e, "show-tooltip") && (g = h.classList.contains("tlid-frequency-help-icon"),
            h = ng(f, h),
            g || h || U(e, "show-tooltip"))
        })
    }
    a = F("TD", {
        colspan: 4
    }, b);
    return F("TR", null, a)
}
  , Os = function(a, b) {
    return kc(b) !== kc(a.Sa) ? kc(b) ? "rtl" : "ltr" : ""
}
  , Ms = function(a, b, c, d) {
    if (a.g) {
        var e = b.text
          , f = null != b.Ge ? b.Ge : ""
          , g = e === c;
        c = b.a;
        d = a.T ? "gt-baf-entry-clickable" : "gt-baf-entry";
        g && (d += " gt-baf-entry-selected");
        d = F("TR", {
            "class": d
        });
        var h = F("TD");
        e = Sp(io, {
            Mg: g,
            Ge: f,
            wn: Os(a, a.Ma),
            Dd: c,
            Xn: e,
            Yn: a.ya
        });
        bg(h, e);
        e = F("TD");
        f = Sp(jo, {
            We: null != a.C ? a.C : "",
            ck: Os(a, a.Ca),
            Qf: b.Qf,
            Dd: c
        });
        bg(e, f);
        bg(d, h);
        bg(d, e);
        h = b.b;
        b = a.K[b.b];
        a.g && a.aa && h && b && (b = Sp(lo, {
            Lb: h,
            vc: b,
            Dd: c
        }),
        c = F("TD"),
        bg(c, b),
        bg(d, c));
        a.C && (b = Mf(a.C, d),
        z(b, function(l) {
            this.c.push(l)
        }, a));
        b = a.T ? E("gt-baf-word", d) : E("gt-baf-word-clickable", d);
        a.c.push(b);
        return d
    }
    f = b.text;
    g = b.Ge;
    e = b.a;
    c = Ps(a, b.b, e);
    h = null;
    g && (h = Qs(g, e));
    f = Rs(a, f, g, e);
    b = Ns(a, b.Qf);
    b = Ss(a, b, e);
    b = F("TR", null, c, h, f, b);
    kc(a.Ca) != kc(a.Sa) && 1 == d % 2 && T(b, "gt-baf-translations-alt");
    return b
}
  , Ps = function(a, b, c) {
    if (!a.sa || !a.aa)
        return a = F("DIV", {
            "class": "gt-baf-cell"
        }),
        c = Fs(a, c),
        F("TD", null, c);
    a = F("DIV", {
        "class": "gt-baf-cell gt-baf-marker-container",
        title: a.K[b]
    });
    b = Is("width: %dpx", 8 * b);
    b = F("DIV", {
        "class": "gt-baf-cts",
        style: b
    });
    bg(a, b);
    c = Fs(a, c);
    return F("TD", null, c)
}
  , Qs = function(a, b) {
    var c = F("DIV", {
        "class": "gt-baf-cell gt-baf-previous-word"
    });
    G(c, a);
    a = Fs(c, b);
    return F("TD", null, a)
}
  , Rs = function(a, b, c, d) {
    var e = "";
    kc(a.Ma) !== kc(a.Sa) && (e = Is("direction: %s", kc(a.Ma) ? "rtl" : "ltr"));
    b = F("SPAN", a.ya, b);
    a.c.push(b);
    a = F("DIV", "gt-baf-cell", b);
    a = Fs(a, d);
    d || T(a, "gt-card-widen-wrapper");
    return F("TD", c ? null : {
        colspan: 2,
        style: e
    }, a)
}
  , Ss = function(a, b, c) {
    a = kc(a.Ca) !== kc(a.Sa) ? Is("direction: %s", kc(a.Ca) ? "rtl" : "ltr") : "";
    b = F("DIV", {
        "class": "gt-baf-cell gt-baf-translations",
        style: a
    }, b);
    c = Fs(b, c);
    return F("TD", {
        style: "width: 100%"
    }, c)
};
Js.prototype.Yd = function(a) {
    Js.D.Yd.call(this, a);
    for (var b = Mf("gt-card-widen-wrapper", this.j()), c = 0; c < b.length; c++) {
        var d = b[c]
          , e = D("gt-baf-cell", d)
          , f = Cq(e, "margin");
        e = e.scrollWidth + f.left + f.right + 1;
        Yp(d, "max-width", a ? e + "px" : 0)
    }
}
;
Js.prototype.wb = function(a) {
    var b = Dg(a.target);
    null != b ? (a = D("gt-baf-word", b),
    null != a && this.dispatchEvent(new Kg("b",a))) : Lp(a.target, "gt-baf-word-clickable") ? this.dispatchEvent(new Kg("b",a.target)) : Lp(a.target, "gt-baf-back") && this.dispatchEvent(new Kg("a",a.target))
}
;
Js.prototype.bb = function(a) {
    if (Lp(a.target, "gt-baf-back")) {
        var b = Lf(document, null, "gt-baf-back", this.j());
        a = Ag(a.target);
        for (var c = 0; c < b.length; c++)
            Ag(b[c]) == a && T(b[c], "gt-baf-hl")
    }
}
;
Js.prototype.Ya = function() {
    for (var a = Lf(document, null, "gt-baf-hl", this.j()), b = 0; b < a.length; b++)
        U(a[b], "gt-baf-hl")
}
;
var Us = function(a) {
    this.a = null != a ? new Xm(Ts(a)) : new Xm;
    this.b = "home";
    mn(this.a, "view") && (this.b = this.a.get("view"),
    ln(this.a, "view"))
}
  , Vs = function(a, b) {
    a.b = b;
    return a
}
  , $s = function(a, b, c, d) {
    Ws(a);
    a.a.set("op", "translate").set("sl", b).set("tl", c);
    null != d && !xc(d) && a.a.set("text", d)
}
  , at = function(a, b, c, d) {
    Ws(a);
    a.a.set("op", "star").set("sl", b).set("tl", c).set("text", d)
}
  , Ws = function(a) {
    ln(a.a, "op");
    ln(a.a, "sl");
    ln(a.a, "tl");
    ln(a.a, "text")
};
Us.prototype.Qa = function() {
    return bt(this, "sl")
}
;
Us.prototype.oa = function() {
    return bt(this, "tl")
}
;
var bt = function(a, b) {
    var c = "";
    mn(a.a, b) && (c = a.a.get(b),
    c = de(c));
    return c
}
  , ct = function(a, b) {
    return mn(a.a, "op") && a.a.get("op") === b
};
Us.prototype.toString = function() {
    var a = "view=" + this.b
      , b = this.a;
    jn(b);
    0 == b.b || (a += "&" + this.a.toString());
    return a
}
;
function Ts(a) {
    if (a.startsWith("view="))
        return a;
    var b = new Us;
    if (a.startsWith("op="))
        switch (a = new Xm(a),
        a.get("op")) {
        case "showhistory":
            return Vs(b, "history").toString();
        case "showsaved":
            return Vs(b, "saved").toString();
        case "star":
            if (mn(a, "sl") && mn(a, "tl") && mn(a, "text") && mn(a, "page")) {
                switch (a.get("page")) {
                case "history":
                    Vs(b, "history");
                    break;
                default:
                    Vs(b, "home")
                }
                at(b, a.get("sl"), a.get("tl"), a.get("text"))
            }
            return b.toString();
        default:
            return Vs(b, "home").toString()
        }
    else {
        a = a.split(/[|\/]/);
        Vs(b, "home");
        var c = ""
          , d = ""
          , e = "";
        0 < a.length && 0 < a[0].length && (c = a[0]);
        1 < a.length && 0 < a[1].length && (d = a[1]);
        2 < a.length && 0 < a[2].length && (e = a[2]);
        0 < c.length && 0 < d.length && (0 < e.length ? $s(b, c, d, e) : $s(b, c, d),
        3 < a.length && "share" === a[3] && b.a.set("op", "share"));
        return b.toString()
    }
}
;var dt = function(a, b) {
    Kg.call(this, "navigate");
    this.eh = a;
    this.Sl = b
};
w(dt, Kg);
var ft = function() {
    return !et() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
}
  , et = function() {
    return A("iPad") || A("Android") && !A("Mobile") || A("Silk")
}
  , gt = function() {
    return !ft() && !et()
};
var ht = function(a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c)
        a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};
var nt = function(a, b, c, d) {
    K.call(this);
    if (a && !b)
        throw Error("Can't use invisible history without providing a blank page.");
    if (c)
        var e = c;
    else {
        e = "history_state" + it;
        var f = Jd("input", {
            type: "text",
            name: e,
            id: e,
            style: ec("display:none")
        });
        document.write(Bd(f));
        e = Jf(e)
    }
    this.w = e;
    this.a = c ? Uf(Hf(c)) : window;
    this.G = b;
    B && !b && (this.G = "https" == window.location.protocol ? tc(dc(ec("https:///"))) : tc(dc(ec('javascript:""'))));
    this.b = new zi(150);
    Jg(this, this.b);
    this.g = !a;
    this.c = new Gq(this);
    if (a || jt) {
        if (d)
            var g = d;
        else {
            a = "history_iframe" + it;
            d = this.G;
            b = {
                id: a,
                style: ec("display:none"),
                sandbox: void 0
            };
            d && rc(d);
            c = {};
            c.src = d || null;
            c.srcdoc = null;
            d = {
                sandbox: ""
            };
            e = {};
            for (g in c)
                x(g.toLowerCase() == g, "Must be lower case"),
                e[g] = c[g];
            for (g in d)
                x(g.toLowerCase() == g, "Must be lower case"),
                e[g] = d[g];
            for (g in b) {
                f = g.toLowerCase();
                if (f in c)
                    throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + b[g] + '"');
                f in d && delete e[f];
                e[g] = b[g]
            }
            g = Id("iframe", e, void 0);
            document.write(Bd(g));
            g = Jf(a)
        }
        this.C = g;
        this.N = !0
    }
    jt && (this.c.O(this.a, "load", this.zm),
    this.R = this.L = !1);
    this.g ? kt(this, lt(this), !0) : mt(this, this.w.value);
    it++
};
w(nt, K);
nt.prototype.m = !1;
nt.prototype.o = !1;
nt.prototype.h = null;
var ot = function(a, b) {
    var c = b || ht;
    return function() {
        var d = this || n;
        d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
        var e = c(Qa(a), arguments);
        return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
    }
}(function() {
    return B ? Te(8) : "onhashchange"in n
})
  , jt = B && !Te(8);
k = nt.prototype;
k.Td = null;
k.W = function() {
    nt.D.W.call(this);
    this.c.Ja();
    this.qa(!1)
}
;
k.qa = function(a) {
    if (a != this.m)
        if (jt && !this.L)
            this.R = a;
        else if (a)
            if (we ? this.c.O(this.a.document, pt, this.T) : ze && this.c.O(this.a, "pageshow", this.Em),
            ot() && this.g)
                this.c.O(this.a, "hashchange", this.Bm),
                this.m = !0,
                this.dispatchEvent(new dt(lt(this),!1));
            else {
                if (!B || ft() || this.L)
                    this.c.O(this.b, "tick", v(this.K, this, !0)),
                    this.m = !0,
                    jt || (this.h = lt(this),
                    this.dispatchEvent(new dt(lt(this),!1))),
                    this.b.start()
            }
        else
            this.m = !1,
            Lq(this.c),
            this.b.stop()
}
;
k.zm = function() {
    this.L = !0;
    this.w.value && mt(this, this.w.value, !0);
    this.qa(this.R)
}
;
k.Em = function(a) {
    a.b.persisted && (this.qa(!1),
    this.qa(!0))
}
;
k.Bm = function() {
    var a = qt(this.a);
    a != this.h && rt(this, a, !0)
}
;
var lt = function(a) {
    return null != a.Td ? a.Td : a.g ? qt(a.a) : st(a) || ""
}
  , qt = function(a) {
    a = a.location.href;
    var b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
}
  , tt = function(a, b, c) {
    lt(a) != b && (a.g ? (kt(a, b, c),
    ot() || B && !ft() && mt(a, b, c, void 0),
    a.m && a.K(!1)) : (mt(a, b, c),
    a.Td = a.h = a.w.value = b,
    a.dispatchEvent(new dt(b,!1))))
}
  , kt = function(a, b, c) {
    a = a.a.location;
    var d = a.href.split("#")[0]
      , e = Jc(a.href, "#");
    if (jt || e || b)
        d += "#" + b;
    d != a.href && (b = d,
    d = ec("URL taken from location.href."),
    ab(dc(d), "must provide justification"),
    x(!xc(dc(d)), "must provide non-empty justification"),
    b = Tc(b),
    c ? Zd(a, b) : Yd(a, b))
}
  , mt = function(a, b, c, d) {
    if (a.N || b != st(a))
        if (a.N = !1,
        b = ce(b),
        B) {
            var e = sg(a.C);
            e.open("text/html", c ? "replace" : void 0);
            c = Md(Jd("title", {}, d || a.a.document.title), Jd("body", {}, b));
            e.write(Bd(c));
            e.close()
        } else
            hb(a.G, pc, "this.iframeSrc_ must be set on calls to setIframeToken_"),
            e = rc(a.G) + "#" + b,
            (a = a.C.contentWindow) && (c ? Zd(a.location, e) : Yd(a.location, e))
}
  , st = function(a) {
    if (B)
        return a = sg(a.C),
        a.body ? de(a.body.innerHTML) : null;
    var b = a.C.contentWindow;
    if (b) {
        try {
            var c = de(qt(b))
        } catch (d) {
            return a.o || (1 != a.o && Ai(a.b, 1E4),
            a.o = !0),
            null
        }
        a.o && (0 != a.o && Ai(a.b, 150),
        a.o = !1);
        return c || null
    }
    return null
};
nt.prototype.K = function(a) {
    if (this.g) {
        var b = qt(this.a);
        b != this.h && rt(this, b, a)
    }
    if (!this.g || jt)
        if (b = st(this) || "",
        null == this.Td || b == this.Td)
            this.Td = null,
            b != this.h && rt(this, b, a)
}
;
var rt = function(a, b, c) {
    a.h = a.w.value = b;
    a.g ? (jt && mt(a, b),
    kt(a, b)) : mt(a, b);
    a.dispatchEvent(new dt(lt(a),c))
};
nt.prototype.T = function() {
    this.b.stop();
    this.b.start()
}
;
var pt = ["mousedown", "keydown", "mousemove"]
  , it = 0;
var ut = function(a, b, c) {
    var d = this;
    K.call(this);
    this.b = new nt(!1,void 0,b,c);
    this.c = null;
    this.h = 0;
    this.g = a || !1;
    H(this.b, "navigate", function(e) {
        e.Sl && d.dispatchEvent({
            type: "c",
            eh: e.eh
        })
    }, !1)
};
w(ut, K);
var wt = function(a, b, c, d) {
    var e = ""
      , f = ""
      , g = "";
    if (a.g)
        b = new Us(b),
        e = b.Qa(),
        f = b.oa(),
        g = bt(b, "text");
    else {
        var h = [];
        z(b.split(/[|\/]/), function(l) {
            h.push(de(l))
        });
        e = le(h[0]);
        f = le(h[1]);
        2 < h.length && (g = h[2])
    }
    !xc(e) && !xc(f) && 0 <= c.indexOf(e) && ("auto" === f || 0 <= d.indexOf(f)) ? vt(a.c, e, f, g, "bh") : vt(a.c, "", "", "", "bh")
}
  , xt = function(a, b, c, d) {
    var e = new Us(b);
    b = e.Qa();
    e = e.oa();
    !xc(b) && !xc(e) && 0 <= c.indexOf(b) && ("auto" === e || 0 <= d.indexOf(e)) ? vt(a.c, b, e, "", "bh") : vt(a.c, "", "", "", "bh")
}
  , zt = function(a, b, c, d, e) {
    b = null != b ? b : "auto";
    c = null != c ? c : "en";
    a.g ? (a = yt(a),
    $s(a, b, c, d),
    null != e && "share" === e && a.a.set("op", "share"),
    b = a.toString()) : (b = b + "/" + c + "/" + ce(d),
    e && (b += "/" + e));
    return b
}
  , yt = function(a) {
    if (!a.g)
        throw Error("Should never be invoked without new URL fragment schema");
    return new Us(lt(a.b))
}
  , At = function(a, b, c, d, e, f) {
    a.a(zt(a, b, c, d, f), !e || null != f)
};
ut.prototype.a = function(a, b) {
    var c = (new Date).getTime();
    2E3 < c - this.h ? tt(this.b, a, !1) : tt(this.b, a, !0);
    this.h = b ? 0 : c
}
;
var Bt = function() {};
w(Bt, sr);
Ga(Bt);
k = Bt.prototype;
k.tb = function(a) {
    var b = kr(this, a);
    b = a.a.b("DIV", "goog-inline-block " + b.join(" "), this.Xe(a.Ta(), a.a));
    tr(b, a.h);
    return b
}
;
k.Vc = function() {
    return "button"
}
;
k.Ub = function(a) {
    return a && a.firstChild && a.firstChild.firstChild
}
;
k.Xe = function(a, b) {
    return b.b("DIV", "goog-inline-block " + (this.xa() + "-outer-box"), b.b("DIV", "goog-inline-block " + (this.xa() + "-inner-box"), a))
}
;
k.Uc = function(a) {
    return "DIV" == a.tagName
}
;
k.Xa = function(a, b) {
    x(b);
    Ct(b, !0);
    Ct(b, !1);
    a: {
        var c = a.a.Oh(b);
        var d = this.xa() + "-outer-box";
        if (c && Lp(c, d) && (c = a.a.Oh(c),
        d = this.xa() + "-inner-box",
        c && Lp(c, d))) {
            c = !0;
            break a
        }
        c = !1
    }
    c || b.appendChild(this.Xe(b.childNodes, a.a));
    Mp(b, ["goog-inline-block", this.xa()]);
    return Bt.D.Xa.call(this, a, b)
}
;
k.xa = function() {
    return "goog-custom-button"
}
;
var Ct = function(a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == yc(e))
                    a.removeChild(c);
                else {
                    c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else
                break;
            c = d
        }
};
var Dt = function(a, b, c) {
    Or.call(this, a, b || Bt.M(), c);
    this.Oa(16, !0)
};
w(Dt, Or);
xr("goog-toggle-button", function() {
    return new Dt(null)
});
var Et = function(a, b, c, d) {
    Dt.call(this, a, c || sr.M(), d);
    this.N = a;
    this.m = b || null;
    this.b = null
};
w(Et, Dt);
Et.prototype.ad = function(a) {
    Et.D.ad.call(this, a);
    Ft(this)
}
;
Et.prototype.qa = function(a) {
    Et.D.qa.call(this, a);
    Ft(this)
}
;
var Ft = function(a) {
    a.isEnabled() ? null != a.m && a.g(a.Ea(16) ? a.m : a.N) : a.b ? (a.g(a.b),
    a.b = null) : a.g("")
}
  , Ht = function() {
    ws.call(this);
    this.b = !1;
    Gt(this)
};
w(Ht, ws);
var Gt = function(a) {
    a.b ? (Cr(a, "unstarred"),
    Br(a, "starred")) : (Cr(a, "starred"),
    Br(a, "unstarred"))
}
  , It = function() {};
w(It, sr);
Ga(It);
It.prototype.tb = function(a) {
    var b = a.a.b("DIV", kr(this, a).join(" "))
      , c = a.a.b("SPAN")
      , d = a.a.b("SPAN");
    T(b, "gt-icon-c");
    d.className = "gt-icon-text";
    c.className = "gt-icon";
    b.appendChild(c);
    a.Ta() && (b.appendChild(d),
    this.ac(b, a.Ta()));
    return b
}
;
It.prototype.ac = function(a, b) {
    a && (a = p(a.lastElementChild) ? a.lastElementChild : jg(a.lastChild, !1)) && G(a, b)
}
;
It.prototype.xa = function() {
    return "trans-tool-button"
}
;
It.prototype.Xa = function(a, b) {
    var c = a.Ta();
    b = It.D.Xa.call(this, a, b);
    a.Wc = c;
    c = a.a.b("SPAN");
    var d = a.a.b("SPAN");
    T(b, "gt-icon-c");
    d.className = "gt-icon-text";
    c.className = "gt-icon";
    dg(b);
    b.appendChild(c);
    a.Ta() && (b.appendChild(d),
    this.ac(b, a.Ta()));
    return b
}
;
var Jt = function(a, b) {
    this.c = a;
    this.h = b || !1
};
w(Jt, sr);
Jt.prototype.tb = function(a) {
    var b = a.a.b("DIV", kr(this, a).join(" ") + " goog-inline-block")
      , c = a.a.b("SPAN");
    this.c && T(b, this.c);
    c.className = "jfk-button-img";
    b.appendChild(c);
    a.Ta() && this.ac(b, a.Ta());
    return b
}
;
Jt.prototype.ac = function(a, b) {
    a && !this.h && (ks(a, b, void 0),
    os(a, 2))
}
;
Jt.prototype.xa = function() {
    return "goog-toolbar-button"
}
;
Jt.prototype.Xa = function(a, b) {
    var c = a.a.b("SPAN");
    this.c && T(b, this.c);
    c.className = "jfk-button-img";
    dg(b);
    b.appendChild(c);
    a.Ta() && this.ac(b, a.Ta());
    return b = Jt.D.Xa.call(this, a, b)
}
;
var Kt = function(a, b, c, d) {
    this.text = a;
    this.Ca = b;
    this.Ma = c;
    this.data = d
}
  , Lt = function(a, b, c, d) {
    this.g = a;
    this.c = b;
    this.h = c;
    this.o = d;
    this.a = [];
    this.b = -1;
    H(this.g, "action", this.Km, !1, this);
    H(this.c, "action", this.um, !1, this);
    H(this.h, "action", this.Dn, !1, this)
};
k = Lt.prototype;
k.push = function(a, b, c, d) {
    this.a.splice(++this.b);
    this.a.push(new Kt(a,b,c,d));
    Mt(this)
}
;
k.reset = function() {
    this.a = [];
    this.b = -1
}
;
k.Km = function() {
    0 < this.b && (--this.b,
    Mt(this));
    Dm.M().log("lxprev")
}
;
k.um = function() {
    this.b < this.a.length - 1 && (++this.b,
    Mt(this));
    Dm.M().log("lxnext")
}
;
k.Dn = function() {
    1 < this.a.length && (this.a.splice(1),
    this.b = 0,
    Mt(this));
    Dm.M().log("lxclear")
}
;
var Mt = function(a) {
    var b = a.a[a.b];
    a.o.update(b.text, b.Ca, b.Ma, b.data);
    a.g.qa(1 < a.b);
    a.c.qa(a.b < a.a.length - 1)
};
var Nt = function() {
    this.b = 0;
    this.a = []
};
Ga(Nt);
Nt.prototype.c = function(a) {
    var b = new Image
      , c = this.b++;
    this.a[c] = b;
    b.onload = b.onerror = function() {
        delete Nt.M().a[c]
    }
    ;
    b.src = a;
    b = null
}
;
var Ot = !1
  , Pt = function(a) {
    if (a = a.match(/[\d]+/g))
        a.length = 3
};
(function() {
    if (navigator.plugins && navigator.plugins.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && (Ot = !0,
        a.description)) {
            Pt(a.description);
            return
        }
        if (navigator.plugins["Shockwave Flash 2.0"]) {
            Ot = !0;
            return
        }
    }
    if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"],
    Ot = !(!a || !a.enabledPlugin))) {
        Pt(a.enabledPlugin.description);
        return
    }
    if ("undefined" != typeof ActiveXObject) {
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            Ot = !0;
            Pt(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            Ot = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
            Ot = !0,
            Pt(b.GetVariable("$version"))
        } catch (c) {}
    }
}
)();
var Qt = Ot;
var Rt = function() {
    K.call(this);
    this.url = ""
};
w(Rt, K);
Rt.prototype.Zd = function() {
    this.dispatchEvent(new St(this.url))
}
;
Rt.prototype.play = function(a) {
    this.url = a
}
;
Rt.prototype.c = function() {
    this.dispatchEvent(new Tt(this.url))
}
;
var Ut = function(a) {
    Kg.call(this, "sound_play_start");
    this.url = a
};
w(Ut, Kg);
var Vt = function(a) {
    Kg.call(this, "sound_finished");
    this.url = a
};
w(Vt, Kg);
var St = function(a) {
    Kg.call(this, "sound_interrupted");
    this.url = a
};
w(St, Kg);
var Tt = function(a) {
    Kg.call(this, "sound_error");
    this.url = a
};
w(Tt, Kg);
var Wt = function() {
    Rt.call(this);
    this.o = Audio;
    this.a = new this.o;
    this.b = {}
};
w(Wt, Rt);
Wt.prototype.fh = function() {
    return !this.a.paused
}
;
Wt.prototype.Zd = function() {
    Wt.D.Zd.call(this);
    this.a.pause()
}
;
Wt.prototype.play = function(a) {
    Wt.D.play.call(this, a);
    Xt(this, this.a);
    this.a = null;
    null != this.b[a] ? (this.a = this.b[a],
    this.b[a] = null,
    this.a.play()) : (this.a = Yt(this, a),
    this.a.autoplay = !0)
}
;
Wt.prototype.gj = function(a) {
    n.setTimeout(v(this.m, this, a), 1E3)
}
;
var Yt = function(a, b) {
    var c = new a.o;
    c.setAttribute("src", b);
    H(c, "play", a.h, !1, a);
    H(c, "ended", a.g, !1, a);
    H(c, "error", a.c, !1, a);
    c.load();
    return c
}
  , Xt = function(a, b) {
    nh(b, "play", a.h);
    nh(b, "ended", a.g)
};
Wt.prototype.m = function(a) {
    null != this.b[a] && (Xt(this, this.b[a]),
    this.b[a] = null);
    this.b[a] = Yt(this, a)
}
;
Wt.prototype.h = function() {
    nh(this.a, "play", this.h);
    this.dispatchEvent(new Ut(this.url))
}
;
Wt.prototype.g = function() {
    nh(this.a, "ended", this.g);
    this.dispatchEvent(new Vt(this.url))
}
;
var Zt = function(a) {
    Rt.call(this);
    this.a = a;
    this.b = !1
};
w(Zt, Rt);
k = Zt.prototype;
k.fh = function() {
    return this.b
}
;
k.Zd = function() {
    this.b = !1;
    null != this.a.o && this.a.o();
    $t();
    Zt.D.Zd.call(this)
}
;
k.play = function(a) {
    Zt.D.play.call(this, a);
    n.setTimeout(v(this.Nm, this), 0)
}
;
k.Nm = function() {
    this.b = !0;
    var a = v(this.En, this);
    n.SoundStopCB_ = a;
    null != this.a.g && this.a.g("SoundStopCB_");
    try {
        if (null != this.a.c)
            this.a.c(this.bj());
        else {
            this.b = !1;
            $t();
            this.c();
            return
        }
        var b = v(this.bj, this);
        n._TTSSoundFile = b
    } catch (c) {
        this.b = !1;
        $t();
        this.c();
        return
    }
    null != this.a.h ? this.a.h() : (this.b = !1,
    $t(),
    this.c())
}
;
k.gj = function(a) {
    var b = Nt.M();
    n.setTimeout(v(b.c, b, a), 1E3)
}
;
k.bj = function() {
    return this.url.substring(1)
}
;
k.En = function() {
    this.b = !1;
    $t();
    this.dispatchEvent(new Vt(this.url))
}
;
var $t = function() {
    n.SoundStopCB_ = null
}
  , au = function() {
    this.a = "";
    this.b = null;
    this.c = !1;
    this.F = null
};
Ga(au);
au.prototype.get = function() {
    if (null != this.a && 0 != this.a.length) {
        var a = Jf(this.a);
        if (!this.c && (bu("audio/mpeg") ? (this.b = new Wt,
        a = "html5") : null != a && "OBJECT" == a.tagName && Qt ? (this.b = new Zt(a),
        a = "flash") : (this.b = null,
        a = "none"),
        this.c = !0,
        !this.g && this.F)) {
            this.g = !0;
            var b = bu("audio/mpeg") ? 1 : 0
              , c = bu("audio/ogg") ? 1 : 0
              , d = bu("audio/wav") ? 1 : 0;
            a: {
                try {
                    var e = F("AUDIO");
                    if (null != e && null != e.volume) {
                        var f = e.volume;
                        break a
                    }
                } catch (g) {}
                f = -1
            }
            this.F.log("ttsaudio", {
                mp3: b,
                ogg: c,
                wav: d,
                vol: f,
                type: a
            })
        }
    }
    return this.b
}
;
var bu = function(a) {
    try {
        var b = F("AUDIO");
        return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && "no" != b.canPlayType(a) && "" != b.canPlayType(a)
    } catch (c) {
        return !1
    }
};
var cu = function(a, b, c) {
    K.call(this);
    this.K = b;
    this.m = c ? c : 0;
    this.F = M.M();
    this.C = au.M();
    this.C.a = a;
    this.C.F = b;
    this.b = this.C.get();
    this.G = this.c = null;
    this.a = this.o = 0;
    this.g = {};
    this.h = 0;
    this.w = !1;
    this.R = null
};
w(cu, K);
cu.prototype.set = function(a, b, c, d, e) {
    this.c = a;
    this.o = b;
    this.G = c;
    null != d && (this.R = d);
    null != e && (this.g = Vb(e));
    this.g.total = a.length;
    this.g.ttslocation = this.m;
    du(this)
}
;
cu.prototype.start = function() {
    this.b.fh() && this.b.Zd();
    H(this.b, "sound_play_start", this.V, !1, this);
    H(this.b, "sound_finished", this.T, !1, this);
    H(this.b, "sound_interrupted", this.L, !1, this);
    H(this.b, "sound_error", this.N, !1, this);
    this.h = (new Date).getTime();
    eu(this, "ttsstart", this.g);
    var a = this.F
      , b = this.m
      , c = this.o
      , d = this.c.length
      , e = this.R;
    null != e ? wm(a, 31, b, c, d, void 0, void 0, e) : wm(a, 31, b, c, d);
    this.b.play(this.c[this.a]);
    fu(this)
}
;
cu.prototype.stop = function() {
    if (this.c && this.b.fh()) {
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        eu(this, "ttsstop", a);
        wm(this.F, 32, this.m, this.o, this.c.length, this.G[this.a], this.a);
        du(this);
        this.b.Zd();
        gu(this)
    }
}
;
var du = function(a) {
    a.a = 0;
    a.w = !1;
    nh(a.b, "sound_play_start", a.V, !1, a);
    nh(a.b, "sound_finished", a.T, !1, a);
    nh(a.b, "sound_interrupted", a.L, !1, a);
    nh(a.b, "sound_error", a.N, !1, a)
}
  , eu = function(a, b, c) {
    a.K && a.K.log(b, c)
};
cu.prototype.V = function() {
    if (!this.w) {
        this.dispatchEvent(new hu(this.c));
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        eu(this, "ttsplaystart", a);
        wm(this.F, 33, this.m, this.o, this.c.length, this.G[this.a], this.a);
        this.w = !0
    }
}
;
cu.prototype.T = function() {
    this.a += 1;
    if (this.a < this.c.length)
        this.b.play(this.c[this.a]),
        fu(this);
    else {
        gu(this);
        du(this);
        var a = Vb(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.h;
        eu(this, "ttsfinish", a);
        wm(this.F, 34, this.m, this.o, this.c.length)
    }
}
;
cu.prototype.L = function() {
    var a = Vb(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    eu(this, "ttsinterrupted", a);
    gu(this);
    du(this)
}
;
cu.prototype.N = function() {
    var a = Vb(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.h;
    eu(this, "ttserror", a);
    jm(this.F, 155);
    gu(this);
    du(this)
}
;
var gu = function(a) {
    a.dispatchEvent(new iu(a.c))
}
  , fu = function(a) {
    var b = a.c[a.a + 1];
    null != b && a.b.gj(b)
}
  , hu = function() {
    Kg.call(this, "play_start_playlist")
};
w(hu, Kg);
var iu = function() {
    Kg.call(this, "stop_playlist")
};
w(iu, Kg);
var ju = function(a) {
    this.F = a
};
ju.prototype.g = function(a, b, c) {
    ku(a, b, c, v(this.b, this), v(this.c, this))
}
;
var ku = function(a, b, c, d, e) {
    var f = [];
    d(f, b);
    b = "";
    for (d = 0; d < f.length; d++) {
        var g = yc(b + f[d]);
        g.length <= c ? b += f[d] : (xc(b) || (a.push(yc(b)),
        b = ""),
        g = yc(f[d]),
        g.length <= c ? b = f[d] : e(a, g, c))
    }
    xc(b) || a.push(yc(b))
};
ju.prototype.c = function(a, b, c) {
    for (var d = 0; d < b.length; d += c)
        a.push(b.substr(d, c))
}
;
var lu = / /g
  , mu = /([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)/g;
ju.prototype.b = function(a, b) {
    nu(a, b, lu)
}
;
ju.prototype.a = function(a, b) {
    nu(a, b, mu);
    for (b = 0; b < a.length; b++) {
        var c = {
            length: a[b].length
        };
        this.F && this.F.log("tbphrase", c)
    }
}
;
var nu = function(a, b, c) {
    for (var d = 0; c.test(b); ) {
        var e = c.lastIndex;
        e > d && a.push(b.substr(d, e - d));
        d = e
    }
    b.length > d && a.push(b.substr(d))
};
var ou = [0, 200]
  , pu = {
    af: 1,
    ar: 1,
    bn: 1,
    bs: 1,
    ca: 1,
    cs: 1,
    cy: 1,
    da: 1,
    de: 1,
    el: 1,
    en: 1,
    eo: 1,
    es: 1,
    et: 1,
    fi: 1,
    fr: 1,
    hi: 1,
    hr: 1,
    hu: 1,
    hy: 1,
    id: 1,
    is: 1,
    it: 1,
    ja: 1,
    jw: 1,
    km: 1,
    ko: 1,
    la: 1,
    lv: 1,
    mk: 1,
    ml: 1,
    mr: 1,
    my: 1,
    ne: 1,
    nl: 1,
    no: 1,
    pl: 1,
    pt: 1,
    ro: 1,
    ru: 1,
    si: 1,
    sk: 1,
    sq: 1,
    sr: 1,
    su: 1,
    sv: 1,
    sw: 1,
    ta: 1,
    te: 1,
    th: 1,
    tl: 1,
    tr: 1,
    vi: 1,
    uk: 1,
    zh: 1,
    "zh-cn": 1,
    "zh-tw": 1
};
var qu = function(a, b) {
    this.a = b;
    for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
        var f = a[e] | 0;
        d && f == b || (c[e] = f,
        d = !1)
    }
    this.b = c
}
  , ru = {}
  , su = function(a) {
    return -128 <= a && 128 > a ? ve(ru, a, function(b) {
        return new qu([b | 0],0 > b ? -1 : 0)
    }) : new qu([a | 0],0 > a ? -1 : 0)
}
  , vu = function(a) {
    if (isNaN(a) || !isFinite(a))
        return tu;
    if (0 > a)
        return uu(vu(-a));
    for (var b = [], c = 1, d = 0; a >= c; d++)
        b[d] = a / c | 0,
        c *= 4294967296;
    return new qu(b,0)
}
  , wu = function(a, b) {
    if (0 == a.length)
        throw Error("number format error: empty string");
    b = b || 10;
    if (2 > b || 36 < b)
        throw Error("radix out of range: " + b);
    if ("-" == a.charAt(0))
        return uu(wu(a.substring(1), b));
    if (0 <= a.indexOf("-"))
        throw Error('number format error: interior "-" character');
    for (var c = vu(Math.pow(b, 8)), d = tu, e = 0; e < a.length; e += 8) {
        var f = Math.min(8, a.length - e)
          , g = parseInt(a.substring(e, e + f), b);
        8 > f ? (f = vu(Math.pow(b, f)),
        d = xu(d, f).add(vu(g))) : (d = xu(d, c),
        d = d.add(vu(g)))
    }
    return d
}
  , tu = su(0)
  , yu = su(1)
  , zu = su(16777216)
  , Au = function(a) {
    if (-1 == a.a)
        return -Au(uu(a));
    for (var b = 0, c = 1, d = 0; d < a.b.length; d++)
        b += Bu(a, d) * c,
        c *= 4294967296;
    return b
};
qu.prototype.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a)
        throw Error("radix out of range: " + a);
    if (Cu(this))
        return "0";
    if (-1 == this.a)
        return "-" + uu(this).toString(a);
    for (var b = vu(Math.pow(a, 6)), c = this, d = ""; ; ) {
        var e = Du(c, b).a;
        c = Eu(c, xu(e, b));
        var f = ((0 < c.b.length ? c.b[0] : c.a) >>> 0).toString(a);
        c = e;
        if (Cu(c))
            return f + d;
        for (; 6 > f.length; )
            f = "0" + f;
        d = "" + f + d
    }
}
;
var Fu = function(a, b) {
    return 0 > b ? 0 : b < a.b.length ? a.b[b] : a.a
}
  , Bu = function(a, b) {
    a = Fu(a, b);
    return 0 <= a ? a : 4294967296 + a
}
  , Cu = function(a) {
    if (0 != a.a)
        return !1;
    for (var b = 0; b < a.b.length; b++)
        if (0 != a.b[b])
            return !1;
    return !0
}
  , Gu = function(a, b) {
    a = Eu(a, b);
    return -1 == a.a ? -1 : Cu(a) ? 0 : 1
}
  , uu = function(a) {
    for (var b = a.b.length, c = [], d = 0; d < b; d++)
        c[d] = ~a.b[d];
    return (new qu(c,~a.a)).add(yu)
};
qu.prototype.abs = function() {
    return -1 == this.a ? uu(this) : this
}
;
qu.prototype.add = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0, e = 0; e <= b; e++) {
        var f = d + (Fu(this, e) & 65535) + (Fu(a, e) & 65535)
          , g = (f >>> 16) + (Fu(this, e) >>> 16) + (Fu(a, e) >>> 16);
        d = g >>> 16;
        f &= 65535;
        g &= 65535;
        c[e] = g << 16 | f
    }
    return new qu(c,c[c.length - 1] & -2147483648 ? -1 : 0)
}
;
var Eu = function(a, b) {
    return a.add(uu(b))
}
  , xu = function(a, b) {
    if (Cu(a) || Cu(b))
        return tu;
    if (-1 == a.a)
        return -1 == b.a ? xu(uu(a), uu(b)) : uu(xu(uu(a), b));
    if (-1 == b.a)
        return uu(xu(a, uu(b)));
    if (0 > Gu(a, zu) && 0 > Gu(b, zu))
        return vu(Au(a) * Au(b));
    for (var c = a.b.length + b.b.length, d = [], e = 0; e < 2 * c; e++)
        d[e] = 0;
    for (e = 0; e < a.b.length; e++)
        for (var f = 0; f < b.b.length; f++) {
            var g = Fu(a, e) >>> 16
              , h = Fu(a, e) & 65535
              , l = Fu(b, f) >>> 16
              , m = Fu(b, f) & 65535;
            d[2 * e + 2 * f] += h * m;
            Hu(d, 2 * e + 2 * f);
            d[2 * e + 2 * f + 1] += g * m;
            Hu(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 1] += h * l;
            Hu(d, 2 * e + 2 * f + 1);
            d[2 * e + 2 * f + 2] += g * l;
            Hu(d, 2 * e + 2 * f + 2)
        }
    for (e = 0; e < c; e++)
        d[e] = d[2 * e + 1] << 16 | d[2 * e];
    for (e = c; e < 2 * c; e++)
        d[e] = 0;
    return new qu(d,0)
}
  , Hu = function(a, b) {
    for (; (a[b] & 65535) != a[b]; )
        a[b + 1] += a[b] >>> 16,
        a[b] &= 65535,
        b++
}
  , Iu = function(a, b) {
    this.a = a;
    this.b = b
}
  , Du = function(a, b) {
    if (Cu(b))
        throw Error("division by zero");
    if (Cu(a))
        return new Iu(tu,tu);
    if (-1 == a.a)
        return b = Du(uu(a), b),
        new Iu(uu(b.a),uu(b.b));
    if (-1 == b.a)
        return b = Du(a, uu(b)),
        new Iu(uu(b.a),b.b);
    if (30 < a.b.length) {
        if (-1 == a.a || -1 == b.a)
            throw Error("slowDivide_ only works with positive integers.");
        for (var c = yu, d = b; 0 >= Gu(d, a); )
            c = Ju(c, 1),
            d = Ju(d, 1);
        var e = Ku(c, 1)
          , f = Ku(d, 1);
        d = Ku(d, 2);
        for (c = Ku(c, 2); !Cu(d); ) {
            var g = f.add(d);
            0 >= Gu(g, a) && (e = e.add(c),
            f = g);
            d = Ku(d, 1);
            c = Ku(c, 1)
        }
        b = Eu(a, xu(e, b));
        return new Iu(e,b)
    }
    for (e = tu; 0 <= Gu(a, b); ) {
        c = Math.max(1, Math.floor(Au(a) / Au(b)));
        d = Math.ceil(Math.log(c) / Math.LN2);
        d = 48 >= d ? 1 : Math.pow(2, d - 48);
        f = vu(c);
        for (g = xu(f, b); -1 == g.a || 0 < Gu(g, a); )
            c -= d,
            f = vu(c),
            g = xu(f, b);
        Cu(f) && (f = yu);
        e = e.add(f);
        a = Eu(a, g)
    }
    return new Iu(e,a)
};
qu.prototype.and = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++)
        c[d] = Fu(this, d) & Fu(a, d);
    return new qu(c,this.a & a.a)
}
;
qu.prototype.or = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++)
        c[d] = Fu(this, d) | Fu(a, d);
    return new qu(c,this.a | a.a)
}
;
qu.prototype.xor = function(a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++)
        c[d] = Fu(this, d) ^ Fu(a, d);
    return new qu(c,this.a ^ a.a)
}
;
var Ju = function(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.b.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++)
        e[f] = 0 < b ? Fu(a, f - c) << b | Fu(a, f - c - 1) >>> 32 - b : Fu(a, f - c);
    return new qu(e,a.a)
}
  , Ku = function(a, b) {
    var c = b >> 5;
    b %= 32;
    for (var d = a.b.length - c, e = [], f = 0; f < d; f++)
        e[f] = 0 < b ? Fu(a, f + c) >>> b | Fu(a, f + c + 1) << 32 - b : Fu(a, f + c);
    return new qu(e,a.a)
};
var Lu = function(a) {
    this.a = a
}
  , Ou = function(a) {
    this.b = null;
    var b = tu;
    if (a instanceof qu) {
        if (0 != a.a || 0 > Gu(a, tu) || 0 < Gu(a, Mu))
            throw Error("The address does not look like an IPv4.");
        b = Vb(a)
    } else {
        if (!Nu.test(a))
            throw Error(a + " does not look like an IPv4 address.");
        var c = a.split(".");
        if (4 != c.length)
            throw Error(a + " does not look like an IPv4 address.");
        for (var d = 0; d < c.length; d++) {
            var e = ne(c[d]);
            if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && vc(c[d], "0"))
                throw Error("In " + a + ", octet " + d + " is not valid");
            e = vu(e);
            b = Ju(b, 8).or(e)
        }
    }
    this.a = b
};
w(Ou, Lu);
var Nu = /^[0-9.]*$/
  , Mu = Eu(Ju(yu, 32), yu);
Ou.prototype.toString = function() {
    if (this.b)
        return this.b;
    for (var a = Bu(this.a, 0), b = [], c = 3; 0 <= c; c--)
        b[c] = String(a & 255),
        a >>>= 8;
    return this.b = b.join(".")
}
;
var Su = function(a) {
    this.b = null;
    var b = tu;
    if (a instanceof qu) {
        if (0 != a.a || 0 > Gu(a, tu) || 0 < Gu(a, Pu))
            throw Error("The address does not look like a valid IPv6.");
        b = Vb(a)
    } else {
        if (!Qu.test(a))
            throw Error(a + " is not a valid IPv6 address.");
        var c = a.split(":");
        if (-1 != c[c.length - 1].indexOf(".")) {
            a = Bu(Vb((new Ou(c[c.length - 1])).a), 0);
            var d = [];
            d.push((a >>> 16 & 65535).toString(16));
            d.push((a & 65535).toString(16));
            ub(c, c.length - 1);
            zb(c, d);
            a = c.join(":")
        }
        d = a.split("::");
        if (2 < d.length || 1 == d.length && 8 != c.length)
            throw Error(a + " is not a valid IPv6 address.");
        if (1 < d.length) {
            c = d[0].split(":");
            d = d[1].split(":");
            1 == c.length && "" == c[0] && (c = []);
            1 == d.length && "" == d[0] && (d = []);
            var e = 8 - (c.length + d.length);
            if (1 > e)
                c = [];
            else {
                for (var f = [], g = 0; g < e; g++)
                    f[g] = "0";
                c = xb(c, f, d)
            }
        }
        if (8 != c.length)
            throw Error(a + " is not a valid IPv6 address");
        for (d = 0; d < c.length; d++) {
            e = wu(c[d], 16);
            if (0 > Gu(e, tu) || 0 < Gu(e, Ru))
                throw Error(c[d] + " in " + a + " is not a valid hextet.");
            b = Ju(b, 16).or(e)
        }
    }
    this.a = b
};
w(Su, Lu);
var Qu = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/
  , Ru = su(65535)
  , Pu = Eu(Ju(yu, 128), yu);
Su.prototype.toString = function() {
    if (this.b)
        return this.b;
    for (var a = [], b = 3; 0 <= b; b--) {
        var c = Bu(this.a, b)
          , d = c & 65535;
        a.push((c >>> 16).toString(16));
        a.push(d.toString(16))
    }
    c = b = -1;
    for (var e = d = 0, f = 0; f < a.length; f++)
        "0" == a[f] ? (e++,
        -1 == c && (c = f),
        e > d && (d = e,
        b = c)) : (c = -1,
        e = 0);
    0 < d && (b + d == a.length && a.push(""),
    a.splice(b, d, ""),
    0 == b && (a = [""].concat(a)));
    return this.b = a.join(":")
}
;
var Tu = function() {}, Uu, Vu = {
    http: 1,
    https: 1,
    ftp: 1
}, Wu = function(a, b) {
    try {
        var c = gn(a)
    } catch (l) {
        return !1
    }
    if (!(a = c.c && !Vu[c.c.toLowerCase()] || !c.b)) {
        c = c.b;
        a: {
            a = c.split(".");
            for (var d = 0; d < a.length; d++)
                if (!a[d]) {
                    var e = !1;
                    break a
                }
            if (1 < a.length) {
                b = a[a.length - 1].toLowerCase();
                if (!Uu) {
                    try {
                        e = wf
                    } catch (l) {
                        throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                    }
                    a = {};
                    var f = e.ascii_tlds;
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        a[g.toLowerCase()] = 1
                    }
                    e = e.unicode_tlds;
                    for (d = 0; d < e.length; d++)
                        g = e[d],
                        a[g.toLowerCase()] = 1;
                    Uu = a
                }
                e = !!Uu[b]
            } else
                e = !b
        }
        if (!e) {
            try {
                var h = vc(c, "[") && wc(c, "]") ? new Su(c.substring(1, c.length - 1)) : new Ou(c)
            } catch (l) {
                h = null
            }
            e = null != h
        }
        a = !e
    }
    return a ? !1 : !0
}, Xu = function(a) {
    a = yc(a);
    if (0 <= a.search(/[\s\xa0@]/))
        return !1;
    if (Wu(a, !1))
        return !0;
    var b = a.replace(/%([0-9A-Fa-f][0-9A-Fa-f])/g, function(c, d) {
        return String.fromCharCode(Number("0x" + d))
    });
    return Wu(b, !1) ? !0 : Wu("http://" + a, !0) || Wu("http://" + b, !0)
};
Tu.prototype.a = function(a, b) {
    if ("string" != typeof a)
        throw Error("Pattern is not a string.");
    var c = arguments;
    return a.replace(/%(\d+)\$\w/g, function(d, e) {
        e = parseInt(e, 10);
        return 0 < e && e < c.length ? c[e] : d
    })
}
;
var Yu = function() {
    var a = (new Pm(n.location.href)).a
      , b = a.get("e");
    a = a.get("expid");
    var c = "";
    b && (c += "e=" + b);
    "ForceExperiment" == b && a && (c += "&expid=" + a);
    return c
}
  , Zu = function(a) {
    for (var b = "", c = 0; c < I(a, 5); c++) {
        var d = mp(a, c);
        Dh(d, 4) && 0 < J(d, 4).length ? b = J(d, 4) : (new Ao(d.yb())).Ra[4] = b
    }
}
  , $u = function(a) {
    var b = DATA.DisplayLanguage
      , c = DATA.LoginUrl
      , d = gn(n.location.href)
      , e = d.toString();
    a && (d.g = a,
    2E3 >= ce(d.toString()).length && (e = d.toString()));
    d = c + "/Login?hl=" + b + "&continue=" + ce(e);
    a = {
        target: "_top"
    };
    b = window;
    c = d instanceof Nc ? d : Uc("undefined" != typeof d.href ? d.href : String(d));
    d = a.target || d.target;
    e = [];
    for (var f in a)
        switch (f) {
        case "width":
        case "height":
        case "top":
        case "left":
            e.push(f + "=" + a[f]);
            break;
        case "target":
        case "noopener":
        case "noreferrer":
            break;
        default:
            e.push(f + "=" + (a[f] ? 1 : 0))
        }
    f = e.join(",");
    re() && b.navigator && b.navigator.standalone && d && "_self" != d ? (f = b.document.createElement("A"),
    Vd(f, c),
    f.setAttribute("target", d),
    a.noreferrer && f.setAttribute("rel", "noreferrer"),
    a = document.createEvent("MouseEvent"),
    a.initMouseEvent("click", !0, !0, b, 1),
    f.dispatchEvent(a)) : a.noreferrer ? (f = b.open("", d, f),
    a = Pc(c),
    f && (ye && Jc(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"),
    f.opener = null,
    a = Pd(ec("b/12014412, meta tag with sanitized URL"), '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + ee(a) + '">'),
    f.document.write(Bd(a)),
    f.document.close())) : (f = b.open(Pc(c), d, f)) && a.noopener && (f.opener = null)
}
  , av = function(a) {
    a = kb(El(a, 0, Vl), function(b) {
        return Dh(b, 4)
    });
    a = lb(a, function(b) {
        return Bl(b, 4, 0)
    });
    return mb(a, function(b, c) {
        return b && 1 == c
    }, 0 < a.length)
};
var bv = function(a, b, c, d, e, f, g) {
    K.call(this);
    this.a = a;
    this.aa = Dm.M();
    this.F = M.M();
    this.ba = new ju(this.aa);
    this.Na = b;
    this.N = this.X = this.h = this.c = "";
    this.V = 0;
    this.m = !1;
    this.b = new cu("tts",Dm.M(),c);
    this.Y = null != this.b.b && (Fe && Jc(qd, "UCBrowser") ? !1 : !0);
    this.G = Xe || We;
    H(this.b, "stop_playlist", this.R, !1, this);
    H(this.a, "action", this.fj, !1, this);
    null != this.a.j() && H(this.a.j(), "click", this.Kn, !1, this);
    this.T = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
    this.C = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.K = (a = /gl=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.g = 0;
    this.sa = !!d;
    this.ya = !!e;
    this.L = f || null;
    this.ma = g || null;
    this.o = "";
    this.Ba = new Tu;
    this.w = null
};
w(bv, K);
bv.prototype.W = function() {
    bv.D.W.call(this);
    nh(this.b, "stop_playlist", this.R, !1, this);
    nh(this.a, "action", this.fj, !1, this)
}
;
bv.prototype.R = function() {
    this.a.ad(!1)
}
;
var cv = function(a, b, c, d, e, f) {
    b = me("/translate_tts?ie=UTF-8&q=", ce(b), "&tl=", c, "&total=", d, "&idx=", e, "&textlen=", b.length, vo(b), a.Na, f);
    a.K && (b += "&" + a.K);
    return b
};
k = bv.prototype;
k.update = function(a, b, c, d, e) {
    var f = /([^?.,;:!"#$%&'()*+\-/<=>?@[\]^_`{|}~\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f])/;
    this.o = "";
    if (null != c)
        for (var g = 0; g < I(c, 5); g++) {
            var h = mp(c, g)
              , l = Hh(Do(h, 0), 0)
              , m = Hh(Do(h, 0), 1);
            l = J(h, 4).substring(l, m);
            h = J(Co(h, 0), 0);
            if (l == h && f.test(l)) {
                this.o = J(c, 2);
                break
            }
        }
    this.g = 0;
    this.Y ? xc(a) ? (dv(this, !1),
    this.a.qa(!1)) : (a != this.c || b != this.h || e != this.w ? (this.c = a,
    this.h = b,
    this.w = e || null,
    c = !1) : c = !0,
    c || (this.b.stop(),
    this.m = !this.Y || !b || xc(a) || this.G && a.length > ou[pu[b.toLowerCase()]] ? !1 : b.toLowerCase()in pu),
    dv(this, this.ya || this.m),
    this.a.qa(this.m)) : (dv(this, !1),
    this.a.qa(!1));
    null != d && (this.a.isEnabled() && null != this.L ? this.a.j().setAttribute("data-tooltip", this.L) : !this.a.isEnabled() && null != this.ma && this.a.j().setAttribute("data-tooltip", this.Ba.a(this.ma, d)))
}
;
k.play = function() {
    if (this.c != this.X || this.h != this.N || this.g != this.V) {
        if (this.G)
            var a = [this.c];
        else {
            a = ou[pu[this.h.toLowerCase()]];
            var b = []
              , c = this.ba
              , d = this.c.replace(/[ \u3000\n\r\t\s]+/g, " ");
            ku(b, d, a, v(c.a, c), v(c.g, c));
            a = b
        }
        b = [];
        c = [];
        d = "";
        null != this.T && (d += "&" + this.T);
        null != this.C ? d += "&ttsspeed=" + this.C : 0 != this.g && (d += "&ttsspeed=" + this.g);
        this.o && (d += "&hint=" + this.o);
        for (var e = 0; e < a.length; e++)
            b.push(cv(this, a[e], this.h, a.length, e, d)),
            c.push(a[e].length);
        this.b.set(b, this.c.length, c, this.w, {
            textlen: this.c.length,
            tl: this.h
        });
        this.X = this.c;
        this.N = this.h;
        this.V = this.g
    }
    this.b.start();
    this.sa && (this.g = 0 === this.g ? .24 : 0)
}
;
k.stop = function() {
    this.b.stop()
}
;
k.fj = function() {
    this.a.Ea(16) ? this.play() : this.stop()
}
;
k.Kn = function(a) {
    this.a.isEnabled() || (a.stopPropagation(),
    this.dispatchEvent("userInteractionWhileDisabled"),
    a = this.F,
    N(a, O(a, 306)),
    Im(this.aa, "webapp", "dia", "click", {
        dias: "vo"
    }))
}
;
var dv = function(a, b) {
    a.a.setVisible(b);
    b || a.b.stop()
};
var ev = function(a) {
    if (0 == a)
        return 0;
    if (1 == a)
        return 1;
    var b = .4 * a
      , c = .4 + -.2 * a;
    b += a * (c - b);
    return b + a * (c + a * (.2 + .8 * a - c) - b)
}
  , fv = function(a) {
    if (0 == a)
        return 0;
    if (1 == a)
        return 1;
    var b = 0 * a
      , c = 1 * a;
    b += a * (c - b);
    return b + a * (c + a * (1 + 0 * a - c) - b)
}
  , gv = function(a) {
    var b = a - 0;
    if (0 >= b)
        return 0;
    if (1 <= b)
        return 1;
    for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
        e = ev(b);
        var g = (ev(b + 1E-6) - e) / 1E-6;
        if (1E-6 > Math.abs(e - a))
            return b;
        if (1E-6 > Math.abs(g))
            break;
        else
            e < a ? c = b : d = b,
            b -= (e - a) / g
    }
    for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++)
        e < a ? (c = b,
        b = (b + d) / 2) : (d = b,
        b = (b + c) / 2),
        e = ev(b);
    return b
};
var hv = function(a) {
    var b = [];
    if (a.sentences)
        for (var c = 0, d; d = a.sentences[c]; c++)
            d.trans && b.push(d.trans);
    return b.join("")
}
  , iv = function() {
    for (var a = Array(51), b = 0; 51 > b; b++)
        a[b] = fv(gv(b / 50));
    return function(c) {
        if (0 >= c)
            return 0;
        if (1 <= c)
            return 1;
        var d = 50 * c;
        c = Math.floor(d);
        d -= c;
        return a[c] * (1 - d) + a[c + 1] * d
    }
};
var jv = function(a, b) {
    Bs.call(this, a, "ttl");
    this.b = this.c = null;
    this.g = new Et(MSG_LISTEN,void 0,new Jt("trans-listen-button"));
    this.h = new bv(this.g,"&client=" + (b ? b : "webapp") + "&prev=lc",7)
};
w(jv, Bs);
jv.prototype.Ka = function() {
    jv.D.Ka.call(this);
    this.Da(Yf("DIV"))
}
;
jv.prototype.Da = function(a) {
    jv.D.Da.call(this, a);
    this.j().appendChild(Rp(fo));
    this.c = D("gt-ct-text", this.j());
    a = D("gt-ct-tts", this.j());
    this.b = D("gt-ct-translit", this.j());
    this.g.ia(a)
}
;
jv.prototype.update = function(a, b, c, d) {
    jv.D.update.call(this, a, b, c, d);
    G(this.c, a);
    this.h.update(a, b);
    if (this.data) {
        a = [];
        if (0 < this.data.cc())
            for (b = 0; b < this.data.cc(); b++)
                c = this.data.$a(b),
                Dh(c, 3) && "" != J(c, 3) && a.push(J(c, 3));
        0 < a.length ? (G(this.b, a.join(" ")),
        W(this.b, !0)) : W(this.b, !1)
    }
    this.setVisible(!0);
    return !0
}
;
var kv = function(a, b, c, d, e) {
    Bs.call(this, a, "cm");
    this.aa = b;
    this.C = new jv(a,e ? e : "webapp");
    this.w = null;
    this.sa = c;
    this.b = new X;
    this.gb(this.b);
    this.c = new X;
    this.gb(this.c);
    this.g = this.m = this.K = this.N = this.T = null;
    this.h = [];
    this.Y = !!d;
    this.ba = pl.M();
    this.F = M.M()
};
w(kv, Bs);
k = kv.prototype;
k.Ka = function() {
    kv.D.Ka.call(this);
    this.Da(Yf("DIV"))
}
;
k.Da = function(a) {
    kv.D.Da.call(this, a);
    this.j().appendChild(Rp(co));
    this.C.ia(D("gt-cc-tc", this.j()));
    this.w = D("gt-cc-t", this.j());
    W(this.w, !1);
    this.b.ia(D("gt-cc-l-i", this.j()));
    this.c.ia(D("gt-cc-r-i", this.j()));
    a = D("gt-cc-bc", this.j());
    this.T = new Or("",new Jt("prev-button"));
    this.T.Ua(a);
    this.N = new Or("",new Jt("next-button"));
    this.N.Ua(a);
    this.K = new Or("",new Jt("big-clear-button"));
    this.K.Ua(a);
    this.m = D("gt-cc-exp", this.j());
    this.g = new Lt(this.T,this.N,this.K,this)
}
;
k.ea = function() {
    kv.D.ea.call(this);
    Y(this).O(this, "a", this.jl);
    Y(this).O(this, "b", this.Al);
    Y(this).O(this.m, "click", this.Yk)
}
;
k.Yk = function() {
    W(this.m, !1);
    z(this.h, function(c) {
        c.setVisible(!0)
    });
    var a = {}
      , b = this.F;
    Vq(this.b, function(c) {
        c.isVisible() && (fm(b, c.Jd(), c.ib(), c.mc),
        a[c.Ib()] = c.mc ? "e" : "ne")
    });
    em(this.F, 15, Wq(this.b));
    this.log("expand", a)
}
;
k.jl = function(a) {
    a = Ag(a.target);
    lv(this, this.Ca, this.Ma, a, !1, "clks")
}
;
k.Al = function(a) {
    a = Ag(a.target);
    lv(this, this.Ma, this.Ca, a, !1, "clkt")
}
;
k.fl = function(a) {
    var b = a.text;
    if (!(50 < b.length)) {
        var c = this.g.a[0];
        a.o ? lv(this, c.Ma, c.Ca, b, !0, "sel") : lv(this, c.Ca, c.Ma, b, !0, "sel")
    }
}
;
var lv = function(a, b, c, d, e, f) {
    if (d != a.text || b != a.Ca)
        "zh-TW" == b && (b = "zh-CN"),
        tl(a.ba, f),
        e ? (G(a.C.c, "..."),
        tp(a.aa, b, c, a.Sa, d, v(a.V, a, d, b, c), !1, "UTF-8", new Xm("source=" + f))) : (a.dispatchEvent("translationRefreshed"),
        vt(a.sa, b, c, d, f))
};
kv.prototype.setVisible = function(a) {
    var b = this.j();
    b = !(!b || !D("gender-promo-visible", b));
    kv.D.setVisible.call(this, a || b)
}
;
kv.prototype.update = function(a, b, c, d) {
    kv.D.update.call(this, a, b, c, d);
    var e = 1 != this.g.a.length;
    W(this.w, e);
    V(this.j(), "show-as-one-card", this.Y && e);
    var f = 0
      , g = 0
      , h = !0;
    this.h = [];
    Vq(this.b, function(r) {
        var u = r.update(a, b, c, d);
        f |= u;
        u && (h ? h = !1 : r.yh || (r.setVisible(!1),
        this.h.push(r)))
    }, this);
    mv(this, this.b);
    e = 0 < this.h.length;
    W(this.m, e);
    Vq(this.c, function(r) {
        g |= r.update(a, b, c, d)
    }, this);
    var l = f || g;
    this.setVisible(l);
    this.C.update(a, b, c, d);
    if (l) {
        var m = {}
          , q = this.F;
        Vq(this.b, function(r) {
            r.isVisible() && (fm(q, r.Jd(), r.ib(), r.mc),
            m[r.Ib()] = r.mc ? "e" : "ne")
        });
        Vq(this.c, function(r) {
            r.isVisible() && (fm(q, r.Jd(), r.ib(), r.mc),
            m[r.Ib()] = r.mc ? "e" : "ne")
        });
        m[this.Ib()] = e ? "e" : "ne";
        this.log("show", m);
        fm(this.F, 15, Wq(this.b), !0)
    }
    return l
}
;
kv.prototype.V = function(a, b, c, d) {
    this.g.push(a, b, c, d);
    this.isVisible() || (a = this.g,
    1 < a.a.length && (a.a.splice(a.a.length - 1),
    a.b = a.a.length - 1,
    Mt(a)))
}
;
var mv = function(a, b) {
    var c = [];
    Vq(b, function(d) {
        if (d.isVisible() || sb(this.h, d)) {
            var e = d.Te || d.text;
            sb(c, e) ? d.Jc && G(d.Jc, d.Zi) : c.push(e)
        }
    }, a)
};
var nv = {
    ih: {
        1E3: {
            other: "0K"
        },
        1E4: {
            other: "00K"
        },
        1E5: {
            other: "000K"
        },
        1E6: {
            other: "0M"
        },
        1E7: {
            other: "00M"
        },
        1E8: {
            other: "000M"
        },
        1E9: {
            other: "0B"
        },
        1E10: {
            other: "00B"
        },
        1E11: {
            other: "000B"
        },
        1E12: {
            other: "0T"
        },
        1E13: {
            other: "00T"
        },
        1E14: {
            other: "000T"
        }
    },
    mj: {
        1E3: {
            other: "0 thousand"
        },
        1E4: {
            other: "00 thousand"
        },
        1E5: {
            other: "000 thousand"
        },
        1E6: {
            other: "0 million"
        },
        1E7: {
            other: "00 million"
        },
        1E8: {
            other: "000 million"
        },
        1E9: {
            other: "0 billion"
        },
        1E10: {
            other: "00 billion"
        },
        1E11: {
            other: "000 billion"
        },
        1E12: {
            other: "0 trillion"
        },
        1E13: {
            other: "00 trillion"
        },
        1E14: {
            other: "000 trillion"
        }
    }
}
  , ov = nv;
ov = nv;
var pv = {
    AED: [2, "dh", "\u062f.\u0625."],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34, "Ft", "Ft"],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd", "RUB"],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var qv = {
    pj: ".",
    kh: ",",
    xj: "%",
    wh: "0",
    Aj: "+",
    oh: "-",
    sj: "E",
    zj: "\u2030",
    vj: "\u221e",
    wj: "NaN",
    jh: "#,##0.###",
    Bj: "#E0",
    yj: "#,##0%",
    nj: "\u00a4#,##0.00",
    Uf: "USD"
}
  , rv = qv;
rv = qv;
var uv = function(a) {
    this.m = 40;
    this.a = 1;
    this.L = 0;
    this.b = 3;
    this.w = this.c = 0;
    this.V = !1;
    this.N = this.Fa = "";
    this.G = rv.oh;
    this.C = "";
    this.g = 1;
    this.o = !1;
    this.h = [];
    this.K = this.T = !1;
    this.R = 0;
    if ("number" == typeof a)
        switch (a) {
        case 1:
            sv(this, rv.jh);
            break;
        case 2:
            sv(this, rv.Bj);
            break;
        case 3:
            sv(this, rv.yj);
            break;
        case 4:
            a = rv.nj;
            var b = ["0"]
              , c = pv[rv.Uf][0] & 7;
            if (0 < c) {
                b.push(".");
                for (var d = 0; d < c; d++)
                    b.push("0")
            }
            a = a.replace(/0.00/g, b.join(""));
            sv(this, a);
            break;
        case 5:
            tv(this, 1);
            break;
        case 6:
            tv(this, 2);
            break;
        default:
            throw Error("Unsupported pattern type.");
        }
    else
        sv(this, a)
}
  , sv = function(a, b) {
    b.replace(/ /g, "\u00a0");
    var c = [0];
    a.Fa = vv(a, b, c);
    for (var d = c[0], e = -1, f = 0, g = 0, h = 0, l = -1, m = b.length, q = !0; c[0] < m && q; c[0]++)
        switch (b.charAt(c[0])) {
        case "#":
            0 < g ? h++ : f++;
            0 <= l && 0 > e && l++;
            break;
        case "0":
            if (0 < h)
                throw Error('Unexpected "0" in pattern "' + b + '"');
            g++;
            0 <= l && 0 > e && l++;
            break;
        case ",":
            0 < l && a.h.push(l);
            l = 0;
            break;
        case ".":
            if (0 <= e)
                throw Error('Multiple decimal separators in pattern "' + b + '"');
            e = f + g + h;
            break;
        case "E":
            if (a.K)
                throw Error('Multiple exponential symbols in pattern "' + b + '"');
            a.K = !0;
            a.w = 0;
            c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++,
            a.V = !0);
            for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1); )
                c[0]++,
                a.w++;
            if (1 > f + g || 1 > a.w)
                throw Error('Malformed exponential pattern "' + b + '"');
            q = !1;
            break;
        default:
            c[0]--,
            q = !1
        }
    0 == g && 0 < f && 0 <= e && (g = e,
    0 == g && g++,
    h = f - g,
    f = g - 1,
    g = 1);
    if (0 > e && 0 < h || 0 <= e && (e < f || e > f + g) || 0 == l)
        throw Error('Malformed pattern "' + b + '"');
    h = f + g + h;
    a.b = 0 <= e ? h - e : 0;
    0 <= e && (a.c = f + g - e,
    0 > a.c && (a.c = 0));
    a.a = (0 <= e ? e : h) - f;
    a.K && (a.m = f + a.a,
    0 == a.b && 0 == a.a && (a.a = 1));
    a.h.push(Math.max(0, l));
    a.T = 0 == e || e == h;
    d = c[0] - d;
    a.N = vv(a, b, c);
    c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++,
    1 != a.g && (a.o = !0),
    a.G = vv(a, b, c),
    c[0] += d,
    a.C = vv(a, b, c)) : (a.G += a.Fa,
    a.C += a.N)
}
  , tv = function(a, b) {
    a.R = b;
    sv(a, rv.jh);
    a.c = 0;
    a.b = 2;
    if (0 < a.c)
        throw Error("Can't combine significant digits and minimum fraction digits");
    a.L = 2
}
  , Dv = function(a, b) {
    if (isNaN(b))
        return rv.wj;
    var c = [];
    var d = b
      , e = b;
    if (0 == a.R)
        var f = wv;
    else
        d = Math.abs(d),
        e = Math.abs(e),
        f = xv(a, 1 >= d ? 0 : yv(d)).fg,
        e = zv(e, -f),
        Av(a, e),
        d = zv(d, -f),
        d = Av(a, d),
        f = xv(a, f + yv(d.li));
    b = zv(b, -f.fg);
    c.push(f.prefix);
    d = 0 > b || 0 == b && 0 > 1 / b;
    c.push(d ? a.G : a.Fa);
    if (isFinite(b))
        if (b = b * (d ? -1 : 1) * a.g,
        a.K)
            if (0 == b)
                Bv(a, b, a.a, c),
                Cv(a, 0, c);
            else {
                e = Math.log(b) / Math.log(10);
                x(!p(void 0) || !1);
                e = Math.floor(e + 2E-15);
                b = zv(b, -e);
                var g = a.a;
                1 < a.m && a.m > a.a ? (g = e % a.m,
                0 > g && (g = a.m + g),
                b = zv(b, g),
                e -= g,
                g = 1) : 1 > a.a ? (e++,
                b = zv(b, -1)) : (e -= a.a - 1,
                b = zv(b, a.a - 1));
                Bv(a, b, g, c);
                Cv(a, e, c)
            }
        else
            Bv(a, b, a.a, c);
    else
        c.push(rv.vj);
    c.push(d ? a.C : a.N);
    c.push(f.Ti);
    return c.join("")
}
  , Av = function(a, b) {
    var c = zv(b, a.b);
    0 < a.L && (c = Ev(c, a.L, a.b));
    c = Math.round(c);
    isFinite(c) ? (b = Math.floor(zv(c, -a.b)),
    a = Math.floor(c - zv(b, a.b))) : a = 0;
    return {
        li: b,
        Bk: a
    }
}
  , Bv = function(a, b, c, d) {
    if (a.c > a.b)
        throw Error("Min value must be less than max value");
    d || (d = []);
    b = Av(a, b);
    var e = b.li
      , f = b.Bk
      , g = 0 < a.c || 0 < f || !1;
    b = a.c;
    g && (b = a.c);
    for (var h = "", l = e; 1E20 < l; )
        h = "0" + h,
        l = Math.round(zv(l, -1));
    h = l + h;
    var m = rv.pj;
    l = rv.wh.charCodeAt(0);
    var q = h.length
      , r = 0;
    if (0 < e || 0 < c) {
        for (e = q; e < c; e++)
            d.push(String.fromCharCode(l));
        if (2 <= a.h.length)
            for (c = 1; c < a.h.length; c++)
                r += a.h[c];
        c = q - r;
        if (0 < c) {
            e = a.h;
            r = q = 0;
            for (var u, y = rv.kh, Q = h.length, L = 0; L < Q; L++)
                if (d.push(String.fromCharCode(l + 1 * Number(h.charAt(L)))),
                1 < Q - L)
                    if (u = e[r],
                    L < c) {
                        var Na = c - L;
                        (1 === u || 0 < u && 1 === Na % u) && d.push(y)
                    } else
                        r < e.length && (L === c ? r += 1 : u === L - c - q + 1 && (d.push(y),
                        q += u,
                        r += 1))
        } else {
            c = h;
            h = a.h;
            e = rv.kh;
            u = c.length;
            y = [];
            for (q = h.length - 1; 0 <= q && 0 < u; q--) {
                r = h[q];
                for (Q = 0; Q < r && 0 <= u - Q - 1; Q++)
                    y.push(String.fromCharCode(l + 1 * Number(c.charAt(u - Q - 1))));
                u -= r;
                0 < u && y.push(e)
            }
            d.push.apply(d, y.reverse())
        }
    } else
        g || d.push(String.fromCharCode(l));
    (a.T || g) && d.push(m);
    f = String(f);
    g = f.split("e+");
    2 == g.length && (f = String(Ev(parseFloat(g[0]), a.L, 1)),
    f = f.replace(".", ""),
    f += ke("0", parseInt(g[1], 10) - f.length + 1));
    a.b + 1 > f.length && (f = "1" + ke("0", a.b - f.length) + f);
    for (a = f.length; "0" == f.charAt(a - 1) && a > b + 1; )
        a--;
    for (e = 1; e < a; e++)
        d.push(String.fromCharCode(l + 1 * Number(f.charAt(e))))
}
  , Cv = function(a, b, c) {
    c.push(rv.sj);
    0 > b ? (b = -b,
    c.push(rv.oh)) : a.V && c.push(rv.Aj);
    b = "" + b;
    for (var d = rv.wh, e = b.length; e < a.w; e++)
        c.push(d);
    c.push(b)
}
  , vv = function(a, b, c) {
    for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
        var g = b.charAt(c[0]);
        if ("'" == g)
            c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
            d += "'") : e = !e;
        else if (e)
            d += g;
        else
            switch (g) {
            case "#":
            case "0":
            case ",":
            case ".":
            case ";":
                return d;
            case "\u00a4":
                c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++,
                d += rv.Uf) : d += pv[rv.Uf][1];
                break;
            case "%":
                if (!a.o && 1 != a.g)
                    throw Error("Too many percent/permill");
                if (a.o && 100 != a.g)
                    throw Error("Inconsistent use of percent/permill characters");
                a.g = 100;
                a.o = !1;
                d += rv.xj;
                break;
            case "\u2030":
                if (!a.o && 1 != a.g)
                    throw Error("Too many percent/permill");
                if (a.o && 1E3 != a.g)
                    throw Error("Inconsistent use of percent/permill characters");
                a.g = 1E3;
                a.o = !1;
                d += rv.zj;
                break;
            default:
                d += g
            }
    }
    return d
}
  , wv = {
    prefix: "",
    Ti: "",
    fg: 0
}
  , xv = function(a, b) {
    a = 1 == a.R ? ov.ih : ov.mj;
    null == a && (a = ov.ih);
    if (3 > b)
        return wv;
    b = Math.min(14, b);
    var c = a[zv(1, b)];
    for (--b; !c && 3 <= b; )
        c = a[zv(1, b)],
        b--;
    if (!c)
        return wv;
    a = c.other;
    return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
        prefix: a[1],
        Ti: a[3],
        fg: b + 1 - (a[2].length - 1)
    } : wv : wv
}
  , yv = function(a) {
    if (!isFinite(a))
        return 0 < a ? a : 0;
    for (var b = 0; 1 <= (a /= 10); )
        b++;
    return b
}
  , zv = function(a, b) {
    x(0 == b % 1, 'Cannot shift by fractional digits "%s".', b);
    if (!a || !isFinite(a) || 0 == b)
        return a;
    a = String(a).split("e");
    return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
}
  , Fv = function(a, b) {
    x(0 == b % 1, 'Cannot round to fractional digits "%s".', b);
    return a && isFinite(a) ? zv(Math.round(zv(a, b)), -b) : a
}
  , Ev = function(a, b, c) {
    if (!a)
        return a;
    b = b - yv(a) - 1;
    return b < -c ? Fv(a, -c) : Fv(a, b)
};
var Gv = function(a, b, c) {
    X.call(this);
    this.h = a;
    this.b = b;
    this.c = c;
    this.g = new uv("######")
};
w(Gv, X);
Gv.prototype.Rc = function(a) {
    return a && "DIV" == a.tagName && D("cc-ctr", a) && D("cc-msg", a) ? !0 : !1
}
;
var Jv = function(a) {
    Hv(a, !1);
    Iv(a, 0)
}
  , Iv = function(a, b) {
    b = Dv(a.g, b);
    var c = Dv(a.g, a.h);
    G(D("cc-ctr", a.j()), b + "/" + c)
}
  , Hv = function(a, b) {
    if (b) {
        var c = D("cc-ctr", a.j())
          , d = a.c;
        U(c, a.b);
        T(c, d)
    } else
        c = D("cc-ctr", a.j()),
        d = a.b,
        U(c, a.c),
        T(c, d);
    W(D("cc-msg", a.j()), b)
};
var Kv = function(a, b) {
    Hg.call(this);
    this.c = this.b = 0;
    this.tc = a;
    this.g = b;
    this.a = new Qr(v(this.Gk, this),0,this)
};
w(Kv, Hg);
k = Kv.prototype;
k.W = function() {
    this.a.Ja();
    delete this.tc;
    delete this.g;
    Kv.D.W.call(this)
}
;
k.start = function(a, b) {
    this.stop();
    b = b || 0;
    this.b = Math.max(a || 0, 0);
    this.c = 0 > b ? -1 : Ua() + b;
    this.a.start(0 > b ? this.b : Math.min(this.b, b))
}
;
k.stop = function() {
    this.a.stop()
}
;
k.jb = function() {
    return this.a.jb()
}
;
k.Gk = function() {
    if (!this.tc.call(this.g))
        if (0 > this.c)
            this.a.start(this.b);
        else {
            var a = this.c - Ua();
            0 >= a || this.a.start(Math.min(this.b, a))
        }
}
;
var Mv = function(a) {
    K.call(this);
    this.v = a;
    this.a = this.v.value;
    this.b = new Gq(this);
    this.g = Ua();
    Lv ? this.b.O(a, "paste", this.Hd) : this.b.O(a, ["keydown", "blur", "focus", "mouseover", "input"], this.Xk);
    this.c = new Kv(v(this.Hh, this))
};
w(Mv, K);
var Lv = Ae || B || xe || ze && Re("1.9");
k = Mv.prototype;
k.rc = "init";
k.F = Vi("goog.events.PasteHandler");
k.W = function() {
    Mv.D.W.call(this);
    this.b.Ja();
    this.b = null;
    this.c.Ja();
    this.c = null
}
;
k.Hh = function() {
    if (this.a == this.v.value)
        return !1;
    Yi(this.F, "detected textchange after paste");
    this.dispatchEvent("after_paste");
    return !0
}
;
k.Hd = function(a) {
    a = new Tg(a.b);
    a.type = "paste";
    this.dispatchEvent(a);
    Bi(function() {
        this.Hh() || this.c.start(50, 200)
    }, 0, this)
}
;
k.Xk = function(a) {
    switch (this.rc) {
    case "init":
        switch (a.type) {
        case "blur":
            this.rc = "init";
            break;
        case "focus":
            this.rc = "focused";
            break;
        case "mouseover":
            this.rc = "init";
            this.v.value != this.a && (Yi(this.F, "paste by dragdrop while on init!"),
            this.Hd(a));
            break;
        default:
            Wi(this.F, "unexpected event " + a.type + "during init")
        }
        break;
    case "focused":
        switch (a.type) {
        case "input":
            var b = this.g + 400;
            if (Ua() > b || "focus" == this.h)
                Yi(this.F, "paste by textchange while focused!"),
                this.Hd(a);
            break;
        case "blur":
            this.rc = "init";
            break;
        case "keydown":
            Yi(this.F, "key down ... looking for ctrl+v");
            if (De && we && 0 == a.keyCode || De && we && 17 == a.keyCode)
                break;
            this.rc = "typing";
            break;
        case "mouseover":
            this.v.value != this.a && (Yi(this.F, "paste by dragdrop while focused!"),
            this.Hd(a));
            break;
        default:
            Wi(this.F, "unexpected event " + a.type + " during focused")
        }
        break;
    case "typing":
        switch (a.type) {
        case "input":
            this.rc = "focused";
            break;
        case "blur":
            this.rc = "init";
            break;
        case "keydown":
            if (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode)
                Yi(this.F, "paste by ctrl+v while keypressed!"),
                this.Hd(a);
            break;
        case "mouseover":
            this.v.value != this.a && (Yi(this.F, "paste by dragdrop while keypressed!"),
            this.Hd(a));
            break;
        default:
            Wi(this.F, "unexpected event " + a.type + " during keypressed")
        }
        break;
    default:
        Wi(this.F, "invalid " + this.rc + " state")
    }
    this.g = Ua();
    this.a = this.v.value;
    Yi(this.F, a.type + " -> " + this.rc);
    this.h = a.type
}
;
var Nv = function() {};
w(Nv, hr);
Ga(Nv);
k = Nv.prototype;
k.Vc = function() {}
;
k.Xa = function(a, b) {
    Ar(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    Nv.D.Xa.call(this, a, b);
    a.g(b.value);
    return b
}
;
k.tb = function(a) {
    Ar(a, !1);
    a.xc &= -256;
    a.Oa(32, !1);
    return a.a.b("TEXTAREA", {
        "class": kr(this, a).join(" "),
        disabled: !a.isEnabled()
    }, a.Ta() || "")
}
;
k.Uc = function(a) {
    return "TEXTAREA" == a.tagName
}
;
k.zg = Fa;
k.yg = function(a) {
    return a.isEnabled()
}
;
k.Ld = Fa;
k.ud = function(a, b, c) {
    Nv.D.ud.call(this, a, b, c);
    (a = a.j()) && 1 == b && (a.disabled = c)
}
;
k.fc = Fa;
k.ac = function(a, b) {
    a && (a.value = b)
}
;
k.xa = function() {
    return "goog-textarea"
}
;
var Ov = function(a, b, c) {
    Z.call(this, a, b || Nv.M(), c);
    Ar(this, !1);
    this.Pe = !0;
    (b = this.j()) && this.c.qf(b, !0);
    this.Od = "" != a;
    a || (this.Wc = "")
};
w(Ov, Z);
var Pv = !(B && !Te(11));
k = Ov.prototype;
k.Pd = !1;
k.Bf = !1;
k.Od = !1;
k.Ec = 0;
k.Qg = 0;
k.ei = !1;
k.Kf = !1;
k.Yg = !1;
k.Xg = !1;
k.zd = "";
var Qv = function(a) {
    return a.m.top + a.m.bottom + a.X.top + a.X.bottom
}
  , Rv = function(a) {
    var b = a.Qg
      , c = a.j();
    b && c && a.Kf && (b -= Qv(a));
    return b
};
Ov.prototype.b = function(a) {
    this.g(String(a))
}
;
Ov.prototype.Z = function() {
    return this.j().value != this.zd || Sv(this) || this.Od ? this.j().value : ""
}
;
Ov.prototype.g = function(a) {
    Ov.D.g.call(this, a);
    this.Od = "" != a;
    Tv(this)
}
;
Ov.prototype.qa = function(a) {
    Ov.D.qa.call(this, a);
    this.j().disabled = !a
}
;
var Tv = function(a) {
    a.j() && a.N()
}
  , Sv = function(a) {
    x(a.j());
    return "placeholder"in a.j()
}
  , Uv = function(a) {
    a.zd && (Sv(a) ? a.j().placeholder = a.zd : !a.j() || a.Od || a.Bf || (T(x(a.j()), "textarea-placeholder-input"),
    a.j().value = a.zd))
};
Ov.prototype.ea = function() {
    Ov.D.ea.call(this);
    var a = this.j();
    Yp(a, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box"
    });
    this.m = Dq(a);
    this.X = jq(a);
    Y(this).O(a, "scroll", this.N).O(a, "focus", this.N).O(a, "keyup", this.N).O(a, "mouseup", this.Vb).O(a, "blur", this.bb);
    Uv(this);
    Tv(this)
}
;
var Vv = function(a) {
    if (!a.ei) {
        var b = a.j().cloneNode(!1);
        Yp(b, {
            position: "absolute",
            height: "auto",
            top: "-9999px",
            margin: "0",
            padding: "1px",
            border: "1px solid #000",
            overflow: "hidden"
        });
        bg(a.a.a.body, b);
        var c = b.scrollHeight;
        b.style.padding = "10px";
        var d = b.scrollHeight;
        a.Yg = d > c;
        b.style.borderWidth = "10px";
        a.Xg = b.scrollHeight > d;
        b.style.height = "100px";
        100 != b.offsetHeight && (a.Kf = !0);
        hg(b);
        a.ei = !0
    }
    b = a.j();
    isNaN(a.m.top) && (a.m = Dq(b),
    a.X = jq(b));
    c = a.j().scrollHeight;
    var e = a.j();
    d = e.offsetHeight - e.clientHeight;
    if (!a.Yg) {
        var f = a.m;
        d -= f.top + f.bottom
    }
    a.Xg || (e = jq(e),
    d -= e.top + e.bottom);
    c += 0 < d ? d : 0;
    a.Kf ? c -= Qv(a) : (a.Yg || (d = a.m,
    c += d.top + d.bottom),
    a.Xg || (a = jq(b),
    c += a.top + a.bottom));
    return c
}
  , Wv = function(a, b) {
    a.Ec != b && (a.Ec = b,
    a.j().style.height = b + "px")
}
  , Xv = function(a) {
    var b = a.j();
    b.style.height = "auto";
    var c = b.value.match(/\n/g) || [];
    b.rows = c.length + 1;
    a.Ec = 0
};
Ov.prototype.bb = function() {
    Sv(this) || (this.Bf = !1,
    "" == this.j().value && (this.Od = !1,
    Uv(this)))
}
;
Ov.prototype.N = function(a) {
    if (!this.Pd) {
        var b = this.j();
        !Sv(this) && a && "focus" == a.type && (b.value == this.zd && this.zd && !this.Bf && (U(b, "textarea-placeholder-input"),
        b.value = ""),
        this.Bf = !0,
        this.Od = "" != b.value);
        var c = !1;
        this.Pd = !0;
        a = this.Ec;
        if (b.scrollHeight) {
            var d = !1
              , e = !1
              , f = Vv(this)
              , g = b.offsetHeight
              , h = Rv(this);
            var l = 0;
            var m = this.j();
            l && m && this.Kf && (l -= Qv(this));
            h && f < h ? (Wv(this, h),
            d = !0) : l && f > l ? (Wv(this, l),
            b.style.overflowY = "",
            e = !0) : g != f ? Wv(this, f) : this.Ec || (this.Ec = f);
            d || e || !Pv || (c = !0)
        } else
            Xv(this);
        this.Pd = !1;
        c && (b = this.j(),
        this.Pd || (this.Pd = !0,
        (e = b.scrollHeight) ? (f = Vv(this),
        c = Rv(this),
        c && f <= c || (d = this.m,
        b.style.paddingBottom = d.bottom + 1 + "px",
        Vv(this) == f && (b.style.paddingBottom = d.bottom + e + "px",
        b.scrollTop = 0,
        e = Vv(this) - e,
        e >= c ? Wv(this, e) : Wv(this, c)),
        b.style.paddingBottom = d.bottom + "px")) : Xv(this),
        this.Pd = !1));
        a != this.Ec && this.dispatchEvent("resize")
    }
}
;
Ov.prototype.Vb = function() {
    var a = this.j()
      , b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.Ec && (this.Ec = this.Qg = b)
}
;
var Yv = function(a, b) {
    Ov.call(this, a);
    this.Wb = !!b;
    this.sa = "";
    this.ya = null;
    this.T = 0;
    this.Y = this.ba = !1;
    this.Ba = null
};
w(Yv, Ov);
Yv.prototype.b = function(a) {
    Yv.D.b.call(this, a);
    this.V("set")
}
;
Yv.prototype.ea = function() {
    Yv.D.ea.call(this);
    H(this.j(), "compositionstart", v(this.wb, this), !1, this);
    H(this.j(), "compositionend", v(this.vb, this), !1, this);
    this.Ba = new ar(this.j());
    H(this.Ba, "key", function(a) {
        Zv(this, "key", {
            keyCode: a.keyCode
        })
    }, !1, this);
    H(this.j(), "input", function() {
        Zv(this, "input")
    }, !1, this);
    H(new Mv(this.j()), "paste", function() {
        this.ba = !0;
        Zv(this, "paste")
    }, !1, this);
    H(this.j(), "drop", function() {
        Zv(this, "drop")
    }, !1, this);
    this.ya = new zi(1E3);
    H(this.ya, "tick", function() {
        this.V("timer")
    }, !1, this);
    this.ya.start()
}
;
Yv.prototype.wb = function() {
    this.Y = !0
}
;
Yv.prototype.vb = function() {
    this.Y = !1;
    Zv(this, "input")
}
;
var Zv = function(a, b, c) {
    Bi(v(a.V, a, b, c), 0, a)
};
Yv.prototype.V = function(a, b) {
    if (!this.Y)
        if (this.Wb && "key" == a && b && 13 == b.keyCode)
            this.dispatchEvent("enter");
        else {
            var c = this.Z();
            "" == c.trim() && c != this.sa && this.dispatchEvent("clear");
            c != this.sa && (this.T += 1,
            this.sa = c,
            c = new Kg("change"),
            this.ba && (this.ba = !1,
            a = "paste"),
            c.Gd = a,
            null != b && Xb(c, b),
            this.dispatchEvent(c))
        }
}
;
var $v = function(a) {
    return yc(a.Z())
}
  , aw = function(a) {
    var b = a.T;
    a.T = 0;
    return b
};
var bw = function(a, b) {
    K.call(this);
    this.nd = a;
    this.a = [];
    null != b && this.Bd(b)
};
w(bw, K);
bw.prototype.update = function(a, b) {
    for (var c = this.a.length = 0; c < a.length; ++c)
        this.a.push(a[c]);
    this.dispatchEvent({
        type: this.nd,
        data: this.a,
        selected: null != b ? b : null
    })
}
;
var cw = function(a, b) {
    K.call(this);
    this.T = !!b;
    this.a = "";
    this.V = a;
    this.c = this.b = "";
    this.L = new bw("srcSuggestionUpdated",this);
    this.K = new bw("staticSrcSuggestionUpdated",this);
    this.R = new bw("staticTgtSuggestionUpdated",this);
    this.X = [];
    this.ba = new bw("srcEmphasizeUpdated",this);
    this.Y = new bw("tgtEmphasizeUpdated",this);
    this.aa = this.ma = 0;
    this.o = [];
    this.m = [];
    this.C = [];
    this.N = [];
    this.G = !1;
    this.w = ""
};
w(cw, K);
var dw = function(a, b) {
    var c = [];
    if (b) {
        for (var d = "auto" == a.a ? a.c : a.a, e = -1, f = 0; f < b.length; ++f)
            b[f] == d ? "auto" != a.a && (e = f) : c.push(b[f]);
        b = -1 != e && 3 > e
    } else
        b = !1;
    b || a.G || a.L.update(c ? c.slice(0, 3) : [])
}
  , fw = function(a) {
    var b = a.K
      , c = a.a;
    a = ew(a.C, a.o);
    b.update(a, c)
}
  , gw = function(a) {
    var b = a.R
      , c = a.b;
    a = ew(a.N, a.m);
    b.update(a, c)
};
cw.prototype.g = function(a, b) {
    b = null != b ? b : 0;
    if (3 == b || 4 == b || 5 == b)
        this.G = !0;
    6 == b && (this.w = a);
    "zh-TW" == a && (a = "zh-CN");
    "auto" != a && hw(this, "");
    if (this.a != a) {
        iw(this, this.K, a, this.o);
        var c = this.a;
        this.a = a;
        this.T && jw(this.a, this.o);
        this.V && c != this.a && this.V(kc(this.a) ? "rtl" : "ltr");
        a = "auto" == c ? void 0 : v(this.h, this, c, 6);
        this.ma = b;
        kw(this, this.a, "srcLanguageUpdated", b, a)
    }
}
;
cw.prototype.h = function(a, b) {
    b = null != b ? b : 0;
    6 != b && 5 != b || "zh-CN" != a || "zh-TW" != this.w || (a = "zh-TW");
    5 == b && (this.w = this.b);
    iw(this, this.R, a, this.m);
    if (this.b != a) {
        var c = this.b;
        this.b = a;
        this.T && jw(this.b, this.m);
        this.aa = b;
        kw(this, this.b, "tgtLanguageUpdated", b, v(this.g, this, c, 6))
    }
}
;
var iw = function(a, b, c, d) {
    for (var e = yb(b.a), f = "auto" != c, g = 0; g < e.length; g++)
        if (c == e[g]) {
            f = !1;
            break
        }
    if (a.T && "auto" != c) {
        g = e.length;
        d = e = [c].concat(d instanceof Array ? d : ca(ba(d)), e instanceof Array ? e : ca(ba(e)));
        a = {};
        for (var h = f = 0; h < d.length; ) {
            var l = d[h++];
            var m = l;
            m = Ma(m) ? "o" + Qa(m) : (typeof m).charAt(0) + m;
            Object.prototype.hasOwnProperty.call(a, m) || (a[m] = !0,
            d[f++] = l)
        }
        d.length = f;
        e.length = g
    } else if (f)
        for (a = {},
        0 < d.length && (a[d[0]] = !0),
        1 < d.length && (a[d[1]] = !0),
        g = e.length - 1; 0 <= g; g--)
            if (!a[e[g]]) {
                e[g] = c;
                break
            }
    b.update(e, c)
}
  , hw = function(a, b) {
    "auto" == b && (b = "");
    a.c != b && (a.c = b,
    a.dispatchEvent({
        type: "detectSrcUpdated",
        data: a.c
    }))
}
  , lw = function(a) {
    for (var b = DATA.RecentLanguages.recent_sl, c = 0; c < b.length; ++c)
        a.o.push(b[c])
}
  , mw = function(a) {
    for (var b = DATA.RecentLanguages.recent_tl, c = 0; c < b.length; ++c)
        a.m.push(b[c])
}
  , nw = function(a) {
    a.C = [];
    a.N = [];
    for (var b = window.DEFAULT_SOURCES || [], c = window.DEFAULT_TARGETS || [], d = 0; d < b.length; d++)
        tb(a.C, b[d]);
    for (b = 0; b < c.length; b++)
        tb(a.N, c[b])
}
  , ow = function(a) {
    if (!a || 0 == a.length)
        return "";
    for (var b = [], c = 0; c < a.length; ++c)
        b.push(a[c]);
    return b.join("|")
}
  , kw = function(a, b, c, d, e) {
    a.dispatchEvent({
        type: c,
        data: b,
        Eh: 6 == d
    });
    e && (3 == d || 4 == d) && a.a == a.b && "zh-CN" != a.a && e();
    4 != d && 3 != d || a.dispatchEvent("languageSelected")
}
  , pw = function(a, b) {
    for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]),
    3 <= c.length); ++d)
        ;
    return c
}
  , jw = function(a, b) {
    if ("auto" != a) {
        for (var c = 0; c < b.length && b[c] != a; ++c)
            ;
        c == b.length ? (b.unshift(a),
        10 < b.length && b.pop()) : (b.splice(c, 1),
        b.unshift(a))
    }
}
  , ew = function(a, b) {
    for (var c = {}, d = [], e = 0; e < b.length && 3 > d.length; e++)
        d.push(b[e]),
        c[b[e]] = !0;
    for (e = 0; e < a.length && 3 > d.length; e++)
        null == c[a[e]] && (c[a[e]] = !0,
        d.push(a[e]));
    return d
};
var tw = function(a, b) {
    var c = 0
      , d = 0;
    if (qw(a))
        c = a.selectionStart,
        d = b ? -1 : a.selectionEnd;
    else if (rw()) {
        var e = sw(a)
          , f = e[0];
        e = e[1];
        if (f.inRange(e)) {
            f.setEndPoint("EndToStart", e);
            if ("textarea" == a.type) {
                a = e.duplicate();
                var g = f.text;
                c = g;
                e = d = a.text;
                for (var h = !1; !h; )
                    0 == f.compareEndPoints("StartToEnd", f) ? h = !0 : (f.moveEnd("character", -1),
                    f.text == g ? c += "\r\n" : h = !0);
                if (b)
                    b = [c.length, -1];
                else {
                    for (b = !1; !b; )
                        0 == a.compareEndPoints("StartToEnd", a) ? b = !0 : (a.moveEnd("character", -1),
                        a.text == d ? e += "\r\n" : b = !0);
                    b = [c.length, c.length + e.length]
                }
                return b
            }
            c = f.text.length;
            d = b ? -1 : f.text.length + e.text.length
        }
    }
    return [c, d]
}
  , sw = function(a) {
    var b = a.ownerDocument || a.document
      , c = b.selection.createRange();
    "textarea" == a.type ? (b = b.body.createTextRange(),
    b.moveToElementText(a)) : b = a.createTextRange();
    return [b, c]
}
  , uw = function(a, b) {
    "textarea" == a.type && (b = ae(a.value.substring(0, b)).length);
    return b
}
  , qw = function(a) {
    try {
        return "number" == typeof a.selectionStart
    } catch (b) {
        return !1
    }
}
  , rw = function() {
    return B && !Re("9")
};
var vw = function(a, b, c, d) {
    var e = DATA.DisplayLanguage
      , f = DATA.MaxSingleQueryLength;
    this.b = a;
    this.h = b;
    this.L = e;
    this.g = c;
    this.c = f;
    this.a = d || null;
    this.o = !1;
    this.m = new Dm;
    this.m.c = "webapp";
    this.F = M.M()
}
  , ww = function(a) {
    H(a.b, "change", a.w, !1, a);
    H(document, "selectionchange", a.C, !1, a);
    H(new Mv(a.b.j()), "paste", a.G, !1, a)
};
vw.prototype.w = function(a) {
    var b = this.b.Z().length;
    this.a && Iv(this.a, b);
    var c = "set" == a.Gd;
    a = "key" == a.Gd;
    if (b > this.c) {
        if (!tq(this.g.j()) && !a || c)
            this.g.setVisible(!0),
            a = this.h.c,
            "" == a && (a = this.h.a),
            c = b - this.c,
            Im(this.m, "webapp", "ov", "1", {
                sl: this.h.a,
                tl: this.h.b,
                dl: a,
                hl: this.L,
                ql: b,
                ol: c
            }),
            a = this.F,
            N(a, mm(a, 250, b, c)),
            this.a && Hv(this.a, !0),
            b = this.b.Z().substring(this.c),
            this.g.g = b,
            b = this.g,
            c = {
                maximum_input_count: Dv(b.X, this.c)
            },
            a = xw(b.V, c),
            G(D("snck-msg", b.j()), a),
            c = xw(b.Y, c),
            G(D("ovfl-xlt", b.j()), c);
        this.b.g(this.b.Z().substring(0, this.c));
        this.a && Iv(this.a, this.c)
    } else
        b < this.c && this.a && Hv(this.a, !1),
        (c || 0 == b) && yw(this)
}
;
var yw = function(a) {
    a.g.g = "";
    a.g.setVisible(!1);
    a.a && Hv(a.a, !1)
};
vw.prototype.C = function() {
    var a = tw(this.b.j(), !1)
      , b = this.b.Z().length;
    this.o = 0 != b && 0 == a[0] && a[1] == b
}
;
vw.prototype.G = function() {
    this.o && yw(this)
}
;
var zw = function(a, b, c, d, e, f, g, h) {
    X.call(this);
    this.c = Dm.M();
    this.T = a;
    this.N = b;
    this.X = c;
    this.V = d;
    this.Y = e;
    this.b = f;
    this.m = g;
    this.h = null != h ? h : null;
    this.F = M.M();
    this.w = !1
};
w(zw, X);
zw.prototype.setVisible = function(a) {
    a && !this.w ? (this.c.log("community-promo", "show-" + this.b),
    pm(this.F, this.m),
    W(this.g, !0)) : W(this.g, !1)
}
;
zw.prototype.Da = function(a) {
    zw.D.Da.call(this, a);
    this.g = Rp(Zn, {
        Zl: this.T,
        Yl: this.N,
        zn: this.X,
        pn: this.V,
        url: this.Y,
        id: this.b
    });
    a.appendChild(this.g);
    var b = D("cp-dismiss", a);
    Y(this).O(b, "click", this.C);
    a = D("cp-promo-href", a);
    Y(this).O(a, "click", this.K)
}
;
zw.prototype.C = function() {
    this.c.log("community-promo", "dismiss-" + this.b);
    Hm(this.c, "/translate/uc?ua=dcp&uav=" + this.b);
    var a = this.F;
    N(a, om(a, 74, this.m));
    this.setVisible(!1);
    this.w = !0
}
;
zw.prototype.K = function(a) {
    this.c.log("community-promo", "click-" + this.b);
    qm(this.F, this.m);
    this.h && this.h.a() && (this.h.reset(),
    a.preventDefault(),
    a.stopPropagation())
}
;
var Aw = function(a, b) {
    this.a = a;
    this.b = b || null
};
Aw.prototype.Va = function() {
    return this.a
}
;
Aw.prototype.rb = function() {
    return this.b
}
;
var Bw = function() {};
w(Bw, hr);
Ga(Bw);
k = Bw.prototype;
k.Vc = function() {
    return "menuitem"
}
;
k.tb = function(a) {
    var b = F("DIV", null, a.Va());
    T(b, "gt-is-sg");
    var c = F("DIV", null, "");
    T(c, a.Mh ? "gt-is-ld-top" : "gt-is-ld");
    c = ["DIV", kr(this, a), c];
    var d = F("SPAN");
    if (a.Kc) {
        var e = new Or(null,new Jt);
        e.Ua(d);
        T(e.j(), "gt-is-flag");
        ks(e.j(), a.lg, void 0);
        e.setVisible(!1);
        a.Qb = e;
        d.id = Pq(e)
    }
    e = F("DIV");
    T(e, "gt-is-ca");
    var f = new Or;
    f.v = e;
    a.kc = f;
    c = c.concat([b, d, e]);
    a.Sm && (b = F("DIV", null, a.rb()),
    c.push(b),
    T(b, "gt-is-tr"));
    b = F.apply(null, c);
    b.id = Pq(a);
    return a.v = b
}
;
k.Uc = function(a) {
    return "DIV" == a.tagName
}
;
k.xa = function() {
    return "gt-is-itm"
}
;
k.ud = function(a, b, c) {
    Bw.D.ud.call(this, a, b, c);
    2 == b && a.Kc && a.Qb && !a.Id && a.Qb.setVisible(c)
}
;
var Cw = function(a, b, c, d, e, f, g) {
    Z.call(this, a.Va(), f || Bw.M(), g);
    this.Ud = a;
    this.Kc = b;
    this.lg = c;
    this.kc = null;
    this.Mh = d;
    this.Sm = e;
    this.Id = !1;
    this.Oa(1, !1)
};
w(Cw, Z);
Cw.prototype.Va = function() {
    return this.Ud.Va()
}
;
Cw.prototype.rb = function() {
    return this.Ud.rb()
}
;
Cw.prototype.ub = function(a) {
    this.Kc && ng(this.Qb.j(), a.target) ? (this.Id = !0,
    this.Qb.ub(a)) : this.kc && ng(this.kc.j(), a.target) ? this.kc.ub(a) : Cw.D.ub.call(this, a)
}
;
Cw.prototype.Cb = function(a) {
    if (this.kc && ng(this.kc.j(), a.target))
        this.kc.Cb(a);
    else if (this.Kc && ng(this.Qb.j(), a.target) && this.Id)
        this.Qb.Cb(a),
        this.Id = !1,
        this.Ea(2) || this.Qb.setVisible(!1);
    else {
        if (this.Kc) {
            var b = this.getParent();
            z(b.b, function(c) {
                c.Id && (c.Id = !1,
                Gr(c.Qb, !1));
                c != this && c.Qb.setVisible(!1)
            })
        }
        Cw.D.Cb.call(this, a)
    }
}
;
var Dw = function(a, b, c, d) {
    var e = "md";
    null != d && d && (e = "m" + e);
    Cs.call(this, a, e, MSG_DEFINITIONS_OF, "", 7);
    this.K = b;
    this.C = null != c ? c : !0
};
w(Dw, Cs);
Dw.prototype.update = function(a, b, c, d) {
    Dw.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 12) && 0 == I(d, 15))
        return !1;
    dg(this.b);
    this.Ad();
    this.g = 0;
    a = I(d, 12);
    b = 3 > a;
    for (var e = c = 0; e < I(d, 12); e++)
        c += (new Io(Dl(d, 12, e))).b();
    c = 5 > c ? c : 3;
    for (e = this.w = 0; e < a; ++e) {
        var f = new Io(Dl(d, 12, e))
          , g = J(new Io(Dl(d, 12, e)), 2)
          , h = F("DIV", {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(h);
        G(h, J(f, 0));
        h = d;
        var l = b
          , m = c
          , q = Math.ceil(m / a)
          , r = F("DIV", {
            "class": "gt-def-list"
        })
          , u = kc(this.Ca) ? "rtl" : "ltr";
        Yp(r, {
            direction: u
        });
        for (u = 0; u < f.b(); ++u) {
            var y = f.c(u)
              , Q = J(y, 0)
              , L = J(y, 2);
            var Na = h;
            for (var Hb = [], Ha = 0; Ha < I(Na, 11); ++Ha)
                for (var Ib = new cp(Dl(Na, 11, Ha)), wg = 0; wg < Ib.b(); ++wg) {
                    var Be = Ib.c(wg);
                    if (J(y, 1) == J(Be, 1)) {
                        for (var Qm = [], Pj = 0; Pj < I(Be, 0); ++Pj)
                            tb(Qm, Fh(Be, 0, Pj));
                        tb(Hb, Qm)
                    }
                }
            Na = Hb;
            if (y = 1 > u || l && u < q && this.w < m)
                this.w += 1;
            Q = Ew(this, u + 1, Q, L, Na, y);
            r.appendChild(Q);
            this.g += 1
        }
        this.b.appendChild(r)
    }
    for (e = 0; e < I(d, 15); e++)
        l = new To(Dl(d, 15, e)),
        m = J(l, 1),
        h = J(l, 2),
        f = F("DIV", {
            "class": "gt-def-row"
        }),
        m = F("DIV", {
            "class": "gt-kp-desc"
        }, m),
        q = F("A"),
        q.setAttribute("href", J(l, 3)),
        q.setAttribute("target", "_blank"),
        l = F("IMG", {
            "class": "gt-kp-image"
        }),
        l.setAttribute("src", h),
        q.appendChild(l),
        f.appendChild(q),
        f.appendChild(m),
        this.b.appendChild(f);
    g && (this.Te = g,
    Ds(this, g));
    if (!b && this.g > 1 * a || b && this.g > c)
        d = MSG_N_MORE_DEFINITIONS_LABEL.replace("%1$s", (this.g - this.w).toLocaleString(this.Sa)),
        Es(this, d, MSG_FEWER_DEFINITIONS_LABEL);
    else
        for (d = Mf("gt-card-expand-wrapper", this.j()),
        g = 0; g < d.length; g++)
            a = d[g],
            D("gt-def-synonym", a) && U(a, "gt-card-expand-wrapper");
    this.setVisible(!0);
    return !0
}
;
Dw.prototype.ea = function() {
    Dw.D.ea.call(this);
    Y(this).O(this.j(), "click", this.T)
}
;
Dw.prototype.Da = function(a) {
    Dw.D.Da.call(this, a)
}
;
var Ew = function(a, b, c, d, e, f) {
    var g = kc(a.Ma) ? "rtl" : "ltr";
    b = Sp(go, {
        $j: b.toLocaleString(a.Sa),
        rj: a.K,
        ak: c,
        xk: d,
        un: MSG_SYNONYMS_LOWERCASE,
        rn: e,
        gh: g,
        Sj: a.C,
        Ca: a.Ca
    });
    a.C && z(Mf("gt-cd-cl", b), function(h) {
        this.c.push(h)
    }, a);
    Gs(a, D("gt-mt-md", b), c);
    (c = D("gt-ex-mt", b)) && Gs(a, c, d);
    (d = D("gt-def-synonym-title", b)) && kc(a.Sa) != kc(a.Ca) && (a = kc(a.Sa),
    Yp(d, "direction", a ? "rtl" : "ltr"),
    Yp(d, "padding-" + (a ? "left" : "right"), "8px"));
    return Fs(b, f)
};
Dw.prototype.T = function(a) {
    Lp(a.target, "gt-cd-cl") && this.dispatchEvent(new Kg("a",a.target))
}
;
Dw.prototype.ib = function() {
    return this.C ? this.re() : this.g
}
;
var Gw = function(a) {
    Fw();
    return ld(a)
}
  , Hw = function(a) {
    Fw();
    return tc(a)
}
  , Fw = Fa;
var Iw = function(a, b, c) {
    var d = "ex";
    null != c && c && (d = "m" + d);
    this.K = b;
    Cs.call(this, a, d, MSG_EXAMPLES_OF, MSG_EXAMPLES, 9);
    this.g = new gp;
    this.C = this.w = "ltr"
};
w(Iw, Cs);
Iw.prototype.update = function(a, b, c, d) {
    Iw.D.update.call(this, a, b, c, d);
    dg(this.b);
    this.g = new gp(d.Ra[13]);
    if (0 == I(this.g, 0))
        return !1;
    this.setVisible(!0);
    3 <= I(this.g, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace("%1$s", (I(this.g, 0) - 1).toLocaleString(this.Sa)),
    Es(this, a, MSG_FEWER_EXAMPLES_LABEL));
    this.w = kc(this.Ca) ? "rtl" : "ltr";
    this.C = kc(this.Ma) ? "rtl" : "ltr";
    for (a = 0; a < I(this.g, 0); ++a) {
        b = 0 == a || 1 == a && 2 == I(this.g, 0);
        var e = new ep(Dl(this.g, 0, a));
        c = J(e, 1);
        d = J(e, 2);
        var f = MSG_MT_FROM_GOOGLE
          , g = this.w;
        e = J(e, 0);
        Fw();
        e = Nd(e, null);
        c = Sp(ao, {
            ln: g,
            Nf: e,
            Wl: d,
            Xl: c,
            gh: this.C,
            Qn: f,
            gn: this.K
        });
        b = Fs(c, b);
        this.b.appendChild(b)
    }
    return !0
}
;
Iw.prototype.aj = function() {
    var a = {};
    a.total = I(this.g, 0);
    return a
}
;
Iw.prototype.ib = function() {
    return I(this.g, 0)
}
;
var Jw = function() {};
Ga(Jw);
var Kw = function(a) {
    a: {
        var b = a.changedTouches[0];
        switch (a.type) {
        case "touchstart":
            var c = "mousedown";
            break;
        case "touchmove":
            c = "mousemove";
            break;
        case "touchend":
            c = "mouseup";
            break;
        default:
            b = null;
            break a
        }
        var d = document.createEvent("MouseEvent");
        d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
        b = d
    }
    null != b && (a.changedTouches[0].target.dispatchEvent(b),
    a.preventDefault())
}
  , Lw = We || Xe || Ye
  , Mw = function(a, b) {
    Lw && (b.addEventListener("touchstart", Kw, !0),
    b.addEventListener("touchmove", Kw, !0),
    b.addEventListener("touchend", Kw, !0),
    b.addEventListener("touchcancel", Kw, !0))
};
var Nw = function(a) {
    this.c = a
};
Ga(Nw);
var Ow = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
Nw.prototype.m = function(a) {
    return a.a.b("DIV", Pw(this, a).join(" "))
}
;
Nw.prototype.h = function(a) {
    return a
}
;
Nw.prototype.b = function(a) {
    return "DIV" == a.tagName
}
;
var Sw = function(a, b, c) {
    c.id && Qq(b, c.id);
    var d = a.a()
      , e = !1
      , f = Kp(c);
    f && z(f, function(g) {
        g == d ? e = !0 : g && (g == d + "-disabled" ? b.qa(!1) : g == d + "-horizontal" ? Qw(b, "horizontal") : g == d + "-vertical" && Qw(b, "vertical"))
    }, a);
    e || T(c, d);
    Rw(a, b, a.h(c));
    return c
}
  , Rw = function(a, b, c) {
    if (c)
        for (var d = c.firstChild, e; d && d.parentNode == c; ) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var f = a.g(d);
                f && (f.v = d,
                b.isEnabled() || f.qa(!1),
                b.gb(f),
                f.ia(d))
            } else
                d.nodeValue && "" != yc(d.nodeValue) || c.removeChild(d);
            d = e
        }
};
Nw.prototype.g = function(a) {
    a: {
        x(a);
        a = Kp(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (d = d in wr ? wr[d]() : null) {
                a = d;
                break a
            }
        }
        a = null
    }
    return a
}
;
Nw.prototype.o = function(a) {
    a = a.j();
    x(a, "The container DOM element cannot be null.");
    yq(a, !0, ze);
    B && (a.hideFocus = !0);
    var b = this.c;
    b && Dp(a, b)
}
;
Nw.prototype.a = function() {
    return "goog-container"
}
;
var Pw = function(a, b) {
    a = a.a();
    var c = [a, "horizontal" == b.yd ? a + "-horizontal" : a + "-vertical"];
    b.isEnabled() || c.push(a + "-disabled");
    return c
}
  , Tw = function() {
    return "vertical"
};
var Uw = function(a, b, c) {
    X.call(this, c);
    this.Tc = b || Nw.M();
    this.yd = a || Tw()
};
w(Uw, X);
k = Uw.prototype;
k.Rd = null;
k.ze = null;
k.Tc = null;
k.yd = null;
k.Cc = !0;
k.Sc = !0;
k.pd = !0;
k.Ia = -1;
k.cb = null;
k.Fc = !1;
k.yc = null;
var Vw = function(a) {
    return a.Rd || a.j()
}
  , Yw = function(a, b) {
    if (a.pd) {
        var c = Vw(a)
          , d = a.Aa;
        a.Rd = b;
        var e = Vw(a);
        d && (a.Rd = c,
        Ww(a, !1),
        a.Rd = b,
        $q(Xw(a), e),
        Ww(a, !0))
    } else
        throw Error("Can't set key event target for container that doesn't support keyboard focus!");
}
  , Xw = function(a) {
    return a.ze || (a.ze = new ar(Vw(a)))
};
k = Uw.prototype;
k.Ka = function() {
    this.v = this.Tc.m(this)
}
;
k.$b = function() {
    return this.Tc.h(this.j())
}
;
k.Rc = function(a) {
    return this.Tc.b(a)
}
;
k.Da = function(a) {
    this.v = Sw(this.Tc, this, a);
    "none" == a.style.display && (this.Cc = !1)
}
;
k.ea = function() {
    Uw.D.ea.call(this);
    Vq(this, function(b) {
        b.Aa && Zw(this, b)
    }, this);
    var a = this.j();
    this.Tc.o(this);
    this.setVisible(this.Cc, !0);
    Y(this).O(this, "enter", this.Dg).O(this, "highlight", this.xe).O(this, "unhighlight", this.xg).O(this, "open", this.bl).O(this, "close", this.Hk).O(a, Rg.he, this.ub).O(Hf(a), [Rg.ie, Rg.ge], this.Tk).O(a, [Rg.he, Rg.ie, Rg.ge, "mouseover", "mouseout", "contextmenu"], this.Mk);
    this.pd && Ww(this, !0)
}
;
var Ww = function(a, b) {
    var c = Y(a)
      , d = Vw(a);
    b ? c.O(d, "focus", a.Uh).O(d, "blur", a.pf).O(Xw(a), "key", a.ab) : c.Ha(d, "focus", a.Uh).Ha(d, "blur", a.pf).Ha(Xw(a), "key", a.ab)
};
k = Uw.prototype;
k.mb = function() {
    this.uc(-1);
    this.cb && this.cb.Wa(!1);
    this.Fc = !1;
    Uw.D.mb.call(this)
}
;
k.W = function() {
    Uw.D.W.call(this);
    this.ze && (this.ze.Ja(),
    this.ze = null);
    this.Tc = this.cb = this.yc = this.Rd = null
}
;
k.Dg = function() {
    return !0
}
;
k.xe = function(a) {
    var b = Zq(this, a.target);
    if (-1 < b && b != this.Ia) {
        var c = $w(this);
        c && Hr(c, !1);
        this.Ia = b;
        c = $w(this);
        this.Fc && Gr(c, !0);
        this.cb && c != this.cb && (pr(c, 64) ? c.Wa(!0) : this.cb.Wa(!1))
    }
    b = this.j();
    x(b, "The DOM element for the container cannot be null.");
    null != a.target.j() && Fp(b, "activedescendant", a.target.j().id)
}
;
k.xg = function(a) {
    a.target == $w(this) && (this.Ia = -1);
    a = this.j();
    x(a, "The DOM element for the container cannot be null.");
    a.removeAttribute(Ep("activedescendant"))
}
;
k.bl = function(a) {
    (a = a.target) && a != this.cb && a.getParent() == this && (this.cb && this.cb.Wa(!1),
    this.cb = a)
}
;
k.Hk = function(a) {
    a.target == this.cb && (this.cb = null);
    var b = this.j()
      , c = a.target.j();
    b && a.target.Ea(2) && c && Ip(b, c)
}
;
k.ub = function(a) {
    this.Sc && (this.Fc = !0);
    var b = Vw(this);
    b && xg(b) && yg(b) ? b.focus() : a.preventDefault()
}
;
k.Tk = function() {
    this.Fc = !1
}
;
k.Mk = function(a) {
    a: {
        var b = a.target;
        if (this.yc)
            for (var c = this.j(); b && b !== c; ) {
                var d = b.id;
                if (d in this.yc) {
                    b = this.yc[d];
                    break a
                }
                b = b.parentNode
            }
        b = null
    }
    if (b)
        switch (a.type) {
        case Rg.he:
            b.ub(a);
            break;
        case Rg.ie:
        case Rg.ge:
            b.Cb(a);
            break;
        case "mouseover":
            b.Ag(a);
            break;
        case "mouseout":
            b.Gg(a);
            break;
        case "contextmenu":
            b.Ce(a)
        }
}
;
k.Uh = function() {}
;
k.pf = function() {
    this.uc(-1);
    this.Fc = !1;
    this.cb && this.cb.Wa(!1)
}
;
k.ab = function(a) {
    return this.isEnabled() && this.isVisible() && (0 != Wq(this) || this.Rd) && this.ye(a) ? (a.preventDefault(),
    a.stopPropagation(),
    !0) : !1
}
;
k.ye = function(a) {
    var b = $w(this);
    if (b && "function" == typeof b.ab && b.ab(a) || this.cb && this.cb != b && "function" == typeof this.cb.ab && this.cb.ab(a))
        return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
        return !1;
    switch (a.keyCode) {
    case 27:
        if (this.pd)
            Vw(this).blur();
        else
            return !1;
        break;
    case 36:
        ax(this);
        break;
    case 35:
        bx(this);
        break;
    case 38:
        if ("vertical" == this.yd)
            cx(this);
        else
            return !1;
        break;
    case 37:
        if ("horizontal" == this.yd)
            Yq(this) ? dx(this) : cx(this);
        else
            return !1;
        break;
    case 40:
        if ("vertical" == this.yd)
            dx(this);
        else
            return !1;
        break;
    case 39:
        if ("horizontal" == this.yd)
            Yq(this) ? cx(this) : dx(this);
        else
            return !1;
        break;
    default:
        return !1
    }
    return !0
}
;
var Zw = function(a, b) {
    var c = b.j();
    c = c.id || (c.id = Pq(b));
    a.yc || (a.yc = {});
    a.yc[c] = b
};
Uw.prototype.gb = function(a, b) {
    hb(a, Z, "The child of a container must be a control");
    Uw.D.gb.call(this, a, b)
}
;
Uw.prototype.ld = function(a, b, c) {
    hb(a, Z);
    a.Je |= 2;
    a.Je |= 64;
    a.Oa(32, !1);
    Ar(a, !1);
    var d = a.getParent() == this ? Zq(this, a) : -1;
    Uw.D.ld.call(this, a, b, c);
    a.Aa && this.Aa && Zw(this, a);
    a = d;
    -1 == a && (a = Wq(this));
    a == this.Ia ? this.Ia = Math.min(Wq(this) - 1, b) : a > this.Ia && b <= this.Ia ? this.Ia++ : a < this.Ia && b > this.Ia && this.Ia--
}
;
Uw.prototype.removeChild = function(a, b) {
    a = t(a) ? Sq(this, a) : a;
    hb(a, Z);
    if (a) {
        var c = Zq(this, a);
        -1 != c && (c == this.Ia ? (Hr(a, !1),
        this.Ia = -1) : c < this.Ia && this.Ia--);
        var d = a.j();
        d && d.id && this.yc && (c = this.yc,
        d = d.id,
        d in c && delete c[d])
    }
    a = Uw.D.removeChild.call(this, a, b);
    Ar(a, !0);
    return a
}
;
var Qw = function(a, b) {
    if (a.j())
        throw Error("Component already rendered");
    a.yd = b
};
Uw.prototype.isVisible = function() {
    return this.Cc
}
;
Uw.prototype.setVisible = function(a, b) {
    if (b || this.Cc != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.Cc = a;
        var c = this.j();
        c && (W(c, a),
        this.pd && Ow(Vw(this), this.Sc && this.Cc),
        b || this.dispatchEvent(this.Cc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
}
;
Uw.prototype.isEnabled = function() {
    return this.Sc
}
;
Uw.prototype.qa = function(a) {
    this.Sc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Sc = !0,
    Vq(this, function(b) {
        b.ij ? delete b.ij : b.qa(!0)
    })) : (Vq(this, function(b) {
        b.isEnabled() ? b.qa(!1) : b.ij = !0
    }),
    this.Fc = this.Sc = !1),
    this.pd && Ow(Vw(this), a && this.Cc))
}
;
var ex = function(a, b) {
    b != a.pd && a.Aa && Ww(a, b);
    a.pd = b;
    a.Sc && a.Cc && Ow(Vw(a), b)
};
Uw.prototype.uc = function(a) {
    (a = Xq(this, a)) ? Hr(a, !0) : -1 < this.Ia && Hr($w(this), !1)
}
;
var $w = function(a) {
    return Xq(a, a.Ia)
}
  , ax = function(a) {
    fx(a, function(b, c) {
        return (b + 1) % c
    }, Wq(a) - 1)
}
  , bx = function(a) {
    fx(a, function(b, c) {
        b--;
        return 0 > b ? c - 1 : b
    }, 0)
}
  , dx = function(a) {
    fx(a, function(b, c) {
        return (b + 1) % c
    }, a.Ia)
}
  , cx = function(a) {
    fx(a, function(b, c) {
        b--;
        return 0 > b ? c - 1 : b
    }, a.Ia)
}
  , fx = function(a, b, c) {
    c = 0 > c ? Zq(a, a.cb) : c;
    var d = Wq(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d; ) {
        var f = Xq(a, c);
        if (f && a.Fh(f)) {
            a.uc(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
};
Uw.prototype.Fh = function(a) {
    return a.isVisible() && a.isEnabled() && pr(a, 2)
}
;
var gx = function() {};
w(gx, hr);
Ga(gx);
gx.prototype.xa = function() {
    return "goog-menuheader"
}
;
var hx = function(a, b, c) {
    Z.call(this, a, c || gx.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.Xc = 1
};
w(hx, Z);
xr("goog-menuheader", function() {
    return new hx(null)
});
var ix = function() {
    this.c = []
};
w(ix, hr);
Ga(ix);
var jx = function(a, b) {
    var c = a.c[b];
    if (!c) {
        switch (b) {
        case 0:
            c = a.xa() + "-highlight";
            break;
        case 1:
            c = a.xa() + "-checkbox";
            break;
        case 2:
            c = a.xa() + "-content"
        }
        a.c[b] = c
    }
    return c
};
k = ix.prototype;
k.Vc = function() {
    return "menuitem"
}
;
k.tb = function(a) {
    var b = a.a.b("DIV", kr(this, a).join(" "), kx(this, a.Ta(), a.a));
    lx(this, a, b, pr(a, 8) || pr(a, 16));
    return b
}
;
k.Ub = function(a) {
    return a && a.firstChild
}
;
k.Xa = function(a, b) {
    x(b);
    var c = kg(b)
      , d = jx(this, 2);
    c && Lp(c, d) || b.appendChild(kx(this, b.childNodes, a.a));
    Lp(b, "goog-option") && (a.Oa(16, !0),
    a && b && lx(this, a, b, !0));
    return ix.D.Xa.call(this, a, b)
}
;
k.ac = function(a, b) {
    var c = this.Ub(a)
      , d = mx(this, a) ? c.firstChild : null;
    ix.D.ac.call(this, a, b);
    d && !mx(this, a) && c.insertBefore(d, c.firstChild || null)
}
;
var kx = function(a, b, c) {
    a = jx(a, 2);
    return c.b("DIV", a, b)
}
  , mx = function(a, b) {
    return (b = a.Ub(b)) ? (b = b.firstChild,
    a = jx(a, 1),
    !!b && lg(b) && Lp(b, a)) : !1
}
  , lx = function(a, b, c, d) {
    or(a, c, b.C());
    qr(a, b, c);
    d != mx(a, c) && (V(c, "goog-option", d),
    c = a.Ub(c),
    d ? (a = jx(a, 1),
    c.insertBefore(b.a.b("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
};
ix.prototype.a = function(a) {
    switch (a) {
    case 2:
        return jx(this, 0);
    case 16:
    case 8:
        return "goog-option-selected";
    default:
        return ix.D.a.call(this, a)
    }
}
;
ix.prototype.g = function(a) {
    var b = jx(this, 0);
    switch (a) {
    case "goog-option-selected":
        return 16;
    case b:
        return 2;
    default:
        return ix.D.g.call(this, a)
    }
}
;
ix.prototype.xa = function() {
    return "goog-menuitem"
}
;
var nx = function(a, b, c, d) {
    Z.call(this, a, d || ix.M(), c);
    this.ma = b
};
w(nx, Z);
k = nx.prototype;
k.Z = function() {
    var a = this.ma;
    return null != a ? a : this.qb()
}
;
k.Oa = function(a, b) {
    nx.D.Oa.call(this, a, b);
    switch (a) {
    case 8:
        this.Ea(16) && !b && this.ad(!1);
        (a = this.j()) && this && a && lx(this.c, this, a, b);
        break;
    case 16:
        (a = this.j()) && this && a && lx(this.c, this, a, b)
    }
}
;
k.qb = function() {
    var a = this.Ta();
    return Ja(a) ? (a = lb(a, function(b) {
        return lg(b) && (Lp(b, "goog-menuitem-accel") || Lp(b, "goog-menuitem-mnemonic-separator")) ? "" : Bg(b)
    }).join(""),
    be(a)) : nx.D.qb.call(this)
}
;
k.Cb = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.aa;
        b.aa = null;
        if (b = c && ya(a.clientX))
            b = new Df(a.clientX,a.clientY),
            b = c == b ? !0 : c && b ? c.x == b.x && c.a == b.a : !1;
        if (b)
            return
    }
    nx.D.Cb.call(this, a)
}
;
k.Md = function(a) {
    return a.keyCode == this.xi && this.Yc(a) ? !0 : nx.D.Md.call(this, a)
}
;
k.Fk = function() {
    return this.xi
}
;
xr("goog-menuitem", function() {
    return new nx(null)
});
nx.prototype.C = function() {
    return pr(this, 16) ? "menuitemcheckbox" : pr(this, 8) ? "menuitemradio" : nx.D.C.call(this)
}
;
nx.prototype.getParent = function() {
    return Z.prototype.getParent.call(this)
}
;
nx.prototype.ef = function() {
    return Z.prototype.ef.call(this)
}
;
var ox = function() {};
w(ox, hr);
Ga(ox);
ox.prototype.tb = function(a) {
    return a.a.b("DIV", this.xa())
}
;
ox.prototype.Xa = function(a, b) {
    b.id && Qq(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.tb(a);
        eg(b, c);
        hg(c)
    } else
        T(b, this.xa());
    return b
}
;
ox.prototype.ac = function() {}
;
ox.prototype.xa = function() {
    return "goog-menuseparator"
}
;
var px = function(a, b) {
    Z.call(this, null, a || ox.M(), b);
    this.Oa(1, !1);
    this.Oa(2, !1);
    this.Oa(4, !1);
    this.Oa(32, !1);
    this.Xc = 1
};
w(px, Z);
px.prototype.ea = function() {
    px.D.ea.call(this);
    var a = this.j();
    x(a, "The DOM element for the separator cannot be null.");
    Dp(a, "separator")
}
;
xr("goog-menuseparator", function() {
    return new px
});
var qx = function(a) {
    this.c = a || "menu"
};
w(qx, Nw);
Ga(qx);
qx.prototype.b = function(a) {
    return "UL" == a.tagName || qx.D.b.call(this, a)
}
;
qx.prototype.g = function(a) {
    return "HR" == a.tagName ? new px : qx.D.g.call(this, a)
}
;
qx.prototype.a = function() {
    return "goog-menu"
}
;
qx.prototype.o = function(a) {
    qx.D.o.call(this, a);
    a = a.j();
    x(a, "The menu DOM element cannot be null.");
    Fp(a, "haspopup", "true")
}
;
var rx = function(a) {
    px.call(this, ox.M(), a)
};
w(rx, px);
xr("goog-menuseparator", function() {
    return new px
});
var sx = function(a, b) {
    Uw.call(this, "vertical", b || qx.M(), a);
    ex(this, !1)
};
w(sx, Uw);
sx.prototype.N = !0;
var ux = function(a, b) {
    if (ng(a.j(), b))
        return !0;
    for (var c = 0, d = Wq(a); c < d; c++) {
        var e = Xq(a, c);
        if ("function" == typeof e.Cg && e.Cg(b))
            return !0
    }
    return !1
};
k = sx.prototype;
k.ib = function() {
    return Wq(this)
}
;
k.setVisible = function(a, b, c) {
    (b = sx.D.setVisible.call(this, a, b)) && a && this.Aa && this.N && Vw(this).focus();
    a && c && ya(c.clientX) ? this.aa = new Df(c.clientX,c.clientY) : this.aa = null;
    return b
}
;
k.Dg = function(a) {
    this.N && Vw(this).focus();
    return sx.D.Dg.call(this, a)
}
;
k.ii = function(a) {
    var b = new RegExp("^" + je(a),"i");
    fx(this, function(c, d) {
        var e = 0 > c ? 0 : c
          , f = !1;
        do {
            ++c;
            c == d && (c = 0,
            f = !0);
            var g = Xq(this, c).qb();
            if (g && g.match(b))
                return c
        } while (!f || c != e);return this.Ia
    }, this.Ia)
}
;
k.Fh = function(a) {
    return a.isEnabled() && a.isVisible() && pr(a, 2)
}
;
k.Da = function(a) {
    for (var b = this.Tc, c = Lf(this.a.a, "DIV", b.a() + "-content", a), d = c.length, e = 0; e < d; e++)
        Rw(b, this, c[e]);
    sx.D.Da.call(this, a)
}
;
k.ye = function(a) {
    var b = sx.D.ye.call(this, a);
    b || Vq(this, function(c) {
        !b && c.Fk && c.xi == a.keyCode && (this.isEnabled() && this.uc(Zq(this, c)),
        b = c.ab(a))
    }, this);
    return b
}
;
k.uc = function(a) {
    sx.D.uc.call(this, a);
    (a = Xq(this, a)) && lq(a.j(), this.j())
}
;
var vx = function(a, b, c) {
    nx.call(this, a, b, c);
    this.Oa(8, !0)
};
w(vx, nx);
vx.prototype.Yc = function() {
    return this.dispatchEvent("action")
}
;
xr("goog-option", function() {
    return new vx(null)
});
var wx = function(a, b, c) {
    this.a = a;
    this.g = b;
    this.w = c
};
w(wx, Zr);
wx.prototype.c = function(a, b, c) {
    Yr(this.a, this.g, a, b, void 0, c, this.w)
}
;
var xx = function(a, b, c, d) {
    wx.call(this, a, b);
    this.h = c ? 5 : 0;
    this.o = d || void 0
};
w(xx, wx);
xx.prototype.m = function() {
    return this.h
}
;
xx.prototype.b = function(a) {
    this.h = a
}
;
xx.prototype.c = function(a, b, c, d) {
    var e = Yr(this.a, this.g, a, b, null, c, 10, d, this.o);
    if (e & 496) {
        var f = yx(e, this.g);
        b = yx(e, b);
        e = Yr(this.a, f, a, b, null, c, 10, d, this.o);
        e & 496 && (f = yx(e, f),
        b = yx(e, b),
        Yr(this.a, f, a, b, null, c, this.h, d, this.o))
    }
}
;
var yx = function(a, b) {
    a & 48 && (b ^= 4);
    a & 192 && (b ^= 1);
    return b
};
var zx = function(a, b, c, d) {
    xx.call(this, a, b, c || d);
    (c || d) && this.b(65 | (d ? 32 : 132))
};
w(zx, xx);
var Ax = function() {};
w(Ax, Bt);
Ga(Ax);
Ax.prototype.Ub = function(a) {
    return Ax.D.Ub.call(this, a && a.firstChild)
}
;
Ax.prototype.Xa = function(a, b) {
    var c = Lf(document, "*", "goog-menu", b)[0];
    if (c) {
        W(c, !1);
        bg(Hf(c).body, c);
        var d = new sx;
        d.ia(c);
        a.Ie(d)
    }
    return Ax.D.Xa.call(this, a, b)
}
;
Ax.prototype.Xe = function(a, b) {
    return Ax.D.Xe.call(this, [b.b("DIV", "goog-inline-block " + (this.xa() + "-caption"), a), b.b("DIV", "goog-inline-block " + (this.xa() + "-dropdown"), "\u00a0")], b)
}
;
Ax.prototype.xa = function() {
    return "goog-menu-button"
}
;
var Bx = function(a, b, c, d, e) {
    Or.call(this, a, c || Ax.M(), d);
    this.Oa(64, !0);
    this.m = new zx(null,9);
    b && this.Ie(b);
    this.ba = null;
    this.N = new zi(500);
    !We && !Xe || Re("533.17.9") || (this.Ff = !0);
    this.jd = e || qx.M()
};
w(Bx, Or);
k = Bx.prototype;
k.Ff = !1;
k.ea = function() {
    Bx.D.ea.call(this);
    Cx(this, !0);
    this.b && Dx(this, this.b, !0);
    Fp(Rq(this), "haspopup", !!this.b)
}
;
k.mb = function() {
    Bx.D.mb.call(this);
    Cx(this, !1);
    if (this.b) {
        this.Wa(!1);
        this.b.mb();
        Dx(this, this.b, !1);
        var a = this.b.j();
        a && hg(a)
    }
}
;
k.W = function() {
    Bx.D.W.call(this);
    this.b && (this.b.Ja(),
    delete this.b);
    delete this.vb;
    this.N.Ja()
}
;
k.ub = function(a) {
    Bx.D.ub.call(this, a);
    this.jb() && (this.Wa(!this.Ea(64), a),
    this.b && (this.b.Fc = this.Ea(64)))
}
;
k.Cb = function(a) {
    Bx.D.Cb.call(this, a);
    this.b && !this.jb() && (this.b.Fc = !1)
}
;
k.Yc = function() {
    Gr(this, !1);
    return !0
}
;
k.Sk = function(a) {
    this.b && this.b.isVisible() && !this.Cg(a.target) && this.Wa(!1)
}
;
k.Cg = function(a) {
    return a && ng(this.j(), a) || this.b && ux(this.b, a) || !1
}
;
k.Md = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(),
        "keyup" != a.type)
            return !0
    } else if ("key" != a.type)
        return !1;
    if (this.b && this.b.isVisible()) {
        var b = 13 == a.keyCode || 32 == a.keyCode
          , c = this.b.ab(a);
        return 27 == a.keyCode || b ? (this.Wa(!1),
        !0) : c
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Wa(!0, a),
    !0) : !1
}
;
k.Eg = function() {
    this.Wa(!1)
}
;
k.$k = function() {
    this.jb() || this.Wa(!1)
}
;
k.rf = function(a) {
    this.Ff || this.Wa(!1);
    Bx.D.rf.call(this, a)
}
;
var Ex = function(a) {
    a.b || a.Ie(new sx(a.a,a.jd));
    return a.b || null
};
Bx.prototype.Ie = function(a) {
    var b = this.b;
    if (a != b && (b && (this.Wa(!1),
    this.Aa && Dx(this, b, !1),
    delete this.b),
    this.Aa && Fp(Rq(this), "haspopup", !!a),
    a)) {
        this.b = a;
        Tq(a, this);
        a.setVisible(!1);
        var c = this.Ff;
        (a.N = c) && ex(a, !0);
        this.Aa && Dx(this, a, !0)
    }
    return b
}
;
var Fx = function(a, b) {
    b && (a.m = b,
    a.vb = b.a)
}
  , Gx = function(a, b) {
    a.ba = b
};
k = Bx.prototype;
k.Ae = function(a) {
    Ex(this).gb(a, !0)
}
;
k.ib = function() {
    return this.b ? Wq(this.b) : 0
}
;
k.setVisible = function(a, b) {
    (a = Bx.D.setVisible.call(this, a, b)) && !this.isVisible() && this.Wa(!1);
    return a
}
;
k.qa = function(a) {
    Bx.D.qa.call(this, a);
    this.isEnabled() || this.Wa(!1)
}
;
k.Wa = function(a, b) {
    Bx.D.Wa.call(this, a);
    if (this.b && this.Ea(64) == a) {
        if (a)
            this.b.Aa || this.b.Ua(),
            this.wb = iq(this.j()),
            this.bb = rq(this.j()),
            Hx(this),
            !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.uc(-1) : ax(this.b);
        else {
            Gr(this, !1);
            this.b.Fc = !1;
            var c = this.j();
            c && (Fp(c, "activedescendant", ""),
            Fp(c, "owns", ""));
            null != this.T && (this.T = void 0,
            (c = this.b.j()) && pq(c, "", ""))
        }
        this.b.setVisible(a, !1, b);
        this.lc || (b = Y(this),
        c = a ? b.O : b.Ha,
        c.call(b, this.a.a, "mousedown", this.Sk, !0),
        this.Ff && c.call(b, this.b, "blur", this.$k),
        c.call(b, this.N, "tick", this.fd),
        a ? this.N.start() : this.N.stop())
    }
    this.b && this.b.j() && Rq(this.b).removeAttribute(Ep("hidden"))
}
;
var Hx = function(a) {
    if (a.b.Aa) {
        var b = a.m;
        a.m.a = a.vb || a.j();
        var c = a.b.j();
        a.b.isVisible() || (c.style.visibility = "hidden",
        W(c, !0));
        !a.T && a.m.m && a.m.h & 32 && (a.T = qq(c));
        b.c(c, b.g ^ 1, a.ba, a.T);
        a.b.isVisible() || (W(c, !1),
        c.style.visibility = "visible")
    }
};
Bx.prototype.fd = function() {
    var a = rq(this.j())
      , b = iq(this.j());
    var c = this.bb;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.wb,
    c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.bb = a,
    this.wb = b,
    Hx(this))
}
;
var Dx = function(a, b, c) {
    var d = Y(a);
    c = c ? d.O : d.Ha;
    c.call(d, b, "action", a.Eg);
    c.call(d, b, "close", a.Wb);
    c.call(d, b, "highlight", a.Zc);
    c.call(d, b, "unhighlight", a.ed)
}
  , Cx = function(a, b) {
    var c = Y(a);
    (b ? c.O : c.Ha).call(c, a.j(), "keydown", a.hd)
};
Bx.prototype.Zc = function(a) {
    (a = a.target.j()) && Ix(this, a)
}
;
Bx.prototype.hd = function(a) {
    pr(this, 32) && this.j() && this.b && this.b.isVisible() && a.stopPropagation()
}
;
Bx.prototype.ed = function() {
    if (!$w(this.b)) {
        var a = this.j();
        x(a, "The menu button DOM element cannot be null.");
        Fp(a, "activedescendant", "");
        Fp(a, "owns", "")
    }
}
;
Bx.prototype.Wb = function(a) {
    if (this.Ea(64) && a.target instanceof nx) {
        a = a.target;
        var b = a.j();
        a.isVisible() && a.Ea(2) && null != b && Ix(this, b)
    }
}
;
var Ix = function(a, b) {
    a = a.j();
    x(a, "The menu button DOM element cannot be null.");
    b = Hp(b) || b;
    if (!b.id) {
        var c = Mq.M();
        b.id = ":" + (c.a++).toString(36)
    }
    Ip(a, b);
    Fp(a, "owns", b.id)
};
xr("goog-menu-button", function() {
    return new Bx(null)
});
var Kx = function(a) {
    K.call(this);
    this.a = [];
    Jx(this, a)
};
w(Kx, K);
Kx.prototype.b = null;
Kx.prototype.ib = function() {
    return this.a.length
}
;
var Jx = function(a, b) {
    b && (z(b, function(c) {
        Lx(c, !1)
    }, a),
    zb(a.a, b))
}
  , Mx = function(a, b, c) {
    b && (Lx(b, !1),
    Bb(a.a, c, 0, b))
}
  , Nx = function(a) {
    var b = a.b;
    return b ? jb(a.a, b) : -1
}
  , Ox = function(a) {
    var b = a.a;
    if (!Ja(b))
        for (var c = b.length - 1; 0 <= c; c--)
            delete b[c];
    b.length = 0;
    a.b = null
};
Kx.prototype.W = function() {
    Kx.D.W.call(this);
    delete this.a;
    this.b = null
}
;
var Lx = function(a, b) {
    a && "function" == typeof a.bd && a.bd(b)
};
var Px = function(a, b, c, d, e) {
    Bx.call(this, a, b, c, d, e || new qx("listbox"));
    this.Y = this.Ta();
    this.sa = null;
    this.Bg = "listbox"
};
w(Px, Bx);
k = Px.prototype;
k.Ga = null;
k.ea = function() {
    Px.D.ea.call(this);
    Qx(this);
    Rx(this)
}
;
k.Da = function(a) {
    Px.D.Da.call(this, a);
    (a = this.qb()) ? (this.Y = a,
    Qx(this)) : Sx(this) || Tx(this, 0)
}
;
k.W = function() {
    Px.D.W.call(this);
    this.Ga && (this.Ga.Ja(),
    this.Ga = null);
    this.Y = null
}
;
k.Eg = function(a) {
    Ux(this, a.target);
    Px.D.Eg.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
}
;
k.il = function() {
    var a = Sx(this);
    Px.D.nf.call(this, a && a.Z());
    Qx(this)
}
;
k.Ie = function(a) {
    var b = Px.D.Ie.call(this, a);
    a != b && (this.Ga && Ox(this.Ga),
    a && (this.Ga ? Vq(a, function(c) {
        Vx(c);
        var d = this.Ga;
        Mx(d, c, d.ib())
    }, this) : Wx(this, a)));
    return b
}
;
k.Ae = function(a) {
    Vx(a);
    Px.D.Ae.call(this, a);
    if (this.Ga) {
        var b = this.Ga;
        Mx(b, a, b.ib())
    } else
        Wx(this, Ex(this));
    Xx(this)
}
;
var Ux = function(a, b) {
    if (a.Ga) {
        var c = Sx(a)
          , d = a.Ga;
        b != d.b && (Lx(d.b, !1),
        d.b = b,
        Lx(b, !0));
        d.dispatchEvent("select");
        b != c && a.dispatchEvent("change")
    }
}
  , Tx = function(a, b) {
    a.Ga && Ux(a, a.Ga.a[b] || null)
};
Px.prototype.nf = function(a) {
    if (null != a && this.Ga)
        for (var b = 0, c; c = this.Ga.a[b] || null; b++)
            if (c && "function" == typeof c.Z && c.Z() == a) {
                Ux(this, c);
                return
            }
    Ux(this, null)
}
;
Px.prototype.Z = function() {
    var a = Sx(this);
    return a ? a.Z() : null
}
;
var Sx = function(a) {
    return a.Ga ? a.Ga.b : null
}
  , Wx = function(a, b) {
    a.Ga = new Kx;
    b && Vq(b, function(c) {
        Vx(c);
        var d = this.Ga;
        Mx(d, c, d.ib())
    }, a);
    Rx(a)
}
  , Rx = function(a) {
    a.Ga && Y(a).O(a.Ga, "select", a.il)
}
  , Qx = function(a) {
    var b = Sx(a);
    a.g(b ? b.qb() : a.Y);
    var c = a.c.Ub(a.j());
    c && a.a.Ql(c) && (null == a.sa && (a.sa = Gp(c, "label")),
    b = b ? b.j() : null,
    Jp(c, b ? Gp(b, "label") : a.sa),
    Xx(a))
}
  , Xx = function(a) {
    var b = a.c;
    if (b && (b = b.Ub(a.j()))) {
        var c = Rq(a);
        b.id || (b.id = ":" + (Mq.M().a++).toString(36));
        Dp(b, "option");
        Fp(c, "activedescendant", b.id);
        a.Ga && (c = yb(a.Ga.a),
        Fp(b, "setsize", Yx(c)),
        a = Nx(a.Ga),
        Fp(b, "posinset", 0 <= a ? Yx(Ab(c, 0, a + 1)) : 0))
    }
}
  , Yx = function(a) {
    return pb(a, function(b) {
        return b instanceof nx
    })
}
  , Vx = function(a) {
    a.Bg = a instanceof nx ? "option" : "separator"
};
Px.prototype.Wa = function(a, b) {
    Px.D.Wa.call(this, a, b);
    this.Ea(64) ? Ex(this).uc(this.Ga ? Nx(this.Ga) : -1) : Xx(this)
}
;
xr("goog-select", function() {
    return new Px(null)
});
var ay = function(a, b, c, d, e, f, g, h, l) {
    c = new Zx(c);
    Px.call(this, "", c, g, h);
    this.m.b && this.m.b(33);
    this.Ba = a;
    this.Vb = a.id;
    Qq(c, this.Vb + "-menu");
    this.X = [];
    this.V = null;
    this.ya = null != f ? f : "";
    this.Fd = !!l;
    for (a = 0; a < b.length; a++) {
        var m;
        f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
        "separator" != f ? m = new vx(b[a],f) : m = new rx;
        this.Ae(m)
    }
    this.ia(this.Ba);
    a: {
        b = null != e ? e : $x(this, 0);
        for (e = 0; d = this.b ? Xq(this.b, e) : null; e++)
            if (d instanceof nx && d.Z() == b) {
                b = e;
                break a
            }
        b = -1
    }
    0 <= b && Tx(this, b)
};
w(ay, Px);
ay.prototype.g = function(a) {
    this.Fd ? a = this.ya : this.ya && (a = this.ya + " " + a);
    ay.D.g.call(this, a)
}
;
var by = function(a) {
    a.V && (Ci(a.V),
    a.V = null);
    a.V = Bi(function() {
        a.X = []
    }, 1E3)
};
ay.prototype.W = function() {
    hg(this.Ba);
    this.Ba = null;
    ay.D.W.call(this)
}
;
ay.prototype.ab = function(a) {
    if (!this.Ea(64) && 48 <= a.keyCode && 90 >= a.keyCode) {
        by(this);
        this.X.push(String.fromCharCode(a.keyCode));
        a = this.X.join("");
        var b = new RegExp("^" + je(a),"i")
          , c = this.Ga ? Nx(this.Ga) : -1
          , d = c;
        -1 < d && 1 < a.length && d--;
        var e = this.ib()
          , f = 0 > d ? 0 : d
          , g = !1
          , h = !1;
        do {
            ++d;
            d == e && (d = 0,
            g = !0);
            var l = this.b ? Xq(this.b, d) : null;
            if (l instanceof nx && (l = l.qb()) && l.match(b)) {
                h = !0;
                break
            }
            g && d == f && 3 == a.length && (l = a.split(""),
            l[1] == l[2] && (b = new RegExp("^" + l[1],"i"),
            this.X = [l[1]],
            g = !1))
        } while (!g || d != f);h && d != c && Tx(this, d);
        return !0
    }
    return ay.D.ab.call(this, a)
}
;
var $x = function(a, b) {
    var c = "";
    a = a.b ? Xq(a.b, b) : null;
    a instanceof nx && (c = a.Z());
    return c
};
ay.prototype.Z = function() {
    var a = this.Ga ? Nx(this.Ga) : -1;
    return -1 != a ? $x(this, a) : ""
}
;
var Zx = function(a, b, c) {
    this.b = a;
    this.m = [];
    this.K = [];
    sx.call(this, b, c)
};
w(Zx, sx);
k = Zx.prototype;
k.Xh = F("DIV", {
    id: "goog-menuitem-group-",
    "class": "goog-menuitem-group"
});
k.Hg = !1;
k.Cd = 0;
k.Ka = function() {
    Zx.D.Ka.call(this);
    this.j().id = Pq(this)
}
;
k.ld = function(a, b, c) {
    this.Hg && (this.c = b == Wq(this) ? this.g[b - 1] : this.g[b]);
    Zx.D.ld.call(this, a, b, c);
    this.c && (this.c = null,
    cy(this))
}
;
k.removeChild = function(a, b) {
    t(a) && (a = Sq(this, a));
    var c = Zq(this, a);
    this.Hg && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
    a = Zx.D.removeChild.call(this, a, b);
    this.c && (this.c = null,
    cy(this));
    return a
}
;
k.$b = function() {
    var a;
    this.c ? a = this.c : a = Zx.D.$b.call(this);
    return a
}
;
k.Ua = function(a) {
    Zx.D.Ua.call(this, a);
    cy(this);
    Mw(Jw.M(), this.j())
}
;
k.ia = function(a) {
    Zx.D.ia.call(this, a);
    cy(this);
    Mw(Jw.M(), this.j())
}
;
var cy = function(a) {
    a.Hg = !0;
    dy(a);
    var b = a.j();
    b.innerHTML = "";
    var c = []
      , d = 0;
    var e = document.createElement("table");
    var f = e.insertRow(-1);
    for (var g = 0, h; h = a.h[g]; g++) {
        var l = f.insertCell(f.cells.length);
        l.appendChild(h);
        Lp(h, "goog-groupmenu-separator") ? (c.push(l),
        f = e.insertRow(e.rows.length)) : d++
    }
    for (g = 0; l = c[g]; g++)
        l.setAttribute("colspan", d);
    b.appendChild(e)
}
  , ey = function(a, b, c) {
    sb(a.h, b.Ob) || a.h.push(b.Ob);
    Xq(a, c + 1) && (b.Ob = a.Xh.cloneNode(!0),
    b.Ob.id += b.Ai,
    b.Ai++,
    b.yf = 1);
    return b
}
  , dy = function(a) {
    a.h = [];
    a.g = {};
    var b = a.Xh.cloneNode(!0);
    b.id += 1;
    var c = {
        Ob: b,
        Ai: 2,
        yf: 1
    };
    Vq(a, function(d, e) {
        c.Ob.appendChild(d.j());
        this.g[e] = c.Ob;
        c.yf == this.b ? c = ey(this, c, e) : d instanceof nx && c.yf++;
        sb(this.K, e) && (U(c.Ob, "goog-menuitem-group"),
        T(c.Ob, "goog-groupmenu-separator"),
        this.g[e] = c.Ob,
        c = ey(this, c, e))
    }, a);
    1 == c.yf || sb(a.h, c.Ob) || a.h.push(c.Ob)
};
Zx.prototype.setVisible = function(a, b, c) {
    (a = Zx.D.setVisible.call(this, a, b, c)) && this.Cd && (Ci(this.Cd),
    this.Cd = 0);
    return a
}
;
Zx.prototype.ye = function(a) {
    var b = Zx.D.ye.call(this, a);
    if (b)
        return b;
    switch (a.keyCode) {
    case 37:
        return fx(this, v(this.w, this), this.Ia),
        !0;
    case 39:
        return fx(this, v(this.C, this), this.Ia),
        !0;
    default:
        return 48 <= a.keyCode && 90 >= a.keyCode ? (fy(this),
        this.m.push(String.fromCharCode(a.keyCode)),
        this.ii(this.m.join("")),
        !0) : !1
    }
}
;
var fy = function(a) {
    a.Cd && (Ci(a.Cd),
    a.Cd = 0);
    a.Cd = Bi(function() {
        this.m = []
    }, 1E3, a)
};
Zx.prototype.ii = function(a) {
    var b = new RegExp("^" + je(a),"i")
      , c = this.Ia;
    -1 < c && 1 < a.length && c--;
    fx(this, function(d, e) {
        var f = 0 > d ? 0 : d
          , g = !1;
        do {
            ++d;
            d == e && (d = 0,
            g = !0);
            var h = Xq(this, d).qb();
            if (h && h.match(b))
                return d
        } while (!g || d != f);return this.Ia
    }, c)
}
;
Zx.prototype.w = function(a, b) {
    a -= this.b;
    var c;
    0 > a && (c = a + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
    return c || a
}
;
Zx.prototype.C = function(a, b) {
    a += this.b;
    var c;
    a > b && (c = a - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
    return c || a
}
;
var hy = function(a, b) {
    this.a = gy;
    this.b = a;
    this.c = Zb(b)
}
  , gy = null
  , jy = function(a, b) {
    var c = ["sl", "tl", "src", "trg", "ts"];
    if (!gy && "openDatabase"in window)
        try {
            gy = window.openDatabase("GoogleTranslateMobileWebApp", "1.0", "Google Translate Mobile Web App", 5E5)
        } catch (e) {}
    if (gy) {
        var d = new hy(a,c);
        iy(d, a, c, function(e) {
            b && b(e, d)
        })
    } else
        b && b(!1, null)
}
  , ky = function(a) {
    return function(b) {
        a && a(!1, b.code)
    }
}
  , iy = function(a, b, c, d) {
    var e = [];
    e.push("CREATE TABLE IF NOT EXISTS", b);
    b = [];
    for (var f = 0, g = c.length; f < g; f++)
        b.push(c[f] + " TEXT");
    e.push("(", b.join(","), ")");
    a.a.transaction(function(h) {
        h.executeSql(e.join(" "))
    }, ky(d), d ? Ta(d, !0, null) : Fa)
}
  , ly = function(a, b) {
    for (var c in b)
        if (!Qb(a.c, c))
            return !1;
    return !0
}
  , ny = function(a, b, c, d) {
    var e = [["ts"]];
    if (ly(a, b)) {
        var f = [];
        f.push("SELECT * FROM", a.b);
        var g = []
          , h = [];
        my(b, g, h);
        g.length && f.push("WHERE", g.join(" AND "));
        if (e && 0 < e.length) {
            b = [];
            for (g = 0; g < e.length; ++g)
                b.push(e[g][0] + " " + (e[g][1] ? "ASC" : "DESC"));
            f.push("ORDER BY", b.join(","))
        }
        c && f.push("LIMIT", c);
        var l = [];
        a.a.transaction(function(m) {
            m.executeSql(f.join(" "), h, function(q, r) {
                q = 0;
                for (var u = r.rows.length; q < u; q++)
                    l.push(r.rows.item(q))
            })
        }, ky(d), d ? Ta(d, !0, l || null) : Fa)
    } else
        d && d(!1, -1)
}
  , py = function(a, b, c) {
    oy(a, [b], c)
}
  , oy = function(a, b, c) {
    for (var d = 0, e = b.length; d < e; d++)
        if (!ly(a, b[d])) {
            c && c(!1, -1);
            return
        }
    var f = [];
    d = 0;
    for (e = b.length; d < e; d++) {
        var g = b[d], h = [], l = [], m = [], q;
        for (q in g)
            h.push(q),
            l.push(g[q]),
            m.push("?");
        f.push([["INSERT INTO", a.b, "(", h.join(","), ") VALUES (", m.join(","), ")"].join(" "), l])
    }
    a.a.transaction(function(r) {
        for (var u = 0, y = f.length; u < y; u++)
            r.executeSql(f[u][0], f[u][1])
    }, ky(c), c ? Ta(c, !0, null) : Fa)
}
  , qy = function(a, b, c) {
    if (ly(a, b)) {
        var d = [];
        d.push("DELETE FROM", a.b);
        var e = []
          , f = [];
        my(b, e, f);
        e.length && d.push("WHERE", e.join(" AND "));
        a.a.transaction(function(g) {
            g.executeSql(d.join(" "), f)
        }, ky(c), c ? Ta(c, !0, null) : Fa)
    } else
        c && c(!1, -1)
}
  , my = function(a, b, c) {
    for (var d in a)
        b.push(d + "=?"),
        c.push(a[d])
};
var ry = function(a) {
    this.a = a
}
  , sy = function(a, b) {
    jy(a, function(c, d) {
        var e = null;
        c && (e = new ry(d));
        b && b(c, e)
    })
}
  , vy = function(a, b, c, d) {
    var e = ty.a;
    uy(e, a, b, c, function(f) {
        f && (f = {},
        f.sl = a,
        f.tl = b,
        f.src = c,
        f.trg = (new bj).$c(d),
        f.ts = (new Date).getTime(),
        py(e.a, f, function() {}))
    })
}
  , uy = function(a, b, c, d, e) {
    var f = {};
    b && (f.sl = b);
    c && (f.tl = c);
    d && (f.src = d);
    qy(a.a, f, function(g) {
        e && e(g)
    })
}
  , wy = function(a, b, c, d, e, f) {
    var g = {};
    b && (g.sl = b);
    c && (g.tl = c);
    d && (g.src = d);
    ny(a.a, g, e, function(h, l) {
        var m = [];
        if (h)
            for (var q = 0, r = l.length; q < r; q++) {
                var u = {}, y;
                for (y in l[q])
                    u[y] = l[q][y];
                var Q = ro(u.trg, {
                    "class": "trans.common.WebSqlTranslations"
                });
                u.trg = Q;
                m.push(u)
            }
        f && f(h, m)
    })
}
  , xy = function(a, b, c, d, e, f) {
    wy(a, b, c, d, e, function(g, h) {
        f && f(g, h)
    })
};
var yy = function(a) {
    this.a = a
}
  , zy = function(a) {
    sy("TranslationHistory", function(b, c) {
        c = b ? new yy(c) : null;
        a && a(b, c)
    })
};
var Ay = ec("//www.gstatic.com/inputtools/js/ita/inputtools_3.js")
  , By = ec("//www.gstatic.com/inputtools/js/ita/inputtools_d_3.js");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Dy = function(a) {
    var b = Cy;
    this.h = [];
    this.R = b;
    this.K = a || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.G = this.C = this.m = !1;
    this.o = 0;
    this.b = null;
    this.w = 0
};
Dy.prototype.cancel = function(a) {
    if (this.a)
        this.c instanceof Dy && this.c.cancel();
    else {
        if (this.b) {
            var b = this.b;
            delete this.b;
            a ? b.cancel(a) : (b.w--,
            0 >= b.w && b.cancel())
        }
        this.R ? this.R.call(this.K, this) : this.G = !0;
        this.a || Ey(this, new Fy(this))
    }
}
;
Dy.prototype.L = function(a, b) {
    this.m = !1;
    Gy(this, a, b)
}
;
var Gy = function(a, b, c) {
    a.a = !0;
    a.c = c;
    a.g = !b;
    Hy(a)
}
  , Jy = function(a) {
    if (a.a) {
        if (!a.G)
            throw new Iy(a);
        a.G = !1
    }
};
Dy.prototype.le = function(a) {
    Jy(this);
    Ky(a);
    Gy(this, !0, a)
}
;
var Ey = function(a, b) {
    Jy(a);
    Ky(b);
    Gy(a, !1, b)
}
  , Ky = function(a) {
    x(!(a instanceof Dy), "An execution sequence may not be initiated with a blocking Deferred.")
}
  , Ly = function(a, b, c, d) {
    x(!a.C, "Blocking Deferreds can not be re-used");
    a.h.push([b, c, d]);
    a.a && Hy(a)
};
Dy.prototype.then = function(a, b, c) {
    var d, e, f = new ii(function(g, h) {
        d = g;
        e = h
    }
    );
    Ly(this, d, function(g) {
        g instanceof Fy ? f.cancel() : e(g)
    });
    return f.then(a, b, c)
}
;
Dy.prototype.$goog_Thenable = !0;
var My = function(a) {
    return nb(a.h, function(b) {
        return La(b[1])
    })
}
  , Hy = function(a) {
    if (a.o && a.a && My(a)) {
        var b = a.o
          , c = Ny[b];
        c && (n.clearTimeout(c.ra),
        delete Ny[b]);
        a.o = 0
    }
    a.b && (a.b.w--,
    delete a.b);
    b = a.c;
    for (var d = c = !1; a.h.length && !a.m; ) {
        var e = a.h.shift()
          , f = e[0]
          , g = e[1];
        e = e[2];
        if (f = a.g ? g : f)
            try {
                var h = f.call(e || a.K, b);
                p(h) && (a.g = a.g && (h == b || h instanceof Error),
                a.c = b = h);
                if (fi(b) || "function" === typeof n.Promise && b instanceof n.Promise)
                    d = !0,
                    a.m = !0
            } catch (l) {
                b = l,
                a.g = !0,
                My(a) || (c = !0)
            }
    }
    a.c = b;
    d && (h = v(a.L, a, !0),
    d = v(a.L, a, !1),
    b instanceof Dy ? (Ly(b, h, d),
    b.C = !0) : b.then(h, d));
    c && (b = new Oy(b),
    Ny[b.ra] = b,
    a.o = b.ra)
}
  , Iy = function() {
    Va.call(this)
};
w(Iy, Va);
Iy.prototype.message = "Deferred has already fired";
Iy.prototype.name = "AlreadyCalledError";
var Fy = function() {
    Va.call(this)
};
w(Fy, Va);
Fy.prototype.message = "Deferred was canceled";
Fy.prototype.name = "CanceledError";
var Oy = function(a) {
    this.ra = n.setTimeout(v(this.a, this), 0);
    this.bf = a
};
Oy.prototype.a = function() {
    x(Ny[this.ra], "Cannot throw an error that is not scheduled.");
    delete Ny[this.ra];
    throw this.bf;
}
;
var Ny = {};
var Sy = function(a, b) {
    var c = b || {};
    b = c.document || document;
    var d = rc(a)
      , e = Yf("SCRIPT")
      , f = {
        Ji: e,
        cd: void 0
    }
      , g = new Dy(f)
      , h = null
      , l = null != c.timeout ? c.timeout : 5E3;
    0 < l && (h = window.setTimeout(function() {
        Py(e, !0);
        Ey(g, new Qy(1,"Timeout reached for loading script " + d))
    }, l),
    f.cd = h);
    e.onload = e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Py(e, c.Rj || !1, h),
        g.le(null))
    }
    ;
    e.onerror = function() {
        Py(e, !0, h);
        Ey(g, new Qy(0,"Error while loading script " + d))
    }
    ;
    f = c.attributes || {};
    Xb(f, {
        type: "text/javascript",
        charset: "UTF-8"
    });
    Pf(e, f);
    Xd(e, a);
    Ry(b).appendChild(e);
    return g
}
  , Ry = function(a) {
    var b = Kf("HEAD", a);
    return b && 0 != b.length ? b[0] : a.documentElement
}
  , Cy = function() {
    if (this && this.Ji) {
        var a = this.Ji;
        a && "SCRIPT" == a.tagName && Py(a, !0, this.cd)
    }
}
  , Py = function(a, b, c) {
    null != c && n.clearTimeout(c);
    a.onload = Fa;
    a.onerror = Fa;
    a.onreadystatechange = Fa;
    b && window.setTimeout(function() {
        hg(a)
    }, 0)
}
  , Qy = function(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Va.call(this, c);
    this.code = a
};
w(Qy, Va);
var Ty = function() {
    this.c = this.b = !1;
    this.a = []
};
Ga(Ty);
var Uy = ec("//www.gstatic.cn/inputtools/js/ita/inputtools_1.js")
  , Vy = ec("//www.gstatic.cn/inputtools/js/ita/inputtools_d_1.js");
Ty.prototype.g = function() {
    this.c = !0;
    for (var a = 0; a < this.a.length; ++a)
        this.a[a]()
}
;
Ty.prototype.load = function(a, b) {
    this.b ? this.b && !this.c ? this.a.push(a) : a() : (this.b = !0,
    this.a.push(a),
    a = 0 <= n.location.href.indexOf("?deb=static") || 0 <= n.location.href.indexOf("&deb=static"),
    Sy(tc(dc(b ? a ? Vy : Uy : a ? By : Ay))).then(v(this.g, this)))
}
;
var Xy = function() {
    this.g = Bk.M();
    this.c = {};
    this.b = {};
    this.a = {};
    this.a["gt-input-tool"] = new Wy
};
Ga(Xy);
var Zy = function(a, b, c) {
    b = Yy(a, b, c);
    if (p(b))
        a = b.ri;
    else {
        a: {
            a = Ek(a.g, c);
            if (null != a)
                for (c = 0; c < a.length; c++)
                    if (Hk(a[c])) {
                        a = a[c];
                        break a
                    }
            a = ""
        }
        a = a || ""
    }
    return a
}
  , Yy = function(a, b, c) {
    if (a = $y(a, b))
        return a.a[c]
}
  , $y = function(a, b, c) {
    var d = a.a[b];
    c && !p(d) && (d = new Wy,
    a.a[b] = d);
    return d
}
  , az = function(a, b, c) {
    var d = {
        ua: "itui"
    };
    d.uav = t(a) ? a : a ? 1 : 0;
    d.sl = b;
    d.tl = "und";
    d.hl = c;
    var e = new Image;
    e.src = "/translate/uc?" + Cj(d);
    e.onload = function() {
        e.onload = null
    }
}
  , Wy = function() {
    this.a = {};
    for (var a in bz)
        this.a[a] = new cz(bz[a],"")
}
  , bz = {
    iw: !1,
    ja: !1,
    vi: !1,
    "zh-CN": !1
};
Wy.prototype.update = function(a, b, c) {
    var d = this.a[a];
    p(d) ? (d.isEnabled = b,
    d.ri = c) : this.a[a] = new cz(b,c)
}
;
var cz = function(a, b) {
    this.isEnabled = a;
    this.ri = b
};
var dz = function(a, b, c, d, e, f) {
    K.call(this);
    this.C = Bk.M();
    this.h = a;
    this.X = c;
    this.aa = b;
    this.g = this.b = null;
    this.o = this.L = "";
    this.G = this.h.id;
    this.a = "";
    this.m = this.c = !1;
    Dm.M();
    this.R = d;
    this.V = e;
    this.Y = kc(d) ? [5, 4] : [1, 0];
    this.ma = [30, 0, 0, 0];
    this.w = Xy.M();
    this.N = pl.M();
    this.F = M.M();
    this.K = !0;
    null != f && f.a(this, "change")
};
w(dz, K);
var gz = function(a, b) {
    if (null == a.b)
        a.o = b,
        (null != Ck[b] || a.C.a && null != Dk[b]) && a.K && (a.K = !1,
        Ty.M().load(v(a.ba, a), a.V));
    else if (a.L != b)
        if (a.L = b,
        null != Ck[b] || a.C.a && null != Dk[b]) {
            var c = Ek(a.C, b)
              , d = Zy(a.w, a.G, b)
              , e = a.w
              , f = a.G
              , g = Yy(e, f, b);
            b = p(g) ? g.isEnabled : Hk(Zy(e, f, b));
            a.m = !0;
            a.a = sb(c, d) ? d : c[0];
            a.b.disableCurrentInputTool();
            a.c = b;
            a.b.setInputTools(c);
            a.b.activateInputTool(a.a);
            a.c ? a.b.enableCurrentInputTool() : a.b.disableCurrentInputTool();
            null == a.g && (a.g = a.b.showControl({
                ui: "kd",
                container: a.h
            }));
            a.b.localize(a.R);
            a.g.show();
            ez(a);
            fz(a);
            a.m = !1;
            c = a.c ? a.a : "";
            a.N.b = t(c) ? sl(c) : c
        } else
            a.b.disableCurrentInputTool(),
            null != a.g && a.g.hide()
}
  , ez = function(a) {
    null != a.b && a.b.repositionKeyboard(a.X, a.Y, a.ma)
};
dz.prototype.isEnabled = function() {
    return null != this.b && this.c
}
;
var hz = function(a) {
    return a.isEnabled() && Hk(a.a)
};
dz.prototype.T = function(a) {
    ez(this);
    if (!this.m && (this.a != a.currInputToolName || this.c != a.currInputToolActive)) {
        this.a = a.currInputToolName;
        this.c = a.currInputToolActive;
        fz(this);
        a = this.c;
        var b = this.L
          , c = this.R
          , d = this.G
          , e = this.a;
        $y(this.w, d, !0).update(b, a, e);
        az((a ? "1" : "0") + "." + d + "." + e, b, c);
        a = this.c ? this.a : "";
        this.N.b = t(a) ? sl(a) : a;
        this.c && (0 <= this.a.indexOf("-k0-") ? (a = this.F,
        N(a, O(a, 171))) : Hk(this.a) ? (a = this.F,
        N(a, O(a, 172))) : Gk(this.a) && (a = this.F,
        N(a, O(a, 146))))
    }
    this.dispatchEvent("change")
}
;
dz.prototype.ba = function() {
    var a = new google.elements.inputtools.InputToolsController;
    a.setAutoDirection(!1);
    a.setApplicationName("translate");
    a.addPageElements([this.aa]);
    a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.T, this);
    this.b = a;
    "" != this.o && (gz(this, this.o),
    this.o = "")
}
;
var fz = function(a) {
    var b = D("ita-kd-inputtool-icon", a.h);
    if (null != b) {
        var c = Hk(a.a) ? a.isEnabled() ? window.MSG_IME_OFF || "" : window.MSG_IME_ON || "" : 0 <= a.a.indexOf("-k0-") ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_VK_ON || "" : Gk(a.a) ? a.isEnabled() ? window.MSG_HW_OFF || "" : window.MSG_HW_ON || "" : "";
        ks(b, c, void 0);
        os(b, 2)
    }
    a = D("ita-kd-dropdown", a.h);
    null != a && (ks(a, window.MSG_CHANGE_ITA || "", void 0),
    os(a, 2))
};
Vi("goog.dom.SavedRange");
var jz = function(a, b, c, d, e) {
    this.c = !!b;
    this.h = null;
    this.g = 0;
    this.L = !1;
    this.K = !c;
    a && iz(this, a, d);
    this.depth = void 0 != e ? e : this.g || 0;
    this.c && (this.depth *= -1)
};
w(jz, nj);
var iz = function(a, b, c, d) {
    if (a.h = b)
        a.g = ya(c) ? c : 1 != a.h.nodeType ? 0 : a.c ? -1 : 1;
    ya(d) && (a.depth = d)
};
jz.prototype.next = function() {
    if (this.L) {
        if (!this.h || this.K && 0 == this.depth)
            throw mj;
        var a = this.h;
        var b = this.c ? -1 : 1;
        if (this.g == b) {
            var c = this.c ? a.lastChild : a.firstChild;
            c ? iz(this, c) : iz(this, a, -1 * b)
        } else
            (c = this.c ? a.previousSibling : a.nextSibling) ? iz(this, c) : iz(this, a.parentNode, -1 * b);
        this.depth += this.g * (this.c ? -1 : 1)
    } else
        this.L = !0;
    a = this.h;
    if (!this.h)
        throw mj;
    return a
}
;
jz.prototype.splice = function(a) {
    var b = this.h
      , c = this.c ? 1 : -1;
    this.g == c && (this.g = -1 * c,
    this.depth += this.g * (this.c ? -1 : 1));
    this.c = !this.c;
    jz.prototype.next.call(this);
    this.c = !this.c;
    c = Ka(arguments[0]) ? arguments[0] : arguments;
    for (var d = c.length - 1; 0 <= d; d--)
        fg(c[d], b);
    hg(b)
}
;
var kz = function() {}
  , lz = function(a) {
    if (a.getSelection)
        return a.getSelection();
    a = a.document;
    var b = a.selection;
    if (b) {
        try {
            var c = b.createRange();
            if (c.parentElement) {
                if (c.parentElement().document != a)
                    return null
            } else if (!c.length || c.item(0).document != a)
                return null
        } catch (d) {
            return null
        }
        return b
    }
    return null
}
  , mz = function(a) {
    for (var b = [], c = 0, d = a.we(); c < d; c++)
        b.push(a.Kd(c));
    return b
}
  , nz = function(a) {
    return a.Lg() ? a.Sb() : a.nc()
};
kz.prototype.Lg = function() {
    return !1
}
;
var oz = function(a, b) {
    jz.call(this, a, b, !0)
};
w(oz, jz);
var pz = function(a, b, c, d, e) {
    this.b = this.a = null;
    this.G = this.C = 0;
    this.o = !!e;
    if (a) {
        this.a = a;
        this.C = b;
        this.b = c;
        this.G = d;
        if (1 == a.nodeType && "BR" != a.tagName)
            if (a = a.childNodes,
            b = a[b])
                this.a = b,
                this.C = 0;
            else {
                a.length && (this.a = ib(a));
                var f = !0
            }
        1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.G = 0 : this.b = c)
    }
    jz.call(this, this.o ? this.b : this.a, this.o, !0);
    if (f)
        try {
            this.next()
        } catch (g) {
            if (g != mj)
                throw g;
        }
};
w(pz, oz);
pz.prototype.w = function() {
    return this.a
}
;
pz.prototype.m = function() {
    return this.L && (this.h != (this.o ? this.a : this.b) ? !1 : this.o ? this.C ? -1 != this.g : 1 == this.g : !this.G || 1 != this.g)
}
;
pz.prototype.next = function() {
    if (this.m())
        throw mj;
    return pz.D.next.call(this)
}
;
var qz = function() {}
  , rz = function(a, b) {
    b = b.qe();
    try {
        return 0 <= a.ic(b, 0, 0) && 0 >= a.ic(b, 1, 1)
    } catch (c) {
        if (!B)
            throw c;
        return !1
    }
};
qz.prototype.hc = function() {
    return new pz(this.Yb(),this.Bc(),this.Ac(),this.Oc())
}
;
var sz = function(a) {
    this.a = a
};
w(sz, qz);
var uz = function(a) {
    var b = Hf(a).createRange();
    if (3 == a.nodeType)
        b.setStart(a, 0),
        b.setEnd(a, a.length);
    else if (tz(a)) {
        for (var c, d = a; (c = d.firstChild) && tz(c); )
            d = c;
        b.setStart(d, 0);
        for (d = a; (c = d.lastChild) && tz(c); )
            d = c;
        b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    } else
        c = a.parentNode,
        a = jb(c.childNodes, a),
        b.setStart(c, a),
        b.setEnd(c, a + 1);
    return b
}
  , vz = function(a, b, c, d) {
    var e = Hf(a).createRange();
    e.setStart(a, b);
    e.setEnd(c, d);
    return e
};
k = sz.prototype;
k.qe = function() {
    return this.a
}
;
k.sg = function() {
    return this.a.commonAncestorContainer
}
;
k.Yb = function() {
    return this.a.startContainer
}
;
k.Bc = function() {
    return this.a.startOffset
}
;
k.Ac = function() {
    return this.a.endContainer
}
;
k.Oc = function() {
    return this.a.endOffset
}
;
k.ic = function(a, b, c) {
    return this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.START_TO_END : 1 == b ? n.Range.END_TO_START : n.Range.END_TO_END, a)
}
;
k.Zb = function() {
    return this.a.collapsed
}
;
k.Th = function() {
    return this.a.toString()
}
;
k.select = function(a) {
    var b = Uf(Hf(this.Yb()));
    this.He(b.getSelection(), a)
}
;
k.He = function(a) {
    a.removeAllRanges();
    a.addRange(this.a)
}
;
var wz = function(a) {
    this.a = a
};
w(wz, sz);
wz.prototype.He = function(a, b) {
    !b || this.Zb() ? wz.D.He.call(this, a, b) : (a.collapse(this.Ac(), this.Oc()),
    a.extend(this.Yb(), this.Bc()))
}
;
var xz = function(a) {
    this.b = this.a = this.o = null;
    this.h = this.g = -1;
    this.c = a
};
w(xz, qz);
var yz = Vi("goog.dom.browserrange.IeRange")
  , zz = function(a) {
    var b = Hf(a).body.createTextRange();
    if (1 == a.nodeType)
        b.moveToElementText(a),
        tz(a) && !a.childNodes.length && b.collapse(!1);
    else {
        for (var c = 0, d = a; d = d.previousSibling; ) {
            var e = d.nodeType;
            if (3 == e)
                c += d.length;
            else if (1 == e) {
                b.moveToElementText(d);
                break
            }
        }
        d || b.moveToElementText(a.parentNode);
        b.collapse(!d);
        c && b.move("character", c);
        b.moveEnd("character", a.length)
    }
    return b
};
xz.prototype.qe = function() {
    return this.c
}
;
xz.prototype.sg = function() {
    if (!this.o) {
        var a = this.c.text
          , b = this.c.duplicate()
          , c = a.replace(/ +$/, "");
        (c = a.length - c.length) && b.moveEnd("character", -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
        if (this.Zb() && 0 < b)
            return this.o = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length; )
            c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == Az(c.firstChild) && tz(c.firstChild); )
            c = c.firstChild;
        0 == a.length && (c = Bz(this, c));
        this.o = c
    }
    return this.o
}
;
var Bz = function(a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if (tz(f)) {
            var g = zz(f)
              , h = g.htmlText != f.outerHTML;
            if (a.Zb() && h ? 0 <= a.ic(g, 1, 1) && 0 >= a.ic(g, 1, 0) : a.c.inRange(g))
                return Bz(a, f)
        }
    }
    return b
};
k = xz.prototype;
k.Yb = function() {
    this.a || (this.a = Cz(this, 1),
    this.Zb() && (this.b = this.a));
    return this.a
}
;
k.Bc = function() {
    0 > this.g && (this.g = Dz(this, 1),
    this.Zb() && (this.h = this.g));
    return this.g
}
;
k.Ac = function() {
    if (this.Zb())
        return this.Yb();
    this.b || (this.b = Cz(this, 0));
    return this.b
}
;
k.Oc = function() {
    if (this.Zb())
        return this.Bc();
    0 > this.h && (this.h = Dz(this, 0),
    this.Zb() && (this.g = this.h));
    return this.h
}
;
k.ic = function(a, b, c) {
    return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
}
;
var Cz = function(a, b, c) {
    c = c || a.sg();
    if (!c || !c.firstChild)
        return c;
    for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
        var g = d ? e : f - e - 1
          , h = c.childNodes[g];
        try {
            var l = Ez(h)
        } catch (q) {
            continue
        }
        var m = l.qe();
        if (a.Zb())
            if (!tz(h)) {
                if (0 == a.ic(m, 1, 1)) {
                    a.g = a.h = g;
                    break
                }
            } else {
                if (rz(l, a))
                    return Cz(a, b, h)
            }
        else {
            if (rz(a, l)) {
                if (!tz(h)) {
                    d ? a.g = g : a.h = g + 1;
                    break
                }
                return Cz(a, b, h)
            }
            if (0 > a.ic(m, 1, 0) && 0 < a.ic(m, 0, 1))
                return Cz(a, b, h)
        }
    }
    return c
}
  , Dz = function(a, b) {
    var c = 1 == b
      , d = c ? a.Yb() : a.Ac();
    if (1 == d.nodeType) {
        d = d.childNodes;
        for (var e = d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
            var h = d[g];
            if (!tz(h) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Ez(h).qe()))
                return c ? g : g + 1
        }
        return -1 == g ? 0 : g
    }
    a = a.c.duplicate();
    b = zz(d);
    a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
    a = a.text.length;
    return c ? d.length - a : a
}
  , Az = function(a) {
    return 3 == a.nodeType ? a.nodeValue : a.innerText
};
xz.prototype.Zb = function() {
    return 0 == this.c.compareEndPoints("StartToEnd", this.c)
}
;
xz.prototype.Th = function() {
    return this.c.text
}
;
xz.prototype.select = function() {
    this.c.select()
}
;
var Fz = function(a) {
    this.a = a
};
w(Fz, sz);
Fz.prototype.He = function(a) {
    a.collapse(this.Yb(), this.Bc());
    this.Ac() == this.Yb() && this.Oc() == this.Bc() || a.extend(this.Ac(), this.Oc());
    0 == a.rangeCount && a.addRange(this.a)
}
;
var Gz = function(a) {
    this.a = a
};
w(Gz, sz);
Gz.prototype.ic = function(a, b, c) {
    return Re("528") ? Gz.D.ic.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? n.Range.START_TO_START : n.Range.END_TO_START : 1 == b ? n.Range.START_TO_END : n.Range.END_TO_END, a)
}
;
Gz.prototype.He = function(a, b) {
    b ? a.setBaseAndExtent(this.Ac(), this.Oc(), this.Yb(), this.Bc()) : a.setBaseAndExtent(this.Yb(), this.Bc(), this.Ac(), this.Oc())
}
;
var Hz = function(a) {
    return Bf ? new xz(a,Hf(a.parentElement())) : Ae ? new Gz(a) : ze ? new wz(a) : we ? new Fz(a) : new sz(a)
}
  , Ez = function(a) {
    if (B && !Te(9)) {
        var b = new xz(zz(a),Hf(a));
        if (tz(a)) {
            for (var c, d = a; (c = d.firstChild) && tz(c); )
                d = c;
            b.a = d;
            b.g = 0;
            for (d = a; (c = d.lastChild) && tz(c); )
                d = c;
            b.b = d;
            b.h = 1 == d.nodeType ? d.childNodes.length : d.length;
            b.o = a
        } else
            b.a = b.b = b.o = a.parentNode,
            b.g = jb(b.o.childNodes, a),
            b.h = b.g + 1;
        a = b
    } else
        a = Ae ? new Gz(uz(a)) : ze ? new wz(uz(a)) : we ? new Fz(uz(a)) : new sz(uz(a));
    return a
}
  , tz = function(a) {
    return ag(a) || 3 == a.nodeType
};
var Iz = function() {
    this.c = this.b = this.h = this.a = this.o = null;
    this.g = !1
};
w(Iz, kz);
var Jz = function(a, b) {
    var c = new Iz;
    c.o = a;
    c.g = !!b;
    return c
}
  , Kz = function(a, b) {
    return Jz(Ez(a), b)
};
Iz.prototype.Ib = function() {
    return "text"
}
;
Iz.prototype.og = function() {
    return Lz(this).qe()
}
;
Iz.prototype.we = function() {
    return 1
}
;
Iz.prototype.Kd = function() {
    return this
}
;
var Lz = function(a) {
    var b;
    if (!(b = a.o)) {
        b = a.Sb();
        var c = a.Tb()
          , d = a.nc()
          , e = a.oc();
        if (B && !Te(9)) {
            var f = b
              , g = c
              , h = d
              , l = e
              , m = !1;
            1 == f.nodeType && (g > f.childNodes.length && Wi(yz, "Cannot have startOffset > startNode child count"),
            g = f.childNodes[g],
            m = !g,
            f = g || f.lastChild || f,
            g = 0);
            var q = zz(f);
            g && q.move("character", g);
            f == h && g == l ? q.collapse(!0) : (m && q.collapse(!1),
            m = !1,
            1 == h.nodeType && (l > h.childNodes.length && Wi(yz, "Cannot have endOffset > endNode child count"),
            h = (g = h.childNodes[l]) || h.lastChild || h,
            l = 0,
            m = !g),
            f = zz(h),
            f.collapse(!m),
            l && f.moveEnd("character", l),
            q.setEndPoint("EndToEnd", f));
            l = new xz(q,Hf(b));
            l.a = b;
            l.g = c;
            l.b = d;
            l.h = e;
            b = l
        } else
            b = Ae ? new Gz(vz(b, c, d, e)) : ze ? new wz(vz(b, c, d, e)) : we ? new Fz(vz(b, c, d, e)) : new sz(vz(b, c, d, e));
        b = a.o = b
    }
    return b
};
k = Iz.prototype;
k.gf = function() {
    return Lz(this).sg()
}
;
k.Sb = function() {
    return this.a || (this.a = Lz(this).Yb())
}
;
k.Tb = function() {
    return null != this.h ? this.h : this.h = Lz(this).Bc()
}
;
k.nc = function() {
    return this.b || (this.b = Lz(this).Ac())
}
;
k.oc = function() {
    return null != this.c ? this.c : this.c = Lz(this).Oc()
}
;
k.Lg = function() {
    return this.g
}
;
k.jf = function() {
    return Lz(this).Zb()
}
;
k.hf = function() {
    return Lz(this).Th()
}
;
k.hc = function() {
    return new pz(this.Sb(),this.Tb(),this.nc(),this.oc())
}
;
k.select = function() {
    Lz(this).select(this.g)
}
;
var Mz = function() {};
w(Mz, kz);
var Nz = function() {
    this.c = this.b = this.a = null
};
w(Nz, Mz);
k = Nz.prototype;
k.Ib = function() {
    return "control"
}
;
k.og = function() {
    return this.a || document.body.createControlRange()
}
;
k.we = function() {
    return this.a ? this.a.length : 0
}
;
k.Kd = function(a) {
    return Kz(this.a.item(a))
}
;
k.gf = function() {
    return rg.apply(null, Oz(this))
}
;
k.Sb = function() {
    return Pz(this)[0]
}
;
k.Tb = function() {
    return 0
}
;
k.nc = function() {
    var a = Pz(this)
      , b = ib(a);
    return qb(a, function(c) {
        return ng(c, b)
    })
}
;
k.oc = function() {
    return this.nc().childNodes.length
}
;
var Oz = function(a) {
    if (!a.b && (a.b = [],
    a.a))
        for (var b = 0; b < a.a.length; b++)
            a.b.push(a.a.item(b));
    return a.b
}
  , Pz = function(a) {
    a.c || (a.c = Oz(a).concat(),
    a.c.sort(function(b, c) {
        return b.sourceIndex - c.sourceIndex
    }));
    return a.c
};
Nz.prototype.jf = function() {
    return !this.a || !this.a.length
}
;
Nz.prototype.hf = function() {
    return ""
}
;
Nz.prototype.hc = function() {
    return new Qz(this)
}
;
Nz.prototype.select = function() {
    this.a && this.a.select()
}
;
var Qz = function(a) {
    this.o = this.b = this.a = null;
    a && (this.o = Pz(a),
    this.a = this.o.shift(),
    this.b = ib(this.o) || this.a);
    jz.call(this, this.a, !1, !0)
};
w(Qz, oz);
Qz.prototype.w = function() {
    return this.a
}
;
Qz.prototype.m = function() {
    return !this.depth && !this.o.length
}
;
Qz.prototype.next = function() {
    if (this.m())
        throw mj;
    if (!this.depth) {
        var a = this.o.shift();
        iz(this, a, 1, 1);
        return a
    }
    return Qz.D.next.call(this)
}
;
var Rz = function() {
    this.F = Vi("goog.dom.MultiRange");
    this.a = [];
    this.g = [];
    this.c = this.b = null
};
w(Rz, Mz);
k = Rz.prototype;
k.Ib = function() {
    return "mutli"
}
;
k.og = function() {
    1 < this.a.length && Xi(this.F, "getBrowserRangeObject called on MultiRange with more than 1 range");
    return this.a[0]
}
;
k.we = function() {
    return this.a.length
}
;
k.Kd = function(a) {
    this.g[a] || (this.g[a] = Jz(Hz(this.a[a]), void 0));
    return this.g[a]
}
;
k.gf = function() {
    if (!this.c) {
        for (var a = [], b = 0, c = this.we(); b < c; b++)
            a.push(this.Kd(b).gf());
        this.c = rg.apply(null, a)
    }
    return this.c
}
;
var Tz = function(a) {
    a.b || (a.b = mz(a),
    a.b.sort(function(b, c) {
        var d = b.Sb();
        b = b.Tb();
        var e = c.Sb();
        c = c.Tb();
        return d == e && b == c ? 0 : Sz(d, b, e, c) ? 1 : -1
    }));
    return a.b
};
k = Rz.prototype;
k.Sb = function() {
    return Tz(this)[0].Sb()
}
;
k.Tb = function() {
    return Tz(this)[0].Tb()
}
;
k.nc = function() {
    return ib(Tz(this)).nc()
}
;
k.oc = function() {
    return ib(Tz(this)).oc()
}
;
k.jf = function() {
    return 0 == this.a.length || 1 == this.a.length && this.Kd(0).jf()
}
;
k.hf = function() {
    return lb(mz(this), function(a) {
        return a.hf()
    }).join("")
}
;
k.hc = function() {
    return new Uz(this)
}
;
k.select = function() {
    var a = lz(Uf(Hf(B ? this.gf() : this.Sb())));
    a.removeAllRanges();
    for (var b = 0, c = this.we(); b < c; b++)
        a.addRange(this.Kd(b).og())
}
;
var Uz = function(a) {
    this.a = null;
    this.b = 0;
    a && (this.a = lb(Tz(a), function(b) {
        return oj(b)
    }));
    jz.call(this, a ? this.w() : null, !1, !0)
};
w(Uz, oz);
Uz.prototype.w = function() {
    return this.a[0].w()
}
;
Uz.prototype.m = function() {
    return this.a[this.b].m()
}
;
Uz.prototype.next = function() {
    try {
        var a = this.a[this.b]
          , b = a.next();
        iz(this, a.h, a.g, a.depth);
        return b
    } catch (c) {
        if (c !== mj || this.a.length - 1 == this.b)
            throw c;
        this.b++;
        return this.next()
    }
}
;
var Wz = function() {
    var a = lz(window);
    return a && Vz(a)
}
  , Vz = function(a) {
    var b = !1;
    if (a.createRange)
        try {
            var c = a.createRange()
        } catch (e) {
            return null
        }
    else if (a.rangeCount) {
        if (1 < a.rangeCount) {
            b = new Rz;
            c = 0;
            for (var d = a.rangeCount; c < d; c++)
                b.a.push(a.getRangeAt(c));
            return b
        }
        c = a.getRangeAt(0);
        b = Sz(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    } else
        return null;
    (a = c) && a.addElement ? (b = new Nz,
    b.a = a,
    a = b) : a = Jz(Hz(a), b);
    return a
}
  , Sz = function(a, b, c, d) {
    if (a == c)
        return d < b;
    var e;
    if (1 == a.nodeType && b)
        if (e = a.childNodes[b])
            a = e,
            b = 0;
        else if (ng(a, c))
            return !0;
    if (1 == c.nodeType && d)
        if (e = c.childNodes[d])
            c = e,
            d = 0;
        else if (ng(c, a))
            return !1;
    return 0 < (qg(a, c) || b - d)
};
var Xz = function() {
    var a = Wz();
    return null != a && !a.jf() && 0 < a.hf().length
}
  , Yz = function(a) {
    Wz();
    Kz(a, void 0).select();
    a.setAttribute("tabIndex", "-1")
}
  , Zz = function(a) {
    var b = F("TEXTAREA", {
        id: "hdt"
    });
    Yp(b, {
        position: "absolute",
        top: Tf(document).a + "px",
        left: "-1000px"
    });
    bg(document.body, b);
    b.focus();
    G(b, a);
    a = 0;
    if (qw(b))
        b.selectionStart = a;
    else if (rw()) {
        var c = sw(b)
          , d = c[0];
        d.inRange(c[1]) && (a = uw(b, a),
        d.collapse(!0),
        d.move("character", a),
        d.select())
    }
    a = b.value.length;
    qw(b) ? b.selectionEnd = a : rw() && (d = sw(b),
    c = d[1],
    d[0].inRange(c) && (a = uw(b, a),
    d = uw(b, tw(b, !0)[0]),
    c.collapse(!0),
    c.moveEnd("character", a - d),
    c.select()));
    return b
};
var $z = function(a, b, c, d, e, f, g) {
    g = void 0 === g ? function() {}
    : g;
    this.L = Dm.M();
    this.G = b;
    this.g = c;
    this.C = d;
    this.o = e || null;
    this.w = f;
    this.m = g;
    this.b = this.c = this.a = 0;
    this.F = M.M();
    this.delay = new Qr(this.Jf,3E3,this);
    this.h = a;
    H(a, "copy", this.dj, !1, this);
    H(a, "mouseup", this.ej, !1, this);
    H(a, "contextmenu", this.Yh, !1, this);
    H(a, "click", this.cj, !1, this);
    H(n, "blur", this.flush, !1, this);
    H(n, "beforeunload", this.flush, !1, this)
};
w($z, Hg);
k = $z.prototype;
k.flush = function() {
    this.delay.stop();
    0 < this.a + this.c + this.b && this.Jf()
}
;
k.W = function() {
    this.flush();
    this.delay.Ja();
    nh(this.h, "copy", this.dj, !1, this);
    nh(this.h, "mouseup", this.ej, !1, this);
    nh(this.h, "contextmenu", this.Yh, !1, this);
    nh(this.h, "click", this.cj, !1, this);
    nh(n, "blur", this.flush, !1, this);
    nh(n, "beforeunload", this.flush, !1, this);
    $z.D.W.call(this)
}
;
k.dj = function() {
    this.delay.stop();
    if (p(this.w)) {
        var a = this.w().length
          , b = null != n.getSelection ? n.getSelection().toString().length : document.selection && "Control" != document.selection.type ? document.selection.createRange().text.length : 0;
        this.Jf(1, a, b);
        dm(this.F, this.g, this.m(), a, b)
    } else
        this.Jf(1),
        dm(this.F, this.g, this.m())
}
;
k.Jf = function(a, b, c) {
    a = {
        cpy: a || 0,
        clk: this.a,
        sel: this.c,
        ctx: this.b
    };
    null != b && null != c && (a.ql = b,
    a.cpl = c);
    null != this.o && (a.sl = this.o.a(),
    a.tl = this.o.b());
    Im(this.L, this.C, "ilog", this.G, a);
    this.b = this.c = this.a = 0
}
;
k.ej = function() {
    if (Xz()) {
        this.c++;
        var a = this.F;
        N(a, bm(a, 211, this.g));
        59 <= this.c ? this.flush() : this.delay.start()
    }
}
;
k.cj = function(a) {
    Vg(a) && (this.a++,
    a = this.F,
    N(a, bm(a, 212, this.g)),
    59 <= this.a ? this.flush() : this.delay.start())
}
;
k.Yh = function() {
    this.b++;
    var a = this.F;
    N(a, bm(a, 210, this.g));
    59 <= this.b ? this.flush() : this.delay.start()
}
;
var aA = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var bA = function(a, b, c, d, e, f, g, h, l) {
    this.a = a;
    this.h = b;
    this.G = c;
    this.c = d;
    this.g = e;
    this.o = f;
    this.m = g;
    this.w = h;
    this.b = l
}
  , hA = function(a) {
    var b = a.b;
    b = (b = b && "composed"in b && b && "composedPath"in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
    return cA(dA(eA(fA((new gA).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function() {
        return a.preventDefault()
    }), function() {
        return a.stopPropagation()
    }))
}
  , gA = function() {
    this.c = null;
    this.g = "";
    this.G = this.o = this.m = this.C = this.h = this.b = this.a = this.w = null
};
k = gA.prototype;
k.keyCode = function(a) {
    this.c = a;
    return this
}
;
k.key = function(a) {
    this.g = a;
    return this
}
;
k.shiftKey = function(a) {
    this.w = a;
    return this
}
;
k.altKey = function(a) {
    this.a = a;
    return this
}
;
k.ctrlKey = function(a) {
    this.b = a;
    return this
}
;
k.metaKey = function(a) {
    this.h = a;
    return this
}
;
k.target = function(a) {
    this.C = a;
    return this
}
;
var fA = function(a, b) {
    a.m = b;
    return a
}
  , eA = function(a, b) {
    a.o = b;
    return a
}
  , dA = function(a, b) {
    a.G = b;
    return a
}
  , cA = function(a) {
    return new bA($a(a.c),a.g,eb(a.w),eb(a.a),eb(a.b),eb(a.h),x(a.C),x(a.m),bb(a.o),bb(a.G))
};
var kA = function(a) {
    K.call(this);
    this.b = this.c = {};
    this.h = 0;
    this.N = Zb(iA);
    this.V = Zb(jA);
    this.m = !0;
    this.o = null;
    this.a = a;
    H(this.a, "keydown", this.w, void 0, this);
    H(this.a, "synthetic-keydown", this.C, void 0, this);
    Ee && (H(this.a, "keypress", this.K, void 0, this),
    H(this.a, "synthetic-keypress", this.R, void 0, this));
    H(this.a, "keyup", this.G, void 0, this);
    H(this.a, "synthetic-keyup", this.L, void 0, this)
}, lA;
w(kA, K);
var mA = function(a) {
    this.a = a || null;
    this.next = a ? null : {}
}
  , iA = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19]
  , jA = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
kA.prototype.T = function(a, b) {
    nA(this.c, oA(arguments), a)
}
;
var oA = function(a) {
    if (t(a[1]))
        a = lb(pA(a[1]), function(d) {
            $a(d.keyCode, "A non-modifier key is needed in each stroke.");
            return qA(d.key || "", d.keyCode, d.nm)
        });
    else {
        var b = a
          , c = 1;
        Ja(a[1]) && (b = a[1],
        c = 0);
        for (a = []; c < b.length; c += 2)
            a.push(qA("", b[c], b[c + 1]))
    }
    return a
};
kA.prototype.W = function() {
    kA.D.W.call(this);
    this.c = {};
    nh(this.a, "keydown", this.w, !1, this);
    nh(this.a, "synthetic-keydown", this.C, !1, this);
    Ee && (nh(this.a, "keypress", this.K, !1, this),
    nh(this.a, "synthetic-keypress", this.R, !1, this));
    nh(this.a, "keyup", this.G, !1, this);
    nh(this.a, "synthetic-keyup", this.L, !1, this);
    this.a = null
}
;
var pA = function(a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+")
          , f = null
          , g = null;
        c = 0;
        for (var h, l = 0; h = e[l]; l++) {
            switch (h) {
            case "shift":
                c |= 1;
                continue;
            case "ctrl":
                c |= 2;
                continue;
            case "alt":
                c |= 4;
                continue;
            case "meta":
                c |= 8;
                continue
            }
            null === g || Za("At most one non-modifier key can be in a stroke.");
            e = void 0;
            f = h;
            if (!lA) {
                g = {};
                for (e in aA)
                    g[aA[e]] = wh(parseInt(e, 10));
                lA = g
            }
            g = lA[f];
            $a(g, "Key name not found in goog.events.KeyNames: " + h);
            f = h;
            break
        }
        b.push({
            key: f,
            keyCode: g,
            nm: c
        })
    }
    return b
};
kA.prototype.G = function(a) {
    a = hA(a);
    ze && rA(this, a);
    Ee && !this.g && sA(a) && tA(this, a, !0)
}
;
kA.prototype.L = function(a) {
    a = a.b();
    ze && rA(this, a);
    Ee && !this.g && sA(a) && tA(this, a, !0)
}
;
var rA = function(a, b) {
    32 == a.o && 32 == b.a && (0,
    b.b)();
    a.o = null
}
  , sA = function(a) {
    return Ee && a.g && a.c
};
kA.prototype.K = function(a) {
    a = hA(a);
    32 < a.a && sA(a) && (this.g = !0)
}
;
kA.prototype.R = function(a) {
    a = a.b();
    32 < a.a && sA(a) && (this.g = !0)
}
;
var nA = function(a, b, c) {
    var d = b.shift();
    z(d, function(e) {
        if ((e = a[e]) && (0 == b.length || e.a))
            throw Error("Keyboard shortcut conflicts with existing shortcut");
    });
    b.length ? z(d, function(e) {
        e = e.toString();
        var f = new mA;
        e = e in a ? a[e] : a[e] = f;
        f = b.slice(0);
        nA(x(e.next, "An internal node must have a next map"), f, c)
    }) : z(d, function(e) {
        a[e] = new mA(c)
    })
}
  , uA = function(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (d)
            return d
    }
}
  , qA = function(a, b, c) {
    c = c || 0;
    b = ["c_" + b + "_" + c];
    "" != a && b.push("n_" + a + "_" + c);
    return b
};
kA.prototype.w = function(a) {
    tA(this, hA(a))
}
;
kA.prototype.C = function(a) {
    tA(this, a.b())
}
;
var tA = function(a, b, c) {
    a: {
        var d = b.a;
        if ("" != b.h) {
            var e = b.h;
            if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
                d = !1;
                break a
            }
        } else if (16 == d || 17 == d || 18 == d) {
            d = !1;
            break a
        }
        e = b.w;
        var f = "TEXTAREA" == e.tagName || "INPUT" == e.tagName || "BUTTON" == e.tagName || "SELECT" == e.tagName
          , g = !f && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);
        d = !f && !g || a.N[d] ? !0 : g ? !1 : b.c || b.g || b.o ? !0 : "INPUT" == e.tagName && a.V[e.type] ? 13 == d : "INPUT" == e.tagName || "BUTTON" == e.tagName ? 32 != d : !1
    }
    d && (!c && sA(b) ? a.g = !1 : (c = wh(b.a),
    d = qA(b.h, c, (b.G ? 1 : 0) | (b.g ? 2 : 0) | (b.c ? 4 : 0) | (b.o ? 8 : 0)),
    (e = uA(a.b, d)) && (e = !(1500 <= Ua() - a.h)),
    e || (a.b = a.c,
    a.h = Ua()),
    (e = uA(a.b, d)) && e.next && (a.b = e.next,
    a.h = Ua()),
    e && (e.next ? (0,
    b.b)() : (a.b = a.c,
    a.h = Ua(),
    a.m && (0,
    b.b)(),
    d = ab(e.a, "A terminal node must have a string shortcut identifier."),
    e = a.dispatchEvent(new vA("shortcut",d,b.m)),
    (e &= a.dispatchEvent(new vA("shortcut_" + d,d,b.m))) || (0,
    b.b)(),
    ze && (a.o = c)))))
}
  , vA = function(a, b, c) {
    Kg.call(this, a, c);
    this.identifier = b
};
w(vA, Kg);
var wA = function(a) {
    this.c = a;
    this.g = Dm.M();
    this.F = M.M();
    this.a = new kA(document);
    this.a.m = !1;
    this.a.T("CTRL_SHIFT_S", 83, (De ? 8 : 2) | 1);
    H(this.a, "shortcut", this.b, !1, this)
};
w(wA, Hg);
wA.prototype.W = function() {
    wA.D.W.call(this);
    nh(this.a, "shortcut", this.b, !1, this)
}
;
wA.prototype.b = function(a) {
    "CTRL_SHIFT_S" == a.identifier && (sh(this.c.b, "action"),
    a = this.F,
    N(a, O(a, 289)),
    this.g.log("swaplang"))
}
;
var yA = function(a, b, c, d, e, f) {
    K.call(this);
    this.v = a;
    this.b = F("DIV", "sl-sugg-button-container");
    this.C = b;
    a = D("sl-sugg-button-container", this.v) ? ig(this.v.firstElementChild) : ig(this.v);
    this.g = c ? c : a.length;
    dg(this.v);
    this.c = !!d;
    this.o = !!e;
    this.a = [];
    c = this.c ? this.g + 1 : this.g;
    for (d = 0; d < c; ++d)
        e = new ws(""),
        e.Oa(16, !0),
        H(e, "action", this.R, !1, this),
        e.Ua(this.b),
        vr(e.c, e, 0 == d ? 2 : 3),
        this.a.push(e);
    this.v.appendChild(this.b);
    this.h = [];
    this.m = F("DIV", "ls-left-arrow");
    this.w = F("DIV", "ls-right-arrow");
    this.G = 0;
    f && (this.v.insertBefore(this.m, this.v.firstChild),
    this.v.appendChild(this.w),
    H(this.m, "mouseover", function() {
        xA(this, 2)
    }, !1, this),
    H(this.m, "mouseout", function() {
        clearTimeout(this.G)
    }, !1, this),
    H(this.w, "mouseover", function() {
        xA(this, -2)
    }, !1, this),
    H(this.w, "mouseout", function() {
        clearTimeout(this.G)
    }, !1, this));
    this.F = M.M()
};
w(yA, K);
var xA = function(a, b) {
    a.b.scrollLeft -= b;
    a.G = setTimeout(function() {
        xA(a, b)
    }, 10)
};
yA.prototype.L = function(a) {
    var b = a.selected;
    a = a.data.slice(0, this.g);
    var c = this.h.slice();
    c.length = this.g;
    a: {
        c = yb(c).sort();
        var d = yb(a).sort();
        if (Ka(c) && Ka(d) && c.length == d.length) {
            for (var e = c.length, f = 0; f < e; f++)
                if (c[f] !== d[f]) {
                    c = !1;
                    break a
                }
            c = !0
        } else
            c = !1
    }
    c = !c;
    this.h = a;
    a = 0;
    this.c && this.o && (a = 1);
    for (d = 0; d < this.h.length; d++) {
        e = this.a[a];
        f = this.h[d];
        if (c) {
            e.nf(f);
            var g = this.C(f);
            e.g(g)
        }
        zA(this, e, e.Z() == b, f);
        a++
    }
    for (; a < this.g; a++)
        this.a[a].setVisible(!1);
    this.c && (a = this.a[this.o ? 0 : this.a.length - 1],
    a.nf("auto"),
    a.g(detect_language),
    zA(this, a, a.Z() == b));
    W(this.v, !0)
}
;
yA.prototype.R = function(a) {
    var b = a.a.Z();
    if (a.a.Ea(16)) {
        a: {
            var c = a.a;
            for (var d = 0, e = 0; d < this.a.length; d++) {
                var f = this.a[d];
                if (f && f.isVisible()) {
                    if (c == f) {
                        c = e;
                        break a
                    }
                    e++
                }
            }
            c = -1
        }
        lm(this.F, this.c, 2, b, c, "")
    } else
        a.a.ad(!0);
    lq(a.a.j(), this.v);
    this.dispatchEvent({
        type: "click",
        data: b
    })
}
;
var zA = function(a, b, c, d) {
    b.setVisible(!0);
    b.ad(c);
    c && lq(b.j(), a.b);
    d && (b.j().id = "sugg-item-" + d)
};
yA.prototype.K = function(a) {
    if (this.c) {
        var b = this.a[this.o ? 0 : this.a.length - 1];
        "" == a.data ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.C(a.data)),
        b.g(a))
    }
}
;
var AA = function(a) {
    this.a = a;
    this.b = this.m = this.h = this.o = this.g = null;
    this.R = !1;
    this.c = null;
    this.C = function() {
        return ""
    }
    ;
    this.w = Dm.M();
    this.ma = pl.M();
    this.F = M.M();
    this.G = null
}
  , DA = function(a, b) {
    b.Ni && (a.g = b.Ni,
    BA(a.g, a.N, a),
    CA(a, a.a, "srcLanguageUpdated", a.kl),
    CA(a, a.a, "detectSrcUpdated", a.Rk));
    b.Wi && (a.o = b.Wi,
    BA(a.o, a.T, a),
    CA(a, a.a, "tgtLanguageUpdated", a.Bl));
    b.Ki && (a.K = b.Ki,
    CA(a, a.K, "action", a.Fa));
    b.Mi && (a.V = b.Mi,
    CA(a, a.V, "action", v(a.L, a, "src", !0)));
    b.Vi && (a.X = b.Vi,
    CA(a, a.X, "action", v(a.L, a, "tgt", !1)));
    if (b.Oi) {
        a.h = b.Oi;
        CA(a, a.h, "click", a.ll);
        var c = a.h;
        H(a.a, "staticSrcSuggestionUpdated", c.L, !1, c);
        c = a.h;
        H(a.a, "detectSrcUpdated", c.K, !1, c)
    }
    b.Xi && (a.m = b.Xi,
    CA(a, a.m, "click", a.Cl),
    c = a.m,
    H(a.a, "staticTgtSuggestionUpdated", c.L, !1, c));
    b.Ic && (a.b = b.Ic,
    CA(a, a.b, "action", a.zl));
    b.Yi && (a.c = b.Yi,
    CA(a, new ar(a.c.j()), "key", a.ci),
    CA(a, new Mv(a.c.j()), "paste", a.ci));
    b.Za && (a.C = b.Za)
}
  , FA = function(a, b) {
    (a.R = b) && a.b ? a.b.qa(!1) : EA(a)
}
  , CA = function(a, b, c, d) {
    b && H(b, c, d, !1, a)
};
AA.prototype.N = function() {
    var a = this.g
      , b = this.a.g;
    var c = ow(this.a.X);
    GA(this, a, b, c, "slc")
}
;
AA.prototype.T = function() {
    var a = this.o
      , b = this.a.h;
    var c = ow(this.a.Y.a);
    GA(this, a, b, c, "tlc", !0)
}
;
var HA = function(a, b, c) {
    var d = {};
    d.lpk = c;
    a.G = d;
    a.G.lsa = b;
    Im(a.w, "webapp", "lsa", b, d)
};
AA.prototype.Fa = function() {
    this.g && this.g.isVisible() ? (HA(this, "lso", "src"),
    km(this.F, 217)) : this.o && this.o.isVisible() && (HA(this, "lso", "tgt"),
    km(this.F, 219))
}
;
AA.prototype.L = function(a, b) {
    HA(this, "lsc", a);
    km(this.F, b ? 218 : 220)
}
;
var GA = function(a, b, c, d, e, f) {
    var g = b.Z()
      , h = IA(a)
      , l = JA(a, f);
    c.call(a.a, g, 4);
    null != b.R && Xb(h, b.R);
    "" != d && (h.emphlang = d);
    b = ow(a.a.L.a);
    f || "" == b || (h.bslang = b);
    "" != l && (h.sugglang = l);
    a.G = h;
    a.G[e] = g;
    Im(a.w, "webapp", e, g, h)
};
k = AA.prototype;
k.kl = function(a) {
    this.g.Z() != a.data && KA(this.g, a.data);
    EA(this);
    a.Eh && (LA(this, "slauto", IA(this)),
    km(this.F, 221))
}
;
k.Rk = function() {
    EA(this)
}
;
k.Bl = function(a) {
    this.o.Z() != a.data && KA(this.o, a.data);
    EA(this);
    a.Eh && (LA(this, "tlauto", IA(this)),
    km(this.F, 222))
}
;
k.ll = function(a) {
    if (a.data == this.a.a)
        a.target.dispatchEvent({
            type: "clickSelected"
        }),
        a.preventDefault();
    else {
        var b = this.a.g
          , c = JA(this)
          , d = IA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        LA(this, "ssuggclick", d)
    }
}
;
k.Cl = function(a) {
    if (a.data == this.a.b)
        a.target.dispatchEvent({
            type: "clickSelected"
        }),
        a.preventDefault();
    else {
        var b = this.a.h
          , c = JA(this, !0)
          , d = IA(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        LA(this, "tsuggclick", d)
    }
}
;
k.zl = function() {
    var a = IA(this)
      , b = this.a.a
      , c = this.a.b
      , d = b;
    if ("auto" == b && (d = this.a.c,
    !d))
        return;
    (b = this.C()) && this.c && (this.c.b(b),
    tl(this.ma, 28));
    LA(this, "swapclick", a);
    a = this.a;
    a.g(c, 5);
    a.h(d, 5);
    a.dispatchEvent("languageSelected");
    Lm(this.w, "swap", 1, "accumulate");
    c = this.F;
    d = O(c, 89);
    a = new Wk;
    C(a, 1, 1);
    mf(d, 46, a);
    N(c, d)
}
;
k.ci = function(a) {
    if ("paste" == a.type || 2 > yc(this.c.Z()).length)
        this.a.G = !1
}
;
var IA = function(a, b) {
    var c = {};
    c.sl = a.a.a;
    c.tl = a.a.b;
    b && (c.val = b);
    (b = a.a.c) && (c.dsl = b);
    a.c && (c.ql = yc(a.c.Z()).length);
    return c
}
  , MA = function(a) {
    Lm(a.w, "ssel", a.a.ma);
    Lm(a.w, "tsel", a.a.aa)
}
  , LA = function(a, b, c) {
    a.G = c;
    a.w.log(b, c)
}
  , JA = function(a, b) {
    return b ? ow(a.a.R.a) : ow(a.a.K.a)
}
  , EA = function(a) {
    if (a.b && !a.R) {
        var b = a.a.a;
        "auto" == b && (b = a.a.c);
        "zh-CN" == b && "zh-TW" == a.a.w && (b = "zh-TW");
        "" == b || b == a.a.b ? a.b.qa(!1) : a.b.qa(!0)
    }
};
var NA = 0
  , OA = /^[a-zA-Z0-9_\-]*$/
  , PA = function(a) {
    x(a.match(OA), "ControlType.create contains invalid characters" + a);
    return a + "+" + NA++
};
var QA = function(a, b) {
    Hg.call(this);
    this.c = null;
    this.g = b;
    this.a = [];
    if (a > this.g)
        throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (b = 0; b < a; b++)
        this.a.push(this.b())
};
w(QA, Hg);
var RA = function(a, b) {
    a.c = b
}
  , TA = function(a, b) {
    a.a.length < a.g ? a.a.push(b) : SA(b)
};
QA.prototype.b = function() {
    return this.c ? this.c() : {}
}
;
var SA = function(a) {
    if (Ma(a))
        if (La(a.Ja))
            a.Ja();
        else
            for (var b in a)
                delete a[b]
};
QA.prototype.W = function() {
    QA.D.W.call(this);
    for (var a = this.a; a.length; )
        SA(a.pop());
    delete this.a
}
;
var WA = function() {
    this.a = [];
    this.b = new rj;
    this.L = this.K = this.R = this.m = 0;
    this.c = new rj;
    this.o = this.C = 0;
    this.Fa = 1;
    this.g = new QA(0,4E3);
    this.g.b = function() {
        return new UA
    }
    ;
    this.G = new QA(0,50);
    this.G.b = function() {
        return new VA
    }
    ;
    var a = this;
    this.w = new QA(0,2E3);
    RA(this.w, function() {
        return a.Fa++
    });
    this.h = {}
};
WA.prototype.F = Vi("goog.debug.Trace");
var VA = function() {
    this.hh = this.time = this.count = 0
};
VA.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.hh && a.push(" [VarAlloc = ", this.hh, "]");
    return a.join("")
}
;
var UA = function() {}
  , ZA = function(a, b, c, d) {
    var e = [];
    -1 == c ? e.push("    ") : e.push(XA(a.b - c));
    e.push(" ", YA(a.b - b));
    0 == a.a ? e.push(" Start        ") : 1 == a.a ? (e.push(" Done "),
    e.push(XA(a.h - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.g && e.push("[VarAlloc ", a.g, "] ");
    return e.join("")
};
UA.prototype.toString = function() {
    return null == this.type ? x(this.c) : "[" + this.type + "] " + this.c
}
;
var $A = {
    Hq: !0
};
WA.prototype.Vg = function() {
    this.h = {}
}
;
var aB = function(a) {
    a.h.stop && pj(a.b, function(b) {
        this.h.stop(b.id, $A)
    }, a);
    a.b.Qc()
};
WA.prototype.reset = function() {
    aB(this);
    for (var a = 0; a < this.a.length; a++) {
        var b = this.a[a];
        b.id ? uj(this.b, b.id) || (TA(this.w, b.id),
        TA(this.g, b)) : TA(this.g, b)
    }
    this.a.length = 0;
    this.m = Ua();
    this.o = this.C = this.L = this.K = this.R = 0;
    a = this.c.Bb();
    for (b = 0; b < a.length; b++) {
        var c = this.c.get(a[b]);
        c.count = 0;
        c.time = 0;
        c.hh = 0;
        TA(this.G, c)
    }
    this.c.Qc()
}
;
WA.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.a.length; d++) {
        var e = this.a[d];
        1 == e.a && c.pop();
        a.push(" ", ZA(e, this.m, b, c.join("")));
        b = e.b;
        a.push("\n");
        0 == e.a && c.push("|  ")
    }
    if (0 != this.b.qg()) {
        var f = Ua();
        a.push(" Unstopped timers:\n");
        pj(this.b, function(g) {
            a.push("  ", g, " (", f - g.startTime, " ms, started at ", YA(g.startTime), ")\n")
        })
    }
    b = this.c.Bb();
    for (d = 0; d < b.length; d++)
        c = this.c.get(b[d]),
        1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.C, "\n", "Total comments created ", this.o, "\n", "Overhead start: ", this.R, " ms\n", "Overhead end: ", this.K, " ms\n", "Overhead comment: ", this.L, " ms\n");
    return a.join("")
}
;
var XA = function(a) {
    a = Math.round(a);
    var b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
}
  , YA = function(a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
};
new WA;
var bB = function() {};
bB.prototype.stopPropagation = function() {
    this.g = !0;
    this.h()
}
;
bB.prototype.c = function() {
    return this.g || !1
}
;
var cB = function(a) {
    this.a = [];
    this.name = a
};
cB.prototype.c = Vi("wireless.events.browser.Dispatcher");
cB.prototype.dispatchEvent = function(a, b) {
    var c = "*" == a.a.charAt(0), d;
    this.handleEvent(a, b) && (d = !0);
    for (var e = (b || "") + this.name + "->", f = -1, g; (!d || c) && (g = this.a[++f]); )
        d = g.dispatchEvent(a, e) || d;
    d || b || Xi(this.c, "Event not handled: " + a.a + " type: " + (a ? a.type : "none") + " customArg: " + a.b);
    return d
}
;
var dB = function(a, b) {
    cB.call(this, b);
    this.g = a;
    this.b = [];
    this.C = {}
};
w(dB, cB);
var eB = new dB(void 0,"root");
za("_e", function(a, b, c, d) {
    a = a || {};
    a.a = b;
    a.b = c;
    a.o = d || a.currentTarget || null;
    a.h = a.stopPropagation;
    a.stopPropagation = bB.prototype.stopPropagation;
    a.c = bB.prototype.c;
    return eB.dispatchEvent(a)
});
var fB = function(a, b, c) {
    x(b, a.name + " - registerHandler: Missing controlType.");
    x(c, a.name + " - registerHandler: Missing handlerFunc. controlType: " + b);
    x(!a.C[b], a.name + " - registerHandler: Handler already defined. controlType: " + b);
    c = a.b.push(c, a.g) - 2;
    a.C[b] = c
};
dB.prototype.handleEvent = function(a, b) {
    var c = this.C[a.a];
    if (p(c))
        return gB(this, a, a.a, a.b, b),
        this.b[c].call(this.b[c + 1], a, a.a, a.b),
        !0
}
;
var gB = function(a, b, c, d, e) {
    ")" == c.slice(-1) || Yi(a.c, v(function() {
        var f = "";
        b && (f = "BrowserType=" + b.type,
        b.which && (f += " key=" + b.which),
        f = " (" + f + ")");
        var g = "";
        p(d) && (g = " customArg: " + d);
        return (e || "") + this.name + " handling event: " + c + g + f
    }, a))
};
var hB = function(a, b) {
    this.Code = a;
    this.Name = b
}
  , lB = function(a, b, c) {
    this.ra = b.ra + "_" + a.Code;
    "rcnt" == c ? this.ra += "_r" : "srch" == c && (this.ra += "_s");
    iB[this.ra] = this;
    this.b = b;
    this.a = c;
    this.Jb = a.Name;
    this.code = a.Code;
    this.v = Sp(jB, {
        id: this.ra,
        name: a.Name,
        code: a.Code,
        le: kB
    })
}
  , mB = {}
  , nB = (mB.rglr = 0,
mB.rcnt = 2,
mB.srch = 3,
mB);
lB.prototype.j = function() {
    return this.v
}
;
lB.prototype.me = function(a) {
    this.b.me(this.Jb, this.code, this.a, a)
}
;
var iB = {}
  , oB = function(a) {
    if (a && a.parentNode && a.parentNode.children)
        for (var b = 0, c = 0, d = a.parentNode; b < d.children.length; b++) {
            var e = d.children[b];
            if (tq(e) && Lp(e, "language_list_item_wrapper")) {
                if (a == e)
                    return c;
                c++
            }
        }
    return -1
}
  , pB = function(a, b, c) {
    (b = iB[c]) && b.me(oB(a.currentTarget))
}
  , qB = null
  , kB = PA("changeLanguage")
  , rB = PA("searchEdited")
  , vB = function(a, b) {
    Hg.call(this);
    this.a = [];
    this.c = [];
    this.g = [];
    this.ra = a;
    this.C = null;
    this.L = [];
    this.sa = new K;
    this.v = F("DIV", "language-list");
    this.h = b;
    this.o = Sp(sB, {
        le: rB,
        $l: this.ra,
        bm: this.h.o
    });
    bg(this.v, this.o);
    W(this.o, !1);
    this.G = new ws;
    this.G.ia(D("back-image-black", this.o));
    this.G.rd(this.h.b);
    Dr(this.G, this.h.b);
    H(this.G, "action", this.ba, !1, this);
    if (b = D("clear-image-black", this.o))
        this.N = new ws,
        this.N.ia(b),
        this.N.rd(this.h.a),
        Dr(this.N, this.h.a),
        H(this.N, "action", this.X, !1, this),
        W(b, !1);
    this.m = F("DIV", "language-list-unfiltered-langs-" + this.ra);
    this.aa = F("DIV", "language_list_languages language_list_" + a);
    bg(this.aa, this.m);
    bg(this.v, this.aa);
    this.b = F("DIV", "language_list_languages language_list_" + a);
    bg(this.v, this.b);
    W(this.b, !1);
    this.T = "";
    this.w = tB(this.h.h, this.m);
    W(this.w, !1);
    this.Ba = tB(this.h.c, this.m);
    uB[this.ra] = this;
    this.ya = 0;
    this.F = M.M();
    this.Na = "";
    this.R = {}
};
w(vB, Hg);
var uB = {}
  , BA = function(a, b, c) {
    H(a.sa, "returned", b, !1, c)
}
  , KA = function(a, b) {
    for (var c = 0; c < a.a.length; c++)
        if (a.a[c].code === b) {
            null != a.C && (a.C.setAttribute("aria-label", a.a[c].Jb),
            G(a.C, a.a[c].Jb));
            a.V(a.a[c].Jb, a.a[c].code);
            a.T = b;
            break
        }
};
vB.prototype.Z = function() {
    return this.T
}
;
var xB = function(a, b, c) {
    wB(uB[c], (new Tg(a)).target.value)
}
  , wB = function(a, b) {
    var c = D("clear-image-black", a.o);
    a.Na = b;
    if ("" === b)
        W(a.m.parentElement, !0),
        W(a.b, !1),
        c && W(c, !1);
    else
        for (W(a.m.parentElement, !1),
        W(a.b, !0),
        c && W(c, !0),
        a = ig(a.b),
        c = 0; c < a.length; c++) {
            var d = a[c]
              , e = b
              , f = Ag(d)
              , g = 0 == zc(e, f.substr(0, e.length));
            W(d, g);
            d = D("language_list_item", d);
            d.innerHTML = f;
            g && (e = f.substr(0, e.length),
            f = f.replace(e, "<b>" + e + "</b>"),
            d.innerHTML = f)
        }
};
vB.prototype.me = function(a, b, c, d) {
    KA(this, b);
    lm(this.F, "sl_list" == this.ra, nB[c], b, d, "srch" == c ? this.Na : "");
    this.R.ct = (Ua() - this.ya).toString();
    this.R.stp = c;
    this.close()
}
;
vB.prototype.V = function(a, b) {
    if ("auto" != b) {
        a = new hB(b,a);
        for (var c = 0; c < this.c.length; c++)
            if (this.c[c].code === b) {
                yB(this, c, 1);
                break
            }
        b = new lB(a,this,"rcnt");
        gg(this.w, b.j(), 1);
        this.c.splice(0, 0, b);
        5 < this.c.length && yB(this, 5, this.c.length - 5);
        W(this.w, !0)
    }
}
;
var AB = function(a) {
    a.ya = Ua();
    a.ba();
    zB(a, a.a);
    zB(a, a.c);
    zB(a, a.g);
    for (var b = 0; b < a.a.length; b++) {
        var c = a.a[b]
          , d = a.L.includes(c.code);
        V(c.j(), "item-emphasized", d)
    }
    km(a.F, "sl_list" === a.ra ? 82 : 83)
};
vB.prototype.close = function() {
    sh(this.sa, "returned")
}
;
var zB = function(a, b) {
    for (var c = 0; c < b.length; c++) {
        V(b[c].j(), "item-selected", b[c].code === a.T);
        var d = D("language_list_item", b[c].j())
          , e = "";
        b[c].code === a.T && (e = a.h.g.replace("%1$s", b[c].Jb));
        d.setAttribute("aria-label", e)
    }
}
  , yB = function(a, b, c) {
    for (var d = b; d < b + c; d++)
        hg(a.c[d].j());
    a.c.splice(b, c);
    W(a.w, 0 < a.c.length)
}
  , CB = function(a, b) {
    yB(a, 0, a.c.length);
    W(a.w, 0 < b.length);
    for (var c = 0; c < b.length && 5 > c; c++) {
        for (var d = new hB(b[c],""), e = 0; e < a.a.length; e++)
            a.a[e].code === b[c] && (d.Name = a.a[e].Jb);
        d = BB(a, d, a.w, "rcnt");
        a.c.push(d)
    }
    a.L = b
}
  , EB = function(a) {
    W(a.o, !0);
    a.X();
    DB(a).focus()
}
  , FB = function(a) {
    !tq(a.o) && EB(a)
};
vB.prototype.ba = function() {
    this.X();
    W(this.o, !1)
}
;
vB.prototype.setVisible = function(a) {
    W(this.v, a)
}
;
vB.prototype.isVisible = function() {
    return tq(this.v)
}
;
vB.prototype.X = function() {
    DB(this).value = "";
    wB(this, "")
}
;
var DB = function(a) {
    return fb(a.v.querySelector("#" + a.ra + "-search-box"))
}
  , BB = function(a, b, c, d) {
    d = new lB(b,a,d);
    "auto" === b.Code ? gg(a.m, d.j(), 0) : bg(c, d.j());
    return d
}
  , tB = function(a, b) {
    a = Sp(GB, {
        text: a
    });
    bg(b, a);
    return a
};
vB.prototype.K = function(a) {
    for (var b = 0; b < this.a.length; b++)
        hg(this.a[b].j());
    for (b = 0; b < this.g.length; b++)
        hg(this.g[b].j());
    this.a = [];
    this.g = [];
    if (null != a)
        for (b = 0; b < a.length; b++) {
            var c = BB(this, a[b], this.Ba, "rglr");
            this.a.push(c);
            "auto" != a[b].Code && (c = BB(this, a[b], this.b, "srch"),
            this.g.push(c))
        }
}
;
vB.prototype.W = function() {
    vB.D.W.call(this)
}
;
vB.prototype.j = function() {
    return this.v
}
;
var HB = function(a) {
    this.a = a
};
HB.prototype.rb = function() {
    return null
}
;
HB.prototype.Va = function() {
    return this.a
}
;
var IB = {
    "* ARIA-CHECKED": !0,
    "* ARIA-COLCOUNT": !0,
    "* ARIA-COLINDEX": !0,
    "* ARIA-DESCRIBEDBY": !0,
    "* ARIA-DISABLED": !0,
    "* ARIA-GOOG-EDITABLE": !0,
    "* ARIA-LABEL": !0,
    "* ARIA-LABELLEDBY": !0,
    "* ARIA-MULTILINE": !0,
    "* ARIA-MULTISELECTABLE": !0,
    "* ARIA-ORIENTATION": !0,
    "* ARIA-PLACEHOLDER": !0,
    "* ARIA-READONLY": !0,
    "* ARIA-REQUIRED": !0,
    "* ARIA-ROLEDESCRIPTION": !0,
    "* ARIA-ROWCOUNT": !0,
    "* ARIA-ROWINDEX": !0,
    "* ARIA-SELECTED": !0,
    "* ABBR": !0,
    "* ACCEPT": !0,
    "* ACCESSKEY": !0,
    "* ALIGN": !0,
    "* ALT": !0,
    "* AUTOCOMPLETE": !0,
    "* AXIS": !0,
    "* BGCOLOR": !0,
    "* BORDER": !0,
    "* CELLPADDING": !0,
    "* CELLSPACING": !0,
    "* CHAROFF": !0,
    "* CHAR": !0,
    "* CHECKED": !0,
    "* CLEAR": !0,
    "* COLOR": !0,
    "* COLSPAN": !0,
    "* COLS": !0,
    "* COMPACT": !0,
    "* COORDS": !0,
    "* DATETIME": !0,
    "* DIR": !0,
    "* DISABLED": !0,
    "* ENCTYPE": !0,
    "* FACE": !0,
    "* FRAME": !0,
    "* HEIGHT": !0,
    "* HREFLANG": !0,
    "* HSPACE": !0,
    "* ISMAP": !0,
    "* LABEL": !0,
    "* LANG": !0,
    "* MAX": !0,
    "* MAXLENGTH": !0,
    "* METHOD": !0,
    "* MULTIPLE": !0,
    "* NOHREF": !0,
    "* NOSHADE": !0,
    "* NOWRAP": !0,
    "* OPEN": !0,
    "* READONLY": !0,
    "* REQUIRED": !0,
    "* REL": !0,
    "* REV": !0,
    "* ROLE": !0,
    "* ROWSPAN": !0,
    "* ROWS": !0,
    "* RULES": !0,
    "* SCOPE": !0,
    "* SELECTED": !0,
    "* SHAPE": !0,
    "* SIZE": !0,
    "* SPAN": !0,
    "* START": !0,
    "* SUMMARY": !0,
    "* TABINDEX": !0,
    "* TITLE": !0,
    "* TYPE": !0,
    "* VALIGN": !0,
    "* VALUE": !0,
    "* VSPACE": !0,
    "* WIDTH": !0
}
  , JB = {
    "* USEMAP": !0,
    "* ACTION": !0,
    "* CITE": !0,
    "* HREF": !0,
    "* LONGDESC": !0,
    "* SRC": !0,
    "LINK HREF": !0,
    "* FOR": !0,
    "* HEADERS": !0,
    "* NAME": !0,
    "A TARGET": !0,
    "* CLASS": !0,
    "* ID": !0,
    "* STYLE": !0
};
var KB = {};
function LB(a) {
    if (B && !Re(9))
        return [0, 0, 0, 0];
    var b = KB.hasOwnProperty(a) ? KB[a] : null;
    if (b)
        return b;
    65536 < Object.keys(KB).length && (KB = {});
    var c = [0, 0, 0, 0];
    b = MB(a, /\\[0-9A-Fa-f]{6}\s?/g);
    b = MB(b, /\\[0-9A-Fa-f]{1,5}\s/g);
    b = MB(b, /\\./g);
    b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    b = b.replace(/{[^]*/gm, "");
    b = NB(b, c, /(\[[^\]]+\])/g, 2);
    b = NB(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
    b = NB(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
    b = NB(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = NB(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = NB(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    NB(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return KB[a] = b
}
function NB(a, b, c, d) {
    return a.replace(c, function(e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}
function MB(a, b) {
    return a.replace(b, function(c) {
        return Array(c.length + 1).join("A")
    })
}
;var OB = {
    rgb: !0,
    rgba: !0,
    alpha: !0,
    rect: !0,
    image: !0,
    "linear-gradient": !0,
    "radial-gradient": !0,
    "repeating-linear-gradient": !0,
    "repeating-radial-gradient": !0,
    "cubic-bezier": !0,
    matrix: !0,
    perspective: !0,
    rotate: !0,
    rotate3d: !0,
    rotatex: !0,
    rotatey: !0,
    steps: !0,
    rotatez: !0,
    scale: !0,
    scale3d: !0,
    scalex: !0,
    scaley: !0,
    scalez: !0,
    skew: !0,
    skewx: !0,
    skewy: !0,
    translate: !0,
    translate3d: !0,
    translatex: !0,
    translatey: !0,
    translatez: !0
}
  , PB = /[\n\f\r"'()*<>]/g
  , QB = {
    "\n": "%0a",
    "\f": "%0c",
    "\r": "%0d",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "*": "%2a",
    "<": "%3c",
    ">": "%3e"
};
function RB(a) {
    return x(QB[a])
}
var SB = function(a, b, c) {
    b = yc(b);
    if ("" == b)
        return null;
    if (0 == zc("url(", b.substr(0, 4))) {
        if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c)
            a = null;
        else {
            a: {
                b = b.substring(4, b.length - 1);
                for (var d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
            }
            a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != Pc(a) ? 'url("' + Pc(a).replace(PB, RB) + '")' : null : null
        }
        return a
    }
    if (0 < b.indexOf("(")) {
        if (/"|'/.test(b))
            return null;
        for (a = /([\-\w]+)\(/g; c = a.exec(b); )
            if (!(c[1]in OB))
                return null
    }
    return b
};
function TB(a, b) {
    a = n[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}
function UB(a, b) {
    return (a = n[a]) && a.prototype && a.prototype[b] || null
}
var VB = TB("Element", "attributes") || TB("Node", "attributes")
  , WB = UB("Element", "hasAttribute")
  , XB = UB("Element", "getAttribute")
  , YB = UB("Element", "setAttribute")
  , ZB = UB("Element", "removeAttribute")
  , $B = UB("Element", "getElementsByTagName")
  , aC = UB("Element", "matches") || UB("Element", "msMatchesSelector")
  , bC = TB("Node", "nodeName")
  , cC = TB("Node", "nodeType")
  , dC = TB("Node", "parentNode")
  , eC = TB("HTMLElement", "style") || TB("Element", "style")
  , fC = TB("HTMLStyleElement", "sheet")
  , gC = UB("CSSStyleDeclaration", "getPropertyValue")
  , hC = UB("CSSStyleDeclaration", "setProperty");
function iC(a, b, c, d) {
    if (a)
        return a.apply(b);
    a = b[c];
    if (!d(a))
        throw Error("Clobbering detected");
    return a
}
function jC(a, b, c, d) {
    if (a)
        return a.apply(b, d);
    if (B && 10 > document.documentMode) {
        if (!b[c].call)
            throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c])
        throw Error("Clobbering detected");
    return b[c].apply(b, d)
}
function kC(a) {
    return iC(VB, a, "attributes", function(b) {
        return b instanceof NamedNodeMap
    })
}
function lC(a, b, c) {
    try {
        jC(YB, a, "setAttribute", [b, c])
    } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred"))
            throw d;
    }
}
function mC(a) {
    nC(a);
    return iC(eC, a, "style", function(b) {
        return b instanceof CSSStyleDeclaration
    })
}
function nC(a) {
    if (!(a instanceof HTMLElement))
        throw Error("Not an HTMLElement");
}
function oC(a) {
    nC(a);
    return iC(fC, a, "sheet", function(b) {
        return b instanceof CSSStyleSheet
    })
}
function pC(a) {
    return iC(bC, a, "nodeName", function(b) {
        return "string" == typeof b
    })
}
function qC(a) {
    return iC(cC, a, "nodeType", function(b) {
        return "number" == typeof b
    })
}
function rC(a) {
    return iC(dC, a, "parentNode", function(b) {
        return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
    })
}
function sC(a, b) {
    return jC(gC, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}
function tC(a, b, c) {
    jC(hC, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
}
;var uC = B && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g
  , vC = {
    "-webkit-border-horizontal-spacing": !0,
    "-webkit-border-vertical-spacing": !0
}
  , yC = function(a, b, c) {
    var d = [];
    a = wC(yb(a.cssRules));
    z(a, function(e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
            throw Error("Invalid container id");
        if (!(b && B && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
            var f = b ? e.selectorText.replace(uC, "#" + b + " $1") : e.selectorText;
            d.push(md(f, xC(e.style, c)))
        }
    });
    return od(d)
}
  , wC = function(a) {
    return kb(a, function(b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
    })
}
  , AC = function(a, b, c) {
    a = zC("<style>" + a + "</style>");
    return null == a || null == a.sheet ? pd : yC(a.sheet, void 0 != b ? b : null, c)
}
  , zC = function(a) {
    if (B && !Re(10) || "function" != typeof n.DOMParser)
        return null;
    a = Pd(ec("Never attached to DOM."), "<html><head></head><body>" + a + "</body></html>");
    return (new DOMParser).parseFromString(Bd(a), "text/html").body.children[0]
}
  , xC = function(a, b) {
    if (!a)
        return $c;
    var c = document.createElement("div").style
      , d = BC(a);
    z(d, function(e) {
        var f = Ae && e in vC ? e : e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        vc(f, "--") || vc(f, "var") || (e = sC(a, e),
        e = SB(f, e, b),
        null != e && tC(c, f, e))
    });
    return Qd(c.cssText || "")
}
  , DC = function(a) {
    var b = Array.from(jC($B, a, "getElementsByTagName", ["STYLE"]))
      , c = Cb(b, function(e) {
        return yb(oC(e).cssRules)
    });
    c = wC(c);
    c.sort(function(e, f) {
        e = LB(e.selectorText);
        a: {
            f = LB(f.selectorText);
            for (var g = Math.min(e.length, f.length), h = 0; h < g; h++) {
                var l = e[h];
                var m = f[h];
                l = l > m ? 1 : l < m ? -1 : 0;
                if (0 != l) {
                    e = l;
                    break a
                }
            }
            e = e.length;
            f = f.length;
            e = e > f ? 1 : e < f ? -1 : 0
        }
        return -e
    });
    a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
    for (var d; d = a.nextNode(); )
        z(c, function(e) {
            jC(aC, d, d.matches ? "matches" : "msMatchesSelector", [e.selectorText]) && e.style && CC(d, e.style)
        });
    z(b, hg)
}
  , CC = function(a, b) {
    var c = BC(a.style)
      , d = BC(b);
    z(d, function(e) {
        if (!(0 <= c.indexOf(e))) {
            var f = sC(b, e);
            tC(a.style, e, f)
        }
    })
}
  , BC = function(a) {
    Ka(a) ? a = yb(a) : (a = Pb(a),
    vb(a, "cssText"));
    return a
};
var EC = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]")
  , FC = 0
  , GC = function() {
    this.c = [];
    this.b = [];
    this.a = "data-elementweakmap-index-" + FC++
};
GC.prototype.set = function(a, b) {
    if (jC(WB, a, "hasAttribute", [this.a])) {
        var c = parseInt(jC(XB, a, "getAttribute", [this.a]) || null, 10);
        this.b[c] = b
    } else
        c = this.b.push(b) - 1,
        lC(a, this.a, c.toString()),
        this.c.push(a);
    return this
}
;
GC.prototype.get = function(a) {
    if (jC(WB, a, "hasAttribute", [this.a]))
        return a = parseInt(jC(XB, a, "getAttribute", [this.a]) || null, 10),
        this.b[a]
}
;
GC.prototype.clear = function() {
    this.c.forEach(function(a) {
        jC(ZB, a, "removeAttribute", [this.a])
    }, this);
    this.c = [];
    this.b = []
}
;
var HC = Vi("goog.html.sanitizer.SafeDomTreeProcessor")
  , IC = !B || Te(10)
  , JC = !B || null == document.documentMode
  , KC = function() {};
var LC = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0
};
var MC = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0
};
var QC = function(a) {
    a = a || new NC;
    OC(a);
    this.a = Vb(a.a);
    this.g = Vb(a.C);
    this.h = Vb(a.L);
    this.w = a.w;
    z(a.o, function(b) {
        if (!vc(b, "data-"))
            throw new Xa('Only "data-" attributes allowed, got: %s.',[b]);
        if (vc(b, "data-sanitizer-"))
            throw new Xa('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-", b]);
        this.a["* " + b.toUpperCase()] = PC
    }, this);
    this.m = a.c;
    this.c = a.G;
    this.b = null;
    this.o = a.m
};
w(QC, KC);
var RC = function(a) {
    return function(b, c) {
        return (b = a(yc(b), c)) && "about:invalid#zClosurez" != Pc(b) ? Pc(b) : null
    }
}
  , NC = function() {
    this.a = {};
    z([IB, JB], function(a) {
        z(Pb(a), function(b) {
            this.a[b] = PC
        }, this)
    }, this);
    this.b = {};
    this.o = [];
    this.C = Vb(LC);
    this.L = Vb(MC);
    this.w = !1;
    this.Fa = Uc;
    this.R = this.h = this.K = this.c = Jb;
    this.G = null;
    this.g = this.m = !1
}
  , SC = function(a, b) {
    return function(c, d, e, f) {
        c = a(c, d, e, f);
        return null == c ? null : b(c, d, e, f)
    }
}
  , TC = function(a, b, c, d) {
    a[c] && !b[c] && (a[c] = SC(a[c], d))
}
  , OC = function(a) {
    if (a.g)
        throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    TC(a.a, a.b, "* USEMAP", UC);
    var b = RC(a.Fa);
    z(["* ACTION", "* CITE", "* HREF"], function(d) {
        TC(this.a, this.b, d, b)
    }, a);
    var c = RC(a.c);
    z(["* LONGDESC", "* SRC", "LINK HREF"], function(d) {
        TC(this.a, this.b, d, c)
    }, a);
    z(["* FOR", "* HEADERS", "* NAME"], function(d) {
        TC(this.a, this.b, d, Ta(VC, this.K))
    }, a);
    TC(a.a, a.b, "A TARGET", Ta(WC, ["_blank", "_self"]));
    TC(a.a, a.b, "* CLASS", Ta(XC, a.h));
    TC(a.a, a.b, "* ID", Ta(YC, a.h));
    TC(a.a, a.b, "* STYLE", Ta(a.R, c));
    a.g = !0
}
  , ZC = function(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase()
}
  , PC = function(a) {
    return yc(a)
}
  , WC = function(a, b) {
    b = yc(b);
    return sb(a, b.toLowerCase()) ? b : null
}
  , UC = function(a) {
    return (a = yc(a)) && "#" == a.charAt(0) ? a : null
}
  , VC = function(a, b, c) {
    return a(yc(b), c)
}
  , XC = function(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f)
    }
    return 0 == d.length ? null : d.join(" ")
}
  , YC = function(a, b, c) {
    return a(yc(b), c)
}
  , $C = function(a, b) {
    var c = b.data;
    (b = rC(b)) && "style" == pC(b).toLowerCase() && !("STYLE"in a.g) && "STYLE"in a.h && (c = nd(AC(c, a.b, v(function(d, e) {
        return this.m(d, {
            tq: e
        })
    }, a))));
    return document.createTextNode(c)
}
  , aD = function(a) {
    var b = new NC;
    b = new QC(b);
    var c = !("STYLE"in b.g) && "STYLE"in b.h;
    c = "*" == b.c && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ua()).toString(36)) : b.c;
    b.b = c;
    if (IC) {
        c = a;
        if (IC) {
            a = Yf("SPAN");
            b.b && "*" == b.c && (a.id = b.b);
            b.o && (c = zC("<div>" + c + "</div>"),
            x(c, "Older browsers that don't support inert parsing should not get to this branch"),
            DC(c),
            c = c.innerHTML);
            c = Pd(ec("Never attached to DOM."), c);
            var d = document.createElement("template");
            if (JC && "content"in d)
                Td(d, c),
                d = d.content;
            else {
                var e = document.implementation.createHTMLDocument("x");
                d = e.body;
                Td(e.body, c)
            }
            c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
            for (d = EC ? new WeakMap : new GC; e = c.nextNode(); ) {
                c: {
                    var f = b;
                    var g = e;
                    var h = qC(g);
                    switch (h) {
                    case 3:
                        g = $C(f, g);
                        break c;
                    case 1:
                        h = g;
                        1 == qC(h) || Za("Expected Node of type Element but got Node of type %s", qC(h));
                        g = f;
                        f = h;
                        if ("TEMPLATE" == pC(f).toUpperCase())
                            g = null;
                        else {
                            h = pC(f).toUpperCase();
                            if (h in g.g)
                                var l = null;
                            else
                                g.h[h] ? l = document.createElement(h) : (l = Yf("SPAN"),
                                g.w && lC(l, "data-sanitizer-original-tag", h.toLowerCase()));
                            if (l) {
                                var m = l
                                  , q = kC(f);
                                if (null != q)
                                    for (var r = 0; h = q[r]; r++)
                                        if (h.specified) {
                                            var u = g;
                                            var y = f
                                              , Q = h
                                              , L = Q.name;
                                            if (vc(L, "data-sanitizer-"))
                                                u = null;
                                            else {
                                                var Na = pC(y);
                                                Q = Q.value;
                                                var Hb = {
                                                    tagName: yc(Na).toLowerCase(),
                                                    attributeName: yc(L).toLowerCase()
                                                }
                                                  , Ha = {
                                                    Xj: void 0
                                                };
                                                "style" == Hb.attributeName && (Ha.Xj = mC(y));
                                                y = ZC(Na, L);
                                                y in u.a ? (u = u.a[y],
                                                u = u(Q, Hb, Ha)) : (L = ZC(null, L),
                                                L in u.a ? (u = u.a[L],
                                                u = u(Q, Hb, Ha)) : u = null)
                                            }
                                            null === u || lC(m, h.name, u)
                                        }
                                g = l
                            } else
                                g = null
                        }
                        break c;
                    default:
                        Xi(HC, "Dropping unknown node type: " + h),
                        g = null
                    }
                }
                if (g) {
                    if (1 == qC(g) && d.set(e, g),
                    e = rC(e),
                    f = !1,
                    e)
                        h = qC(e),
                        l = pC(e).toLowerCase(),
                        m = rC(e),
                        11 != h || m ? "body" == l && m && (h = rC(m)) && !rC(h) && (f = !0) : f = !0,
                        h = null,
                        f || !e ? h = a : 1 == qC(e) && (h = d.get(e)),
                        h.content && (h = h.content),
                        h.appendChild(g)
                } else
                    dg(e)
            }
            d.clear && d.clear();
            b = a
        } else
            b = Yf("SPAN");
        0 < kC(b).length && (a = Yf("SPAN"),
        a.appendChild(b),
        b = a);
        b = (new XMLSerializer).serializeToString(b);
        b = b.slice(b.indexOf(">") + 1, b.lastIndexOf("</"))
    } else
        b = "";
    return Pd(ec("Output of HTML sanitizer"), b)
};
var bD = function() {};
w(bD, hr);
Ga(bD);
bD.prototype.Vc = function() {
    return "menuitem"
}
;
bD.prototype.tb = function(a) {
    var b = aD(a.kd)
      , c = $f(document, b);
    b = c.querySelector("div");
    if (!b)
        throw Error("Invalid item label");
    b.innerHTML = a.Va();
    Mp(b, ["gt-is-sp", "gt-is-cont"]);
    b = ["DIV", kr(this, a)];
    var d = F("DIV");
    T(d, "gt-is-ld");
    c = F("DIV", null, c);
    T(c, "gt-is-lb");
    b = b.concat([d, c]);
    if (a.Kb) {
        c = F("A", {
            href: "#"
        }, a.Kb);
        T(c, "gt-is-act");
        var e = new Z;
        e.ia(c);
        Tq(e, a);
        c.addEventListener("mouseup", function(f) {
            e.jb() && f.stopPropagation()
        });
        b.push(c)
    }
    b = F.apply(null, b);
    b.id = Pq(a);
    return a.v = b
}
;
bD.prototype.Uc = function(a) {
    return "DIV" == a.tagName
}
;
bD.prototype.xa = function() {
    return "gt-is-itm"
}
;
var cD = function(a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    Z.call(this, a.Va(), c || bD.M(), d);
    this.Ud = a;
    this.kd = b;
    this.Kb = e;
    this.Oa(1, !1)
};
w(cD, Z);
cD.prototype.Va = function() {
    return this.Ud.Va()
}
;
cD.prototype.rb = function() {
    return this.Ud.rb()
}
;
var dD = function(a) {
    Kg.call(this, a)
};
w(dD, Kg);
If(window.document);
new K;
var eD = function(a) {
    var b = a.getBoundingClientRect();
    if (B) {
        var c = mq(a);
        a = qq(a);
        b.left = c.x;
        b.right = c.x + a.width;
        b.top = c.a;
        b.bottom = c.a + a.height
    }
    return b
}
  , fD = function(a, b) {
    var c = If(a)
      , d = 0;
    if (ya(b))
        d = b;
    else if (B && !Re(9)) {
        if (b = c.a.selection.createRange())
            try {
                var e = a.createTextRange()
                  , f = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                f.setEndPoint("EndToStart", e);
                d = f.text.length
            } catch (m) {}
    } else
        d = a.selectionStart;
    e = "_h#" + Qa(a);
    var g = c.j(e);
    g ? c.kf(g) : g = c.b("PRE", {
        id: e
    });
    g.parentNode || c.a.body.appendChild(g);
    var h = [];
    z(a.value, function(m, q, r) {
        h.push(" " == m && q + 1 != r.length && " " == r[q + 1] ? "\u00a0" : m)
    });
    h = h.join("");
    c.appendChild(g, c.a.createTextNode(String(h.substring(0, d))));
    e = Fg(c, "SPAN");
    e.appendChild(c.a.createTextNode("\u200b"));
    c.appendChild(g, e);
    c.appendChild(g, c.a.createTextNode(String(h.substring(d) + " ")));
    c = Kp(a);
    z(c, function(m) {
        T(g, m)
    });
    var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
    z("font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y".split(" "), function(m) {
        try {
            var q;
            (q = $p(a, m) || (a.currentStyle ? a.currentStyle[m] : null) || a.style[m]) && (l += m + ":" + q + ";")
        } catch (r) {}
    });
    g.style.cssText = l;
    c = aq(a, "overflowX");
    g.style.overflowX = c && "visible" != c ? c : "auto";
    c = aq(a, "overflowY");
    g.style.overflowY = c && "visible" != c ? c : "auto";
    g.scrollTop = a.scrollTop;
    g.scrollLeft = a.scrollLeft;
    cq(g, hq(a));
    c = eD(e);
    return "INPUT" == a.tagName.toUpperCase() ? new Df(c.left,Math.ceil(mq(a).a + qq(a).height)) : new Df(c.left,Math.ceil(c.bottom))
};
var gD = function(a, b) {
    X.call(this, b);
    this.c = a
};
w(gD, X);
gD.prototype.b = "info";
gD.prototype.g = !1;
var hD = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
gD.prototype.Ib = function() {
    return this.b
}
;
var iD = function(a, b) {
    a.c = b;
    if (b = a.j()) {
        var c = a.a;
        c.kf(b);
        c.Ph(b, a.c)
    }
};
gD.prototype.isVisible = function() {
    var a = this.j();
    return null != a && Lp(a, "jfk-butterBar-shown")
}
;
gD.prototype.setVisible = function(a) {
    x(this.Aa, "setVisible must only be called after the butter bar is rendered.");
    V(this.j(), "jfk-butterBar-shown", a)
}
;
gD.prototype.Ka = function() {
    this.v = this.a.b("DIV", "jfk-butterBar");
    x(this.j(), "The DOM element for the butter bar cannot be null.");
    var a = this.j();
    a && (Fp(a, "live", "assertive"),
    Fp(a, "atomic", "true"));
    iD(this, this.c);
    this.g = this.g;
    (a = this.j()) && V(a, "jfk-butterBar-mini", this.g);
    a = this.b;
    if (this.$b()) {
        var b = this.j()
          , c = hD[a];
        U(b, hD[this.b]);
        T(b, c)
    }
    this.b = a
}
;
var jD = function(a, b, c) {
    K.call(this);
    this.w = c.client;
    this.g = a;
    this.a = b;
    this.o = c.Nl;
    this.X = !1;
    this.C = c.cn;
    this.R = c.Ol;
    this.nb = c.Vj || null;
    this.N = c.na;
    this.ce = c.Sa;
    this.ya = c.qn;
    this.Me = c.Pn;
    this.K = null;
    this.T = c.Nn;
    this.sa = c.em;
    this.L = 0;
    this.m = {};
    this.Kc = c.Pj;
    this.lg = c.Ak;
    this.Fd = c.hn;
    this.Pa = c.pq;
    this.fd = c.Rl;
    this.jd = !!c.Bq;
    this.Y = !!c.Pl;
    this.ba = !!c.oq;
    this.ae = c.nn || "Did you mean: <div>%1$s</div>";
    this.kd = c.Cq || "Translating <div>%1$s</div>";
    this.$d = c.Dq || "Undo";
    this.Ne = c.Gq || 500;
    a = new gD("");
    a.Ua(Jf("gt-bbar"));
    a.setVisible(!1);
    this.V = a;
    this.c = this.b = this.h = "";
    this.G = Dm.M();
    "async_translate_onebox" == this.w && (this.G.o = "/translate");
    this.aa = new Gq(this);
    this.ee = new ar(this.o.j());
    this.Ba = pl.M();
    this.F = M.M();
    this.ma = !0;
    this.Fd && this.aa.O(this.ee, "key", this.Vb).O(this.o, "change", this.Zc);
    this.aa.O(this.a, "action", this.Ya).O(this.o.j(), "blur", this.wb).O(this.o.j(), "focus", this.Wb).O(this.N, "srcLanguageUpdated", this.Na).O(this.N, "tgtLanguageUpdated", this.Na);
    null != this.R && this.aa.O(this.R, "change", this.ed)
};
w(jD, K);
jD.prototype.update = function() {
    0 != this.h.length || this.ba ? this.ma && (lD(this, this.g.a[0]),
    this.L++,
    this.m[this.L] = {},
    this.m[this.L][0] = Ua(),
    mD(this.ya, this.h, this.b, this.c, v(this.hd, this, this.h, this.b, this.c, this.L))) : kD(this)
}
;
var oD = function(a) {
    var b = a.a;
    b.c && b.removeChild(b.c, !0);
    b.c = null;
    nD(a, !!Wq(a.a))
};
jD.prototype.ed = function() {
    hz(this.R) && kD(this)
}
;
jD.prototype.Vb = function(a) {
    if (!this.a.isVisible())
        return !1;
    if (27 == a.keyCode) {
        var b = pD(this.g.a);
        Im(this.G, this.w, "is", "0", {
            q: this.h,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        });
        b = this.F;
        var c = qD(this)
          , d = rD(this);
        N(b, Bm(b, 204, c, d, sD(this), [], null != this.a.h, 0));
        kD(this)
    }
    13 == a.keyCode && -1 == this.a.Ia && (b = pD(this.g.a),
    Im(this.G, this.w, "is", "8", {
        q: this.h,
        sl: this.b,
        tl: this.c,
        sn: b.length,
        s: b
    }),
    b = this.F,
    c = qD(this),
    d = rD(this),
    N(b, Bm(b, 205, c, d, sD(this), [], null != this.a.h, 0)),
    kD(this));
    if (36 == a.keyCode || 35 == a.keyCode)
        return !1;
    b = this.a.ab(a);
    38 != a.keyCode && 40 != a.keyCode || -1 == this.a.Ia || (a = $w(this.a),
    a != this.a.c && this.o.Z() != a.Va() && (this.X = !0,
    tl(this.Ba, "is"),
    this.o.b(a.Va()),
    lD(this)));
    return b
}
;
jD.prototype.Zc = function(a) {
    this.X ? this.X = !1 : this.R && hz(this.R) ? kD(this) : "set" == a.Gd ? kD(this) : Bi(v(this.fe, this, a), 0)
}
;
jD.prototype.fe = function() {
    var a = Jc(this.o.Z(), "\n") ? "" : tD(this.o.Z())
      , b = this.N.a
      , c = this.N.b;
    if (a != this.h || b != this.b || c != this.c)
        this.h = a,
        this.b = b,
        this.c = c,
        this.update()
}
;
var tD = function(a) {
    return a.replace(/[ \n\t\r\f,\.\?!]+/g, " ").replace(/^ /, "")
};
jD.prototype.Ya = function(a) {
    var b = qD(this)
      , c = rD(this)
      , d = sD(this)
      , e = []
      , f = null != this.a.h;
    if (a.target == this.a.h)
        f = this.F,
        N(f, Bm(f, 185, b, c, d, e, !0, 1)),
        uD(this, "it", "translationSelected", "");
    else if (a.target == this.a.g)
        a = this.F,
        N(a, Bm(a, 181, b, c, d, e, f, 1)),
        uD(this, "ss", "spellingSelected", c);
    else if (a.target.getParent && a.target.getParent() === this.a.g)
        uD(this, "ss", "ignoreSpellingSuggestion", "");
    else if (a.target == this.a.c)
        a = this.F,
        N(a, Bm(a, 183, b, c, d, e, f, 1)),
        uD(this, "ls", "languageSelected", d[0]);
    else {
        a = a.target;
        a: {
            var g = this.a.b;
            for (var h = 0; h < g.length; h++)
                if (g[h] == a) {
                    g = h;
                    break a
                }
            g = -1
        }
        h = this.F;
        N(h, Bm(h, 142, b, c, d, e, f, g + 1));
        vD(this, a.Va(), "2")
    }
}
;
var uD = function(a, b, c, d) {
    var e = pD(a.g.a);
    Im(a.G, a.w, "is", "b", {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: e.length,
        s: e,
        si: 0,
        sy: b
    });
    kD(a);
    a.dispatchEvent(new dD(c,d))
}
  , vD = function(a, b, c) {
    for (var d = pD(a.g.a), e = 0, f = 0; f < d.length; f++)
        if (d[f] == b) {
            e = f + 1;
            break
        }
    Im(a.G, a.w, "is", c, {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: d.length,
        s: d,
        si: e
    });
    a.h = tD(b);
    tl(a.Ba, "is");
    a.o.b(b);
    "2" == c ? (kD(a),
    a.o.j().blur(),
    a.dispatchEvent("suggestionSelected")) : (a.update(),
    a.dispatchEvent("suggestionCopied"))
};
jD.prototype.Na = function() {
    kD(this)
}
;
jD.prototype.hd = function(a, b, c, d, e) {
    this.m[d][1] = Ua();
    0 == this.h.length && !this.ba || 0 == e.length && !this.Y ? kD(this) : 0 == e.length ? wD(this) : this.b != b || this.c != c ? wD(this) : this.T ? (this.m[d][2] = Ua(),
    this.K && this.K.abort(),
    this.K = qp(this.Me, this.b, this.c, this.ce, e, v(this.Ed, this, a, d, e), "is", void 0, this.Ne)) : xD(this, a, lb(e, function(f) {
        return new Aw(f)
    }), d)
}
;
jD.prototype.Ed = function(a, b, c, d, e) {
    null == d ? (yD(this, a, c, e),
    jm(this.F, 145)) : (this.m[b][3] = Ua(),
    c.length == d.length ? xD(this, a, lb(c, function(f, g) {
        return new Aw(c[g],d[g])
    }), b) : (zD(this),
    jm(this.F, 146),
    xD(this, a, lb(c, function(f) {
        return new Aw(f)
    }), b)))
}
;
var wD = function(a) {
    AD(a.a, []);
    a.g.a = [];
    lD(a);
    var b = a.a;
    b.o && 0 != b.o.length || nD(a, !1)
}
  , kD = function(a) {
    BD(a.ya);
    a.K && a.K.abort();
    nD(a, !1);
    for (var b = a.a, c = []; b.o && 0 != b.o.length; )
        c.push(b.removeChild(Xq(b, 0), !0));
    b.b = [];
    b.c = null;
    b.g = null;
    b.h = null;
    b = a.g;
    b.a = [];
    b.b = null;
    b.c = null;
    lD(a)
}
  , xD = function(a, b, c, d) {
    var e = a.m[d][1] - a.m[d][0];
    if (a.T)
        var f = a.m[d][3] - a.m[d][2];
    delete a.m[d];
    if (0 != c.length) {
        var g = c;
        c.length > a.sa && (g = Ab(c, 0, a.sa));
        a.g.a = g;
        c = {};
        a.T && (c.td = f);
        if (a.L > d)
            CD(a, !1),
            DD(a, e, b, g, c, !1);
        else {
            var h = [];
            z(g, function(m, q) {
                q = new Cw(m,this.Kc,this.lg,0 == q && !this.Y,this.T,this.nb);
                h.push(q);
                if ((q = this.g.b) && q.Va() == m.Va()) {
                    m = "";
                    var r = void 0 === r ? !1 : r;
                    q = pD(this.g.a);
                    sb(q, m) && (m = "");
                    m ? (m = new HB(m),
                    r = new cD(m,r ? this.kd : this.ae,void 0,void 0,r ? this.$d : void 0),
                    this.g.b = m,
                    ED(this.a, r),
                    FD(this.a, !0),
                    nD(this, !0)) : (this.g.b = null,
                    ED(this.a, null),
                    nD(this, !!Wq(this.a)))
                }
            }, a);
            AD(a.a, h);
            6 < GD(a.g) && oD(a);
            a.Y && FD(a.a, !!a.a.h);
            lD(a, g[0]);
            if (!a.fd) {
                d = Tf(If(document).a);
                f = fD(a.o.j(), a.o.Z().length);
                var l = hq(mg(a.a.j()));
                f.x = 0;
                f.a += d.a;
                f.a -= l.a;
                cq(a.a.j(), f)
            }
            a.Kc && HD(a);
            ID(a);
            nD(a, !0);
            CD(a, !0);
            DD(a, e, b, g, c, !0)
        }
    }
}
  , nD = function(a, b) {
    a.Pa || a.a.setVisible(b)
}
  , qD = function(a) {
    var b = [];
    a = a.a.b;
    for (var c = 0; c < a.length; c++)
        b.push([a[c].Va(), a[c].rb()]);
    return b
}
  , rD = function(a) {
    return a.a.g ? a.a.g.Va() : ""
}
  , sD = function(a) {
    a = a.a.c ? a.a.c.Ud.a : "";
    return "" != a ? [a] : []
}
  , CD = function(a, b) {
    var c = a.F
      , d = qD(a)
      , e = rD(a);
    N(c, Bm(c, b ? 141 : 203, d, e, sD(a), [], null != a.a.h, 0))
}
  , lD = function(a, b) {
    if (a.C)
        if (b) {
            var c = a.o.Z();
            vc(b.Va(), c) ? a.C.b(b.Va()) : a.C.b(c)
        } else
            a.C.b("")
}
  , HD = function(a) {
    z(a.a.b, function(b) {
        b.Qb && H(b.Qb, "action", this.Kb, !1, this)
    }, a)
};
jD.prototype.Kb = function(a) {
    var b = this.a.b;
    z(b, function(c, d) {
        if (c.Qb == a.target) {
            var e = F("SPAN", null, (window.MSG_SUGGESTION_FLAGGED || "").replace("%1$s", c.Va()))
              , f = F("SPAN", null, " ");
            c = F("A", {
                href: "javascript:;"
            }, window.MSG_DISMISS || "");
            e = F("DIV", null, e, f, c);
            iD(this.V, e);
            this.V.setVisible(!0);
            H(c, "click", this.vb, !1, this);
            JD(this, d + 1, b)
        }
    }, this)
}
;
var ID = function(a) {
    z(a.a.b, function(b) {
        b.kc && H(b.kc, "action", this.bb, !1, this)
    }, a)
};
jD.prototype.bb = function(a) {
    z(this.a.b, function(b) {
        b.kc == a.target && vD(this, b.Va(), "a")
    }, this)
}
;
jD.prototype.vb = function() {
    this.V.setVisible(!1)
}
;
jD.prototype.wb = function() {
    this.a && (this.jd ? (wD(this),
    this.ma = !1) : nD(this, !1));
    this.C && this.C.b("")
}
;
jD.prototype.Wb = function() {
    this.ma = !0
}
;
var JD = function(a, b, c) {
    c = lb(c, function(d) {
        return d.Va()
    });
    Im(a.G, a.w, "is", "3", {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: c.length,
        s: c,
        si: b
    })
}
  , pD = function(a) {
    return a ? lb(a, function(b) {
        return b ? b.Va() : ""
    }) : []
}
  , KD = function(a) {
    if (!a)
        return [];
    a = lb(a, function(b) {
        return b ? b.rb() : ""
    });
    return kb(a, function(b) {
        return null != b
    })
}
  , DD = function(a, b, c, d, e, f) {
    d = pD(d);
    b = {
        q: c,
        sl: a.b,
        tl: a.c,
        sd: b,
        sn: d.length,
        s: d
    };
    for (var g in e)
        b[g] = e[g];
    Im(a.G, a.w, "is", f ? "1" : "7", b)
}
  , zD = function(a) {
    var b = a.g.a
      , c = pD(b);
    b = KD(b);
    Im(a.G, a.w, "is", "6", {
        q: a.h,
        sl: a.b,
        tl: a.c,
        sn: c.length,
        s: c,
        tn: b.length,
        st: b
    })
}
  , yD = function(a, b, c, d) {
    b = {
        q: b,
        sl: a.b,
        tl: a.c,
        sn: c.length,
        s: c
    };
    d && (b.ec = d);
    Im(a.G, a.w, "is", "9", b)
};
var LD = function(a, b, c, d) {
    var e = gt();
    this.g = a;
    this.C = b;
    this.R = c;
    this.w = d;
    this.G = void 0 === e ? !1 : e;
    this.a = "";
    this.b = new Qr(this.K,300,this);
    this.c = this.h = 0;
    this.m = !1;
    this.o = Dm.M();
    H(this.g, "change", this.L, !1, this);
    this.b.start(void 0)
};
LD.prototype.L = function(a) {
    var b = "";
    a.Gd && (b = a.Gd);
    "paste" == b && (this.h++,
    Lm(this.o, "pc", 1, "accumulate"));
    "set" == b && this.c++;
    this.b.start(void 0)
}
;
LD.prototype.K = function() {
    if (this.C) {
        this.b.stop();
        var a = yc(this.g.Z());
        if (a != this.a)
            if (this.w && this.w())
                this.b.start(300);
            else if (!(2E3 < ce(a).length && 0 == this.h && 0 == this.c) || this.G) {
                this.c = this.h = 0;
                var b = a.substring(0, this.a.length) == this.a;
                (a = this.a.substring(0, a.length) == a) || 0 != this.a.length && b && !this.m ? Lm(this.o, "otf", "2") : Lm(this.o, "otf", "1");
                this.m = a;
                this.R()
            }
    }
}
;
LD.prototype.reset = function(a) {
    this.b.stop();
    this.a = yc(this.g.Z());
    a || (this.m = !1)
}
;
var MD = function() {
    K.call(this);
    this.a = 0;
    this.endTime = this.startTime = null
};
w(MD, K);
MD.prototype.c = function() {
    this.b("begin")
}
;
MD.prototype.g = function() {
    this.b("end")
}
;
MD.prototype.b = function(a) {
    this.dispatchEvent(a)
}
;
var ND = function(a, b) {
    Ja(b) || (b = [b]);
    x(0 < b.length, "At least one Css3Property should be specified.");
    b = lb(b, function(c) {
        if (t(c))
            return c;
        cb(c, "Expected css3 property to be an object.");
        var d = c.Fi + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
        x(c.Fi && ya(c.duration) && c.timing && ya(c.delay), "Unexpected css3 property value: %s", d);
        return d
    });
    Yp(a, "transition", b.join(","))
}
  , OD = Lb(function() {
    if (B)
        return Re("10.0");
    var a = Yf("DIV")
      , b = Ae ? "-webkit" : ze ? "-moz" : B ? "-ms" : we ? "-o" : null
      , c = {
        transition: "opacity 1s linear"
    };
    b && (c[b + "-transition"] = "opacity 1s linear");
    Ud(a, Jd("div", {
        style: c
    }));
    a = a.firstChild;
    x(a.nodeType == Node.ELEMENT_NODE);
    b = a.style[oe("transition")];
    return "" != ("undefined" !== typeof b ? b : a.style[Xp(a, "transition")] || "")
});
var PD = function(a, b, c, d, e) {
    MD.call(this);
    this.v = a;
    this.m = b;
    this.w = c;
    this.h = d;
    this.G = Ja(e) ? e : [e]
};
w(PD, MD);
k = PD.prototype;
k.play = function() {
    if (1 == this.a)
        return !1;
    this.c();
    this.b("play");
    this.startTime = Ua();
    this.a = 1;
    if (OD())
        return Yp(this.v, this.w),
        this.o = Bi(this.Jm, void 0, this),
        !0;
    this.wg(!1);
    return !1
}
;
k.Jm = function() {
    qq(this.v);
    ND(this.v, this.G);
    Yp(this.v, this.h);
    this.o = Bi(v(this.wg, this, !1), 1E3 * this.m)
}
;
k.stop = function() {
    1 == this.a && this.wg(!0)
}
;
k.wg = function(a) {
    Yp(this.v, "transition", "");
    Ci(this.o);
    Yp(this.v, this.h);
    this.endTime = Ua();
    this.a = 0;
    a ? this.b("stop") : this.b("finish");
    this.g()
}
;
k.W = function() {
    this.stop();
    PD.D.W.call(this)
}
;
var RD = function(a, b) {
    K.call(this);
    this.c = new Gq(this);
    a = a || null;
    QD(this);
    this.v = a;
    b && (this.Nd = b)
};
w(RD, K);
k = RD.prototype;
k.v = null;
k.Dh = !0;
k.Ch = null;
k.Qd = !1;
k.Og = -1;
k.Nd = "toggle_display";
k.Ib = function() {
    return this.Nd
}
;
k.j = function() {
    return this.v
}
;
k.setAutoHide = function(a) {
    QD(this);
    this.Dh = a
}
;
var QD = function(a) {
    if (a.Qd)
        throw Error("Can not change this state of the popup while showing.");
};
RD.prototype.isVisible = function() {
    return this.Qd
}
;
RD.prototype.setVisible = function(a) {
    this.o && this.o.stop();
    this.h && this.h.stop();
    if (a) {
        if (!this.Qd && this.dispatchEvent("beforeshow")) {
            if (!this.v)
                throw Error("Caller must call setElement before trying to show the popup");
            this.m();
            a = Hf(this.v);
            if (this.Dh)
                if (this.c.O(a, "mousedown", this.Ci, !0),
                B) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && "IFRAME" == b.nodeName; ) {
                        try {
                            var c = sg(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.c.O(a, "mousedown", this.Ci, !0);
                    this.c.O(a, "deactivate", this.Bi)
                } else
                    this.c.O(a, "blur", this.Bi);
            "toggle_display" == this.Nd ? (this.v.style.visibility = "visible",
            W(this.v, !0)) : "move_offscreen" == this.Nd && this.m();
            this.Qd = !0;
            this.Og = Ua();
            this.o ? (gh(this.o, "end", this.Wh, !1, this),
            this.o.play()) : this.Wh()
        }
    } else
        SD(this)
}
;
RD.prototype.m = Fa;
var SD = function(a, b) {
    a.Qd && a.dispatchEvent({
        type: "beforehide",
        target: b
    }) && (a.c && Lq(a.c),
    a.Qd = !1,
    Ua(),
    a.h ? (gh(a.h, "end", Ta(a.Jh, b), !1, a),
    a.h.play()) : a.Jh(b))
};
k = RD.prototype;
k.Jh = function(a) {
    "toggle_display" == this.Nd ? this.Jl() : "move_offscreen" == this.Nd && (this.v.style.top = "-10000px");
    this.dispatchEvent({
        type: "hide",
        target: a
    })
}
;
k.Jl = function() {
    this.v.style.visibility = "hidden";
    W(this.v, !1)
}
;
k.Wh = function() {
    this.dispatchEvent("show")
}
;
k.Ci = function(a) {
    a = a.target;
    ng(this.v, a) || TD(this, a) || 150 > Ua() - this.Og || SD(this, a)
}
;
k.Bi = function(a) {
    var b = Hf(this.v);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement,
        !a || ng(this.v, a) || "BODY" == a.tagName)
            return
    } else if (a.target != b)
        return;
    150 > Ua() - this.Og || SD(this)
}
;
var TD = function(a, b) {
    return nb(a.Ch || [], function(c) {
        return b === c || ng(c, b)
    })
};
RD.prototype.W = function() {
    RD.D.W.call(this);
    this.c.Ja();
    Ig(this.o);
    Ig(this.h);
    delete this.v;
    delete this.c;
    delete this.Ch
}
;
var UD = function(a, b) {
    this.L = b || void 0;
    RD.call(this, a)
};
w(UD, RD);
UD.prototype.m = function() {
    if (this.L) {
        var a = !this.isVisible() && "move_offscreen" != this.Ib()
          , b = this.j();
        a && (b.style.visibility = "hidden",
        W(b, !0));
        this.L.c(b, 8, this.wi);
        a && W(b, !1)
    }
}
;
var VD = function(a, b) {
    UD.call(this, a);
    this.g = b;
    this.a = 0;
    this.b = null;
    this.w = 0;
    this.setVisible(!0);
    this.setVisible(!1);
    T(this.j(), "round-trip-popup");
    T(this.g, "round-trip-content")
};
w(VD, UD);
VD.prototype.K = function() {
    Ci(this.w);
    1 == this.a ? gh(this.b, "finish", v(this.K, this)) : 0 == this.a && (this.w = Bi(v(this.C, this, -1), 200))
}
;
VD.prototype.C = function(a) {
    if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
        var b = this.isVisible();
        this.setVisible(!0);
        var c = -Math.ceil(qq(this.g).width);
        wq(this.j()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.setVisible(b);
        if (OD()) {
            b = .2;
            if (0 != this.a) {
                var e = parseInt($p(this.g, "left"), 10);
                this.G();
                b *= (c - e) / (c - d);
                d = e
            }
            this.a = a;
            this.b = new PD(this.g,b,{
                left: d + "px"
            },{
                left: c + "px"
            },"left " + b + "s");
            this.b.play();
            gh(this.b, "finish", v(this.G, this));
            -1 == a ? gh(this.b, "finish", v(this.setVisible, this, !1)) : this.setVisible(!0)
        } else
            Yp(this.g, "left", c + "px"),
            this.setVisible(1 == a ? !0 : !1)
    }
}
;
VD.prototype.G = function() {
    0 != this.a && (this.b.stop(),
    Bi(v(ph, this, this.b)),
    this.a = 0,
    this.b = null)
}
;
var XD = function(a) {
    this.v = a || null;
    this.a = F("DIV", "gt-hl-layer", Zf(""));
    this.b = null;
    this.v && (eg(this.a, this.v),
    WD(this))
}
  , ZD = function(a, b, c, d, e) {
    var f = d || "gt-hl-text";
    d = a.v && (a.v.value || Ag(a.v));
    WD(a);
    dg(a.a);
    if (b != c || e) {
        if (0 < b) {
            var g = d.substring(0, b);
            YD(a.a, g, 0, e)
        }
        b < c && (g = d.substring(b, c),
        f = F("SPAN", f),
        YD(f, g, b, e),
        bg(a.a, f));
        c < d.length && (g = d.substring(c),
        YD(a.a, g, c, e))
    }
}
  , WD = function(a) {
    var b;
    var c = a.v
      , d = Hf(c);
    (b = B && c.currentStyle) && Qf(If(d).a) && "auto" != b.width && "auto" != b.height && !b.boxSizing ? (d = Aq(c, b.width, "width", "pixelWidth"),
    c = Aq(c, b.height, "height", "pixelHeight"),
    b = new Ff(d,c)) : (b = new Ff(c.offsetWidth,c.offsetHeight),
    d = Dq(c),
    c = jq(c),
    b = new Ff(b.width - c.left - d.left - d.right - c.right,b.height - c.top - d.top - d.bottom - c.bottom));
    c = a.a;
    d = Hf(c);
    var e = Qf(If(d).a);
    !B || Re("10") || e && Re("8") ? zq(c, b, "content-box") : (d = c.style,
    e ? (d.pixelWidth = b.width,
    d.pixelHeight = b.height) : (e = Dq(c),
    c = jq(c),
    d.pixelWidth = b.width + c.left + e.left + e.right + c.right,
    d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
    d = hq(a.v);
    c = a.a;
    b = d.x;
    d = d.a;
    e = hq(c);
    b instanceof Df && (d = b.a,
    b = b.x);
    b = $a(b) - e.x;
    cq(c, c.offsetLeft + b, c.offsetTop + (Number(d) - e.a));
    c = Dq(a.v);
    Yp(a.a, "paddingLeft", c.left + "px");
    Yp(a.a, "paddingRight", c.right + "px");
    a.a.dir = a.v.dir
}
  , YD = function(a, b, c, d) {
    d = d || [];
    for (var e = 0, f; f = d[e]; e++)
        if (!(0 > f.pe - c)) {
            if (f.pe - c >= b.length)
                break;
            if (0 < f.pe - c) {
                var g = b.substring(0, f.pe - c);
                $D(a, g)
            }
            var h = f.className || "gt-hl-text";
            g = b.substring(f.pe - c, f.dh - c);
            h = F("SPAN", h);
            $D(h, g);
            bg(a, h);
            b = b.substring(f.dh - c);
            c = f.dh
        }
    b && $D(a, b)
}
  , $D = function(a, b) {
    b = ae(b).split("\n");
    for (var c = 0, d = b.length; c < d; c++)
        0 < c && bg(a, F("BR")),
        bg(a, Zf(b[c]))
};
var aE = function(a, b) {
    this.a = a instanceof Df ? a : new Df(a,b)
};
w(aE, Zr);
aE.prototype.c = function(a, b, c, d) {
    x(a);
    var e = eq(Hf(a))
      , f = this.a.x + e.x;
    e = this.a.a + e.a;
    var g = Vr(a);
    f -= g.x;
    e -= g.a;
    Xr(new Df(f,e), a, b, c, null, null, d)
}
;
var bE = function(a, b) {
    aE.call(this, a, b)
};
w(bE, aE);
bE.prototype.g = 0;
bE.prototype.b = function(a) {
    this.g = a
}
;
bE.prototype.c = function(a, b, c, d) {
    var e = dq(a);
    e = iq(e);
    var f = Sf(If(a).a);
    f = new Df(this.a.x + f.scrollLeft,this.a.a + f.scrollTop);
    var g = b
      , h = Xr(f, a, g, c, e, 10, d);
    if (0 != (h & 496)) {
        if (h & 16 || h & 32)
            g ^= 4;
        if (h & 64 || h & 128)
            g ^= 1;
        h = Xr(f, a, g, c, e, 10, d);
        0 != (h & 496) && Xr(f, a, b, c, e, this.g, d)
    }
}
;
var cE = function(a, b) {
    sx.call(this, a, b);
    this.N = !0;
    ex(this, !0);
    this.setVisible(!1, !0);
    this.b = new rj
};
w(cE, sx);
k = cE.prototype;
k.$i = !1;
k.oi = 0;
k.Ab = null;
k.Da = function(a) {
    cE.D.Da.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && dE(this, this.a.j(a), 1)
}
;
k.ea = function() {
    cE.D.ea.call(this);
    this.b.forEach(this.Re, this);
    var a = Y(this);
    a.O(this, "action", this.Tg);
    a.O(this.a.a, "mousedown", this.Pa, !0)
}
;
var dE = function(a, b, c, d, e, f) {
    b && uj(a.b, Qa(b)) || (c = a.cg(b, c, d, e, f),
    a.Aa && a.Re(c),
    b = Ta(a.Cm, b),
    a.j() && Y(a).O(a.j(), "keydown", b))
};
k = cE.prototype;
k.Cm = function(a, b) {
    if (27 == b.keyCode)
        a.focus();
    else if (a = Xq(this, this.Ia)) {
        a = a.j();
        var c = new Tg(b.b,a);
        c.target = a;
        if (32 == b.keyCode || 13 == b.keyCode)
            Xg(a) ? Qh(a, "keydown", !1, c) : rh(a, "keydown", !1, c);
        32 == b.keyCode && this.Dc()
    }
}
;
k.cg = function(a, b, c, d, e) {
    if (!a)
        return null;
    b = {
        v: a,
        Ui: b,
        hm: c,
        nd: d ? "contextmenu" : "mousedown",
        wi: e
    };
    this.b.set(Qa(a), b);
    return b
}
;
k.Re = function(a) {
    Y(this).O(a.v, a.nd, this.Lf);
    "contextmenu" != a.nd && Y(this).O(a.v, "keydown", this.Fm)
}
;
k.Ze = function() {
    if (this.Aa)
        for (var a = this.b.Bb(), b = 0; b < a.length; b++)
            this.eg(this.b.get(a[b]));
    this.b.Qc()
}
;
k.eg = function(a) {
    Y(this).Ha(a.v, a.nd, this.Lf)
}
;
k.xf = function(a, b, c) {
    b = p(a.Ui) ? new xx(a.v,a.Ui,!0) : new bE(b,c);
    b.b && b.b(5);
    var d = a.hm;
    c = a.wi;
    var e = a.v;
    a = this.isVisible();
    var f;
    (f = this.isVisible()) || (f = 150 > Ua() - this.oi);
    f && this.$i ? this.Dc() : (this.Ab = e || null,
    this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8,
    a || (this.j().style.visibility = "hidden"),
    W(this.j(), !0),
    b.c(this.j(), d, c),
    a || (this.j().style.visibility = "visible"),
    this.uc(-1),
    this.setVisible(!0)))
}
;
k.Dc = function() {
    this.isVisible() && (this.setVisible(!1),
    this.isVisible() || (this.oi = Ua(),
    this.Ab = null))
}
;
k.Tg = function() {
    this.Dc()
}
;
k.Lf = function(a) {
    eE(this, a)
}
;
k.Fm = function(a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || eE(this, a);
    40 == a.keyCode && ax(this)
}
;
var eE = function(a, b) {
    for (var c = a.b.Bb(), d = 0; d < c.length; d++) {
        var e = a.b.get(c[d]);
        if (e.v == b.a) {
            a.xf(e, b.clientX, b.clientY);
            b.preventDefault();
            b.stopPropagation();
            break
        }
    }
};
cE.prototype.Pa = function(a) {
    this.isVisible() && !ux(this, a.target) && this.Dc()
}
;
cE.prototype.pf = function(a) {
    cE.D.pf.call(this, a);
    this.Dc()
}
;
cE.prototype.W = function() {
    cE.D.W.call(this);
    this.b && (this.b.Qc(),
    delete this.b)
}
;
var fE = function(a, b, c, d) {
    return new PD(a,.218,{
        opacity: c
    },{
        opacity: d
    },{
        Fi: "opacity",
        duration: .218,
        timing: b,
        delay: 0
    })
};
var gE = function(a) {
    K.call(this);
    this.v = a;
    a = B ? "focusout" : "blur";
    this.a = H(this.v, B ? "focusin" : "focus", this, !B);
    this.b = H(this.v, a, this, !B)
};
w(gE, K);
gE.prototype.handleEvent = function(a) {
    var b = new Tg(a.b);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
}
;
gE.prototype.W = function() {
    gE.D.W.call(this);
    oh(this.a);
    oh(this.b);
    delete this.v
}
;
var hE = function(a, b, c) {
    cE.call(this, b, c);
    this.w = new rj;
    this.g = a || 5;
    this.C = null;
    this.K = !1;
    this.h = Array(this.g);
    this.X = Array(this.g);
    this.V = Dm.M();
    this.F = M.M();
    this.Y = this.m = this.vc = null;
    this.$i = !0
};
w(hE, cE);
var iE = "";
hE.prototype.Ka = function() {
    hE.D.Ka.call(this);
    for (var a = 0; a < this.g; ++a)
        this.gb(new nx(""), !0);
    "" != iE && (this.m = new nx(iE),
    Br(this.m, "gt-edit-menuitem"),
    this.gb(this.m, !0))
}
;
hE.prototype.Ua = function(a) {
    hE.D.Ua.call(this, a);
    T(this.j(), "alt-menu")
}
;
hE.prototype.Zg = function(a) {
    a = this.w.get(Qa(a));
    for (var b = 0; b < I(a, 2) && b < this.g; ++b) {
        var c = Xq(this, b);
        c.g(J(Co(a, b), 0));
        c.ma = b;
        c.setVisible(!0, !0)
    }
    for (; b < this.g; ++b)
        Xq(this, b).setVisible(!1);
    this.m && this.m.setVisible(!0, !0)
}
;
var jE = function(a, b, c) {
    a.w.set(Qa(b), c);
    dE(a, b, 9, 8, !1, new Up(-2,1,-2,1))
};
k = hE.prototype;
k.Ze = function() {
    hE.D.Ze.call(this);
    null != this.vc && this.vc.b();
    this.w.Qc()
}
;
k.setVisible = function(a, b) {
    var c = this.Ab;
    this.Y = c;
    if (a && null != c) {
        kE(this, c);
        Mm(this.V, "altshow");
        var d = this.F;
        N(d, O(d, 207))
    } else
        null != this.C && ZD(this.C, 0, 0);
    null != c && (a ? this.dg(c) : this.$f(c));
    b = hE.D.setVisible.call(this, a, b);
    a && null != this.j() && yq(this.j(), !1);
    return b
}
;
k.qb = function() {
    if (null != this.Y) {
        var a = Ag(this.Y);
        if (null != a)
            return a
    }
    return ""
}
;
k.Dc = function() {
    hE.D.Dc.call(this);
    if (this.K)
        for (var a = 0; a < this.h.length; a++) {
            var b = this.h[a];
            Ci(b.w);
            b.G();
            b.C(-1);
            b.G();
            b.setVisible(!1)
        }
}
;
k.dg = function(a) {
    T(a, "trans-target");
    null === this.vc ? a.title = "" : this.vc.b(a)
}
;
k.$f = function(a) {
    U(a, "trans-target");
    null === this.vc ? a.title = "" : this.vc.a(a)
}
;
k.ab = function(a) {
    if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode)
        return !1;
    var b = hE.D.ab.call(this, a);
    if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = wq(this.Ab.parentNode.parentNode)
          , d = null;
        if (!c && 37 == a.keyCode || c && 39 == a.keyCode)
            d = !1;
        if (!c && 39 == a.keyCode || c && 37 == a.keyCode)
            d = !0;
        if (this.Vf(d) && (c = this.Ab,
        (c = d ? p(c.nextElementSibling) ? c.nextElementSibling : jg(c.nextSibling, !0) : p(c.previousElementSibling) ? c.previousElementSibling : jg(c.previousSibling, !1)) && c != this.Ab))
            return this.Dc(),
            this.Li(d),
            this.xf(c ? this.b.get(Qa(c)) : null, 0, 0),
            lE(this),
            a.preventDefault(),
            a.stopPropagation(),
            !0
    }
    return b
}
;
k.xf = function(a, b, c) {
    wq((a.v || this.Ab).parentNode.parentNode) ? Yp(this.j(), "direction", "rtl") : Yp(this.j(), "direction", "");
    if (this.K)
        for (var d = 0; d < this.h.length; d++)
            mE(this, d),
            G(this.h[d].g, "...");
    this.Zg(a.v);
    hE.D.xf.call(this, a, b, c)
}
;
var nE = function(a, b, c) {
    !a.K || b >= a.g || "" == c || (G(a.h[b].g, c),
    mE(a, b))
}
  , mE = function(a, b) {
    Yr(Xq(a, b).j(), 12, a.h[b].j(), 8, new Df(1,0))
};
k = hE.prototype;
k.xe = function(a) {
    hE.D.xe.call(this, a);
    var b = this.Ab;
    if (null != b) {
        Mm(this.V, "altmenuhl");
        var c = this.F;
        N(c, O(c, 209));
        kE(this, b);
        a = this.ff(a.target);
        -1 != a && a != this.g && (Ci(this.X[a]),
        this.X[a] = Bi(this.dm, 300, this),
        this.K && (b = this.h[a],
        wq(this.Ab.parentNode.parentNode) ? (T(b.j(), "rtl"),
        Yp(b.j(), "direction", "rtl")) : (U(b.j(), "rtl"),
        Yp(b.j(), "direction", "")),
        mE(this, a),
        Ci(b.w),
        0 == b.a ? b.w = Bi(v(b.C, b, 1), 300) : b.C(1)))
    }
}
;
k.dm = function() {
    Mm(this.V, "altmenuhold");
    var a = this.F;
    N(a, O(a, 208))
}
;
k.xg = function(a) {
    hE.D.xg.call(this, a);
    a = this.ff(a.target);
    -1 != a && a != this.g && (Ci(this.X[a]),
    this.K && this.h[a].K())
}
;
k.ff = function(a) {
    return Zq(this, a)
}
;
k.Vf = function() {
    return !0
}
;
k.Li = function() {}
;
k.cg = function(a, b, c, d, e) {
    (a = hE.D.cg.call(this, a, b, c, d, e)) && "mousedown" == a.nd && (a.nd = "click");
    return a
}
;
k.Re = function(a) {
    hE.D.Re.call(this, a);
    Y(this).O(a.v, "mouseover", this.Ba);
    Y(this).O(a.v, "mouseout", this.T);
    Y(this).O(a.v, "contextmenu", this.sa);
    Y(this).O(a.v, "mousemove", this.ya)
}
;
k.eg = function(a) {
    hE.D.eg.call(this, a);
    Y(this).Ha(a.v, "mouseover", this.Ba);
    Y(this).Ha(a.v, "mouseout", this.T);
    Y(this).Ha(a.v, "contextmenu", this.sa);
    Y(this).Ha(a.v, "mousemove", this.ya)
}
;
var kE = function(a, b) {
    if (null != a.C && (b = a.w.get(Qa(b))) && (a = a.C,
    a.b))
        for (var c = a.v && (a.v.value || Ag(a.v)), d = -1, e = -1, f = !1, g = 0; g < I(a.b, 5); g++) {
            var h = mp(a.b, g);
            if (0 != I(h, 2) && (0 == Hh(h, 5) && (f = c.indexOf(J(h, 4), e + 1),
            0 <= f ? (d = f,
            e = d + J(h, 4).length,
            f = !0) : f = !1),
            mp(a.b, g).yb() == b.yb())) {
                if (f) {
                    c = [];
                    for (e = 0; e < I(b, 3); ++e)
                        c.push({
                            pe: d + Hh(Do(b, e), 0),
                            dh: d + Hh(Do(b, e), 1)
                        });
                    ZD(a, 0, 0, void 0, c)
                } else
                    d = c.indexOf(J(b, 0)),
                    0 <= d && ZD(a, d, d + J(b, 0).length);
                break
            }
        }
}
  , oE = function(a, b) {
    b ? qj(a.b.hc(!1), function(c) {
        "" == this.a.Rh(c.v) && (T(c.v, "trans-target-empty"),
        this.a.lf(c.v, "_"));
        return !0
    }, a) : qj(a.b.hc(!1), function(c) {
        Lp(c.v, "trans-target-empty") && (U(c.v, "trans-target-empty"),
        this.a.lf(c.v, ""));
        return !0
    }, a)
};
hE.prototype.Ba = function(a) {
    !Xz() && this.isEnabled() && (T(a.target, "trans-target-highlight"),
    kE(this, a.target),
    oE(this, !0),
    Mm(this.V, "althighlight"),
    a = this.F,
    N(a, O(a, 206)))
}
;
hE.prototype.T = function(a) {
    U(a.target, "trans-target-highlight");
    null == this.C || this.isVisible() || ZD(this.C, 0, 0);
    oE(this, !1)
}
;
hE.prototype.ya = function(a) {
    Xz() && this.T(a)
}
;
hE.prototype.sa = function(a) {
    Xz() || (this.T(a),
    Kz(a.target, void 0).select())
}
;
var lE = function(a) {
    qj(a.b.hc(!1), function(b) {
        U(b.v, "trans-target-highlight");
        return !0
    }, a)
};
hE.prototype.Tg = function(a) {
    a && a.a && a.a.Ab && (a.h = a.a.Ab);
    hE.D.Tg.call(this, a)
}
;
hE.prototype.Lf = function(a) {
    Xz() ? lE(this) : this.Sc && hE.D.Lf.call(this, a)
}
;
var pE = function(a, b, c) {
    this.ba = this.c = null;
    hE.call(this, a, b, c)
};
w(pE, hE);
k = pE.prototype;
k.Li = function(a) {
    this.c = a
}
;
k.setVisible = function(a, b) {
    b = pE.D.setVisible.call(this, a, b);
    this.c = null;
    a ? this.ba = this.qb() : null != this.ba && this.ba != this.qb() && this.dispatchEvent(new Kg("action",this));
    return b
}
;
k.dg = function(a) {
    pE.D.dg.call(this, a);
    T(a, "trans-edit");
    a.contentEditable = !0;
    Yw(this, a);
    Vw(this).focus();
    vg(Vw(this), !0);
    Y(this).O(a, "keydown", this.$h);
    Y(this).O(a, "mouseout", this.zf);
    Y(this).O(a, "mouseover", this.zf);
    if (null != this.c) {
        a = Kz(a, void 0);
        var b = this.c ? a.Tb() : a.oc()
          , c = nz(a);
        a = c;
        var d = b
          , e = new Iz;
        e.g = Sz(a, d, c, b);
        if (lg(a) && !ag(a)) {
            var f = a.parentNode;
            d = jb(f.childNodes, a);
            a = f
        }
        lg(c) && !ag(c) && (f = c.parentNode,
        b = jb(f.childNodes, c),
        c = f);
        e.g ? (e.a = c,
        e.h = b,
        e.b = a,
        e.c = d) : (e.a = a,
        e.h = d,
        e.b = c,
        e.c = b);
        e.select()
    }
}
;
k.$f = function(a) {
    pE.D.$f.call(this, a);
    U(a, "trans-edit");
    a.contentEditable = !1;
    Vw(this) && vg(Vw(this), !1);
    Y(this).Ha(a, "keydown", this.$h);
    Y(this).Ha(a, "mouseout", this.zf);
    Y(this).Ha(a, "mouseover", this.zf)
}
;
k.zf = function() {
    var a = Wz();
    null == a || a.Sb() == a.nc() && a.Tb() == a.oc() || this.setVisible(a.Sb() == a.nc())
}
;
k.$h = function(a) {
    for (var b = 0; b < this.g; ++b)
        Xq(this, b).setVisible(!1);
    this.m && this.m.setVisible(!1);
    if (13 == a.keyCode || 3 == a.keyCode)
        return null === $w(this) ? (this.Dc(),
        a.stopPropagation(),
        a.preventDefault(),
        !0) : !1;
    null === $w(this) || !vh(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Ab.focus(),
    this.uc(Zq(this, null)));
    return !1
}
;
k.Vf = function(a) {
    var b = Wz();
    if (b.Sb() == b.nc() && b.Tb() == b.oc()) {
        var c = b.Lg() ? b.Tb() : b.oc();
        b = Kz(nz(b), void 0);
        if (!a && c == b.Tb() || a && c == b.oc())
            return !0
    }
    return !1
}
;
var qE = function(a, b, c) {
    hE.call(this, a, b, c);
    this.c = null
};
w(qE, hE);
k = qE.prototype;
k.Ua = function(a) {
    qE.D.Ua.call(this, a);
    this.c = new rE("");
    this.gb(this.c, !0)
}
;
k.Zg = function(a) {
    qE.D.Zg.call(this, a);
    this.c.j().firstChild.value = this.a.Rh(a)
}
;
k.setVisible = function(a, b) {
    b = qE.D.setVisible.call(this, a, b);
    a && null != this.j() && (Vw(this) == this.c.j().firstChild || Vw(this) == this.c.j().firstChild.nextSibling) && Hr(this.c, !0);
    return b
}
;
k.xe = function(a) {
    qE.D.xe.call(this, a);
    a.target == this.c ? Yw(this, this.c.j().firstChild) : Yw(this, this.j());
    Vw(this).focus();
    Vw(this).tabIndex = 0
}
;
k.ff = function(a) {
    return a == this.c ? -1 : qE.D.ff.call(this, a)
}
;
k.ab = function(a) {
    return 9 == a.keyCode ? (this.c.Ea(2) ? (Vw(this) == this.c.j().firstChild ? Yw(this, this.c.j().firstChild.nextSibling) : Yw(this, this.c.j().firstChild),
    Vw(this).focus(),
    Vw(this).tabIndex = 0) : Hr(this.c, !0),
    a.preventDefault(),
    a.stopPropagation(),
    !0) : qE.D.ab.call(this, a)
}
;
k.Vf = function() {
    return null === $w(this) || !($w(this)instanceof rE)
}
;
var rE = function(a, b, c) {
    Z.call(this, a, c || sE.M(), b);
    this.Oa(4, !1)
};
w(rE, Z);
rE.prototype.ub = function(a) {
    a.target == this.j().firstChild.nextSibling && this.dispatchEvent("action")
}
;
rE.prototype.ea = function() {
    rE.D.ea.call(this);
    Y(this).O(this.j().firstChild, "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    })
}
;
rE.prototype.qb = function() {
    return this.j().firstChild.value
}
;
var sE = function() {};
w(sE, hr);
Ga(sE);
sE.prototype.tb = function(a) {
    var b = a.a.b("INPUT", {
        value: a.Ta(),
        id: "alt-input-text",
        type: "text"
    })
      , c = a.a.b("INPUT", {
        value: "",
        id: "alt-input-submit",
        "class": "",
        type: "button"
    });
    return a.a.b("DIV", {
        id: "alt-input"
    }, b, c)
}
;
var tE = function(a, b, c, d, e, f) {
    this.a = a;
    this.w = b;
    this.C = c;
    this.G = d;
    H(this.a.j(), "focus", function() {
        T(d, "focus")
    });
    H(this.a.j(), "blur", function() {
        U(d, "focus")
    });
    this.c = f;
    null != this.c && H(this.c, "action", this.K, !1, this);
    this.h = !1;
    this.g = null;
    this.b = !1;
    this.m = null;
    this.o = e;
    this.L = !1;
    this.F = M.M()
};
tE.prototype.K = function() {
    this.b = !1;
    this.a.b("");
    this.a.j().focus();
    var a = this.F;
    N(a, O(a, 27));
    this.c.setVisible(!1)
}
;
var uE = function(a) {
    a.h = !1;
    U(a.G, "full-edit");
    W(a.C, !0);
    W(a.w, !1);
    W(a.o, a.L);
    a.a.setVisible(!1);
    a.a.Wd(!1)
};
tE.prototype.R = function(a) {
    this.b = !1;
    "" != this.a.Z() && (this.c.setVisible(!0),
    this.a.Z() != this.m && (this.b = !0));
    a()
}
;
var vE = function(a, b, c, d, e) {
    X.call(this);
    this.b = d;
    Dm.M();
    this.c = new ws(a);
    ys(this.c, 2);
    this.m = null;
    this.w = new ws(b);
    this.h = null;
    this.N = c;
    this.K = e || !1;
    this.C = this.g = null
};
w(vE, X);
k = vE.prototype;
k.qa = function(a) {
    this.c.qa(a)
}
;
k.Ka = function() {
    vE.D.Ka.call(this);
    this.Da(Yf("DIV"))
}
;
k.Da = function(a) {
    vE.D.Da.call(this, a);
    null != this.b && !this.b.nb && this.b.ia(a);
    T(a, "st-wrap");
    a.appendChild(Rp(bo, {
        vm: this.K,
        wm: this.N
    }));
    this.g = D("st-stp1", a);
    a = Jf("st-buttons");
    this.c.Ua(a);
    this.c.Bd(this);
    Y(this).O(this.c, "action", this.Qk);
    this.w.Ua(a);
    this.w.Bd(this);
    Y(this).O(this.w, "action", this.In)
}
;
k.Qk = function(a) {
    W(this.g, !1);
    null != this.b && this.b.setVisible(!0);
    null != this.m && this.m(a)
}
;
k.In = function(a) {
    W(this.g, !1);
    null != this.h && this.h(a)
}
;
k.reset = function() {
    this.C && Ci(this.C);
    this.C = null;
    ys(this.c, 2);
    sq(this.j(), 1);
    W(this.j(), !0);
    W(this.g, !0);
    null != this.b && this.b.setVisible(!1)
}
;
var wE = B || Ae || we || xe || !1;
Ze && Ak("4") || $e && Re("533") || ze && Re("2.0") || B && Re("10") || we && yd();
var xE = function(a, b, c, d, e, f, g, h, l) {
    X.call(this, a);
    this.c = g || null;
    if (null != this.c) {
        a = this.c;
        g = v(this.Uk, this);
        a.g = v(a.R, a, g);
        g = a.a.j();
        var m = new ar(g);
        H(m, "key", a.g, !1, a);
        m = new Mv(g);
        H(m, "paste", a.g, !1, a);
        H(g, "keyup", a.g, !1, a)
    }
    this.h = null;
    this.C = "auto";
    this.Y = this.m = "";
    this.Ba = new np("mt");
    this.bb = !!b && wE && !B;
    this.T = null != e ? e : 0;
    this.b = null;
    this.bb ? this.b = new pE : this.b = new qE;
    l && this.b.qa(!1);
    if (0 < this.T)
        for (b = this.b,
        b.K = !0,
        e = 0; e < b.g; e++)
            a = F("DIV", "goog-menu", ""),
            l = F("DIV", null, a),
            a = new VD(l,a),
            b.h[e] = a,
            document.body.appendChild(l);
    this.b.Ua(c);
    this.g = h || null;
    this.sa = null != d ? d : -1;
    this.N = Dm.M();
    this.K = new rj;
    this.ya = "t";
    this.V = this.X = null;
    this.w = f || null;
    this.aa = !1;
    null != this.w && (c = v(this.Ya, this),
    this.w.m = c,
    c = v(this.Pk, this),
    this.w.h = c);
    this.ba = null;
    this.F = M.M()
};
w(xE, X);
var GE = function(a, b, c, d, e) {
    if (null != a.w) {
        var f = a.w;
        W(f.j(), !1);
        W(f.g, !1);
        null != f.b && f.b.setVisible(!1)
    }
    b && (a.h = new ip(b),
    a.V = null);
    c && (a.C = c);
    d && (a.m = d);
    e && (a.Y = e);
    yE(a) && (uE(a.c),
    null != a.g && a.g.a(!1));
    if (a.h) {
        b = 0 != Mf("alt-edited").length;
        a.a.kf(a.j());
        a.b.Ze();
        a.ba && (a.ba.b = a.h);
        d = "";
        for (c = e = 0; c < I(a.h, 5); c++)
            zE(a.h, c) && (d += " "),
            d += AE(a.h, c),
            e += I(mp(a.h, c), 2);
        if (0 == e)
            return !1;
        d = [];
        e = !1;
        Zu(a.h);
        for (c = 0; c < I(a.h, 5); c++) {
            f = mp(a.h, c);
            var g = Co(f, 0);
            zE(a.h, c) ? a.a.appendChild(a.j(), a.a.a.createTextNode(" ")) : ("km" == a.m || "lo" == a.m) && a.a.appendChild(a.j(), Ae ? $f(document, Jd("WBR")) : we ? Zf("&shy;") : B ? Zf("&#8203;") : $f(document, Jd("WBR")));
            Dh(f, 4) && 0 < J(f, 4).length && 0 == Hh(f, 5) && d.push(J(f, 4));
            var h, l = AE(a.h, c);
            xc(l) ? 0 == l.length || (h = BE(l)) : (h = a.a.b("SPAN", null, l),
            g = Hh(g, 1),
            x(0 <= g, "Invalid confidence value: " + g),
            x(1E3 >= g, "Invalid confidence value: " + g),
            0 <= a.sa && g < a.sa && T(h, "alt-low-conf"),
            uj(a.K, a.C + "." + a.m + "." + J(f, 0)) && (g = a.K.get(a.C + "." + a.m + "." + J(f, 0)),
            g != CE(f, 0) && (a.a.lf(h, g),
            T(h, "alt-edited"),
            e = !0,
            DE(a, !0))),
            null != a.b.vc ? a.b.vc.a(h) : h.title = "",
            jE(a.b, h, f));
            h && a.a.appendChild(a.j(), h)
        }
        if (null != a.c) {
            h = a.C + "." + a.m;
            for (c = 0; c < d.length; ++c)
                h += "." + d[c];
            uj(a.K, h) && (EE(a, !1),
            e = !0,
            FE(a, a.K.get(h)),
            null != a.g && a.g.a(!1),
            DE(a, !0))
        }
        e || (DE(a, !1),
        EE(a, !1));
        (e || b) && a.dispatchEvent("action");
        return 0 < I(a.h, 5)
    }
    DE(a, !1);
    EE(a, !1);
    return !1
}
  , BE = function(a) {
    a = Ac(ee(a)).split("<br>");
    var b = document.createDocumentFragment()
      , c = 0;
    z(a, function(d) {
        0 != c && b.appendChild(F("BR"));
        c++;
        "" != d && b.appendChild(Zf(he(d)))
    });
    return b
}
  , HE = function(a, b) {
    if (yE(a))
        return a.c.a.Z();
    var c = [];
    if (a.j() && a.j().childNodes)
        for (var d = 0; d < a.j().childNodes.length; ++d) {
            var e = a.j().childNodes[d];
            c[d] = b && "BR" == e.tagName ? "\n" : Ag(e)
        }
    return c.join("")
}
  , JE = function(a, b, c, d) {
    for (a = 0; a < I(b, 5); a++) {
        var e = mp(b, a)
          , f = c;
        if ((e = e && hb(e, zl)) && yl(f.Ra, e.Ra)) {
            c = b;
            b = a;
            f = -1;
            a = I(c, 5);
            for (e = b; 0 <= e; e--)
                if (0 == Hh(mp(c, e), 5)) {
                    f = e;
                    break
                }
            for (e = b + 1; e <= I(c, 5); e++)
                if (0 == Hh(mp(c, e), 5)) {
                    a = e;
                    break
                }
            if (null != d && d)
                b = IE(c, f, a);
            else if (d = c,
            c = f,
            d) {
                f = b + 1;
                e = b;
                for (b = AE(d, b).length; 64 > b && (f != a || e != c); )
                    f < a && (b += AE(d, f++).length + 1),
                    64 > b && e > c && (b += AE(d, --e).length + 1);
                b = IE(d, e, f)
            } else
                b = "";
            return b
        }
    }
    return ""
}
  , IE = function(a, b, c) {
    var d = [];
    d.push(AE(a, b));
    for (b += 1; b < c; b++)
        zE(a, b) && d.push(" "),
        d.push(AE(a, b));
    return d.join("")
}
  , zE = function(a, b) {
    if (0 == b)
        return !1;
    var c = mp(a, b)
      , d = mp(a, b - 1);
    return Cl(Co(c, 0), 2) && !Cl(Co(d, 0), 3) && !wc(AE(a, b - 1), "\n")
};
k = xE.prototype;
k.ve = function() {
    return this.m
}
;
k.Ka = function() {
    this.Da(Fg(this.a, "span"))
}
;
k.Da = function(a) {
    xE.D.Da.call(this, a);
    GE(this)
}
;
k.ea = function() {
    xE.D.ea.call(this);
    Y(this).O(this.b, "action", this.Pa);
    null != this.g && null != this.g.b && (Y(this).O(this.g.b, "click", this.Dl),
    Jq(Y(this), this.g.b, this.F.g, this.F));
    Y(this).O(this.b, "show", this.cl);
    this.j() && Y(this).O(this.j(), "keydown", function(a) {
        32 == a.keyCode && a.stopPropagation()
    }, !0)
}
;
k.W = function() {
    xE.D.W.call(this);
    this.b.Ja()
}
;
k.Uk = function() {
    this.w.qa(this.c.b);
    DE(this, this.c.b)
}
;
var KE = function(a) {
    null != a.g && a.g.a(!0);
    var b = a.c
      , c = HE(a);
    T(b.G, "full-edit");
    b.c.setVisible(!0);
    b.m = c;
    b.a.g(c);
    b.a.setVisible(!0);
    b.a.Wd(!0);
    W(b.w, !0);
    W(b.C, !1);
    b.L = tq(b.o);
    W(b.o, !1);
    c = b.a.j();
    c.focus();
    c.setSelectionRange(c.value.length, c.value.length);
    b.h = !0;
    a.aa = tq(a.w.j());
    a.w.reset();
    null != a.g ? a.w.qa(tq(a.g.b)) : a.w.qa(!1);
    DE(a, !1)
};
xE.prototype.Pa = function(a) {
    if ("hide" != a.type || a.target == this.b)
        if (a.target == this.b.m && null != this.c) {
            this.N.log("editpopupclk");
            var b = this.F;
            N(b, O(b, 233));
            KE(this)
        } else {
            var c = a.h;
            null == c && null != a.a && (c = a.a.Ab);
            b = a.target.qb();
            if (null != c && null != a.target) {
                var d = c
                  , e = x(this.b.w.get(Qa(d)));
                this.a.lf(d, b);
                b == CE(e, 0) ? (U(d, "alt-edited"),
                0 == Mf("alt-edited").length && (DE(this, !1),
                EE(this, !1))) : (T(d, "alt-edited"),
                DE(this, !0),
                EE(this, !0));
                null != this.K && this.K.set(this.C + "." + this.m + "." + J(e, 0), b);
                e = x(this.b.w.get(Qa(c)));
                null != this.K && this.K.set(this.C + "." + this.m + "." + J(e, 0), b);
                d = CE(e, 0);
                c = Zq(this.b, a.target);
                d = {
                    sl: this.C,
                    tl: this.m,
                    utrans: b,
                    gtrans: d,
                    index: c,
                    ophrase: J(e, 0),
                    osentence: J(e, 4),
                    tsentence: JE(this, this.h, e)
                };
                0 < I(e, 2) && (d.confidence = Hh(Co(e, 0), 1));
                if (a.target instanceof rE || -1 == c)
                    d.manual = 1,
                    c = this.F,
                    N(c, O(c, 240));
                else {
                    a = this.F;
                    e = O(a, 239);
                    var f = new ml
                      , g = of(of(f, 2, kl), 3, il);
                    C(g, 1, c);
                    mf(e, 27, f);
                    N(a, e)
                }
                for (var h in d)
                    t(d[h]) && 64 < d[h].length && (d.tr = 1,
                    d[h] = d[h].substr(0, 64));
                this.N.log("usealt", d, null);
                h = new Kg("usealt");
                h.text = b;
                this.dispatchEvent(h);
                this.dispatchEvent("action")
            }
        }
}
;
var FE = function(a, b) {
    if (a.j()) {
        null == a.X && (a.V = yb(a.a.Qh(a.j())));
        a.X = b;
        var c;
        if (c = a.j().childNodes && 0 < a.j().childNodes.length)
            c = (c = a.j().childNodes[0]) ? uj(a.b.b, Qa(c)) : !1;
        c ? (a.a.kf(a.j()),
        a.b.Ze(),
        b = a.a.b("SPAN", "alt-edited", a.X),
        a.a.appendChild(a.j(), b),
        jE(a.b, b, new Ao)) : a.j().innerHTML = Ac(ee(b))
    }
};
k = xE.prototype;
k.Dl = function() {
    if (null != this.c && yE(this)) {
        var a = this.c;
        a.c.setVisible(!0);
        a.a.g(a.m);
        a.a.j().focus();
        a.g(null)
    } else
        yE(this) && (null != this.g && this.g.a(!1),
        uE(this.c)),
        this.K.Qc(),
        this.X = null,
        GE(this),
        this.dispatchEvent("action");
    this.N.log("clkundo", void 0, null)
}
;
k.Pk = function() {
    yE(this) && (this.c.b && (FE(this, this.c.a.Z()),
    this.aa = !0),
    uE(this.c),
    null != this.g && this.g.a(!1),
    this.c.b && DE(this, !0),
    this.w.qa(!0),
    W(this.w.j(), this.aa),
    this.dispatchEvent("action"));
    var a = this.F;
    N(a, O(a, 215));
    this.N.log("clkcancel", void 0, null)
}
;
k.cl = function() {
    var a = this.b.w.get(Qa(this.b.Ab));
    if (a) {
        if (0 < this.T) {
            var b = new Xm("source=baf");
            if (1 == this.T) {
                for (var c = [], d = 0, e = I(a, 2); d < e; d++)
                    c.push(CE(a, d));
                qp(this.Ba, this.m, this.C, LE(this), c, v(this.$m, this), void 0, b, void 0)
            } else
                for (d = 0,
                e = I(a, 2); d < e; d++)
                    c = CE(a, d),
                    sp(this.Ba, this.m, this.C, LE(this), c, ["at", "t"], v(this.an, this, d), void 0, b)
        }
        b = new Kg("click");
        b.text = this.b.qb();
        b.m = I(this.h, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = Hh(Co(a, 0), 1);
        this.C && this.m && this.Y && (b.segments = I(this.h, 5),
        b.sl = this.C,
        b.tl = this.m,
        b.hl = this.Y);
        a = this.F;
        N(a, O(a, 238));
        this.N.log("phrsclk", b, null)
    }
}
;
k.an = function(a, b) {
    if (1 == this.T || 1 < I(b, 5)) {
        var c = b.$a(0).Nc();
        var d = 1;
        for (var e = b.cc(); d < e; d++)
            c += " " + b.$a(d).Nc();
        d = c
    } else if (1 == I(b, 5)) {
        c = [];
        b = mp(b, 0);
        d = 0;
        for (e = Math.min(this.T, I(b, 2)); d < e; d++)
            c.push(CE(b, d));
        d = c.join(", ")
    } else
        d = "...";
    nE(this.b, a, d)
}
;
k.$m = function(a) {
    for (var b = 0; b < a.length; b++)
        nE(this.b, b, a[b])
}
;
var DE = function(a, b) {
    null != a.g && null != a.g.b && W(a.g.b, b)
}
  , EE = function(a, b) {
    null != a.w && (b && a.w.reset(),
    W(a.w.j(), b))
};
xE.prototype.Ya = function() {
    var a = [], b;
    null != this.V ? b = this.V : b = ig(this.j());
    for (var c = {
        segment: []
    }, d = null, e = 0, f = 0; f < b.length; f++) {
        var g = mp(this.h, f);
        if (null != g) {
            var h = Ag(b[f]);
            a: {
                var l = h;
                var m = g;
                if (0 == I(m, 2))
                    l = 0;
                else {
                    for (var q = 0; q < I(m, 2); ++q)
                        if (l == CE(m, q)) {
                            l = q;
                            break a
                        }
                    l = -1
                }
            }
            m = yc(J(g, 4));
            q = JE(this, this.h, g, !0);
            if (0 != m.length) {
                if (0 == a.length || m != a[a.length - 1])
                    a.push(m),
                    d = ME(this, a.length - 1),
                    e = 0,
                    d = {
                        source: m,
                        original_target: q,
                        segment_source: d,
                        phrase_correction: []
                    },
                    c.segment.push(d);
                if (0 != l)
                    for (m = CE(g, 0).length,
                    l = {
                        alternative_index: l,
                        edited_phrase: h,
                        source_span: [],
                        target_span: [{
                            start: e,
                            end: e + m
                        }]
                    },
                    d.phrase_correction.push(l),
                    m = 0; m < I(g, 3); ++m)
                        q = Do(g, m),
                        l.source_span.push({
                            start: Hh(q, 0),
                            end: Hh(q, 1)
                        });
                e += h.length;
                Cl(Co(g, 0), 2) && e++
            }
        }
    }
    if (yE(this)) {
        this.dispatchEvent("action");
        uE(this.c);
        null != this.g && this.g.a(!1);
        DE(this, !0);
        this.c.a.Z() != HE(this) && FE(this, this.c.a.Z());
        b = this.C + "." + this.m;
        for (f = 0; f < a.length; ++f)
            b += "." + a[f];
        a = this.c.a.Z();
        this.K.set(b, a);
        c.contains_full_edit = !0
    }
    c.edited_target = HE(this, !0);
    a = new Xm;
    a.set("ue", JSON.stringify(c));
    a.set("sl", this.C);
    a.set("tl", this.m);
    Oj("/translate_suggestion?client=" + this.ya, void 0, "POST", a.toString(), void 0, 1E4)
}
;
var ME = function(a, b) {
    if (b < a.h.cc())
        switch (a = a.h.$a(b),
        Bl(a, 4, 0)) {
        case 0:
            return 1;
        case 1:
            return 2;
        case 2:
            return 3;
        case 10:
            return 4;
        case 3:
            return 5
        }
    return 0
}
  , yE = function(a) {
    return null != a.c && a.c.h
}
  , AE = function(a, b) {
    a = mp(a, b);
    return 0 == I(a, 2) ? J(a, 0) : CE(a, 0)
}
  , CE = function(a, b) {
    return J(Co(a, b), 0)
}
  , LE = function(a) {
    a = a.Y;
    0 === a.length && null != Jf("hl") && (a = Jf("hl").value);
    return a
};
var NE = function(a) {
    Al(this, a, 7)
};
w(NE, zl);
var OE = {
    translation_id: {
        H: 0,
        J: !1
    },
    sl: {
        H: 1,
        J: !1
    },
    tl: {
        H: 2,
        J: !1
    },
    source: {
        H: 3,
        J: !1
    },
    trans: {
        H: 4,
        J: !1
    },
    write_timestamp: {
        H: 5,
        J: !1
    },
    label: {
        H: 6,
        J: !0
    }
};
NE.prototype.a = function() {
    return OE
}
;
NE.prototype.Nc = function() {
    return J(this, 4)
}
;
var PE = function(a) {
    Al(this, a, 7)
};
w(PE, zl);
var QE = {
    total: {
        H: 0,
        J: !1
    },
    token: {
        H: 1,
        J: !1
    },
    translations: {
        H: 2,
        wa: function(a) {
            return Gl(NE, a)
        },
        va: function(a) {
            return Fl(new NE(a))
        },
        J: !0
    },
    error: {
        H: 3,
        J: !1
    },
    timestamp: {
        H: 4,
        J: !1
    },
    id: {
        H: 5,
        J: !1
    },
    max_translations: {
        H: 6,
        J: !1
    }
};
PE.prototype.a = function() {
    return QE
}
;
var RE = function() {
    var a = DATA.Usage;
    this.g = DATA.DisplayLanguage;
    this.a = "";
    this.c = a;
    this.h = ""
};
RE.prototype.b = function(a, b) {
    b = b.target;
    if (Yj(b) && "" != Zj(b) && null != ak(b)) {
        b = ak(b);
        b = new PE(b);
        var c = J(b, 1);
        null != c && "" != c && (this.a = c)
    } else
        b = new PE,
        b.Ra[3] = this.h;
    a(b)
}
;
var SE = function(a, b, c, d, e) {
    var f = window.location.href;
    b = new Pm(b);
    (f = (new Pm(f,!0)).a.get("authuser")) && b.a.set("authuser", f);
    b = b.toString();
    b += "&hl=" + a.g;
    a.c && (b += "&xt=" + a.c);
    null != e ? Oj(b, v(a.b, a, c), d, e) : Oj(b, v(a.b, a, c), d)
};
RE.prototype.rb = function(a, b, c, d, e, f) {
    var g = {
        cm: "g"
    };
    null != b && "all" != b && (g.sl = b);
    null != c && "all" != c && (g.tl = c);
    null != d && "" != d && (g.q = d);
    null != e && "" != e && (g.utrans = e);
    null != f && "0" != f && (g.od = f);
    "" != this.a && (g.tk = this.a,
    this.a = "");
    SE(this, "/translate_a/sg?client=webapp&" + Cj(g), a, "GET")
}
;
var TE = function(a, b, c, d, e, f, g) {
    var h = {
        cm: "a"
    };
    h.sl = c;
    h.tl = d;
    h.ql = e.length + "";
    g && (h.edit = "1");
    c = {};
    c.q = e;
    c.utrans = f;
    SE(a, "/translate_a/sg?client=webapp&" + Cj(h), b, "POST", Cj(c))
}
  , UE = function(a, b, c) {
    var d = {
        cm: "d"
    };
    d.count = c.length + "";
    var e = {};
    e.id = c;
    SE(a, "/translate_a/sg?client=webapp&" + Cj(d), b, "POST", Cj(e))
};
var Sb = {}
  , VE = null
  , WE = function(a) {
    a = Qa(a);
    delete Sb[a];
    Tb() && VE && VE.stop()
}
  , YE = function() {
    VE || (VE = new Qr(function() {
        XE()
    }
    ,20));
    var a = VE;
    a.jb() || a.start()
}
  , XE = function() {
    var a = Ua();
    Mb(Sb, function(b) {
        ZE(b, a)
    });
    Tb() || YE()
};
var $E = function(a, b, c, d) {
    MD.call(this);
    if (!Ja(a) || !Ja(b))
        throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)
        throw Error("Start and end points must be the same length");
    this.o = a;
    this.K = b;
    this.duration = c;
    this.L = d;
    this.coords = [];
    this.progress = 0;
    this.G = null
};
w($E, MD);
$E.prototype.play = function(a) {
    if (a || 0 == this.a)
        this.progress = 0,
        this.coords = this.o;
    else if (1 == this.a)
        return !1;
    WE(this);
    this.startTime = a = Ua();
    -1 == this.a && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.G = this.startTime;
    this.progress || this.c();
    this.b("play");
    -1 == this.a && this.b("resume");
    this.a = 1;
    var b = Qa(this);
    b in Sb || (Sb[b] = this);
    YE();
    ZE(this, a);
    return !0
}
;
$E.prototype.stop = function(a) {
    WE(this);
    this.a = 0;
    a && (this.progress = 1);
    aF(this, this.progress);
    this.b("stop");
    this.g()
}
;
$E.prototype.W = function() {
    0 == this.a || this.stop(!1);
    this.b("destroy");
    $E.D.W.call(this)
}
;
var ZE = function(a, b) {
    $a(a.startTime);
    $a(a.endTime);
    $a(a.G);
    b < a.startTime && (a.endTime = b + a.endTime - a.startTime,
    a.startTime = b);
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    1 < a.progress && (a.progress = 1);
    a.G = b;
    aF(a, a.progress);
    1 == a.progress ? (a.a = 0,
    WE(a),
    a.b("finish"),
    a.g()) : 1 == a.a && a.C()
}
  , aF = function(a, b) {
    La(a.L) && (b = a.L(b));
    a.coords = Array(a.o.length);
    for (var c = 0; c < a.o.length; c++)
        a.coords[c] = (a.K[c] - a.o[c]) * b + a.o[c]
};
$E.prototype.C = function() {
    this.b("animate")
}
;
$E.prototype.b = function(a) {
    this.dispatchEvent(new bF(a,this))
}
;
var bF = function(a, b) {
    Kg.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.a
};
w(bF, Kg);
var cF = function(a, b, c, d, e) {
    $E.call(this, b, c, d, e);
    this.h = a
};
w(cF, $E);
cF.prototype.m = Fa;
cF.prototype.C = function() {
    this.m();
    cF.D.C.call(this)
}
;
cF.prototype.g = function() {
    this.m();
    cF.D.g.call(this)
}
;
cF.prototype.c = function() {
    this.m();
    cF.D.c.call(this)
}
;
var dF = function(a, b, c, d, e) {
    ya(b) && (b = [b]);
    ya(c) && (c = [c]);
    cF.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length)
        throw Error("Start and end points must be 1D");
    this.w = -1
};
w(dF, cF);
var eF = 1 / 1024;
dF.prototype.m = function() {
    var a = this.coords[0];
    Math.abs(a - this.w) >= eF && (sq(this.h, a),
    this.w = a)
}
;
dF.prototype.c = function() {
    this.w = -1;
    dF.D.c.call(this)
}
;
dF.prototype.g = function() {
    this.w = -1;
    dF.D.g.call(this)
}
;
var fF = function(a, b, c) {
    dF.call(this, a, 0, 1, b, c)
};
w(fF, dF);
var gF = function(a, b, c) {
    dF.call(this, a, 1, 0, b, c)
};
w(gF, dF);
gF.prototype.c = function() {
    this.h.style.display = "";
    gF.D.c.call(this)
}
;
gF.prototype.g = function() {
    this.h.style.display = "none";
    gF.D.g.call(this)
}
;
var hF = function(a, b, c) {
    dF.call(this, a, 0, 1, b, c)
};
w(hF, dF);
hF.prototype.c = function() {
    this.h.style.display = "";
    hF.D.c.call(this)
}
;
var iF = function(a, b, c) {
    var d = "rw";
    null != c && c && (d = "m" + d);
    this.g = b;
    Cs.call(this, a, d, MSG_SEE_ALSO, MSG_SEE_ALSO, 10);
    this.yh = !0
};
w(iF, Cs);
iF.prototype.update = function(a, b, c, d) {
    iF.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(lp(d), 0))
        return !1;
    (a = this.j()) && Jp(a, Ag(this.Jc));
    dg(this.b);
    this.Ad();
    c = a = F("DIV", {
        "class": "gt-rw-div"
    });
    b = 15 < I(lp(d), 0);
    for (var e = 0; e < I(lp(d), 0); ++e) {
        var f = lp(d);
        var g = Fh(f, 0, e);
        f = F("SPAN", {
            "class": "gt-cd-cl"
        });
        G(f, g);
        Dp(f, "option");
        f.tabIndex = -1;
        this.c.push(f);
        if (10 == e && b) {
            var h = F("DIV", {
                "class": "gt-rw-div"
            });
            c = h;
            h = b ? F("SPAN", {
                "class": "gt-card-fadein-wrapper"
            }, h) : h;
            Yp(h, {
                display: "none"
            })
        }
        this.g || 0 != e && e != I(lp(d), 0) && c.appendChild(Zf(", "));
        c.appendChild(f)
    }
    c = kc(this.Ca) ? "rtl" : "ltr";
    Yp(this.b, {
        direction: c
    });
    this.b.appendChild(a);
    h && this.b.appendChild(h);
    b && (d = MSG_N_MORE_RELATED_LABEL.replace("%1$s", (I(lp(d), 0) - 7).toLocaleString(this.Sa)),
    Es(this, d, MSG_FEWER_RELATED_LABEL));
    jF(this, yb(ig(a)));
    this.setVisible(!0);
    return !0
}
;
iF.prototype.ea = function() {
    iF.D.ea.call(this);
    var a = this.j();
    a && (Dp(a, "listbox"),
    Ah(a, this.w.bind(this)))
}
;
var jF = function(a, b) {
    a.g && (ph(a.j(), "keydown"),
    H(a.j(), "keydown", function(c) {
        zh(c, b)
    }, !1))
};
iF.prototype.w = function(a) {
    Lp(a.target, "gt-cd-cl") && this.dispatchEvent(new Kg("a",a.target))
}
;
iF.prototype.Yd = function(a) {
    var b = []
      , c = Mf("gt-card-fadein-wrapper", this.j());
    if (this.g) {
        if (a)
            var d = yb(Mf("gt-cd-cl", this.j()));
        else
            d = D("gt-rw-div", this.j()),
            d = yb(ig(d));
        jF(this, d)
    }
    for (var e = 0; e < c.length; e++)
        d = c[e],
        a ? b.push(new hF(d,218)) : b.push(new gF(d,218));
    for (e = 0; e < b.length; e++)
        b[e].play()
}
;
var kF = function() {}
  , lF = function(a) {
    var b = F("SPAN");
    b.style.color = "transparent";
    b.style.background = "transparent";
    b.style.top = "-1000px";
    b.style.left = "-1000px";
    b.style.position = "absolute";
    bg(document.body, b);
    G(b, a);
    a = b.offsetWidth;
    hg(b);
    return a
};
Ga(kF);
var mF = function() {
    kF.M()
};
Ga(mF);
var nF = function(a) {
    var b = lF(a);
    a = lF(a.substr(0, 1));
    return b != a
};
var oF = function() {
    vB.apply(this, arguments)
};
ka(oF, vB);
oF.prototype.K = function(a) {
    vB.prototype.K.call(this, a);
    pF(this.aa);
    pF(this.b);
    this.j().addEventListener("keydown", v(this.Pa, this), !1)
}
;
var pF = function(a) {
    V(a, "tw-ll-top", !0);
    a.addEventListener("scroll", function() {
        V(a, "tw-ll-top", 0 >= a.scrollTop)
    })
}
  , qF = function(a) {
    return Eg(document) === DB(a)
};
oF.prototype.ma = function(a) {
    return Eg(document) === a.j()
}
;
var rF = function(a) {
    a = $p(a.m, "columnCount");
    return parseInt(a, 10) || 1
};
oF.prototype.Pa = function(a) {
    if (this.isVisible())
        switch (a.keyCode) {
        case 27:
            this.close();
            break;
        case 13:
            if (qF(this)) {
                var b = sF(this);
                tq(this.b) && null != b && (b.me(oB(b.j())),
                a.preventDefault())
            } else
                b = (tq(this.b) ? this.g : this.a).find(this.ma) || null,
                null != b && (b.me(oB(b.j())),
                a.preventDefault());
            break;
        case 40:
            qF(this) ? (b = sF(this),
            null != b && (DB(this).blur(),
            b.j().focus(),
            a.preventDefault())) : tF(this, a);
            break;
        case 38:
            qF(this) || uF(this, a);
            break;
        case 39:
            if (!qF(this) && (b = rF(this),
            1 < b)) {
                var c = Math.ceil(this.a.length / b)
                  , d = (tq(this.b) ? this.g : this.a).findIndex(this.ma) + c;
                d >= this.a.length && (d -= b * c);
                0 > d && (d += c);
                this.a[d].j().focus();
                a.preventDefault()
            }
            break;
        case 37:
            qF(this) || (b = rF(this),
            1 < b && (c = Math.ceil(this.a.length / b),
            d = (tq(this.b) ? this.g : this.a).findIndex(this.ma) - c,
            0 > d && (d += b * c),
            d >= this.a.length && (d -= c),
            this.a[d].j().focus(),
            a.preventDefault()));
            break;
        default:
            this.Y(a)
        }
}
;
var tF = function(a, b) {
    var c = Eg(document);
    if (c)
        for (var d = a.a.find(function(g) {
            return "auto" === g.code
        }), e = a.a.find(function(g) {
            return "auto" !== g.code
        }), f = c; ; ) {
            (f = d && f === d.j() ? e.j() : f.nextElementSibling) || (f = !tq(a.b) && d ? d.j() : c.parentElement.children[0]);
            if (f === c)
                break;
            if (0 <= f.tabIndex && tq(f)) {
                f.focus();
                b.preventDefault();
                break
            }
        }
}
  , uF = function(a, b) {
    var c = Eg(document);
    if (c)
        for (var d = a.a.find(function(g) {
            return "auto" === g.code
        }), e = rb(a.a, function(g) {
            return "auto" !== g.code
        }), f = c; ; ) {
            (f = d && f === d.j() ? e.j() : f.previousElementSibling) || (f = !tq(a.b) && d ? d.j() : ib(c.parentElement.children));
            if (f === c)
                break;
            if (0 <= f.tabIndex && tq(f)) {
                f.focus();
                b.preventDefault();
                break
            }
        }
}
  , sF = function(a) {
    if (tq(a.b))
        return a = a.g.find(function(c) {
            return tq(c.j())
        }),
        null != a ? a : null;
    var b = ib(a.a);
    return "auto" === b.code ? b : a.a[0]
};
oF.prototype.Y = function(a) {
    qF(this) || !uh(a.keyCode) || a.altKey || a.ctrlKey || a.metaKey || (FB(this),
    DB(this).focus())
}
;
var vF = function(a, b, c, d) {
    this.Ca = a;
    this.Ma = b;
    this.Nf = c;
    this.c = d;
    this.b = this.a = null
};
var wF = function(a) {
    this.a = a;
    Dm.M()
}
  , xF = function(a) {
    sy("TranslationStarred", function(b, c) {
        c = b ? new wF(c) : null;
        a && a(b, c)
    })
}
  , yF = function(a, b, c, d, e) {
    xy(a.a, b, c, d, 0, e)
};
var zF = function(a, b, c, d) {
    this.a = a;
    this.w = b;
    this.o = c;
    this.h = "AUTO" === this.o.toUpperCase() && b.src ? b.src : null;
    this.m = d;
    this.b = this.Za();
    this.g = this.c = null
};
zF.prototype.Za = function() {
    return hv(this.w)
}
;
zF.prototype.Qa = function() {
    return this.o
}
;
var AF = function(a) {
    return "AUTO" === a.o.toUpperCase() && null != a.h ? a.h : a.o
};
zF.prototype.oa = function() {
    return this.m
}
;
var BF = function(a, b) {
    a.w = b;
    a.b = a.Za()
}
  , CF = function(a, b) {
    xc(a.b) || (a.b = b)
}
  , DF = function(a, b) {
    return a.a === b.a && a.b === b.b && AF(a) === AF(b) && a.oa() === b.oa()
}
  , EF = function(a, b) {
    var c = a.a.toLowerCase();
    a = a.Za().toLowerCase();
    b = b.toLowerCase();
    return c.includes(b) || a.includes(b)
}
  , FF = function(a) {
    return a.Za() !== a.b
}
  , GF = function(a) {
    var b = JSON.parse(JSON.stringify(a.w));
    x(b instanceof Object, "Translation result isn't JSON");
    b = new zF(a.a,b,a.o,a.m);
    null != a.c && (b.c = a.c);
    null != a.g && (b.g = a.g);
    null != a.h && (b.h = a.h);
    CF(b, a.b);
    return b
};
var HF = function(a) {
    return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
}
  , IF = HF;
IF = HF;
var JF = function(a, b) {
    if (void 0 === b) {
        b = a + "";
        var c = b.indexOf(".");
        b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
    }
    return 1 == (a | 0) && 0 == b ? "one" : "other"
}
  , KF = JF;
KF = JF;
var OF = function(a) {
    this.g = a;
    this.b = this.a = this.h = null;
    a = rv;
    var b = ov;
    if (LF !== a || MF !== b)
        LF = a,
        MF = b,
        NF = new uv(1);
    this.o = NF
}
  , LF = null
  , MF = null
  , NF = null
  , PF = /'([{}#].*?)'/g
  , QF = /''/g
  , RF = function(a, b) {
    return xw(a, b)
}
  , xw = function(a, b) {
    if (a.g) {
        a.h = [];
        var c = SF(a, a.g);
        a.b = TF(a, c);
        a.g = null
    }
    if (!a.b || 0 == a.b.length)
        return "";
    a.a = yb(a.h);
    c = [];
    UF(a, a.b, b, !1, c);
    b = c.join("");
    for (x(-1 == b.search("#"), "Not all # were replaced."); 0 < a.a.length; )
        b = b.replace(a.c(a.a), a.a.pop());
    return b
}
  , UF = function(a, b, c, d, e) {
    for (var f = 0; f < b.length; f++)
        switch (b[f].type) {
        case 4:
            e.push(b[f].value);
            break;
        case 3:
            var g = b[f].value
              , h = a
              , l = e
              , m = c[g];
            p(m) ? (h.a.push(m),
            l.push(h.c(h.a))) : l.push("Undefined parameter - " + g);
            break;
        case 2:
            g = b[f].value;
            h = a;
            l = c;
            m = d;
            var q = e
              , r = g.Qe;
            p(l[r]) ? (r = g[l[r]],
            p(r) || (r = g.other,
            db(r, "Invalid option or missing other option for select block.")),
            UF(h, r, l, m, q)) : q.push("Undefined parameter - " + r);
            break;
        case 0:
            g = b[f].value;
            VF(a, g, c, KF, d, e);
            break;
        case 1:
            g = b[f].value;
            VF(a, g, c, IF, d, e);
            break;
        default:
            Za("Unrecognized block type: " + b[f].type)
        }
}
  , VF = function(a, b, c, d, e, f) {
    var g = b.Qe
      , h = b.Ah
      , l = +c[g];
    isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (h = l - h,
    g = b[c[g]],
    p(g) || (x(0 <= h, "Argument index smaller than offset."),
    d = d(h),
    ab(d, "Invalid plural key."),
    g = b[d],
    p(g) || (g = b.other),
    db(g, "Invalid option or missing other option for plural block.")),
    b = [],
    UF(a, g, c, e, b),
    c = b.join(""),
    ab(c, "Empty block in plural."),
    e ? f.push(c) : (a = Dv(a.o, h),
    f.push(c.replace(/#/g, a))))
}
  , SF = function(a, b) {
    var c = a.h
      , d = v(a.c, a);
    b = b.replace(QF, function() {
        c.push("'");
        return d(c)
    });
    return b = b.replace(PF, function(e, f) {
        c.push(f);
        return d(c)
    })
}
  , WF = function(a) {
    var b = 0
      , c = []
      , d = []
      , e = /[{}]/g;
    e.lastIndex = 0;
    for (var f; f = e.exec(a); ) {
        var g = f.index;
        "}" == f[0] ? (f = c.pop(),
        x(p(f) && "{" == f, "No matching { for }."),
        0 == c.length && (f = {
            type: 1
        },
        f.value = a.substring(b, g),
        d.push(f),
        b = g + 1)) : (0 == c.length && (b = a.substring(b, g),
        "" != b && d.push({
            type: 0,
            value: b
        }),
        b = g + 1),
        c.push("{"))
    }
    x(0 == c.length, "There are mismatched { or } in the pattern.");
    b = a.substring(b);
    "" != b && d.push({
        type: 0,
        value: b
    });
    return d
}
  , XF = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/
  , YF = /^\s*(\w+)\s*,\s*selectordinal\s*,/
  , ZF = /^\s*(\w+)\s*,\s*select\s*,/
  , TF = function(a, b) {
    var c = [];
    b = WF(b);
    for (var d = 0; d < b.length; d++) {
        var e = {};
        if (0 == b[d].type)
            e.type = 4,
            e.value = b[d].value;
        else if (1 == b[d].type) {
            var f = b[d].value;
            switch (XF.test(f) ? 0 : YF.test(f) ? 1 : ZF.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
            case 2:
                e.type = 2;
                e.value = $F(a, b[d].value);
                break;
            case 0:
                e.type = 0;
                e.value = aG(a, b[d].value);
                break;
            case 1:
                e.type = 1;
                e.value = bG(a, b[d].value);
                break;
            case 3:
                e.type = 3;
                e.value = b[d].value;
                break;
            default:
                Za("Unknown block type for pattern: " + b[d].value)
            }
        } else
            Za("Unknown part of the pattern.");
        c.push(e)
    }
    return c
}
  , $F = function(a, b) {
    var c = "";
    b = b.replace(ZF, function(h, l) {
        c = l;
        return ""
    });
    var d = {};
    d.Qe = c;
    b = WF(b);
    for (var e = 0; e < b.length; ) {
        var f = b[e].value;
        ab(f, "Missing select key element.");
        e++;
        x(e < b.length, "Missing or invalid select value element.");
        if (1 == b[e].type)
            var g = TF(a, b[e].value);
        else
            Za("Expected block type.");
        d[f.replace(/\s/g, "")] = g;
        e++
    }
    db(d.other, "Missing other key in select statement.");
    return d
}
  , aG = function(a, b) {
    var c = ""
      , d = 0;
    b = b.replace(XF, function(l, m, q) {
        c = m;
        q && (d = parseInt(q, 10));
        return ""
    });
    var e = {};
    e.Qe = c;
    e.Ah = d;
    b = WF(b);
    for (var f = 0; f < b.length; ) {
        var g = b[f].value;
        ab(g, "Missing plural key element.");
        f++;
        x(f < b.length, "Missing or invalid plural value element.");
        if (1 == b[f].type)
            var h = TF(a, b[f].value);
        else
            Za("Expected block type.");
        e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = h;
        f++
    }
    db(e.other, "Missing other key in plural statement.");
    return e
}
  , bG = function(a, b) {
    var c = "";
    b = b.replace(YF, function(h, l) {
        c = l;
        return ""
    });
    var d = {};
    d.Qe = c;
    d.Ah = 0;
    b = WF(b);
    for (var e = 0; e < b.length; ) {
        var f = b[e].value;
        ab(f, "Missing ordinal key element.");
        e++;
        x(e < b.length, "Missing or invalid ordinal value element.");
        if (1 == b[e].type)
            var g = TF(a, b[e].value);
        else
            Za("Expected block type.");
        d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
        e++
    }
    db(d.other, "Missing other key in selectordinal statement.");
    return d
};
OF.prototype.c = function(a) {
    x(0 < a.length, "Literal array is empty.");
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
}
;
var eG = function(a, b, c, d) {
    this.T = a;
    this.V = b;
    this.L = c;
    this.b = d;
    this.F = M.M();
    this.G = 1E4;
    this.h = 0;
    this.Fa = new uv("######");
    this.R = new OF(DATA.TooManyPhrases);
    this.o = null;
    this.g = [];
    if ("openDatabase"in window) {
        a = !0;
        try {
            window.openDatabase("", "", "", 0)
        } catch (e) {
            a = !1
        }
    } else
        a = !1;
    this.c = a;
    this.C = !1;
    this.c && cG(this);
    this.w = new RE;
    this.a = [];
    this.m = !1;
    dG(this)
}
  , cG = function(a) {
    xF(function(b, c) {
        b && c && (a.o = c,
        yF(a.o, null, null, null, function(d, e) {
            d && (a.g = lb(e, function(f) {
                return new vF(f.sl,f.tl,f.src,f.trg)
            }),
            a.g.reverse());
            a.C = !0;
            fG(a)
        }))
    })
}
  , gG = function(a, b) {
    Dh(b, 6) && (b = Number(J(b, 6, ""))) && (a.G = b)
}
  , dG = function(a) {
    DATA.SignedIn && a.w.rb(function(b) {
        return hG(a, b)
    }, "", "", "", "", "1")
}
  , fG = function(a) {
    if ((!a.c || a.C) && a.m) {
        var b = a.F;
        N(b, sm(b, 241, a.g.length));
        b = a.F;
        N(b, sm(b, 242, a.a.length));
        b = {};
        Im(a.b, "webapp", "stld", "b", (b.wc = a.g.length,
        b.gc = a.a.length,
        b));
        b = a.g.concat(a.a);
        a.h = b.length;
        a.T(b)
    }
}
  , iG = function(a, b, c) {
    if (a.c && !a.o)
        return !1;
    var d = AF(b)
      , e = b.oa()
      , f = b.a
      , g = function() {
        var h = 0 === c;
        a.h += h ? 1 : -1;
        a.V(b, h)
    };
    if (0 === c) {
        if (300 < f.length)
            return a.L(DATA.PhraseTooLong),
            d = {},
            Im(a.b, "webapp", "stlm", "l", (d.sz = f.length,
            d)),
            rm(a.F, f.length),
            !1;
        if (a.h >= a.G)
            return f = {},
            Im(a.b, "webapp", "stlm", "n", (f.sz = a.h + 1,
            f)),
            tm(a.F, a.h + 1),
            a.L(RF(a.R, {
                saved_phrase_limit: Dv(a.Fa, a.G)
            })),
            !1;
        TE(a.w, v(a.N, a, b, g), d, e, f, b.b, FF(b))
    } else if (1 == c)
        null != b.c ? UE(a.w, v(a.K, a, b, g), [b.c]) : a.c && uy(a.o.a, d, e, f, g);
    else
        throw "Unexpected operation";
    return !0
};
eG.prototype.N = function(a, b, c) {
    gG(this, c);
    if (c && !J(c, 3) && J(c, 5)) {
        a.c = J(c, 5);
        a.g = Number(J(c, 4, ""));
        var d = {};
        d.trans = a.b;
        d = {
            sentences: [d]
        };
        a = new vF(AF(a),a.oa(),a.a,d);
        a.a = J(c, 5);
        a.b = ne(J(c, 4, ""));
        this.a.push(a);
        b(!0)
    } else
        Im(this.b, "webapp", "stfl", "a"),
        jm(this.F, 151)
}
;
eG.prototype.K = function(a, b, c) {
    gG(this, c);
    c && !J(c, 3) ? (Im(this.b, "webapp", "stsu", "d"),
    c = this.F,
    N(c, O(c, 234)),
    a = jG(this, a),
    -1 === a ? (Im(this.b, "webapp", "stfl", "u"),
    jm(this.F, 154)) : (Im(this.b, "webapp", "stsu", "u"),
    c = this.F,
    N(c, O(c, 235)),
    Bb(this.a, a, 1)),
    b(!0)) : (Im(this.b, "webapp", "stfl", "d"),
    jm(this.F, 152))
}
;
var hG = function(a, b) {
    gG(a, b);
    a.a = El(b, 2, NE).map(function(c) {
        var d = {};
        d.trans = c.Nc();
        d = new vF(J(c, 1),J(c, 2),J(c, 3),{
            sentences: [d]
        });
        d.a = J(c, 0);
        d.b = Number(J(c, 5, ""));
        return d
    });
    a.m = !0;
    fG(a)
}
  , kG = function(a, b, c, d, e) {
    yF(a.o, b, c, d, function(f, g) {
        e(f && 0 < g.length)
    })
}
  , jG = function(a, b) {
    var c = AF(b)
      , d = b.oa()
      , e = b.a
      , f = b.b
      , g = -1;
    a.a.forEach(function(h, l) {
        c === h.Ca && d === h.Ma && e === h.Nf && f === hv(h.c) && (h.a && (b.c = h.a),
        h.b && (b.g = h.b),
        g = l)
    });
    return g
}
  , lG = function(a, b, c) {
    if (!a.c || a.o) {
        var d = AF(b)
          , e = b.oa()
          , f = b.a;
        -1 !== jG(a, b) ? c(!0) : a.c ? kG(a, d, e, f, c) : c(!1)
    }
};
var nG = function(a, b) {
    K.call(this);
    var c = ba(a);
    for (a = c.next(); !a.done; a = c.next())
        mG(a.value, this.a.bind(this));
    b = ba(b);
    for (a = b.next(); !a.done; a = b.next())
        mG(a.value, this.b.bind(this))
};
ka(nG, K);
nG.prototype.a = function(a) {
    a = oG(a.target);
    if ("" != a) {
        var b = new Kg("select");
        b.text = a;
        this.dispatchEvent(b)
    }
}
;
nG.prototype.b = function(a) {
    a = oG(a.target);
    if ("" != a) {
        var b = new Kg("select");
        b.text = a;
        b.o = !0;
        this.dispatchEvent(b)
    }
}
;
var oG = function(a) {
    var b = "";
    try {
        if (qw(a))
            var c = a.value.substring(a.selectionStart, a.selectionEnd);
        else if (rw()) {
            var d = sw(a)
              , e = d[1];
            if (d[0].inRange(e)) {
                if ("textarea" == a.type) {
                    var f = e.duplicate()
                      , g = f.text;
                    a = g;
                    for (d = !1; !d; )
                        0 == f.compareEndPoints("StartToEnd", f) ? d = !0 : (f.moveEnd("character", -1),
                        f.text == g ? a += "\r\n" : d = !0);
                    var h = a
                } else
                    h = e.text;
                var l = h
            } else
                l = "";
            c = l
        } else
            throw Error("Cannot get the selection text");
        b = c.trim();
        if ("" != b)
            return b
    } catch (m) {}
    b = lz(window);
    return b.toString ? b.toString().trim() : ""
};
function mG(a, b) {
    H(a, "mouseup", b);
    H(a, "keyup", function(c) {
        16 == c.keyCode && b(c)
    })
}
;var pG = function() {}
  , qG = new pG
  , rG = ["click", "keydown", "keyup"];
pG.prototype.O = function(a, b, c, d, e) {
    var f = function(g) {
        var h = hh(b)
          , l = lg(g.target) ? g.target.getAttribute("role") || null : null;
        "click" == g.type && Vg(g) ? h.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (h.call(d, g),
        g.preventDefault()) : (g.type = "keypress",
        h.call(d, g))
    };
    f.tc = b;
    f.Xm = d;
    e ? e.O(a, rG, f, c) : H(a, rG, f, c)
}
;
pG.prototype.Ha = function(a, b, c, d, e) {
    for (var f, g = 0; f = rG[g]; g++) {
        var h = a;
        var l = f;
        var m = !!c;
        l = Xg(h) ? h.df(l, m) : h ? (h = jh(h)) ? h.df(l, m) : [] : [];
        for (h = 0; m = l[h]; h++) {
            var q = m.listener;
            if (q.tc == b && q.Xm == d) {
                e ? e.Ha(a, f, m.listener, c, d) : nh(a, f, m.listener, c, d);
                break
            }
        }
    }
}
;
var sG = function(a) {
    var b = a.dn;
    a = a.uid;
    a = '<div class="' + S("jfk-bubble") + '" role="alertdialog"' + (a ? ' aria-describedby="' + S(a) + '"' : "") + '><div class="' + S("jfk-bubble-content-id") + '"' + (a ? ' id="' + S(a) + '"' : "") + "></div>";
    b && (b = a += '<div class="' + S("jfk-bubble-closebtn-id") + " " + S("jfk-bubble-closebtn") + '" aria-label="',
    a = "Close".replace(Gn, Hn),
    a = b + a + '" role="button" tabindex=0></div>');
    a += '<div class="' + S("jfk-bubble-arrow-id") + " " + S("jfk-bubble-arrow") + '"><div class="' + S("jfk-bubble-arrowimplbefore") + '"></div><div class="' + S("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return P(a)
};
sG.a = "jfk.templates.bubble.main";
var tG = function(a) {
    X.call(this, a);
    this.c = new $r("jfk-bubble",!0);
    this.b = new UD;
    this.K = []
};
w(tG, X);
tG.prototype.g = !0;
tG.prototype.h = !1;
var uG = function(a, b, c, d) {
    x(!a.Aa, "Must call setPosition() before rendering");
    a.c.Oe = !1;
    as(a.c, 1, b, c, d)
}
  , vG = function(a, b) {
    x(!a.Aa, "Must call showCloseButton() before rendering");
    a.g = b
}
  , xG = function(a, b) {
    x(t(b) || b.nodeType || b instanceof un || b instanceof Ad, "Content must be a string or HTML.");
    a.V = b;
    wG(a, b)
}
  , wG = function(a, b) {
    a = a.$b();
    b && a && (t(b) ? G(a, b) : b instanceof un ? Ud(a, tn(b)) : b instanceof Ad ? Ud(a, b) : (Ud(a, Kd),
    bg(a, b)))
};
k = tG.prototype;
k.setAutoHide = function(a) {
    this.b.setAutoHide(a)
}
;
k.$b = function() {
    return this.qd("jfk-bubble-content-id")
}
;
k.Ka = function() {
    this.v = Sp(sG, {
        dn: this.g,
        uid: "bubble-" + Qa(this)
    }, void 0, this.a);
    wG(this, this.V);
    W(this.j(), !1);
    var a = this.b
      , b = this.j();
    QD(a);
    a.v = b;
    if (!Ce) {
        a = this.b;
        b = fE(this.j(), "ease-out", 0, 1);
        var c = fE(this.j(), "ease-in", 1, 0);
        a.o = b;
        a.h = c
    }
    Mp(this.j(), this.K)
}
;
k.ea = function() {
    tG.D.ea.call(this);
    Y(this).O(this.b, ["beforeshow", "show", "beforehide", "hide"], this.T);
    if (this.g) {
        var a = Y(this)
          , b = this.qd("jfk-bubble-closebtn-id");
        qG.O(b, Ta(this.setVisible, !1), void 0, a.m || a, a)
    }
    a = this.j();
    x(a, "getElement() returns null.");
    b = this.qd("jfk-bubble-arrow-id");
    x(b, "No arrow element is found!");
    var c = this.c;
    c.a = a;
    c.h = b;
    a = this.b;
    a.L = this.c || void 0;
    a.isVisible() && a.m()
}
;
k.setVisible = function(a) {
    this.b.setVisible(a)
}
;
k.isVisible = function() {
    return this.b.isVisible()
}
;
var yG = function(a) {
    a.isVisible() && a.b.m()
};
tG.prototype.W = function() {
    this.b.Ja();
    delete this.b;
    tG.D.W.call(this)
}
;
tG.prototype.m = function() {
    mq(this.j());
    return !1
}
;
tG.prototype.T = function(a) {
    if ("show" == a.type || "hide" == a.type) {
        var b = Y(this)
          , c = this.a;
        c = B ? Gg(c) : c.a;
        "show" == a.type ? b.O(c, "scroll", this.m) : b.Ha(c, "scroll", this.m)
    }
    b = this.dispatchEvent(a.type);
    this.h && "hide" == a.type && this.Ja();
    return b
}
;
var zG = function(a, b) {
    this.a = a;
    this.b = b
}
  , AG = {
    af: "af-ZA",
    am: "am-ET",
    az: "az-AZ",
    bg: "bg-BG",
    ca: "ca-ES",
    cs: "cs-CZ",
    da: "da-DK",
    de: "de-DE",
    el: "el-GR",
    eu: "eu-ES",
    fa: "fa-IR",
    fi: "fi-FI",
    tl: "fil-PH",
    gl: "gl-ES",
    gu: "gu-IN",
    hi: "hi-IN",
    hr: "hr-HR",
    hu: "hu-HU",
    hy: "hy-AM",
    iw: "he-IL",
    id: "id-ID",
    is: "is-IS",
    it: "it-IT",
    ja: "ja-JP",
    jw: "jv-ID",
    ka: "ka-GE",
    km: "km-KH",
    kn: "kn-IN",
    ko: "ko-KR",
    lo: "lo-LA",
    lt: "lt-LT",
    lv: "lv-LV",
    ml: "ml-IN",
    mr: "mr-IN",
    ms: "ms-MY",
    ne: "ne-NP",
    no: "nb-NO",
    nl: "nl-NL",
    pl: "pl-PL",
    ro: "ro-RO",
    ru: "ru-RU",
    si: "si-LK",
    sk: "sk-SK",
    sl: "sl-SI",
    sr: "sr-RS",
    su: "su-ID",
    sv: "sv-SE",
    te: "te-IN",
    th: "th-TH",
    tr: "tr-TR",
    uk: "uk-UA",
    vi: "vi-VN",
    zu: "zu-ZA",
    "ar::ae": "ar-AE",
    "ar::bh": "ar-BH",
    "ar::dz": "ar-DZ",
    "ar::eg": "ar-EG",
    "ar::il": "ar-IL",
    "ar::jo": "ar-JO",
    "ar::kw": "ar-KW",
    "ar::lb": "ar-LB",
    "ar::ma": "ar-MA",
    "ar::om": "ar-OM",
    "ar::ps": "ar-PS",
    "ar::qa": "ar-QA",
    "ar::sa": "ar-SA",
    "ar::tn": "ar-TN",
    ar: "ar-EG",
    "bn::bd": "bn-BD",
    "bn::in": "bn-IN",
    bn: "bn-BD",
    "en::au": "en-AU",
    "en::ca": "en-CA",
    "en::com": "en-US",
    "en::gh": "en-GH",
    "en::ie": "en-IE",
    "en::in": "en-IN",
    "en::ke": "en-KE",
    "en::ng": "en-NG",
    "en::nz": "en-NZ",
    "en::ph": "en-PH",
    "en::tz": "en-TZ",
    "en::uk": "en-GB",
    "en::za": "en-ZA",
    en: "en-001",
    "es::ar": "es-AR",
    "es::bo": "es-BO",
    "es::cl": "es-CL",
    "es::co": "es-CO",
    "es::cr": "es-CR",
    "es::do": "es-DO",
    "es::ec": "es-EC",
    "es::es": "es-ES",
    "es::gt": "es-GT",
    "es::hn": "es-HN",
    "es::mx": "es-MX",
    "es::ni": "es-NI",
    "es::pa": "es-PA",
    "es::pe": "es-PE",
    "es::pr": "es-PR",
    "es::py": "es-PY",
    "es::sv": "es-SV",
    "es::com": "es-US",
    "es::uy": "es-UY",
    "es::ve": "es-VE",
    es: "es-ES",
    "fr::ca": "fr-CA",
    "fr::fr": "fr-FR",
    fr: "fr-FR",
    "pt::pt": "pt-PT",
    pt: "pt-BR",
    "ta::in": "ta-IN",
    "ta::lk": "ta-LK",
    "ta::sg": "ta-SG",
    "ta::my": "ta-MY",
    ta: "ta-IN",
    "sw::ke": "sw",
    "sw::tz": "sw-TZ",
    sw: "sw",
    "ur::pk": "ur-PK",
    "ur::in": "ur-IN",
    ur: "ur-PK",
    "zh-CN:zh-TW:hk": "yue-Hant-HK",
    "zh-CN:zh-CN:hk": "cmn-Hans-HK",
    "zh-CN:zh-TW": "cmn-Hant-TW",
    "zh-CN": "cmn-Hans-CN"
};
zG.prototype.get = function(a) {
    return AG[a + ":" + this.b + ":" + this.a] || AG[a + "::" + this.a] || AG[a + ":" + this.b] || AG[a] || null
}
;
var BG = function(a, b) {
    tG.call(this, b);
    this.C = 0;
    this.c.Ef = !0;
    this.setAutoHide(!1);
    this.c.b = a;
    yG(this);
    uG(this, 2);
    vG(this, !1);
    xG(this, Sp($n, {
        label: MSG_SPEAK_NOW
    }))
};
w(BG, tG);
BG.prototype.ea = function() {
    BG.D.ea.call(this);
    this.w = D("gt-speech-l3", this.j())
}
;
var CG = function(a) {
    0 == a.C++ && T(a.w, "trigger");
    Bi(a.N, 600, a)
};
BG.prototype.N = function() {
    0 == --this.C && U(this.w, "trigger")
}
;
var DG = function(a, b, c, d, e, f, g, h, l) {
    K.call(this);
    this.Y = a;
    this.K = b;
    this.a = null;
    no && "webkitSpeechRecognition"in window && (a = new webkitSpeechRecognition,
    a.continuous = gt(),
    a.interimResults = !0,
    this.a = a);
    this.V = new zG(c,d);
    this.T = !e;
    this.c = "";
    this.Gb = !1;
    this.b = null;
    this.w = "init";
    this.m = f || null;
    this.C = l || null;
    this.L = g || null;
    this.ma = !!h;
    this.aa = new Tu;
    this.o = Dm.M();
    this.X = pl.M();
    this.F = M.M();
    this.h = null;
    this.G = ""
};
w(DG, K);
var EG = function(a, b) {
    var c = a.X;
    b ? (c.m = c.b,
    c.b = 3) : c.b = c.m;
    a.g.setVisible(b && a.T)
}
  , FG = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" ")
  , GG = function(a, b) {
    if (!(0 <= FG.indexOf(a.w + ":" + b))) {
        var c = {};
        c.from = a.w;
        c.to = b;
        a.o.log("speech", c)
    }
    a.w = b
};
k = DG.prototype;
k.Fn = function() {
    if (this.b.Ea(16)) {
        var a = this.F;
        N(a, O(a, 149));
        Im(this.o, "webapp", "si", "start", {
            sl: this.G
        });
        FA(this.K, !0);
        this.c = "";
        this.a.start();
        GG(this, "buttonOn")
    } else
        this.a.stop(),
        EG(this, !1),
        GG(this, "buttonOff"),
        FA(this.K, !1)
}
;
k.Gn = function() {
    if (!this.b.isEnabled()) {
        this.dispatchEvent("userInteractionWhileDisabled");
        var a = this.F;
        N(a, O(a, 305));
        Im(this.o, "webapp", "dia", "click", {
            dias: "vi"
        })
    }
}
;
k.yl = function() {
    this.Gb = !0;
    EG(this, !0);
    GG(this, "start");
    this.dispatchEvent("start")
}
;
k.Hn = function() {
    CG(this.g);
    GG(this, "speechStart");
    this.dispatchEvent("speechStart")
}
;
k.Vk = function() {
    HG(this);
    GG(this, "end");
    this.dispatchEvent("end")
}
;
k.wl = function() {
    CG(this.g);
    GG(this, "speechEnd")
}
;
var HG = function(a) {
    a.Gb = !1;
    EG(a, !1);
    a.b.ad(!1)
};
DG.prototype.N = function(a) {
    CG(this.g);
    for (var b = "", c = a.resultIndex; c < a.results.length; ++c)
        this.a.continuous && (this.c || b) && 0 < a.results[c].length && a.results[c][0].transcript && a.results[c][0].transcript.length && " " != a.results[c][0].transcript[0] || (a.results[c].isFinal ? this.c += a.results[c][0].transcript : b += a.results[c][0].transcript);
    a = this.c + b;
    Lm(this.o, "inputm", 3);
    this.Y.b(a);
    GG(this, "result")
}
;
DG.prototype.ba = function() {
    HG(this);
    GG(this, "error")
}
;
DG.prototype.R = function() {
    HG(this);
    GG(this, "noMatch")
}
;
DG.prototype.jb = function() {
    return this.Gb
}
;
var IG = function(a, b, c, d, e, f) {
    X.call(this);
    this.T = a;
    this.aa = b;
    this.sa = c;
    this.ba = d || "";
    this.ya = e || "";
    this.Ya = f || function() {}
    ;
    this.c = this.N = this.g = "";
    this.b = !1;
    this.C = !0;
    this.w = [];
    this.m = "";
    this.V = !1;
    this.K = new Qr(this.Y,1E3,this);
    this.h = Dm.M();
    this.F = M.M()
};
w(IG, X);
IG.prototype.setVisible = function(a) {
    a || (this.V = this.b = !1,
    this.K.stop());
    W(this.j(), a)
}
;
IG.prototype.isVisible = function() {
    return tq(this.j())
}
;
var JG = function(a, b) {
    if ("" == b.oe)
        a.setVisible(!1);
    else {
        if (b.$g) {
            if (a.V)
                return
        } else
            a.V = !0;
        a.m = b.$g || "";
        a.g = b.Ei;
        a.N = b.Pi;
        a.c = a.m ? a.c : b.oe;
        a.X = b.Wj || ee(b.oe);
        a.b = b.Ih && a.C;
        var c = b.$g ? a.aa : b.Ih && a.C ? a.ba : a.sa;
        if (a.b && sb(b.ag, 6)) {
            a.setVisible(!1);
            var d = Jf("src-translit");
            d && G(d, a.c);
            if (b.result)
                for (d = 0; d < b.result.cc(); d++)
                    b.result.$a(d).Ra[3] = 0 == d ? a.c : ""
        } else
            a.b ? (d = a.j(),
            U(d, "gt-spell-correct-message"),
            T(d, "gt-related-suggest-message")) : (d = a.j(),
            U(d, "gt-related-suggest-message"),
            T(d, "gt-spell-correct-message")),
            a.setVisible(!0);
        G(a.j(), c + " ");
        a.w = b.ag;
        c = F("a", {
            tabindex: 0,
            href: "javascript:void(0)"
        });
        Yp(c, {
            direction: kc(a.N) ? "rtl" : "ltr"
        });
        Yp(c, {
            "text-decoration": "none"
        });
        c.innerHTML = a.X;
        H(c, "click", a.Ba, !1, a);
        a.j().appendChild(c);
        c = F("DIV", "gt-spell-icon");
        a.j().appendChild(c);
        a.b && !sb(b.ag, 6) && (b = F("div"),
        G(b, a.ya + " "),
        c = F("a", {
            tabindex: 1,
            href: "javascript:void(0)"
        }),
        H(c, "click", a.Pa, !1, a),
        G(c, a.g),
        b.appendChild(c),
        a.j().appendChild(b),
        T(b, "gt-revert-correct-message"));
        a.K.start()
    }
};
IG.prototype.Y = function() {
    var a = {};
    a.orig = this.g;
    a.sl = this.N;
    this.b && (a.autocorrect = this.b);
    this.m ? (a.corrlang = this.m,
    this.h.log("langidshow", a),
    fm(this.F, 5, 1, !1)) : (a.corr = this.c,
    a.corrtype = this.w,
    this.h.log("spell", a),
    fm(this.F, 4, 1, !1))
}
;
IG.prototype.Ba = function() {
    if (this.m) {
        var a = this.g;
        64 < a.length && (a = a.substr(0, 64));
        Lm(this.h, "orig", a);
        Lm(this.h, "psl", this.N);
        this.Ya(this.X, this.m);
        vt(this.T, this.m, "", this.g, "tws_lsugg");
        a = this.F;
        N(a, bm(a, 79, 5, 1, !1, 1))
    } else
        a = this.g,
        64 < a.length && (a = a.substr(0, 64)),
        Lm(this.h, "orig", a),
        Lm(this.h, "corrtype", this.w),
        this.b ? vt(this.T, "", "", this.c, "tws_confirm") : vt(this.T, "", "", this.c, "tws_spell"),
        a = this.F,
        N(a, bm(a, 79, 4, 1, !1, 1));
    a = this.K;
    a.jb() && (a.stop(),
    a.rg());
    this.setVisible(!1)
}
;
var KG = {}
  , LG = (KG[1] = 1,
KG[2] = 2,
KG[3] = 3,
KG[4] = 4,
KG[5] = 5,
KG[6] = 6,
KG[7] = 7,
KG[8] = 8,
KG[9] = 9,
KG[10] = 10,
KG);
IG.prototype.Pa = function() {
    var a = this.c;
    64 < a.length && (a = a.substr(0, 64));
    Lm(this.h, "corr", a);
    Lm(this.h, "corrtype", this.w);
    this.C = !1;
    vt(this.T, "", "", this.g, "tws_revert");
    a = this.K;
    a.jb() && (a.stop(),
    a.rg());
    this.setVisible(!1);
    a = this.F;
    for (var b = this.g, c = [], d = 0; d < this.w.length; d++) {
        var e = LG[this.w[d]];
        c.push(e ? e : 0)
    }
    d = new cl;
    C(d, 1, b);
    C(d, 2, c || []);
    b = O(a, 139);
    mf(b, 55, d);
    N(a, b)
}
;
var MG = function() {
    this.a = Hw(INPUT_SUGGESTION_SERVER_URL);
    this.cd = 5E3
}
  , NG = 0;
MG.prototype.send = function(a, b, c, d) {
    a = a ? Vb(a) : {};
    d = d || "_" + (NG++).toString(36) + Ua().toString(36);
    var e = "_callbacks___" + d;
    b && (n[e] = OG(d, b),
    a.callback = e);
    b = {
        timeout: this.cd,
        Rj: !0
    };
    e = rc(this.a);
    e = sc.exec(e);
    var f = e[3] || "";
    e = tc(e[1] + uc("?", e[2] || "", a) + uc("#", f, void 0));
    b = Sy(e, b);
    Ly(b, null, PG(d, a, c), void 0);
    return {
        ra: d,
        Kh: b
    }
}
;
MG.prototype.cancel = function(a) {
    a && (a.Kh && a.Kh.cancel(),
    a.ra && QG(a.ra, !1))
}
;
var PG = function(a, b, c) {
    return function() {
        QG(a, !1);
        c && c(b)
    }
}
  , OG = function(a, b) {
    return function(c) {
        QG(a, !0);
        b.apply(void 0, arguments)
    }
}
  , QG = function(a, b) {
    a = "_callbacks___" + a;
    if (n[a])
        if (b)
            try {
                delete n[a]
            } catch (c) {
                n[a] = void 0
            }
        else
            n[a] = Fa
};
var RG = function() {
    var a = INPUT_SUGGESTION_CLIENT_NAME
      , b = INPUT_SUGGESTION_DATASET;
    this.g = new MG;
    this.g.cd = 500;
    this.a = null;
    this.h = 0;
    this.c = !1;
    this.C = Dm.M();
    this.F = M.M();
    this.m = b || "translate";
    this.G = a || "translate_separate_corpus"
}
  , mD = function(a, b, c, d, e) {
    BD(a);
    if (0 == b.length || 64 < b.length || "auto" == c)
        e([]);
    else {
        c = "zh-CN" == c || "zh-TW" == c ? "zh" : c;
        var f = 167 - (Ua() - a.h);
        0 > f && (f = 0);
        a.b = Bi(function() {
            if (this.b) {
                this.b = void 0;
                var g = c;
                this.h = Ua();
                var h = {};
                h.q = b;
                h.client = this.G;
                h.ds = this.m;
                h.hl = g;
                h.requiredfields = "tl:" + d;
                this.a = this.g.send(h, v(this.w, this, b, g, d, e), v(this.o, this, "4", b, g, d, 144))
            }
        }, f, a)
    }
}
  , BD = function(a) {
    a.a && (a.c = !0,
    a.g.cancel(a.a),
    a.a = null);
    a.b && (Ci(a.b),
    a.b = void 0)
};
RG.prototype.o = function(a, b, c, d, e, f, g, h) {
    if (!this.c) {
        b = {
            q: b,
            sl: c,
            tl: d
        };
        if (null != g)
            try {
                b.se = g.substring(0, 64)
            } catch (l) {
                throw Error(l + " opt_context is " + g);
            }
        h && (b.msg = h.substring(0, 64));
        jm(this.F, e);
        Im(this.C, "webapp", "is", a, b)
    }
    this.c = !1
}
;
RG.prototype.w = function(a, b, c, d, e) {
    try {
        var f = lb(e[1], function(g) {
            return he(g[0])
        }, this);
        d(f)
    } catch (g) {
        this.o("5", a, b, c, 53, null, (new bj).$c(e), g.message)
    }
    this.a = null
}
;
var SG = function() {
    this.a = [];
    this.c = this.b = null
}
  , GD = function(a) {
    var b = a.a.length;
    b += a.b ? 1 : 0;
    b += a.c ? 1 : 0;
    return a = b + (a.c ? 1 : 0)
};
var TG = function(a) {
    this.c = a || "menu"
};
w(TG, Nw);
Ga(TG);
TG.prototype.a = function() {
    return "gt-is"
}
;
TG.prototype.h = function(a) {
    return kg(a)
}
;
TG.prototype.b = function(a) {
    return "DIV" == a.tagName && a.firstChild && "DIV" == a.firstChild.tagName ? !0 : !1
}
;
TG.prototype.m = function() {
    var a = F("DIV", "gt-is")
      , b = F("DIV", "gt-is-ctr");
    bg(a, b);
    return a
}
;
var UG = function(a, b, c) {
    Uw.call(this, a || Tw(TG.M()), b || TG.M(), c);
    this.b = [];
    this.h = this.g = this.c = null;
    ex(this, !1)
};
w(UG, Uw);
var AD = function(a, b) {
    z(a.b, function(c) {
        this.removeChild(c, !0)
    }, a);
    z(b, function(c, d) {
        this.c ? this.ld(c, Zq(this, this.c), !0) : this.gb(c, !0);
        d = "gt-is-si-" + d;
        c.qd("gt-is-sg").id = d
    }, a);
    a.b = b
}
  , ED = function(a, b) {
    a.g && a.removeChild(a.g, !0);
    if (b) {
        var c = Zq(a, a.h) + 1;
        a.ld(b, c, !0)
    }
    a.g = b
}
  , FD = function(a, b) {
    (a = a.b[0]) && (a = a.qd(a.Mh ? "gt-is-ld-top" : "gt-is-ld")) && W(a, b)
};
UG.prototype.ab = function(a) {
    return 27 == a.keyCode ? (this.setVisible(!1),
    a.stopPropagation(),
    a.preventDefault(),
    !0) : UG.D.ab.call(this, a)
}
;
var VG = function(a, b, c) {
    var d = "ss";
    null != c && c && (d = "m" + d);
    this.w = b;
    Cs.call(this, a, d, MSG_SYNONYMS_OF, MSG_SYNONYMS, 8);
    this.g = []
};
w(VG, Cs);
k = VG.prototype;
k.update = function(a, b, c, d) {
    VG.D.update.call(this, a, b, c, d);
    if (!d || 0 == I(d, 11))
        return !1;
    dg(this.b);
    this.Ad();
    var e = c = 0;
    for (a = 0; a < I(d, 11); ++a) {
        var f = new cp(Dl(d, 11, a))
          , g = J(f, 2);
        c += f.b();
        for (b = 0; b < f.b(); ++b)
            e += I(f.c(b), 0)
    }
    if (b = 2 < c / I(d, 11) && 1 < e - c)
        a = MSG_N_MORE_SYNONYMS_LABEL.replace("%1$s", (e - c).toLocaleString(this.Sa)),
        Es(this, a, MSG_FEWER_SYNONYMS_LABEL);
    c = 1 == c / I(d, 11);
    g && (this.Te = g,
    Ds(this, g));
    for (a = 0; a < I(d, 11); ++a) {
        f = new cp(Dl(d, 11, a));
        g = F("DIV", {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(g);
        G(g, J(f, 0));
        g = f;
        f = c;
        e = b;
        var h = F("UL", {
            "class": "gt-syn-list"
        });
        var l = kc(this.Ca) ? "rtl" : "ltr";
        Yp(h, {
            direction: l
        });
        if (e) {
            l = F("SPAN", {
                "class": "gt-syn-span"
            });
            for (var m = F("DIV", {
                "class": "gt-syn-row"
            }, l), q = [], r = 0; r < g.b(); ++r) {
                var u = g.c(r);
                u = Fh(u, 0, 0);
                if (!sb(q, u)) {
                    q.push(u);
                    this.w || 0 < r && l.appendChild(Zf(", "));
                    var y = F("SPAN", {
                        "class": "gt-cd-cl"
                    });
                    l.appendChild(y);
                    this.w ? G(y, " " + u + " ") : G(y, u);
                    this.g.push(y)
                }
            }
            l = F("DIV", {
                "class": "gt-syn-summary-row"
            }, m);
            h.appendChild(l)
        }
        for (l = 0; l < g.b(); ++l) {
            m = g.c(l);
            r = e;
            u = f ? "DIV" : "LI";
            q = F("SPAN", {
                "class": "gt-syn-span"
            });
            u = F(u, {
                "class": "gt-syn-row"
            }, q);
            r = Fs(u, !r);
            for (u = 0; u < I(m, 0); ++u)
                y = F("SPAN", {
                    "class": "gt-cd-cl"
                }),
                q.appendChild(y),
                this.w ? G(y, " " + Fh(m, 0, u) + " ") : G(y, Fh(m, 0, u)),
                this.c.push(y),
                this.w || u < I(m, 0) - 1 && q.appendChild(Zf(", "));
            h.appendChild(r)
        }
        this.b.appendChild(h)
    }
    this.setVisible(!0);
    return !0
}
;
k.ea = function() {
    VG.D.ea.call(this);
    Y(this).O(this.j(), "click", this.Jn)
}
;
k.Jn = function(a) {
    Lp(a.target, "gt-cd-cl") && this.dispatchEvent(new Kg("a",a.target))
}
;
k.Yd = function(a) {
    VG.D.Yd.call(this, a);
    for (var b = Mf("gt-syn-summary-row", this.j()), c = 0; c < b.length; c++) {
        var d = b[c]
          , e = D("gt-syn-row", d)
          , f = Cq(e, "margin");
        e = qq(e).height + f.top + f.bottom;
        Yp(d, "max-height", a ? 0 : e + "px")
    }
}
;
k.re = function() {
    return this.m ? VG.D.re.call(this) : this.g.length
}
;
k.pg = function(a) {
    return this.m ? VG.D.pg.call(this, a) : this.g.indexOf(a)
}
;
k.Ad = function() {
    VG.D.Ad.call(this);
    this.g = []
}
;
var WG = function(a, b) {
    this.C = Dm.M();
    this.F = M.M();
    this.g = a;
    B || xe || ze || H(a, "copy", this.m, !1, this);
    this.a = b;
    for (a = 0; a < b.length; a++)
        H(b[a], "mousedown", this.w, !1, this);
    this.c = this.b = null;
    this.o = this.h = !1
};
w(WG, Hg);
WG.prototype.W = function() {
    WG.D.W.call(this);
    nh(this.g, "copy", this.m, !1, this);
    this.g = null;
    for (var a = 0; a < this.a.length; a++)
        nh(this.a[a], "mousedown", this.w, !1, this);
    this.a = null
}
;
WG.prototype.m = function() {
    var a = Wz();
    a && this.g && (this.c = a,
    Bi(this.G, 0, this),
    Jf("gt-res-edit") && (this.h = tq(Jf("gt-res-edit")),
    this.o = tq(Jf("gt-res-undo")),
    W(Jf("gt-res-edit"), !1),
    W(Jf("gt-res-undo"), !1)),
    a = lz(window).toString(),
    this.b = Zz(a))
}
;
WG.prototype.w = function(a) {
    var b = a.b.detail;
    1 < b && Vg(a) && sb(this.a, a.target) && (a.preventDefault(),
    Yz(this.g),
    a = {},
    a.clickCount = b,
    this.C.log("dblClickSelectall", a),
    b = this.F,
    N(b, O(b, 236)))
}
;
WG.prototype.G = function() {
    this.c && (this.c.select(),
    this.c = null);
    this.b && (hg(this.b),
    this.b = null);
    this.h && W(Jf("gt-res-edit"), !0);
    this.o && W(Jf("gt-res-undo"), !0)
}
;
var XG = function(a) {
    this.a = vq(Gw(""));
    this.b = (Ja(a) ? a.join(",") : a) + "{font-family:%FONT%arial,sans-serif!important}"
};
XG.prototype.set = function(a) {
    uq(this.a, Gw("" == a ? "" : this.b.replace("%FONT%", '"' + a + '",')))
}
;
var YG = function() {
    mF.M();
    var a = lF("\u1288") == lF("\u1290")
      , b = nF("\u09a5\u09cd")
      , c = nF("\u1780\u17d1")
      , d = nF("\u0e81\u0ec8")
      , e = nF("\u0d15\u0d4d")
      , f = nF("\u1001\u1039\u1010")
      , g = nF("\u0da5\u0dca");
    var h = nF("\u0ba4\u0bcd") || lF("\u0bb1\u0bc6\u0bbe") + lF("\u0bb1") != lF("\u0bb1\u0bc6") + lF("\u0bb1\u0bbe");
    this.a = {
        am: a,
        bn: b,
        km: c,
        lo: d,
        ml: e,
        my: f,
        ps: !0,
        sd: !0,
        si: g,
        ta: h
    }
};
Ga(YG);
var ZG = {
    "Noto Sans Ethiopic": "notosansethiopic",
    "Noto Naskh Arabic": "notonaskharabic",
    "Noto Sans Malayalam": "notosansmalayalam",
    "Noto Sans Myanmar": "notosansmyanmar",
    "Noto Sans Sinhala": "notosanssinhala"
}
  , $G = {
    Dhyana: $e || we || Ye || Xe || We
}
  , aH = {
    lo: Ee && 0 <= Lc(Ur, "6.0")
}
  , bH = {
    am: "Noto Sans Ethiopic",
    bn: "Lohit Bengali",
    lo: "Dhyana",
    km: "Nokora",
    ml: "Noto Sans Malayalam",
    my: "Noto Sans Myanmar",
    ps: "Noto Naskh Arabic",
    sd: "Noto Naskh Arabic",
    si: "Noto Sans Sinhala",
    ta: "Lohit Tamil"
}
  , cH = function() {
    this.a = {};
    YG.M()
};
Ga(cH);
var gH = function() {
    this.h = YG.M();
    this.g = cH.M();
    this.c = new XG(dH);
    this.a = new XG(eH);
    this.b = new XG(fH)
}
  , dH = ["body", "#gb"]
  , eH = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" ")
  , fH = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" ")
  , hH = function(a, b, c) {
    a: {
        var d = aH[c]
          , e = a.h.a[c];
        if ((null == d || !d) && null != e && e && (c = bH[c],
        null != c && (d = $G[c],
        null == d || !d)))
            break a;
        c = ""
    }
    a = a.g;
    if ("" != c && null == a.a[c]) {
        a = a.a;
        e = d = c;
        var f = new Pm;
        null != ZG[e] ? Tm(f, "/earlyaccess/" + ZG[e] + ".css") : (Tm(f, "/css"),
        f.a.set("family", e));
        a[d] = vq(Gw("@import url(//fonts.googleapis.com" + f.toString() + ");"))
    }
    b.set(c)
};
var iH = function(a) {
    K.call(this);
    this.v = a;
    this.b = E("tlid-app-download-button", this.v);
    this.F = M.M();
    this.a = Dm.M();
    Ah(this.b, this.c.bind(this))
};
ka(iH, K);
iH.prototype.c = function() {
    if (Lp(this.v, "popup-open"))
        jH(this, !1);
    else {
        if (Lp(this.v, "tlid-android-download")) {
            var a = this.F;
            N(a, O(a, 333));
            this.a.log("cad=and", {})
        } else
            Lp(this.v, "tlid-ios-download") && (a = this.F,
            N(a, O(a, 334)),
            this.a.log("cad=ios", {}));
        jH(this, !0)
    }
}
;
var jH = function(a, b) {
    V(a.v, "popup-open", b);
    b && a.dispatchEvent("popup_opened")
};
var lH = function(a) {
    this.v = a;
    a = Mf("tlid-app-download-button-container", this.v);
    for (var b = [], c = 0; c < a.length; c++)
        b.push(new iH(a[c]));
    this.a = b;
    kH(this)
}
  , kH = function(a) {
    a.a.forEach(function(b) {
        H(b, "popup_opened", v(a.b, a, b), !1, a)
    });
    H(a.v, "keydown", function(b) {
        zh(b, Mf("tlid-app-download-button", a.v))
    }, !1)
};
lH.prototype.b = function(a) {
    this.a.forEach(function(b) {
        b != a && jH(b, !1)
    })
}
;
var mH = function(a) {
    this.a = a;
    this.b = E("tlid-brain-logo", this.a);
    this.c = E("tlid-no-brain-logo", this.a)
}
  , pH = function(a, b, c) {
    b = nH(b, c) && !oH(b, c) ? !0 : "en" !== b && "en" !== c ? nH(b, "en") && nH("en", c) && !oH(b, c) : !1;
    V(a.b, "hidden", !b);
    V(a.c, "hidden", b)
}
  , nH = function(a, b) {
    var c = !1;
    z(DATA.NeuralEnabledPairs, function(d) {
        d.Source === a && d.Target === b && (c = !0)
    });
    return c
}
  , oH = function(a, b) {
    var c = !1;
    z(DATA.ExcludedPairs, function(d) {
        d.Source === a && d.Target === b && (c = !0)
    });
    return c
};
var qH = function(a) {
    os(a, 2)
};
var sH = function(a, b, c) {
    K.call(this);
    this.target = a;
    this.m = b || a;
    this.g = c || new Vp(NaN,NaN,NaN,NaN);
    this.c = Hf(a);
    this.a = new Gq(this);
    Jg(this, this.a);
    this.deltaY = this.deltaX = this.C = this.G = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.o = !0;
    this.b = !1;
    H(this.m, ["touchstart", "mousedown"], this.Ri, !1, this);
    this.h = rH
};
w(sH, K);
var rH = n.document && n.document.documentElement && !!n.document.documentElement.setCapture && !!n.document.releaseCapture;
k = sH.prototype;
k.qa = function(a) {
    this.o = a
}
;
k.W = function() {
    sH.D.W.call(this);
    nh(this.m, ["touchstart", "mousedown"], this.Ri, !1, this);
    Lq(this.a);
    this.h && this.c.releaseCapture();
    this.m = this.target = null
}
;
k.Ri = function(a) {
    var b = "mousedown" == a.type;
    if (!this.o || this.b || b && !Vg(a))
        this.dispatchEvent("earlycancel");
    else if (this.dispatchEvent(new tH("start",this,a.clientX,a.clientY,a))) {
        this.b = !0;
        b && a.preventDefault();
        b = this.c;
        var c = b.documentElement
          , d = !this.h;
        this.a.O(b, ["touchmove", "mousemove"], this.al, {
            capture: d,
            passive: !1
        });
        this.a.O(b, ["touchend", "mouseup"], this.$e, d);
        this.h ? (c.setCapture(!1),
        this.a.O(c, "losecapture", this.$e)) : this.a.O(Uf(b), "blur", this.$e);
        this.K && this.a.O(this.K, "scroll", this.L, d);
        this.clientX = this.G = a.clientX;
        this.clientY = this.C = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.w = Tf(If(this.c).a)
    }
}
;
k.$e = function(a, b) {
    Lq(this.a);
    this.h && this.c.releaseCapture();
    this.b ? (this.b = !1,
    this.dispatchEvent(new tH("end",this,a.clientX,a.clientY,a,uH(this, this.deltaX),vH(this, this.deltaY),b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
}
;
k.al = function(a) {
    if (this.o) {
        var b = a.clientX - this.clientX
          , c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.b) {
            var d = this.G - this.clientX
              , e = this.C - this.clientY;
            if (0 < d * d + e * e)
                if (this.dispatchEvent(new tH("start",this,a.clientX,a.clientY,a)))
                    this.b = !0;
                else {
                    this.lc || this.$e(a);
                    return
                }
        }
        c = wH(this, b, c);
        b = c.x;
        c = c.a;
        this.b && this.dispatchEvent(new tH("beforedrag",this,a.clientX,a.clientY,a,b,c)) && (xH(this, a, b, c),
        a.preventDefault())
    }
}
;
var wH = function(a, b, c) {
    var d = Tf(If(a.c).a);
    b += d.x - a.w.x;
    c += d.a - a.w.a;
    a.w = d;
    a.deltaX += b;
    a.deltaY += c;
    return new Df(uH(a, a.deltaX),vH(a, a.deltaY))
};
sH.prototype.L = function(a) {
    var b = wH(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    xH(this, a, b.x, b.a)
}
;
var xH = function(a, b, c, d) {
    a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    a.dispatchEvent(new tH("drag",a,b.clientX,b.clientY,b,c,d))
}
  , uH = function(a, b) {
    var c = a.g;
    a = isNaN(c.left) ? null : c.left;
    c = isNaN(c.width) ? 0 : c.width;
    return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
}
  , vH = function(a, b) {
    var c = a.g;
    a = isNaN(c.top) ? null : c.top;
    c = isNaN(c.height) ? 0 : c.height;
    return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
}
  , tH = function(a, b, c, d, e, f, g) {
    Kg.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.left = p(f) ? f : b.deltaX;
    this.top = p(g) ? g : b.deltaY
};
w(tH, Kg);
(function() {
    for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !n.requestAnimationFrame; ++b)
        n.requestAnimationFrame = n[c + "RequestAnimationFrame"],
        n.cancelAnimationFrame = n[c + "CancelAnimationFrame"] || n[c + "CancelRequestAnimationFrame"];
    if (!n.requestAnimationFrame) {
        var d = 0;
        n.requestAnimationFrame = function(e) {
            var f = (new Date).getTime()
              , g = Math.max(0, 16 - (f - d));
            d = f + g;
            return n.setTimeout(function() {
                e(f + g)
            }, g)
        }
        ;
        n.cancelAnimationFrame || (n.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    }
}
)();
var yH = [[], []]
  , zH = 0
  , AH = !1
  , BH = 0
  , DH = function(a, b) {
    var c = BH++
      , d = {
        gm: {
            id: c,
            zc: a.measure,
            context: b
        },
        rm: {
            id: c,
            zc: a.qm,
            context: b
        },
        state: {},
        Hb: void 0,
        Gf: !1
    };
    return function() {
        0 < arguments.length ? (d.Hb || (d.Hb = []),
        d.Hb.length = 0,
        d.Hb.push.apply(d.Hb, arguments),
        d.Hb.push(d.state)) : d.Hb && 0 != d.Hb.length ? (d.Hb[0] = d.state,
        d.Hb.length = 1) : d.Hb = [d.state];
        d.Gf || (d.Gf = !0,
        yH[zH].push(d));
        AH || (AH = !0,
        window.requestAnimationFrame(CH))
    }
}
  , CH = function() {
    AH = !1;
    var a = yH[zH]
      , b = a.length;
    zH = (zH + 1) % 2;
    for (var c, d = 0; d < b; ++d) {
        c = a[d];
        var e = c.gm;
        c.Gf = !1;
        e.zc && e.zc.apply(e.context, c.Hb)
    }
    for (d = 0; d < b; ++d)
        c = a[d],
        e = c.rm,
        c.Gf = !1,
        e.zc && e.zc.apply(e.context, c.Hb),
        c.state = {};
    a.length = 0
};
var EH = B ? tc(dc(ec('javascript:""'))) : tc(dc(ec("about:blank")));
rc(EH);
var FH = B ? tc(dc(ec('javascript:""'))) : tc(dc(ec("javascript:undefined")));
rc(FH);
var GH = function(a, b) {
    this.v = a;
    this.b = b
};
var HH = function(a, b) {
    X.call(this, b);
    this.X = !!a;
    this.g = null;
    this.T = DH({
        qm: this.Mf
    }, this)
};
w(HH, X);
k = HH.prototype;
k.ng = null;
k.wf = !1;
k.zb = null;
k.kb = null;
k.dc = null;
k.Xf = !1;
k.Be = function() {
    return "goog-modalpopup"
}
;
k.cf = function() {
    return this.zb
}
;
k.Ka = function() {
    HH.D.Ka.call(this);
    var a = this.j();
    x(a);
    Mp(a, yc(this.Be()).split(" "));
    vg(a, !0);
    W(a, !1);
    IH(this);
    JH(this)
}
;
var IH = function(a) {
    if (a.X && !a.kb) {
        var b = a.a.b("IFRAME", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;"
        });
        Wd(b, EH);
        a.kb = b;
        a.kb.className = a.Be() + "-bg";
        W(a.kb, !1);
        sq(a.kb, 0)
    }
    a.zb || (a.zb = a.a.b("DIV", a.Be() + "-bg"),
    W(a.zb, !1))
}
  , JH = function(a) {
    a.dc || (a.dc = Fg(a.a, "SPAN"),
    W(a.dc, !1),
    vg(a.dc, !0),
    a.dc.style.position = "absolute")
};
k = HH.prototype;
k.Gi = function() {
    this.Xf = !1
}
;
k.Rc = function(a) {
    return !!a && "DIV" == a.tagName
}
;
k.Da = function(a) {
    HH.D.Da.call(this, a);
    a = yc(this.Be()).split(" ");
    Mp(x(this.j()), a);
    IH(this);
    JH(this);
    vg(this.j(), !0);
    W(this.j(), !1)
}
;
k.ea = function() {
    x(!!this.zb, "Background element must not be null.");
    this.kb && eg(this.kb, this.j());
    eg(this.zb, this.j());
    HH.D.ea.call(this);
    fg(this.dc, this.j());
    this.ng = new gE(this.a.a);
    Y(this).O(this.ng, "focusin", this.Am);
    KH(this, !1)
}
;
k.mb = function() {
    this.isVisible() && this.setVisible(!1);
    Ig(this.ng);
    HH.D.mb.call(this);
    hg(this.kb);
    hg(this.zb);
    hg(this.dc)
}
;
k.setVisible = function(a) {
    x(this.Aa, "ModalPopup must be rendered first.");
    if (a != this.wf)
        if (this.m && this.m.stop(),
        this.C && this.C.stop(),
        this.h && this.h.stop(),
        this.w && this.w.stop(),
        this.Aa && KH(this, a),
        a) {
            if (this.dispatchEvent("beforeshow")) {
                try {
                    this.g = this.a.a.activeElement
                } catch (e) {}
                this.Mf();
                var b = Uf(this.a.a) || window;
                if ("fixed" == aq(this.j(), "position"))
                    var c = a = 0;
                else
                    c = Tf(this.a.a),
                    a = c.x,
                    c = c.a;
                var d = qq(this.j());
                b = Rf(b || window);
                a = Math.max(a + b.width / 2 - d.width / 2, 0);
                c = Math.max(c + b.height / 2 - d.height / 2, 0);
                cq(this.j(), a, c);
                cq(this.dc, a, c);
                Y(this).O(Gg(this.a), "resize", this.Mf).O(Gg(this.a), "orientationchange", this.T);
                LH(this, !0);
                this.Nh();
                this.wf = !0;
                this.m && this.C ? (gh(this.m, "end", this.vf, !1, this),
                this.C.play(),
                this.m.play()) : this.vf()
            }
        } else if (this.dispatchEvent("beforehide")) {
            Y(this).Ha(Gg(this.a), "resize", this.Mf).Ha(Gg(this.a), "orientationchange", this.T);
            this.wf = !1;
            this.h && this.w ? (gh(this.h, "end", this.uf, !1, this),
            this.w.play(),
            this.h.play()) : this.uf();
            a: {
                try {
                    c = this.a;
                    d = c.a.body;
                    b = c.a.activeElement || d;
                    if (!this.g || this.g == d) {
                        this.g = null;
                        break a
                    }
                    (b == d || c.contains(this.j(), b)) && this.g.focus()
                } catch (e) {}
                this.g = null
            }
        }
}
;
var KH = function(a, b) {
    a.K || (a.K = new GH(Rq(a),a.a));
    a = a.K;
    if (b) {
        a.a || (a.a = []);
        b = a.b.Qh(a.b.a.body);
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d == a.v || Gp(d, "hidden") || (Fp(d, "hidden", !0),
            a.a.push(d))
        }
    } else if (a.a) {
        for (c = 0; c < a.a.length; c++)
            a.a[c].removeAttribute(Ep("hidden"));
        a.a = null
    }
}
  , LH = function(a, b) {
    a.kb && W(a.kb, b);
    a.zb && W(a.zb, b);
    W(a.j(), b);
    W(a.dc, b)
};
k = HH.prototype;
k.vf = function() {
    this.dispatchEvent("show")
}
;
k.uf = function() {
    LH(this, !1);
    this.dispatchEvent("hide")
}
;
k.isVisible = function() {
    return this.wf
}
;
k.Mf = function() {
    this.kb && W(this.kb, !1);
    this.zb && W(this.zb, !1);
    var a = this.a.a
      , b = Rf(Uf(a) || window || window)
      , c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.kb && (W(this.kb, !0),
    pq(this.kb, c, a));
    this.zb && (W(this.zb, !0),
    pq(this.zb, c, a))
}
;
k.Am = function(a) {
    this.Xf ? this.Gi() : a.target == this.dc && Bi(this.Nh, 0, this)
}
;
k.Nh = function() {
    try {
        B && this.a.a.body.focus(),
        this.j().focus()
    } catch (a) {}
}
;
k.W = function() {
    Ig(this.m);
    this.m = null;
    Ig(this.h);
    this.h = null;
    Ig(this.C);
    this.C = null;
    Ig(this.w);
    this.w = null;
    HH.D.W.call(this)
}
;
var QH = function(a, b, c) {
    HH.call(this, b, c);
    this.c = a || "modal-dialog";
    this.b = MH(MH(new NH, OH, !0), PH, !1, !0)
};
w(QH, HH);
k = QH.prototype;
k.Lh = !0;
k.zi = !0;
k.gg = !0;
k.Se = .5;
k.ah = "";
k.vd = null;
k.Lc = null;
k.Fb = null;
k.xb = null;
k.Pf = null;
k.Eb = null;
k.bc = null;
k.hb = null;
k.Be = function() {
    return this.c
}
;
var RH = function(a, b) {
    a.ah = b;
    a.xb && G(a.xb, b)
}
  , SH = function(a, b) {
    a.vd = b;
    a.bc && Ud(a.bc, b)
};
QH.prototype.Ta = function() {
    return null != this.vd ? Bd(this.vd).toString() : ""
}
;
QH.prototype.$b = function() {
    this.j() || this.Ua();
    return this.bc
}
;
QH.prototype.cf = function() {
    this.j() || this.Ua();
    return QH.D.cf.call(this)
}
;
var TH = function(a, b) {
    a.Se = b;
    a.j() && (b = a.cf()) && sq(b, a.Se)
}
  , UH = function(a, b) {
    var c = yc(a.c + "-title-draggable").split(" ");
    a.j() && (b ? Mp(x(a.Fb), c) : Np(x(a.Fb), c));
    b && !a.Lc ? (a.Lc = new sH(a.j(),a.Fb),
    Mp(x(a.Fb), c),
    H(a.Lc, "start", a.Zm, !1, a)) : !b && a.Lc && (a.Lc.Ja(),
    a.Lc = null)
};
k = QH.prototype;
k.Ka = function() {
    QH.D.Ka.call(this);
    var a = this.j();
    x(a, "getElement() returns null");
    var b = this.a;
    this.Fb = b.b("DIV", this.c + "-title", this.xb = b.b("SPAN", {
        className: this.c + "-title-text",
        id: Pq(this)
    }, this.ah), this.Eb = b.b("SPAN", this.c + "-title-close"));
    cg(a, this.Fb, this.bc = b.b("DIV", this.c + "-content"), this.hb = b.b("DIV", this.c + "-buttons"));
    Dp(this.xb, "heading");
    Dp(this.Eb, "button");
    vg(this.Eb, !0);
    Jp(this.Eb, "Close");
    this.Pf = this.xb.id;
    Dp(a, "dialog");
    Fp(a, "labelledby", this.Pf || "");
    this.vd && Ud(this.bc, this.vd);
    W(this.Eb, !0);
    this.b && (a = this.b,
    a.v = this.hb,
    VH(a));
    W(this.hb, !!this.b);
    TH(this, this.Se)
}
;
k.Da = function(a) {
    QH.D.Da.call(this, a);
    a = this.j();
    x(a, "The DOM element for dialog cannot be null.");
    var b = this.c + "-content";
    this.bc = Lf(document, null, b, a)[0];
    this.bc || (this.bc = this.a.b("DIV", b),
    this.vd && Ud(this.bc, this.vd),
    a.appendChild(this.bc));
    b = this.c + "-title";
    var c = this.c + "-title-text"
      , d = this.c + "-title-close";
    (this.Fb = Lf(document, null, b, a)[0]) ? (this.xb = Lf(document, null, c, this.Fb)[0],
    this.Eb = Lf(document, null, d, this.Fb)[0]) : (this.Fb = this.a.b("DIV", b),
    a.insertBefore(this.Fb, this.bc));
    this.xb ? (this.ah = Ag(this.xb),
    this.xb.id || (this.xb.id = Pq(this))) : (this.xb = F("SPAN", {
        className: c,
        id: Pq(this)
    }),
    this.Fb.appendChild(this.xb));
    this.Pf = this.xb.id;
    Fp(a, "labelledby", this.Pf || "");
    this.Eb || (this.Eb = this.a.b("SPAN", d),
    this.Fb.appendChild(this.Eb));
    W(this.Eb, !0);
    b = this.c + "-buttons";
    if (this.hb = Lf(document, null, b, a)[0]) {
        if (a = this.b = new NH(this.a),
        (b = this.hb) && 1 == b.nodeType) {
            a.v = b;
            b = Kf("BUTTON", a.v);
            c = 0;
            for (var e, f; d = b[c]; c++)
                if (e = d.name || d.id,
                f = Ag(d) || d.value,
                e) {
                    var g = 0 == c;
                    a.set(e, f, g, "cancel" == d.name);
                    g && T(d, "goog-buttonset-default")
                }
        }
    } else
        this.hb = this.a.b("DIV", b),
        a.appendChild(this.hb),
        this.b && (a = this.b,
        a.v = this.hb,
        VH(a)),
        W(this.hb, !!this.b);
    TH(this, this.Se)
}
;
k.ea = function() {
    QH.D.ea.call(this);
    Y(this).O(this.j(), "keydown", this.N).O(this.j(), "keypress", this.N);
    Y(this).O(this.hb, "click", this.V);
    UH(this, this.gg);
    Y(this).O(this.Eb, "click", this.Gm);
    var a = this.j();
    x(a, "The DOM element for dialog cannot be null");
    Dp(a, "dialog");
    "" !== this.xb.id && Fp(a, "labelledby", this.xb.id);
    if (!this.zi) {
        this.zi = !1;
        if (this.Aa) {
            a = this.a;
            var b = this.cf();
            a.Sh(this.kb);
            a.Sh(b)
        }
        this.isVisible() && KH(this, !1)
    }
}
;
k.mb = function() {
    this.isVisible() && this.setVisible(!1);
    UH(this, !1);
    QH.D.mb.call(this)
}
;
k.setVisible = function(a) {
    a != this.isVisible() && (this.Aa || this.Ua(),
    QH.D.setVisible.call(this, a))
}
;
k.vf = function() {
    QH.D.vf.call(this);
    this.dispatchEvent("aftershow")
}
;
k.uf = function() {
    QH.D.uf.call(this);
    this.dispatchEvent("afterhide")
}
;
k.Zm = function() {
    var a = this.a.a
      , b = Rf(Uf(a) || window || window)
      , c = Math.max(a.body.scrollWidth, b.width);
    a = Math.max(a.body.scrollHeight, b.height);
    var d = qq(this.j());
    "fixed" == aq(this.j(), "position") ? this.Lc.g = new Vp(0,0,Math.max(0, b.width - d.width),Math.max(0, b.height - d.height)) : this.Lc.g = new Vp(0,0,c - d.width,a - d.height)
}
;
k.Gm = function() {
    WH(this)
}
;
var WH = function(a) {
    var b = a.b
      , c = b && b.tf;
    c ? (b = b.get(c),
    a.dispatchEvent(new XH(c,b)) && a.setVisible(!1)) : a.setVisible(!1)
};
QH.prototype.W = function() {
    this.hb = this.Eb = null;
    QH.D.W.call(this)
}
;
var YH = function(a, b) {
    a.b = b;
    a.hb && (a.b ? (b = a.b,
    b.v = a.hb,
    VH(b)) : Ud(a.hb, Kd),
    W(a.hb, !!a.b))
};
QH.prototype.V = function(a) {
    a: {
        for (a = a.target; null != a && a != this.hb; ) {
            if ("BUTTON" == a.tagName)
                break a;
            a = a.parentNode
        }
        a = null
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.b.get(a);
        this.dispatchEvent(new XH(a,b)) && this.setVisible(!1)
    }
}
;
QH.prototype.N = function(a) {
    var b = !1
      , c = !1
      , d = this.b
      , e = a.target;
    if ("keydown" == a.type)
        if (this.Lh && 27 == a.keyCode) {
            var f = d && d.tf;
            e = "SELECT" == e.tagName && !e.disabled;
            f && !e ? (c = !0,
            b = d.get(f),
            b = this.dispatchEvent(new XH(f,b))) : e || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && e == this.j()) {
                this.Xf = !0;
                try {
                    this.dc.focus()
                } catch (q) {}
                Bi(this.Gi, 0, this)
            }
        }
    else if (13 == a.keyCode) {
        if ("BUTTON" == e.tagName && !e.disabled)
            f = e.name;
        else if (e == this.Eb)
            WH(this);
        else if (d) {
            var g = d.Ye, h;
            if (h = g)
                a: {
                    h = Kf("BUTTON", x(d.v));
                    for (var l = 0, m; m = h[l]; l++)
                        if (m.name == g || m.id == g) {
                            h = m;
                            break a
                        }
                    h = null
                }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !h || h.disabled || e || (f = g)
        }
        f && d && (c = !0,
        b = this.dispatchEvent(new XH(f,String(d.get(f)))))
    } else
        e != this.Eb || 32 != a.keyCode && " " != a.key || WH(this);
    if (b || c)
        a.stopPropagation(),
        a.preventDefault();
    b && this.setVisible(!1)
}
;
var XH = function(a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
w(XH, Kg);
var NH = function(a) {
    a || If();
    rj.call(this)
};
w(NH, rj);
k = NH.prototype;
k.Ye = null;
k.v = null;
k.tf = null;
k.Qc = function() {
    rj.prototype.Qc.call(this);
    this.Ye = this.tf = null
}
;
k.set = function(a, b, c, d) {
    rj.prototype.set.call(this, a, b);
    c && (this.Ye = a);
    d && (this.tf = a);
    return this
}
;
var MH = function(a, b, c, d) {
    return a.set(b.key, b.caption, c, d)
}
  , VH = function(a) {
    if (a.v) {
        Ud(a.v, Kd);
        var b = If(a.v);
        a.forEach(function(c, d) {
            c = b.b("BUTTON", {
                name: d
            }, c);
            d == this.Ye && (c.className = "goog-buttonset-default");
            this.v.appendChild(c)
        }, a)
    }
};
NH.prototype.j = function() {
    return this.v
}
;
var OH = {
    key: "ok",
    caption: "OK"
}
  , PH = {
    key: "cancel",
    caption: "Cancel"
}
  , ZH = {
    key: "yes",
    caption: "Yes"
}
  , $H = {
    key: "no",
    caption: "No"
}
  , aI = {
    key: "save",
    caption: "Save"
}
  , bI = {
    key: "continue",
    caption: "Continue"
};
"undefined" != typeof document && (MH(new NH, OH, !0, !0),
MH(MH(new NH, OH, !0), PH, !1, !0),
MH(MH(new NH, ZH, !0), $H, !1, !0),
MH(MH(MH(new NH, ZH), $H, !0), PH, !1, !0),
MH(MH(MH(new NH, bI), aI), PH, !0, !0));
var cI = Dm.M()
  , dI = null
  , eI = function(a, b, c, d, e) {
    var f = {};
    f.id = b;
    f.sl = c;
    f.tl = d;
    f.query = e.substring(0, 64);
    f.len = e.length;
    f.client = "webapp";
    cI.log(a, f)
}
  , fI = function(a, b) {
    var c = "";
    switch (DATA.CampaignTrackerId) {
    case "0":
        c = "https://goo.gl/ELUFVd";
        break;
    case "1a":
        c = "https://goo.gl/cHnrfS";
        break;
    case "1b":
        c = "https://goo.gl/7apRL6";
        break;
    case "1c":
        c = "https://goo.gl/ozXBPg";
        break;
    case "1f":
        c = "https://goo.gl/R0JqsC";
        break;
    case "1g":
        switch (b) {
        case 0:
            c = "http://goo.gl/iosgoogleapp/translate2a";
            break;
        case 1:
            c = "http://goo.gl/iosgoogleapp/translate2b";
            break;
        case 2:
            c = "http://goo.gl/iosgoogleapp/translate2c"
        }
        break;
    case "1h":
        switch (b) {
        case 0:
            c = "http://goo.gl/iosgoogleapp/translate2d";
            break;
        case 1:
            c = "http://goo.gl/iosgoogleapp/translate2e";
            break;
        case 2:
            c = "http://goo.gl/iosgoogleapp/translate2f";
            break;
        case 3:
            c = "http://goo.gl/iosgoogleapp/translate2g"
        }
        break;
    default:
        c = "https://goo.gl/F17Wul"
    }
    a ? Yd(window.location, c + "?url=google-deeplink://search%3Fq%3D" + ce(ce(a)) + "&waypoint_id=gt-" + DATA.CampaignTrackerId) : Yd(window.location, c + "?url=google-deeplink://open-url?url=http://www.google.com&waypoint_id=gt-" + DATA.CampaignTrackerId);
    Im(cI, "webapp", "gsa", "open", {
        id: DATA.CampaignTrackerId
    });
    Bh("gsa", "gsa:open", "", 1)
}
  , gI = function(a) {
    a = "https://www.google.com/search?q=" + ce(a) + "&source=gt-" + DATA.CampaignTrackerId;
    Yd(Uf().location, a)
}
  , iI = function(a) {
    var b = Yf("DIV");
    b.id = "bg-msk";
    document.body.appendChild(b);
    Bi(function() {
        b.style.opacity = 1
    }, 0);
    dI = H(document.body, "touchmove", function(c) {
        c.preventDefault()
    });
    H(b, "click", function() {
        hI();
        a()
    })
}
  , hI = function() {
    var a = Jf("bg-msk");
    a && (hg(a),
    null != dI && (oh(dI),
    dI = null))
}
  , kI = function(a, b, c, d, e) {
    if (DATA.SignedIn)
        c();
    else {
        c = new QH("gt-md",!0);
        RH(c, DATA.Messages.SAVED_INTERSTITIAL_TITLE);
        SH(c, Ed(DATA.Messages.SAVED_INTERSTITIAL_CONTENT));
        c.gg = !1;
        UH(c, !1);
        var f = new NH;
        f.set("not_now", DATA.Messages.NOT_NOW);
        f.set("sign_in", DATA.Messages.SIGN_IN);
        YH(c, f);
        TH(c, .7);
        c.setVisible(!0);
        c.O("dialogselect", v(jI, null, a, b, d, e));
        T(Kf("BODY")[0], "gt-md-on")
    }
}
  , jI = function(a, b, c, d, e) {
    "sign_in" == e.key ? $u(d) : (b.log("nosi", a),
    b = M.M(),
    N(b, O(b, im[a])),
    c(),
    U(Kf("BODY")[0], "gt-md-on"))
}
  , mI = function(a) {
    return lI(a, DATA.SourceLanguageCodeNameList)
}
  , nI = function(a) {
    return lI(a, DATA.TargetLanguageCodeNameList)
}
  , lI = function(a, b) {
    return (b = Object.values(b).find(function(c) {
        return c.Code === a
    })) ? b.Name : ""
}
  , oI = function(a) {
    return !!a && Dh(a, 18) && 1 === (new Zl(a.Ra[18])).Mc() && 0 < I(new Zl(a.Ra[18]), 0)
}
  , qI = function(a) {
    if (!oI(a))
        return [];
    a = El(new Zl(a.Ra[18]), 0, Xl);
    a.sort(function(b, c) {
        b = pI(Bl(b, 0, 0));
        c = pI(Bl(c, 0, 0));
        return b.localeCompare(c, DATA.DisplayLanguage)
    });
    return a
}
  , pI = function(a) {
    switch (a) {
    case 2:
        return DATA.Messages.GRAMMATICAL_GENDER_FEMININE_WITH_PARENTHESES;
    case 1:
        return DATA.Messages.GRAMMATICAL_GENDER_MASCULINE_WITH_PARENTHESES;
    default:
        throw Error("Unsupported gender " + a);
    }
};
var rI = function(a) {
    var b = Rn(t(a.ke), "buttonText", a.ke, "string")
      , c = Rn(t(a.Zf), "classname", a.Zf, "string");
    a = Rn(t(a.identifier), "identifier", a.identifier, "string");
    return P("<div class='tlid-app-download-button-container " + S(a) + " app-download-button-container " + S(c) + "'><div class='tlid-app-download-button app-download-button header-button' role='button' tabindex='-1'><div class='text'>" + R(b) + "</div></div><div class='app-download-popup'><div class='popup-triangle'></div><div class='popup-container'><div class='text'>\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d</div><div class='download-image'></div></div></div></div>")
};
var tI = function(a) {
    var b = Rn(t(a.Ca), "sourceLanguage", a.Ca, "string")
      , c = Rn(t(a.Mb), "sourcePhrase", a.Mb, "string")
      , d = Rn(t(a.Ma), "targetLanguage", a.Ma, "string")
      , e = Rn(t(a.Nb), "targetPhrase", a.Nb, "string")
      , f = Rn("boolean" == typeof a.Hc || 1 === a.Hc || 0 === a.Hc, "showStar", a.Hc, "boolean");
    a = Rn(t(a.Qi), "starLabel", a.Qi, "string");
    return P("<div class='tlid-history-entry history-entry' role=\"option\"><div class='language-pair' role=\"button\" tabindex=\"0\"><div class='language-pair-languages'>" + R(b) + " <span class='language-pair-arrow'></span> " + R(d) + "</div></div>" + (f ? "<button class='tlid-star-history-entry star-button button-icon' aria-label='" + S(a) + "' data-tooltip='" + S(a) + "'></button>" : "") + "<div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='starbutton-placeholder'></div>" + sI({
        Mb: c,
        Nb: e
    }) + "</div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='star-placeholder'></div>" + sI({
        Mb: c,
        Nb: e
    }) + "</div></div>")
};
tI.a = "trans.mobile.components.history.entry.template.main";
var sI = function(a) {
    var b = Rn(t(a.Mb), "sourcePhrase", a.Mb, "string");
    a = Rn(t(a.Nb), "targetPhrase", a.Nb, "string");
    return P("<div class='phrase'><div class='tl-input'><bdi>" + R(b) + "</bdi></div><div class='tl-output'><bdi>" + R(a) + "</bdi></div></div>")
};
var uI = function(a, b) {
    K.call(this);
    this.a = a;
    this.v = b;
    this.b = D("tlid-star-history-entry", this.v);
    this.c = E("tlid-browse-entry", this.v);
    this.g = E("tlid-select-entry", this.v);
    this.b && H(this.b, "click", this.xl, !1, this);
    Ah(this.c, this.om.bind(this));
    Ah(this.g, this.pm.bind(this))
};
ka(uI, K);
k = uI.prototype;
k.xl = function() {
    this.dispatchEvent("f")
}
;
k.om = function() {
    this.dispatchEvent("d")
}
;
k.pm = function() {
    this.dispatchEvent("e")
}
;
k.j = function() {
    return this.v
}
;
k.Rg = function(a) {
    V(this.v, "starred", a)
}
;
var wI = function(a, b) {
    K.call(this);
    this.F = M.M();
    this.g = Dm.M();
    this.v = a;
    this.a = [];
    this.o = b;
    this.c = null;
    this.C = vI(this, E("tlid-history-delete-all-button", this.v), this.L, !1);
    this.C.g("Clear history");
    vI(this, E("tlid-history-close-button", this.v), this.G);
    this.m = E("tlid-history-entry-list", this.v);
    this.w = !1;
    this.h = [];
    this.b = null;
    this.R = new OF(DATA.Messages.NUM_TRANSLATIONS);
    this.K = E("tlid-history-num-entries", this.v)
};
ka(wI, K);
var vI = function(a, b, c, d) {
    d = void 0 === d ? !0 : d;
    var e = new Or(null,new It);
    e.ia(b);
    d && (ls(b),
    qH(b));
    c && H(e, "action", c, !1, a);
    return e
}
  , zI = function(a, b) {
    for (var c = 0; c < b.length; c++)
        xI(a, b[c]);
    0 < b.length && V(a.v, "empty", !1);
    U(a.v, "loading");
    yI(a, a.a.length)
}
  , xI = function(a, b) {
    b = GF(b);
    for (var c = a.a.length - 1; 0 <= c; c--) {
        var d = a.a[c];
        DF(d.a, b) && (a.a.splice(c, 1),
        hg(d.j()),
        ph(d))
    }
    c = Sp(tI, {
        Ca: mI(AF(b)),
        Mb: b.a,
        Ma: nI(b.oa()),
        Nb: b.Za(),
        Hc: !DATA.InChina,
        Qi: "Star translation"
    });
    gg(a.m, c, 0);
    b = new uI(b,c);
    a.a.unshift(b);
    AI(a, b);
    a.w ? BI(a, b) : a.h.push(b)
}
  , AI = function(a, b) {
    H(b, "d", function() {
        var c = b.a;
        a.dispatchEvent({
            type: "history_entry_selected",
            text: c.a,
            eb: c.Qa(),
            fb: c.oa()
        });
        a.c && V(a.c.v, "browsed", !1);
        V(b.v, "browsed", !0);
        a.c = b;
        CI(a, b)
    }, !1);
    H(b, "e", function() {
        var c = b.a;
        a.dispatchEvent({
            type: "history_entry_selected",
            text: c.a,
            eb: c.Qa(),
            fb: c.oa()
        });
        a.G();
        CI(a, b)
    }, !1);
    H(b, "f", function() {
        var c = b.a;
        if (DATA.SignedIn) {
            var d = !Lp(b.v, "starred");
            iG(a.o, c, d ? 0 : 1) && (b.Rg(d),
            c = a.F,
            N(c, Am(c, 64, a.a.indexOf(b), d)),
            a.g.log("th=sc", {}))
        } else {
            d = Lp(b.v, "starred") ? "unst" : "st";
            var e = new Us;
            Vs(e, "history");
            at(e, AF(c), c.oa(), c.a);
            kI(d, a.g, Fa, Fa, e.toString())
        }
    }, !1)
}
  , DI = function(a) {
    a.c && (V(a.c.v, "browsed", !1),
    a.c = null)
};
wI.prototype.G = function() {
    this.dispatchEvent("close_requested");
    DI(this)
}
;
wI.prototype.L = function() {
    if (0 !== this.a.length) {
        dg(this.m);
        for (var a = 0; a < this.a.length; a++)
            ph(this.a[a]);
        this.a = [];
        this.dispatchEvent("clear_history_clicked");
        V(this.v, "empty", !0);
        yI(this, this.a.length);
        a = this.F;
        N(a, O(a, 63));
        this.g.log("th=ch", {})
    }
}
;
var EI = function(a, b, c, d) {
    a.b = new zF(d,{},b,c)
}
  , FI = function(a) {
    a.w = !0;
    for (var b = 0; b < a.h.length; b++)
        BI(a, a.h[b])
}
  , BI = function(a, b) {
    a.b && AF(a.b) === AF(b.a) && a.b.oa() === b.a.oa() && a.b.a === b.a.a ? (a.b = null,
    iG(a.o, b.a, 0)) : lG(a.o, b.a, b.Rg.bind(b))
}
  , yI = function(a, b) {
    b = RF(a.R, {
        NUM_TRANSLATIONS: b
    });
    G(a.K, b)
}
  , CI = function(a, b) {
    var c = a.F
      , d = Lp(b.v, "starred");
    N(c, Am(c, 61, a.a.indexOf(b), d));
    a.g.log("th=es", {})
};
var GI = function(a) {
    a = a.La;
    return P("<div class='tlid-history-container history-container loading empty'><div class='history-top-header'><div class='history-top-bar'><div class='tlid-history-close-button close-button button-icon' aria-label=\"" + (a.CLOSE_HISTORY ? S(a.CLOSE_HISTORY) : S(a.CLOSE)) + "\"></div><div class='title'>" + R(a.HISTORY_SECTION_TITLE) + "</div><div class='history-features'><div class='tlid-history-delete-all-button delete-all-button'></div></div></div><div class='tlid-history-info-bar info-bar'><div class='tlid-history-num-entries num-entries'></div></div></div><div class='history-body'><div class='tlid-history-entry-list entry-list' role=\"listbox\" tabindex=\"0\"></div></div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" + R(a.HISTORY_INFO_HEADER) + "</div><div class='placeholder-body'>" + R(a.HISTORY_INFO_TEXT) + "</div></div></div><div class='history-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
GI.a = "trans.mobile.components.history.template.main";
var II = function(a) {
    K.call(this);
    this.v = a;
    HI(this, E("tlid-instant-close-button", this.v), this.b);
    this.c = DATA.SignedIn ? null : E("tlid-instant-signedout-button", this.v);
    DATA.SignedIn || HI(this, this.c, this.a)
};
ka(II, K);
var HI = function(a, b, c) {
    var d = void 0 === d ? !0 : d;
    var e = new Or(null,new It);
    e.ia(b);
    d && (ls(b),
    qH(b));
    c && H(e, "action", c, !1, a)
};
II.prototype.b = function() {
    this.dispatchEvent("close_requested")
}
;
II.prototype.a = function() {
    this.dispatchEvent("sign_in_requested")
}
;
var JI = function(a) {
    var b = a.Tl;
    a = a.La;
    var c = P, d = "<div class='tlid-community-instant-container instant-container loading'><div class='instant-top-header'><div class='instant-top-bar'><div class='tlid-instant-close-button close-button button-icon' aria-label=\"" + S(a.CLOSE) + "\"></div><div class='title'>" + R(a.COMMUNITY_INSTANT_TITLE) + "</div>" + (b ? '<div class="header-help">' + R(a.COMMUNITY_INSTANT_FLOW_HEADER) + "</div>" : "") + "</div></div><div class='instant-body'>", e;
    b ? e = P('<div class=\'tlid-instant-flow\'><div class="instant-flow-tasks">\x3c!-- dynamically updated tasks go here --\x3e</div><div class="instant-flow-footer"><div class="instant-footer-container"><div class="instant-flow-footer-text">' + R(a.COMMUNITY_INSTANT_FLOW_FOOTER) + '</div><div class="instant-flow-footer-button"></div></div></div></div>') : e = P('<div class=\'tlid-instant-signed-out instant-signedout-container\'><div class="instant-signedout-image"></div><div class="instant-signedout-header">' + R(a.COMMUNITY_INSTANT_SIGNED_OUT_HEADER) + '</div><div class="instant-signedout-body">' + R(a.COMMUNITY_INSTANT_SIGNED_OUT_BODY) + '</div><div class="tlid-instant-signedout-button instant-signedout-button jfk-button-flat" aria-label="' + S(a.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + '" data-tooltip="' + S(a.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + '">' + R(a.COMMUNITY_INSTANT_SIGNED_OUT_BUTTON) + "</div></div>");
    return c(d + e + "</div></div>")
};
JI.a = "trans.mobile.components.instant.template.main";
var KI = function(a) {
    var b = Rn(t(a.Ca), "sourceLanguage", a.Ca, "string");
    a = Rn(t(a.Ma), "targetLanguage", a.Ma, "string");
    return P("<div class='tlid-phrasebook-language-chip language-chip' role=\"button\" tabindex=\"0\"><div class='language-chip-languages'>" + R(b) + " <span class='language-chip-arrow'></span> " + R(a) + "</div><button class='tlid-phrasebook-language-chip-clear-button clear-button button-icon'></button></div>")
};
KI.a = "trans.mobile.components.phrasebook.languagechip.template.main";
var MI = function(a, b, c) {
    b = c || b;
    c = Rn(t(a.Ca), "sourceLanguage", a.Ca, "string");
    var d = Rn(t(a.Mb), "sourcePhrase", a.Mb, "string")
      , e = Rn(t(a.Ma), "targetLanguage", a.Ma, "string")
      , f = Rn(t(a.Nb), "targetPhrase", a.Nb, "string");
    a = a.La;
    return P("<div class='tlid-phrasebook-entry phrasebook-entry' role=\"option\">" + R(KI({
        Ca: c,
        Ma: e
    }, b)) + "<button class='tlid-delete-phrasebook-entry trashcan-button button-icon' aria-label='" + S(a.DELETE_THIS_PHRASE) + "'></button><div class='tlid-browse-entry browse-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div><div class='phrase'>" + LI({
        Mb: d,
        Nb: f,
        Ee: !0,
        La: a
    }) + "</div></div><div class='tlid-select-entry select-entry' role=\"button\" tabindex=\"0\"><div class='trashcan-placeholder'></div>" + LI({
        Mb: d,
        Nb: f
    }) + "</div></div>")
};
MI.a = "trans.mobile.components.phrasebook.entry.template.main";
var LI = function(a) {
    var b = Rn(t(a.Mb), "sourcePhrase", a.Mb, "string")
      , c = Rn(t(a.Nb), "targetPhrase", a.Nb, "string")
      , d = Rn(null == a.Ee || "boolean" == typeof a.Ee || 1 === a.Ee || 0 === a.Ee, "includeTts", a.Ee, "boolean|null|undefined");
    a = a.La;
    return P("<div class='phrase'><div class='tl-input'><bdi>" + R(b) + "</bdi>" + (d && Cn(a) ? "<button class='tlid-phrasebook-entry-source-tts tts-button button-icon' aria-label='" + S(a.LISTEN) + "' data-tooltip='" + S(a.LISTEN) + "'></button>" : "") + "</div><div class='tl-output'><bdi>" + R(c) + "</bdi>" + (d && Cn(a) ? "<button class='tlid-phrasebook-entry-target-tts tts-button button-icon' aria-label='" + S(a.LISTEN) + "' data-tooltip='" + S(a.LISTEN) + "'></button>" : "") + "</div></div>")
};
var OI = function(a, b, c) {
    K.call(this);
    var d = this;
    this.v = a;
    kc(DATA.DisplayLanguage) && T(this.v, "rtl-display-language");
    this.a = b;
    this.b = c;
    this.c = E("tlid-phrasebook-language-chip-clear-button", this.v);
    H(this.c, "click", this.Nk, !1, this);
    H(this.v, "click", function() {
        return NI(d)
    }, !1);
    H(this.v, "keypress", this.g, !1, this)
};
ka(OI, K);
k = OI.prototype;
k.j = function() {
    return this.v
}
;
k.Qa = function() {
    return this.a
}
;
k.oa = function() {
    return this.b
}
;
k.bd = function(a) {
    V(this.v, "selected", a)
}
;
k.Nk = function(a) {
    a.stopPropagation();
    this.dispatchEvent("language_pair_deselected")
}
;
var NI = function(a) {
    a.dispatchEvent("language_pair_selected")
};
OI.prototype.g = function(a) {
    switch (a.keyCode) {
    case 13:
    case 32:
        NI(this)
    }
}
;
var RI = function(a, b) {
    K.call(this);
    this.F = M.M();
    this.c = Dm.M();
    this.a = a;
    this.v = b;
    this.g = E("tlid-delete-phrasebook-entry", this.v);
    this.R = new OI(E("tlid-phrasebook-language-chip", this.v),AF(this.a),this.a.oa());
    this.b = E("tlid-browse-entry", this.v);
    this.o = E("tlid-select-entry", this.v);
    this.G = E("tlid-phrasebook-entry-source-tts", this.v);
    this.L = E("tlid-phrasebook-entry-target-tts", this.v);
    this.C = PI(this, this.G, "&client=webapp&prev=pbsrc", 5);
    this.C.update(this.a.a, AF(this.a), void 0, mI(AF(this.a)));
    this.K = PI(this, this.L, "&client=webapp&prev=pbtgt", 6);
    this.K.update(this.a.b, this.a.oa(), void 0, nI(this.a.oa()));
    QI(this)
};
ka(RI, K);
var QI = function(a) {
    H(a.v, "focusin", function() {
        T(a.v, "focus-within")
    }, !1);
    H(a.v, "focusout", function(b) {
        ng(a.v, b.relatedTarget) || U(a.v, "focus-within")
    }, !1);
    H(a.g, "click", a.h, !1, a);
    H(a.R, "language_pair_selected", function() {
        a.dispatchEvent("language_pair_selected")
    }, !1);
    H(a.b, "click", a.m, !1, a);
    H(a.b, "keypress", function(b) {
        13 != b.keyCode && 32 != b.keyCode || a.m.bind(a)(b)
    }, !1);
    H(a.o, "click", a.w, !1, a);
    H(a.o, "keypress", function(b) {
        13 != b.keyCode && 32 != b.keyCode || a.w.bind(a)(b)
    }, !1);
    H(a.C, "userInteractionWhileDisabled", function() {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Jb: mI(AF(a.a))
        })
    }, !1);
    H(a.K, "userInteractionWhileDisabled", function() {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Jb: nI(a.a.oa())
        })
    }, !1)
}
  , PI = function(a, b, c, d) {
    var e = new Et(DATA.Messages.LISTEN);
    e.ia(b);
    c = new bv(e,c,d,!1,!0,DATA.Messages.LISTEN,DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    qH(b);
    Jg(a, c);
    return c
};
RI.prototype.h = function() {
    var a = this.F;
    N(a, O(a, 316));
    this.c.log("api=ed", {});
    this.dispatchEvent("delete_button_clicked");
    nh(this.g, "click", this.h, !1, this)
}
;
RI.prototype.m = function(a) {
    a.target != this.G && a.target != this.L && (this.c.log("api=es", {}),
    a = this.F,
    N(a, O(a, 315)),
    this.dispatchEvent("entry_browsed"))
}
;
RI.prototype.w = function() {
    this.c.log("api=es", {});
    var a = this.F;
    N(a, O(a, 315));
    this.dispatchEvent("entry_selected")
}
;
RI.prototype.j = function() {
    return this.v
}
;
var SI = function(a, b) {
    K.call(this);
    this.v = a;
    this.ma = b;
    this.a = [];
    this.h = [];
    this.R = {};
    this.N = "0";
    this.m = new Map;
    this.b = null;
    this.w = this.G = this.L = this.Y = !1;
    this.C = "";
    this.g = this.c = null;
    this.V = this.T = this.X = this.o = -1;
    this.K = null
};
ka(SI, K);
var WI = function(a, b) {
    z(b, function(c) {
        var d = new zF(c.Nf,c.c,c.Ca,c.Ma);
        null != c.a && (d.c = c.a);
        null != c.b && (d.g = c.b);
        a.a.unshift(d);
        TI(a, AF(d), d.oa())
    }, a);
    UI(a, 0);
    0 === a.a.length ? a.dispatchEvent("list_empty") : a.dispatchEvent("list_no_longer_empty");
    a.Y = !0;
    null != a.K && (VI(a, a.K),
    a.K = null)
}
  , XI = function(a, b) {
    switch (b) {
    case "0":
        a.a.sort(function(c, d) {
            return d.g - c.g
        });
        a.h.sort(function(c, d) {
            return d.g - c.g
        });
        break;
    case "2":
        a.a.sort(function(c, d) {
            return c.a.localeCompare(d.a)
        });
        a.h.sort(function(c, d) {
            return c.a.localeCompare(d.a)
        });
        break;
    default:
        return
    }
    a.N = b;
    UI(a, 0)
}
  , YI = function(a, b) {
    a.G = !0;
    a.C = b;
    a.h = [];
    for (var c = ba(a.a), d = c.next(); !d.done; d = c.next())
        d = d.value,
        EF(d, b) && a.h.push(d);
    UI(a, 0)
}
  , ZI = function(a, b, c) {
    a.w = !0;
    a.c = b;
    a.g = c;
    a.h = [];
    for (var d = ba(a.a), e = d.next(); !e.done; e = d.next())
        e = e.value,
        b === AF(e) && c === e.m && a.h.push(e);
    UI(a, 0)
}
  , $I = function(a) {
    a.G = !1;
    a.C = "";
    UI(a, 0)
}
  , aJ = function(a) {
    return a.w || a.G ? a.h : a.a
}
  , UI = function(a, b) {
    if (!(0 > b || b > bJ(a))) {
        var c = 0 === aJ(a).length ? 0 : 10 * b
          , d = cJ(a, b)
          , e = aJ(a).length;
        var f = aJ(a)
          , g = 0 === aJ(a).length ? 0 : 10 * b
          , h = cJ(a, b);
        if (0 !== f.length && g > f.length - 1)
            b = !1;
        else {
            for (dg(a.v); g < h; g++) {
                var l = dJ(a, f[g]);
                a.v.appendChild(l.j())
            }
            a.o = b;
            b = !0
        }
        b && (a.X === c && a.T === d && a.V === e || 0 !== e && c > e - 1 || (a.X = c,
        a.T = d,
        a.V = e,
        a.dispatchEvent({
            type: "num_entries_and_indices_updated",
            on: c + 1,
            wk: d,
            xm: e
        })),
        b = d = !1,
        0 !== c && (d = !0),
        e > c + 10 && (b = !0),
        a.dispatchEvent({
            type: "page_update",
            Gl: b,
            Hl: d
        }))
    }
}
  , bJ = function(a) {
    var b = 0;
    for (a = aJ(a).length; 0 < a; )
        b++,
        a -= 10;
    return b
}
  , cJ = function(a, b) {
    a = aJ(a).length;
    if (0 === a)
        return 0;
    b = 10 * (b + 1);
    b > a && (b = a);
    return b
}
  , dJ = function(a, b) {
    var c = eJ(b)
      , d = a.R[c];
    if (null != d)
        return d;
    d = Sp(MI, {
        Ca: mI(AF(b)),
        Mb: b.a,
        Ma: nI(b.oa()),
        Nb: b.b,
        La: DATA.Messages
    });
    b = new RI(b,d);
    fJ(a, b);
    d = b;
    return a.R[c] = d
}
  , gJ = function(a, b) {
    var c = !0;
    a.G && !EF(b, a.C) && (c = !1);
    a.w && a.c && a.g && (a.c !== AF(b) || a.g !== b.m) && (c = !1);
    return c
}
  , fJ = function(a, b) {
    H(b, "entry_browsed", function() {
        if (a.b !== b) {
            var c = b.a;
            a.dispatchEvent({
                type: "entry_browsed",
                text: c.a,
                eb: c.Qa(),
                fb: c.oa()
            });
            hJ(a);
            V(b.v, "browsed", !0);
            a.b = b
        }
    }, !1);
    H(b, "delete_button_clicked", function() {
        iG(a.ma, b.a, 1);
        a.dispatchEvent("delete_entry_requested")
    }, !1);
    H(b, "entry_selected", function() {
        var c = b.a;
        a.dispatchEvent({
            type: "entry_selected",
            text: c.a,
            eb: c.Qa(),
            fb: c.oa()
        })
    }, !1);
    H(b, "language_pair_selected", function() {
        a.dispatchEvent({
            type: "language_pair_selected",
            eb: AF(b.a),
            fb: b.a.oa()
        })
    }, !1);
    H(b, "interaction_with_disabled_voice_output", function(c) {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Jb: c.Jb
        })
    }, !1)
}
  , hJ = function(a) {
    a.b && (V(a.b.v, "browsed", !1),
    a.b = null)
}
  , VI = function(a, b) {
    if (!a.Y)
        a.K = b;
    else if (null == a.b || !DF(a.b.a, b))
        for (var c = a.b, d = a.a, e = 0; e < d.length; e++) {
            var f = d[e];
            if (DF(f, b)) {
                b = dJ(a, f);
                hJ(a);
                V(b.v, "browsed", !0);
                a.b = b;
                null != c && Eg(document) === c.b && b.b.focus();
                break
            }
        }
}
  , iJ = function(a) {
    a.match(/[",\t\n]/) && (a = '"' + a.replace(/"/g, '""') + '"');
    return a
}
  , TI = function(a, b, c) {
    var d = b + "|" + c;
    a.m.has(d) ? (b = a.m.get(d),
    a.m.set(d, b + 1)) : (a.m.set(d, 1),
    a.dispatchEvent({
        type: "language_pair_added",
        eb: b,
        fb: c
    }))
};
function eJ(a) {
    return AF(a) + "|" + a.oa() + "|" + a.a + "|" + a.b
}
;var jJ = function(a) {
    X.call(this, a)
};
w(jJ, X);
jJ.prototype.Ka = function() {
    this.v = this.a.b("FORM", {
        method: "POST",
        style: "display:none"
    })
}
;
var kJ = function(a, b, c) {
    var d, e = [];
    for (d in c) {
        var f = c[d];
        Ka(f) ? z(f, v(function(g) {
            e.push(Jd("input", {
                type: "hidden",
                name: d,
                value: String(g)
            }))
        }, a)) : e.push(Jd("input", {
            type: "hidden",
            name: d,
            value: String(f)
        }))
    }
    Ud(b, Md(e))
};
var lJ = function(a, b, c) {
    Hg.call(this);
    this.tc = null != c ? v(a, c) : a;
    this.h = b;
    this.g = v(this.m, this);
    this.b = this.a = null;
    this.c = []
};
w(lJ, Hg);
lJ.prototype.o = function(a) {
    this.c = arguments;
    this.a ? this.b = Ua() + this.h : this.a = Bi(this.g, this.h)
}
;
lJ.prototype.stop = function() {
    this.a && (Ci(this.a),
    this.a = null);
    this.b = null;
    this.c = []
}
;
lJ.prototype.W = function() {
    this.stop();
    lJ.D.W.call(this)
}
;
lJ.prototype.m = function() {
    this.b ? (this.a = Bi(this.g, this.b - Ua()),
    this.b = null) : (this.a = null,
    this.tc.apply(null, this.c))
}
;
var mJ = function(a, b) {
    X.call(this, b);
    this.b = a || ""
}, nJ;
w(mJ, X);
mJ.prototype.g = null;
var oJ = function() {
    null != nJ || (nJ = "placeholder"in Yf("INPUT"));
    return nJ
};
k = mJ.prototype;
k.De = !1;
k.Ka = function() {
    this.v = this.a.b("INPUT", {
        type: "text"
    })
}
;
k.Da = function(a) {
    mJ.D.Da.call(this, a);
    this.b || (this.b = a.getAttribute("label") || "");
    Eg(Hf(a)) == a && (this.De = !0,
    a = this.j(),
    x(a),
    U(a, "label-input-label"));
    oJ() && (this.j().placeholder = this.b);
    a = this.j();
    x(a, "The label input element cannot be null.");
    Fp(a, "label", this.b)
}
;
k.ea = function() {
    mJ.D.ea.call(this);
    var a = new Gq(this);
    a.O(this.j(), "focus", this.ai);
    a.O(this.j(), "blur", this.Lk);
    if (oJ())
        this.c = a;
    else {
        ze && a.O(this.j(), ["keypress", "keydown", "keyup"], this.Wk);
        var b = Hf(this.j());
        a.O(Uf(b), "load", this.Fl);
        this.c = a;
        pJ(this)
    }
    qJ(this);
    this.j().b = this
}
;
k.mb = function() {
    mJ.D.mb.call(this);
    this.c && (this.c.Ja(),
    this.c = null);
    this.j().b = null
}
;
var pJ = function(a) {
    !a.m && a.c && a.j().form && (a.c.O(a.j().form, "submit", a.Zk),
    a.m = !0)
};
k = mJ.prototype;
k.W = function() {
    mJ.D.W.call(this);
    this.c && (this.c.Ja(),
    this.c = null)
}
;
k.ai = function() {
    this.De = !0;
    var a = this.j();
    x(a);
    U(a, "label-input-label");
    if (!oJ() && !rJ(this) && !this.w) {
        var b = this;
        a = function() {
            b.j() && (b.j().value = "")
        }
        ;
        B ? Bi(a, 10) : a()
    }
}
;
k.Lk = function() {
    oJ() || (this.c.Ha(this.j(), "click", this.ai),
    this.g = null);
    this.De = !1;
    qJ(this)
}
;
k.Wk = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.g = this.j().value : "keypress" == a.type ? this.j().value = this.g : "keyup" == a.type && (this.g = null),
    a.preventDefault())
}
;
k.Zk = function() {
    rJ(this) || (this.j().value = "",
    Bi(this.Jk, 10, this))
}
;
k.Jk = function() {
    rJ(this) || (this.j().value = this.b)
}
;
k.Fl = function() {
    qJ(this)
}
;
var rJ = function(a) {
    return !!a.j() && "" != a.j().value && a.j().value != a.b
}
  , sJ = function(a) {
    a.j().value = "";
    null != a.g && (a.g = "")
};
mJ.prototype.reset = function() {
    rJ(this) && (sJ(this),
    qJ(this))
}
;
mJ.prototype.Z = function() {
    return null != this.g ? this.g : rJ(this) ? this.j().value : ""
}
;
var qJ = function(a) {
    var b = a.j();
    x(b, "The label input element cannot be null.");
    oJ() ? a.j().placeholder != a.b && (a.j().placeholder = a.b) : pJ(a);
    Fp(b, "label", a.b);
    rJ(a) ? (b = a.j(),
    x(b),
    U(b, "label-input-label")) : (a.w || a.De || (b = a.j(),
    x(b),
    T(b, "label-input-label")),
    oJ() || Bi(a.h, 10, a))
};
mJ.prototype.qa = function(a) {
    this.j().disabled = !a;
    var b = this.j();
    x(b);
    V(b, "label-input-label-disabled", !a)
}
;
mJ.prototype.isEnabled = function() {
    return !this.j().disabled
}
;
mJ.prototype.h = function() {
    !this.j() || rJ(this) || this.De || (this.j().value = this.b)
}
;
var tJ = function() {};
w(tJ, Ax);
Ga(tJ);
tJ.prototype.xa = function() {
    return "goog-toolbar-menu-button"
}
;
var DJ = function(a, b) {
    K.call(this);
    var c = this;
    this.F = M.M();
    this.h = Dm.M();
    this.v = a;
    V(this.v, "mobile", ft());
    this.a = new SI(E("tlid-phrasebook-entry-list", this.v),b);
    uJ(this);
    this.ya = E("tlid-phrasebook-header-num-phrases", this.v);
    this.sa = E("tlid-phrasebook-body-num-phrases", this.v);
    this.Ba = new OF(DATA.Messages.NUM_PHRASES_PAGINATED);
    this.L = vJ(this);
    H(this.L, "change", this.N, !1, this);
    wJ(this, E("tlid-phrasebook-export-to-sheets", this.v), this.o);
    this.ba = xJ(this);
    this.T = yJ(this);
    this.K = wJ(this, E("tlid-phrasebook-search-button", this.v), this.ma);
    zJ(this, !1);
    this.C = new lJ(this.Y,500,this);
    this.b = new mJ(DATA.Messages.SEARCH_PHRASES);
    this.b.ia(E("tlid-phrasebook-search-box", this.v));
    H(this.b.j(), "keydown", function(d) {
        switch (d.keyCode) {
        case 27:
            c.C.stop();
            sJ(c.b);
            AJ(c);
            $I(c.a);
            break;
        case 9:
            break;
        default:
            c.C.o()
        }
    }, !1, this);
    wJ(this, E("tlid-phrasebook-search-clear-button", this.v), this.V);
    wJ(this, E("tlid-phrasebook-close-button", this.v), this.Na);
    this.w = D("tlid-phrasebook-header-next-page", this.v) || null;
    null != this.w && H(this.w, "click", function() {
        var d = c.F;
        N(d, O(d, 336));
        BJ(c, "np");
        d = c.a;
        var e = d.o + 1;
        e > bJ(d) || UI(d, e)
    }, !1);
    this.G = D("tlid-phrasebook-header-prev-page", this.v) || null;
    null != this.G && H(this.G, "click", function() {
        var d = c.F;
        N(d, O(d, 337));
        BJ(c, "pp");
        d = c.a;
        var e = d.o - 1;
        0 > e || UI(d, e)
    }, !1);
    this.aa = E("tlid-phrasebook-header-language-pair-container", this.v);
    this.g = [];
    this.R = E("tlid-phrasebook-body-language-pair-container", this.v);
    this.c = [];
    this.m = !1;
    a = b.c && !b.C || !b.m ? null : b.g.concat(b.a);
    null !== a && CJ(this, a)
};
ka(DJ, K);
var vJ = function(a) {
    var b = E("tlid-phrasebook-sort", a.v)
      , c = [DATA.Messages.SORT_BY_DATE, DATA.Messages.SORT_ALPHABETICALLY];
    ls(b);
    qH(b);
    xc(le("sort-button-tooltip")) || b.setAttribute("data-tooltip-class", "sort-button-tooltip");
    b = new ay(b,c,10,["0", "2"],void 0,DATA.Messages.SORT,tJ.M(),void 0,!0);
    Fx(b, new wx(b.$b(),13));
    Gx(b, new Up(-16,-24,0,0));
    c = Ex(b);
    c.Ua(E("tlid-phrasebook-sort-menu", a.v));
    H(c, "show", function() {
        var d = a.F;
        N(d, O(d, 319));
        BJ(a, "so")
    }, !1);
    return b
}
  , wJ = function(a, b, c) {
    var d = void 0 === d ? !0 : d;
    var e = new Or(null,new It);
    e.ia(b);
    d && (ls(b),
    qH(b));
    c && H(e, "action", c, !1, a);
    return e
}
  , xJ = function(a) {
    var b = E("tlid-phrasebook-more-button", a.v)
      , c = new Bx;
    c.ia(b);
    ls(b);
    qH(b);
    c.Ae(EJ(a, DATA.Messages.DELETE_ALL, a.X, "delete-all-menuitem"));
    c.Ae(EJ(a, DATA.Messages.EXPORT_TO_SHEETS, a.o, "export-menuitem"));
    Fx(c, new wx(b,13));
    c.ba = new Up(-20,0,0,0);
    Ex(c).Ua(E("tlid-phrasebook-more-menu", a.v));
    return c
}
  , EJ = function(a, b, c, d) {
    b = new nx(b);
    Br(b, d);
    H(b, "action", c, !1, a);
    return b
}
  , yJ = function(a) {
    var b = new QH("phrasebook-delete-all-dialog",!0);
    RH(b, DATA.Messages.DELETE_ALL_DIALOG_TITLE);
    SH(b, Ed(DATA.Messages.DELETE_ALL_DIALOG_CONTENT));
    b.gg = !1;
    UH(b, !1);
    b.Lh = !0;
    var c = new NH;
    c.set("cancel", DATA.Messages.CANCEL, !1, !0);
    c.set("delete", DATA.Messages.DELETE);
    YH(b, c);
    H(b, "dialogselect", function(d) {
        if ("delete" !== d.key)
            d = a.F,
            N(d, O(d, 326)),
            BJ(a, "dn");
        else {
            d = a.a;
            if (0 === d.a.length)
                d = !1;
            else {
                d.L = !0;
                for (var e = 0; e < d.a.length; e++)
                    iG(d.ma, d.a[e], 1);
                d = !0
            }
            d && T(a.v, "loading");
            d = a.F;
            N(d, O(d, 325));
            BJ(a, "dy")
        }
    }, !1);
    return b
}
  , uJ = function(a) {
    H(a.a, "delete_all_complete", function() {
        U(a.v, "loading")
    }, !1);
    H(a.a, "entry_browsed", function(b) {
        a.dispatchEvent({
            type: "phrasebook_entry_selected",
            text: b.text,
            eb: b.eb,
            fb: b.fb
        })
    }, !1);
    H(a.a, "delete_entry_requested", function() {
        a.dispatchEvent("delete_entry_requested")
    }, !1);
    H(a.a, "entry_selected", function(b) {
        a.dispatchEvent({
            type: "phrasebook_entry_selected",
            text: b.text,
            eb: b.eb,
            fb: b.fb
        });
        a.dispatchEvent("close_requested")
    }, !1);
    H(a.a, "page_update", function(b) {
        var c = b.Hl;
        V(a.v, "has-next-page", b.Gl);
        V(a.v, "has-prev-page", c)
    }, !1);
    H(a.a, "language_pair_added", function(b) {
        if (null != b) {
            var c = b.eb;
            b = b.fb;
            FJ(a, c, b, a.aa, a.g);
            FJ(a, c, b, a.R, a.c)
        } else
            a.h.log("jse=lpa", {})
    }, !1);
    H(a.a, "language_pair_removed", function(b) {
        if (null != b) {
            var c = b.eb;
            b = b.fb;
            GJ(c, b, a.g);
            GJ(c, b, a.c)
        } else
            a.h.log("jse=lpr", {})
    }, !1);
    H(a.a, "language_pair_selected", function(b) {
        null != b ? (HJ(a, b.eb, b.fb),
        b = a.F,
        N(b, O(b, 322)),
        BJ(a, "fs")) : a.h.log("jse=lps", {})
    }, !1);
    H(a.a, "list_empty", function() {
        V(a.v, "empty", !0)
    }, !1);
    H(a.a, "list_no_longer_empty", function() {
        V(a.v, "empty", !1)
    }, !1);
    H(a.a, "num_entries_and_indices_updated", function(b) {
        var c = DATA.DisplayLanguage;
        b = RF(a.Ba, {
            NUM_PHRASES: b.xm,
            START_NUM: b.on.toLocaleString(c),
            END_NUM: b.wk.toLocaleString(c)
        });
        G(a.ya, b);
        G(a.sa, b)
    }, !1);
    H(a.a, "last_displayed_entry_deleted", function() {
        IJ(a)
    }, !1);
    H(a.a, "interaction_with_disabled_voice_output", function(b) {
        a.dispatchEvent({
            type: "interaction_with_disabled_voice_output",
            Jb: b.Jb
        })
    }, !1)
}
  , CJ = function(a, b) {
    a.m || (WI(a.a, b),
    a.m = !0,
    U(a.v, "loading"))
}
  , IJ = function(a) {
    JJ(a);
    sJ(a.b);
    AJ(a);
    $I(a.a)
};
DJ.prototype.N = function() {
    var a = this.L.Z();
    switch (a) {
    case "0":
        var b = this.F;
        N(b, O(b, 320));
        BJ(this, "s1");
        break;
    case "2":
        b = this.F;
        N(b, O(b, 321));
        BJ(this, "s2");
        break;
    default:
        return
    }
    XI(this.a, a)
}
;
var zJ = function(a, b) {
    V(a.v, "search-open", b)
};
DJ.prototype.ma = function() {
    var a = this.F;
    N(a, O(a, 318));
    BJ(this, "os");
    KJ(this)
}
;
var KJ = function(a) {
    zJ(a, !0);
    sJ(a.b);
    a.b.j().focus();
    JJ(a);
    $I(a.a);
    T(a.v, "empty-search-query")
}
  , AJ = function(a) {
    zJ(a, !1);
    U(a.v, "empty-search-query")
};
DJ.prototype.Y = function() {
    this.b.Z() ? (U(this.v, "empty-search-query"),
    YI(this.a, this.b.Z())) : KJ(this)
}
;
DJ.prototype.V = function() {
    this.b.Z() ? KJ(this) : (AJ(this),
    $I(this.a))
}
;
DJ.prototype.Na = function() {
    var a = this.F;
    N(a, O(a, 317));
    BJ(this, "cb");
    this.dispatchEvent("close_requested");
    IJ(this)
}
;
DJ.prototype.o = function() {
    var a = {
        authuser: Hj() || "0",
        target: "_blank"
    }
      , b = this.a;
    var c = [];
    for (var d = b.a, e = d.length - 1; 0 <= e; --e) {
        var f = []
          , g = d[e];
        gJ(b, g) && (f.push(mI(AF(g))),
        f.push(nI(g.oa())),
        f.push(iJ(g.a)),
        f.push(iJ(g.b)),
        c.push(f.join(",")))
    }
    c = c.join("\n");
    b = this.a;
    d = DATA.Messages.SAVED_TRANSLATIONS_SPREADSHEET_TITLE;
    b.w && null != b.c && null != b.g && (d = d + " - " + mI(b.c) + " - " + nI(b.g));
    a = a || {};
    b = a.target;
    e = a.trixPath || (a.useCorp ? "https://docs.google.com/a/google.com/spreadsheets/" : void 0);
    delete a.target;
    delete a.useCorp;
    delete a.trixPath;
    Xb(a, {
        content: c,
        title: d
    });
    c = a.authuser;
    d = Jj(e || "https://docs.google.com/spreadsheets/", "import");
    d = Jj(d, "inline");
    c && (d = Ej(d, "authuser", c));
    c = d;
    d = new jJ;
    e = d.j();
    e || (d.Ua(),
    e = d.j());
    e.action = c || "";
    e.target = b || "";
    kJ(d, e, a);
    e.submit()
}
;
var FJ = function(a, b, c, d, e) {
    var f = LJ(b, c);
    b = new OI(f,b,c);
    bg(d, f);
    e.push(b);
    H(b, "language_pair_selected", function(g) {
        g = g.target;
        HJ(a, g.Qa(), g.oa());
        g = a.F;
        N(g, O(g, 322));
        BJ(a, "fs")
    }, !1);
    H(b, "language_pair_deselected", function() {
        JJ(a);
        var g = a.F;
        N(g, O(g, 323));
        BJ(a, "fr")
    }, !1)
}
  , GJ = function(a, b, c) {
    for (var d = c.length - 1; 0 <= d; d--) {
        var e = c[d];
        a === e.a && b === e.b && (hg(e.j()),
        c.splice(d, 1),
        ph(e))
    }
}
  , HJ = function(a, b, c) {
    T(a.v, "language-pair-selected");
    for (var d = 0; d < a.g.length; d++) {
        var e = a.g[d];
        e.bd(b === e.a && c === e.b)
    }
    for (d = 0; d < a.c.length; d++)
        e = a.c[d],
        e.bd(b === e.a && c === e.b);
    ZI(a.a, b, c);
    AJ(a)
}
  , JJ = function(a) {
    U(a.v, "language-pair-selected");
    for (var b = 0; b < a.g.length; b++)
        a.g[b].bd(!1);
    for (b = 0; b < a.c.length; b++)
        a.c[b].bd(!1);
    a = a.a;
    a.w = !1;
    a.c = null;
    a.g = null;
    UI(a, 0)
};
DJ.prototype.X = function() {
    this.T.setVisible(!0);
    this.ba.Wa(!1);
    var a = this.F;
    N(a, O(a, 324));
    BJ(this, "da")
}
;
var BJ = function(a, b) {
    a.h.log("api=" + b, {})
};
function LJ(a, b) {
    return Sp(KI, {
        Ca: mI(a),
        Ma: nI(b)
    })
}
;var MJ = function(a) {
    var b = Rn(t(a.Sa), "displayLanguage", a.Sa, "string");
    a = a.La;
    var c = P
      , d = "<div class='tlid-phrasebook-container phrasebook-container loading'><div class='phrasebook-top-header'><div class='phrasebook-top-bar'><div class='tlid-phrasebook-close-button close-button button-icon' aria-label=\"" + S(a.CLOSE_SAVED_TRANSLATIONS) + "\"></div><div class='title'>" + R(a.SAVED_SECTION_TITLE) + "</div><div class='tlid-phrasebook-search-button search-button search-image-black button-icon' title=\"" + S(a.SEARCH_PHRASES) + "\"></div><div class='tlid-phrasebook-search-bar search-bar'><div class='search-image-black button-icon'></div><input class='tlid-phrasebook-search-box search-box'><div class='tlid-phrasebook-search-clear-button clear-button clear-image-black button-icon' title=\"" + S(a.CLEAR_TEXT) + "\"></div></div><div class='phrasebook-features'><div class='tlid-phrasebook-sort-menu sort-menu'></div><div class='tlid-phrasebook-more-menu more-menu'></div><div class='tlid-phrasebook-sort sort-button button-icon' aria-label='" + S(a.SORT) + "' title='" + S(a.SORT) + "'></div><div class='export-button-container'><div class='tlid-phrasebook-export-to-sheets export-button button-icon' title='" + S(a.EXPORT_TO_SHEETS) + "'></div></div><div class='tlid-phrasebook-more-button more-button button-icon' aria-label='" + S(a.MORE) + "' title='" + S(a.MORE) + "'></div></div></div><div class='nav-bar'><div class='tlid-phrasebook-header-num-phrases num-phrases'></div><div class='nav-button-container'><button class='tlid-phrasebook-header-prev-page prev-button page-nav-button'></button><button class='tlid-phrasebook-header-next-page next-button page-nav-button'></button></div></div><div class='selected-chip-bar'><div class='tlid-phrasebook-header-language-pair-container language-pair-container'></div></div></div><div class='phrasebook-body'><div class='tlid-phrasebook-body-language-pair-container language-pair-container'><div class='title'>" + R(a.LANGUAGE_PAIRS) + "</div></div><div class='tlid-phrasebook-body-num-phrases num-phrases'></div>";
    var e = P('<div class=\'tlid-phrasebook-entry-list entry-list\' role="listbox" tabindex="0"></div>');
    return c(d + R(e) + "</div><div class='empty-placeholder'><div class='placeholder-image'></div><div class='placeholder-text-holder'><div class='placeholder-title'>" + R(a.PHRASEBOOK_INFO_HEADER) + "</div><div class='placeholder-body'>" + R(a.PHRASEBOOK_INFO_TEXT) + "</div></div><div class='placeholder-link'><a target='_blank' href='https://support.google.com/translate?p=phrasebook_web_help&hl=" + Kn(b) + "'>" + R(a.LEARN_MORE) + "</a></div></div><div class='phrasebook-loader'><div class='mspin-googblue-medium'><div><div></div></div></div></div></div>")
};
MJ.a = "trans.mobile.components.phrasebook.template.main";
var NJ = function() {
    var a = Jf("backend-stats-decoder");
    this.b = null != a ? a : null;
    a = Jf("backend-stats-decoder1");
    this.o = null != a ? a : null;
    a = Jf("backend-stats-decoder2");
    this.g = null != a ? a : null;
    a = Jf("backend-stats-rapid-response");
    this.m = null != a ? a : null;
    a = Jf("backend-stats-stt-total");
    this.w = null != a ? a : null;
    a = Jf("backend-stats-community");
    this.a = null != a ? a : null;
    a = Jf("backend-stats-dictionary");
    this.c = null != a ? a : null;
    a = Jf("backend-stats-other");
    this.h = null != a ? a : null;
    a = Jf("backend-models-used");
    this.L = null != a ? a : null;
    a = Jf("backend-models-checksum");
    this.G = null != a ? a : null;
    a = Jf("backend-models-launch-doc");
    this.C = null != a ? a : null
}
  , OJ = function(a) {
    a.w && a.a && a.c && a.b && a.o && a.g && a.m && a.h && a.L && a.G && a.C && (G(a.b, "0"),
    G(a.o, "0"),
    G(a.g, "0"),
    G(a.m, "0"),
    G(a.w, "0"),
    G(a.a, "0"),
    G(a.c, "0"),
    G(a.h, "0"),
    G(a.L, ""),
    G(a.G, ""),
    G(a.C, ""))
}
  , PJ = function(a, b, c) {
    var d = Yf("A")
      , e = Zf(" ");
    d.appendChild(Zf(c));
    Vd(d, b);
    a.appendChild(d);
    a.appendChild(e)
};
var QJ = function(a, b) {
    K.call(this);
    this.F = M.M();
    this.a = a;
    this.g = b;
    this.b = E("tlid-file-input", this.a);
    this.o = E("tlid-select-file-button", this.a);
    this.T = E("tlid-sl-input", this.a);
    this.V = E("tlid-tl-input", this.a);
    this.m = E("tlid-selected-file-label", this.a);
    this.w = E("tlid-selected-file-size", this.a);
    this.L = E("tlid-cancel-selected-file-button", this.a);
    this.h = E("tlid-translate-doc-button", this.a);
    this.c = this.h.form;
    this.K = new Tu;
    H(this.o, "click", this.G, !1, this);
    H(this.h, "click", this.N, !1, this);
    H(this.b, "change", this.C, !1, this);
    H(this.L, "click", this.R, !1, this);
    U(this.a, "loading")
};
ka(QJ, K);
QJ.prototype.N = function() {
    U(this.a, "has-file");
    T(this.a, "translating-file");
    var a = RJ(this)
      , b = SJ(this.b.value)
      , c = this.F
      , d = TJ(b)
      , e = O(c, 301)
      , f = new Jk;
    C(f, 1, d);
    C(f, 2, a);
    mf(e, 76, f);
    N(c, e);
    UJ("success", a, b);
    this.c.enctype = this.c.encoding = "multipart/form-data";
    this.T.value = this.g.a;
    this.V.value = this.g.b;
    this.c.submit()
}
;
QJ.prototype.G = function() {
    var a = this.F;
    N(a, O(a, 297));
    VJ("bc")
}
;
QJ.prototype.C = function() {
    var a = this.b.value;
    if ("" !== a) {
        var b = a.replace("C:\\fakepath\\", "");
        a = SJ(b);
        if (0 === a.length)
            var c = !1;
        else
            switch (a.toLowerCase()) {
            case "doc":
            case "docx":
            case "odf":
            case "pdf":
            case "ppt":
            case "pptx":
            case "ps":
            case "rtf":
            case "txt":
            case "xls":
            case "xlsx":
                c = !0;
                break;
            default:
                c = !1
            }
        if (c) {
            if (p(window.FileReader)) {
                c = RJ(this);
                if (1048575 < c) {
                    this.dispatchEvent("file_too_big");
                    this.b.value = "";
                    b = this.F;
                    var d = TJ(a)
                      , e = O(b, 148)
                      , f = new Kk;
                    C(f, 1, 161);
                    mf(e, 63, f);
                    f = new Jk;
                    C(f, 1, d);
                    C(f, 2, c);
                    mf(e, 76, f);
                    N(b, e);
                    UJ("ftbe", c, a);
                    return
                }
                a = this.w;
                c = RJ(this);
                d = DATA.Messages.FILE_SIZE_BYTES;
                1 <= c / 1024 && (c /= 1024,
                d = DATA.Messages.FILE_SIZE_KILOBYTES);
                c = this.K.a(d, c.toFixed(0).toString());
                G(a, c)
            }
            G(this.m, b);
            T(this.a, "has-file");
            U(this.a, "translating-file");
            a = this.F;
            N(a, O(a, 308));
            VJ("fs")
        } else
            this.dispatchEvent("unsupported_filetype"),
            this.b.value = "",
            jm(this.F, 160),
            UJ("ufte", 0, a)
    }
}
;
QJ.prototype.R = function() {
    var a = this.F;
    N(a, O(a, 298));
    VJ("c");
    this.b.value = "";
    U(this.a, "has-file");
    U(this.a, "translating-file")
}
;
var SJ = function(a) {
    a = a.split(".");
    return 1 === a.length ? "" : a[a.length - 1].toLowerCase()
}
  , TJ = function(a) {
    switch (a.toLowerCase()) {
    case "doc":
        return 1;
    case "docx":
        return 2;
    case "odf":
        return 3;
    case "pdf":
        return 4;
    case "ppt":
        return 5;
    case "pptx":
        return 6;
    case "ps":
        return 7;
    case "rtf":
        return 8;
    case "txt":
        return 9;
    case "xls":
        return 10;
    case "xlsx":
        return 11;
    default:
        return 0
    }
}
  , RJ = function(a) {
    return 0 === a.b.files.length ? 0 : a.b.files[0].size
}
  , UJ = function(a, b, c) {
    Im(cI, "webapp", "dt", a, {
        dtfs: b,
        dtft: c
    })
}
  , VJ = function(a) {
    Im(cI, "webapp", "dti", a, {})
};
var WJ = function(a, b) {
    K.call(this);
    this.F = M.M();
    this.v = a;
    this.o = b;
    this.a = null;
    this.g = !1;
    this.b = null;
    this.c = []
};
ka(WJ, K);
var XJ = function(a, b, c, d) {
    a.a ? EI(a.a, b, c, d) : a.b = new zF(d,{},b,c)
};
WJ.prototype.m = function() {
    this.dispatchEvent("close_requested")
}
;
WJ.prototype.h = function() {
    this.dispatchEvent("history_cleared")
}
;
var YJ = function(a) {
    if (null == a.a) {
        var b = Sp(GI, {
            La: DATA.Messages
        });
        E("tlid-translation-history-container", a.v).appendChild(b);
        a.a = new wI(b,a.o);
        H(a.a, "close_requested", a.m, !1, a);
        H(a.a, "clear_history_clicked", a.h, !1, a);
        H(a.a, "history_entry_selected", function(c) {
            a.dispatchEvent({
                type: "history_entry_selected",
                eb: c.eb,
                fb: c.fb,
                text: c.text
            })
        }, !1);
        zI(a.a, a.c);
        a.c = [];
        null != a.b && EI(a.a, a.b.Qa(), a.b.oa(), a.b.a);
        a.g && FI(a.a)
    }
};
var $J = function(a, b) {
    this.F = M.M();
    this.c = a;
    this.a = E("tlid-transliteration-content", this.c);
    this.h = E("tlid-show-more-link", this.c);
    this.g = E("tlid-show-less-link", this.c);
    this.b = b;
    this.o = !1;
    ZJ(this)
}
  , bK = function(a, b) {
    if (p(b)) {
        var c = [];
        if (b.sentences)
            for (var d = 0, e; e = b.sentences[d]; d++)
                1 === a.b ? e["src-translit"] && c.push(e["src-translit"]) : 2 === a.b && e.translit && c.push(e.translit);
        b = c.join("")
    } else
        b = "";
    aK(a, b)
}
  , aK = function(a, b) {
    cK(a);
    G(a.a, b);
    V(a.c, "rtl", nc(b));
    Bi(function() {
        return dK(a)
    }, 0)
}
  , dK = function(a) {
    cK(a);
    var b = a.a.offsetHeight
      , c = parseInt($p(a.a, "lineHeight"), 10);
    3 < Math.ceil(b / c) ? a.o ? eK(a) : fK(a) : (V(a.a, "full", !0),
    V(a.a, "truncated", !1),
    W(a.h, !1),
    W(a.g, !1));
    V(a.a, "intermediate", !1)
}
  , eK = function(a) {
    V(a.a, "full", !0);
    V(a.a, "truncated", !1);
    W(a.h, !1);
    W(a.g, !0)
}
  , fK = function(a) {
    V(a.a, "full", !1);
    V(a.a, "truncated", !0);
    W(a.h, !0);
    W(a.g, !1)
}
  , cK = function(a) {
    Np(a.a, ["truncated", "full"]);
    T(a.a, "intermediate")
};
$J.prototype.m = function() {
    var a = this;
    Bi(function() {
        return dK(a)
    }, 0)
}
;
var ZJ = function(a) {
    var b = 0
      , c = "";
    1 === a.b ? (b = 1,
    c = "src") : 2 === a.b && (b = 2,
    c = "tgt");
    H(a.h, "click", function() {
        this.o = !0;
        eK(this);
        ym(this.F, 290, b, this.a.textContent.length);
        Im(cI, "webapp", "showmore", "click", {
            l: c
        })
    }, !1, a);
    H(a.g, "click", function() {
        this.o = !1;
        fK(this);
        ym(this.F, 291, b, this.a.textContent.length);
        Im(cI, "webapp", "showless", "click", {
            l: c
        })
    }, !1, a);
    H(window, "resize", a.m, !1, a)
};
var gK = function(a) {
    X.call(this);
    this.m = a;
    this.b = new mJ;
    this.g = new ws("");
    this.c = new ws("");
    this.h = null
};
w(gK, X);
var hK = function(a) {
    a.c.ia(D("clear", a.j()));
    a.c.rd(DATA.Messages.CLEAR_TEXT);
    a.c.setVisible(!1);
    a.g.ia(D("url-go-button", a.j()));
    a.g.rd(DATA.Messages.TRANSLATE);
    a.g.qa(!1);
    a.b.ia(D("url-orig", a.j()));
    var b = a.b
      , c = DATA.Messages.URL_INPUT_PLACEHOLDER
      , d = b.j();
    oJ() ? (d && (d.placeholder = c),
    b.b = c) : rJ(b) || (d && (d.value = ""),
    b.b = c,
    b.h());
    d && Fp(d, "label", b.b);
    a.h = D("url-err-msg", a.j());
    G(a.h, DATA.Messages.ENTER_VALID_URL);
    W(a.h, !1);
    H(a.b.j(), "input", a.w, !1, a);
    H(a.c, "action", a.C, !1, a);
    H(a.g, "action", a.K, !1, a)
};
gK.prototype.C = function() {
    sJ(this.b);
    this.b.j().focus();
    this.g.qa(!1);
    this.c.setVisible(!1);
    W(this.h, !1)
}
;
gK.prototype.w = function() {
    var a = yc(this.b.Z());
    this.g.qa(!!a);
    this.c.setVisible(!!this.b.Z());
    a = a && !Xu(a);
    W(this.h, a)
}
;
gK.prototype.K = function() {
    var a = yc(this.b.Z());
    if (Xu(a)) {
        var b = this.m.a
          , c = this.m.b;
        var d = n.location.href;
        var e = d.indexOf("#");
        d = 0 > e ? d : d.substr(0, e);
        d = d.replace("/m/translate", "/translate");
        d = Dj(d, "sl", b ? b : "auto", "tl", c, "u", escape(a));
        n.open(d, "webtrans")
    }
}
;
var nK = function(a) {
    var b = a.Nj, c = a.Uj, d = a.Yj, e = a.Zj, f = a.dk, g = a.ek, h = a.hk, l = a.Sa, m = a.ik, q = a.lk, r = a.nk, u = a.qk, y = a.rk, Q = a.Kl, L = a.La, Na = a.jm, Hb = a.mm, Ha = a.Om, Ib = a.Pm, wg = a.Qm, Be = a.Rm, Qm = a.Vm, Pj = a.jn, bM = a.An, cM = a.Wn, dM = P, Fk;
    a.gk ? Fk = P("<div class='tlid-survey survey-container hidden'><div class='tlid-before-survey'><div class='tlid-dismiss-survey dismiss-button'></div><div class='title'>" + R(L.HAPPINESS_SURVEY_TITLE) + "</div><div class='tlid-survey-contents survey-contents'></div><div class='goog-logo-container'><div class='goog-logo'></div></div></div><div class='tlid-after-survey' style='display: none'><div class='title'>" + R(L.HAPPINESS_SURVEY_THANKS) + "</div><div class='after-message'><div>" + R(L.HAPPINESS_SURVEY_AFTER) + "</div><div class='more-feedback-link'><a href='javascript:void(0);' class='tlid-more-feedback'>" + R(L.HAPPINESS_SURVEY_MORE_FEEDBACK) + "</a></div></div></div></div>") : Fk = "";
    a = Fk + "<div class='frame'>";
    Fk = P;
    var eM = "<div class='page tlid-homepage homepage translate-text'>" + P("<div class='input-button-container'><div class='tlid-input-button-container focus-wrapper' role='tablist' tabindex='0'>" + iK({
        identifier: "tlid-input-button-text",
        ki: "text-icon",
        label: L.INPUT_METHOD_TEXT
    }) + iK({
        identifier: "tlid-input-button-docs",
        ki: "documents-icon",
        label: L.INPUT_METHOD_DOCUMENTS
    }) + "</div></div>") + (r ? P("<span class='tlid-brain-logos-container'><span class='tlid-no-brain-logo no-brain-logo brain-container'></span><span class='tlid-brain-logo brain-logo brain-container'></span></span>") : ""), Xs;
    h ? Xs = P('<div class="promo-notification-wrapper"><div class=\'' + S("tlid-magnet-promo") + " promo-notification'>" + R("Google Translate is hiring!") + " <span class='tlid-promo-notification-link'><a href='" + S(On("http://go/joinTranslate")) + "' target='_blank'>" + R("go/joinTranslate") + "</a></span></div></div>") : Xs = "";
    f = eM + Xs + (f ? P("<div class='app-download-bar'><div class='tlid-app-download-bar focus-wrapper' tabindex=\"0\"><div class=\"prompt-text\">\u70b9\u51fb\u56fe\u6807\u4e0b\u8f7d App</div>" + R(rI({
        ke: "Android",
        Zf: "android",
        identifier: "tlid-android-download"
    })) + R(rI({
        ke: "iOS",
        Zf: "ios",
        identifier: "tlid-ios-download"
    })) + "</div></div>") : "") + "<div class='homepage-content-wrap'><div class='tlid-source-target main-header'><div class='source-target-row'>";
    h = P;
    d = '<div class="tlid-input input"><div class="tlid-language-bar ls-wrap"><div class="sl-wrap"><div class="sl-sugg"></div><div class="sugg-fade"></div><div class="sl-more tlid-open-source-language-list" aria-label="' + S(L.MORE) + '" role="button" tabindex="0"></div></div>' + jK({
        className: "sl",
        identifier: "source",
        ni: Pj,
        selected: d
    }) + '<div class="swap-wrap"><div class="swap jfk-button-narrow jfk-button-standard" aria-label="' + S(L.TOOLTIP_SWAP_LANGUAGES) + '" data-tooltip="' + S(L.TOOLTIP_SWAP_LANGUAGES) + '"><div class="jfk-button-img"></div></div></div><div class="tl-wrap"><div class="tl-sugg"></div><div class="sugg-fade"></div><div class="tl-more tlid-open-target-language-list" aria-label="' + S(L.MORE) + '" role="button" tabindex="0"></div></div>' + jK({
        className: "tl",
        identifier: "target",
        ni: bM,
        selected: e
    }) + '</div><div class="source-wrap">';
    Ib = P('<div class="input-full-height-wrapper tlid-input-full-height-wrapper"><div class="source-input"><div id="input-wrap" class="tlid-input-area input-area' + (Ib ? "" : " less-padding") + '"><textarea id="source" class="orig tlid-source-text-input" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea><div class="text-dummy"></div><div id=gt-src-is style="display:none" class="gt-is-mobile gt-is"><div id=gt-src-is-list class=gt-is-ctr></div></div></div><div class="source-header"><div class="clear-wrap"><div class="clear jfk-button-flat tlid-clear-source-text" aria-label="' + S(L.CLEAR_TEXT) + '" data-tooltip="' + S(L.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div>' + (Ib ? '<div class="go-wrap"><div class="go-button" aria-label="' + S(L.TRANSLATE) + '" data-tooltip="' + S(L.TRANSLATE) + '"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div>' : "") + "</div>" + kK({
        containerId: "tlid-source-transliteration-container",
        La: L,
        Si: "source-transliteration-container"
    }) + '<div id="spelling-correction" class="tlid-spelling-correction spelling-correction"></div><div class="source-footer-wrap source-or-target-footer"><div class="source-input-tools" id="gt-input-tool"></div><div class="character-count tlid-character-count"><div class="cc-ctr"></div><div class="cc-msg"></div></div><div class="source-footer"><div class="speech-wrap source-or-target-footer-button left-positioned"><span class="speech-border"></span></div>' + lK({
        We: ["src-tts", "left-positioned"],
        La: L
    }) + "</div></div></div></div>");
    Ib = h(d + Ib + "</div>" + (y ? P('<div class="url-input-wrap" style="display:none"><input id="url-input" class="url-orig" rows="1" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"><div class="url-clear-wrap"><div class="clear jfk-button-flat"><div class="jfk-button-img"></div></div></div><div class="url-go-wrap"><div class="url-go-button"><div class="go jfk-button-action"><div class="jfk-button-img"></div></div></div></div><div class="url-err-msg"></div></div>') : "") + P('<div id="gt-ovfl" style="display: none;" class="snck ovfl"><div id="gt-ovfl-ctr" class="ovfl-ctr"><span id="gt-ovfl-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-ovfl-xlt" class="ovfl-xlt" role="button">' + R(L.TRANSLATE_MORE) + "</span></div></div>") + P('<div id="gt-ntfcn" style="display: none;" class="snck ntfcn"><div id="gt-ntfcn-ctr" class="ntfcn-ctr"><span id="gt-ntfcn-msg" class="snck-msg" role="alert" aria-live="alert"></span></div></div>') + P('<div id="gt-cmty" style="display: none;" class="snck cmty"><div id="gt-cmty-ctr" class="cmty-ctr"><span id="gt-cmty-msg" class="snck-msg" role="alert" aria-live="alert"></span><span id="gt-cmty-btn" class="cmty-btn" role="button"></span></div></div>') + "</div>");
    Ib = f + Ib;
    l = P('<div class="tlid-results-container results-container">' + (r ? '<div class="tlid-prod-translation prod-translation translation"></div>' : "") + (u ? '<div class="error-placeholder placeholder"><span class="tlid-result-error"></span><span class="tlid-result-container-error-button translation-error-button">' + R(L.TRY_AGAIN) + "</span></div>" : '<span class="tlid-result-error error-placeholder placeholder"></span>') + '<span class="empty-placeholder placeholder">' + R(L.TRANSLATION) + '</span><span class="translating-placeholder placeholder">' + R(L.TRANS_IN_PROGRESS) + '</span><div class="gendered-translations-header">' + R(L.GENDER_SPECIFIC_TRANSLATIONS_LABEL) + ' <a class="gendered-translations-learn-more" href="https://support.google.com/translate?p=gendered_translations&hl=' + Kn(l) + '" target="_blank">' + R(L.LEARN_MORE) + "</a></div></div>");
    l = Ib + l + "</div><div class='tlid-select-file-page-container'></div></div>";
    u = P("<div class='tlid-result-view cllist'>" + (u ? "<div class='tlid-translation-error translation-error-box' style='display: none'><span class=\"tlid-translation-error-message translation-error\"></span><span class=\"tlid-result-view-error-button translation-error-button\">" + R(L.TRY_AGAIN) + "</span></div>" : "<div class='tlid-translation-error tlid-translation-error-message translation-error' style='display: none'></div>") + "<div class='cp-promo-wrapper'></div><div class='gt-lc gt-lc-mobile' style='display: none'></div></div>");
    u = l + u + "<div class='feedback-link'><a href='javascript:void(0);' class='tlid-send-feedback-link'>" + R(L.SEND_FEEDBACK) + "</a></div></div>";
    l = P;
    c = '<div class="gp-footer">' + P('<div class="ft-icon-row"><div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Yn(Q)) + "')\">" + mK({
        Cf: "ft-icon-img-hst",
        caption: L.HISTORY_SECTION_TITLE
    }) + "</a></div>" + (m ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Yn(Qm)) + "')\">" + mK({
        Cf: "ft-icon-img-svd",
        caption: L.SAVED_SECTION_TITLE
    }) + "</a></div>" : "") + (g ? '<div class="ft-icon-ctr">' + (q ? '<a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Yn(c)) + "')\">" : '<a class="ft-link" href="/community?source=mfooter">') + mK({
        Cf: "ft-icon-img-cmn",
        caption: L.FOOTER_COMMUNITY
    }) + "</a></div>" : "") + (y ? '<div class="ft-icon-ctr"><a class="ft-link" href="javascript:void(0);" onclick="_e(event, \'' + S(Yn(cM)) + "')\">" + mK({
        Cf: "ft-icon-img-web",
        caption: L.FOOTER_WEBSITES
    }) + "</a></div>" : "") + "</div>");
    var Ys;
    wg ? Ys = P('<div class="ad-panel gsa-promo"><div><span class="gsa-icon-animated"></span></div><div class="ad-panel-title">' + R(L.SEARCH_HANDS_FREE) + '</div><div class="ad-panel-subtitle">' + R(L.GSA_PURE_AD_TEXT) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' + R(Na) + '</span><span class="tlid-accept-promo accept-promo">' + R(Hb) + "</span></div></div>") : Ys = "";
    wg = c + Ys;
    var Zs;
    Ha ? Zs = P('<div class="ad-panel at-promo"><div><span class="translate-icon"></span></div><div class="ad-panel-title">' + R(b) + '</div><div class="ad-panel-buttons"><span class="tlid-dismiss-promo dismiss-promo">' + R(Na) + '</span><span class="tlid-accept-promo accept-promo">' + R(Hb) + "</span></div></div>") : Zs = "";
    b = l(wg + Zs + "</div>");
    b = Fk(u + b + "</div>");
    b = a + b + P("<div class='page tlid-history-page history-page' tabindex='0' aria-label='" + S(L.HISTORY_SECTION_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-translation-history-container\"></div></div></div>");
    q = P(q ? "<div class='page tlid-instant-page instant-page' tabindex='0' aria-label='" + S(L.COMMUNITY_INSTANT_TITLE) + "'><div class='outer-wrap'><div class=\"tlid-community-instant-container\"></div></div></div>" : "");
    Be = b + q + (Be ? "<div class='page tlid-phrasebook-page phrasebook-page' tabindex='0' aria-label='" + S(L.SAVED_SECTION_TITLE) + "'><div class='tlid-phrasebook-outer-wrap outer-wrap'></div></div>" : "");
    L = P("<div class='page tlid-language-picker-page language-picker-page'><div class='language-picker-wrapper'>" + P('<div class="tlid-language-list-toolbar language-list-toolbar"><div class="tlid-language-list-back-button language-list-back-button" aria-label="' + S(L.CLOSE) + '"><div class="backbutton-image language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div></div><div class="tlid-language-list-search-button language-list-search-button"><div class="tlid-language-list-label language-list-label"></div><div class="searchbutton-image language-picker-toolbar-image"></div></div></div>') + "<div class='outer-wrap'></div></div></div>");
    L = Be + L;
    Be = P("<div class='toast-container'><div class='toast " + S({
        identifier: "tlid-toast"
    }.identifier) + "' style='display: none'><div class='tlid-toast-message message'></div><div class='tlid-toast-action toast-action'><a target='_blank' class='tlid-toast-action-link action-link'><span class='tlid-toast-action-text'></span></a></div></div></div>");
    return dM(L + Be + "</div>")
};
nK.a = "trans.mobile.widget.main";
var iK = function(a) {
    var b = a.ki
      , c = a.label;
    return P("<div class='tlid-input-button input-button header-button " + S(a.identifier) + " " + S(b) + "' role='tab' tabindex=\"-1\"><div class='text'>" + R(c) + "</div></div>")
}
  , oK = function(a) {
    var b = a.Sa
      , c = a.La;
    return P("<div class='select-file-page tlid-file-selector loading'><form method='post' action='" + S(On(a.zk)) + "'><input type='hidden' name='hl' value='" + S(b) + "' class='tlid-hl-input'><input type='hidden' name='ie' value='UTF-8' class='tlid-ie-input'><input type='hidden' name='js' value='y' class='tlid-js-input'><input type='hidden' name='prev' value='_t' class='tlid-prev-input'><input type='hidden' name='sl' class='tlid-sl-input'><input type='hidden' name='tl' class='tlid-tl-input'><div class='tlid-select-file-section select-file-section'><div class='choose-document-prompt'>" + R(c.CHOOSE_A_DOCUMENT) + "</div><div class='upload-filetypes-prompt'>" + R(c.UPLOAD_FILETYPES) + "</div><input type='file' name='file' id='tlid-file-input' class='file-input tlid-file-input'><label for='tlid-file-input' class='tlid-select-file-button button'>" + R(c.BROWSE_YOUR_COMPUTER) + "</label></div><div class='tlid-file-selected-section file-selected-section'><div class='file-holder'><div class='file-holder-icon'></div><div class='file-info'><div class='tlid-selected-file-label file-label'></div><div class='tlid-selected-file-size file-size'>&nbsp;</div></div><div class='selected-and-cancel'><div class='tlid-cancel-selected-file-button cancel-file'></div></div></div><div class='button-container'><input type='submit' class='tlid-translate-doc-button button' value='" + S(c.TRANSLATE) + "'></div></div><div class='loading-or-translating-file-section'><div class='mspin-googblue-medium'><div><div></div></div></div><div class='translating-file-caption'>" + R(c.TRANS_IN_PROGRESS) + "</div></div></form></div>")
};
oK.a = "trans.mobile.widget.selectFilePage";
var mK = function(a) {
    var b = a.Cf;
    a = a.caption;
    return P('<div class="footer-icon-container ' + S(b) + '"><div class="ft-icon-img-ctr"><div class="ft-icon-oval" id="' + S(b) + '"></div></div><div class="ft-icon-txt">' + R(a) + "</div></div>")
}
  , kK = function(a) {
    var b = a.La
      , c = a.Si;
    return P("<div class='" + S(a.containerId) + " " + S(c) + " transliteration-container'><div class='tlid-transliteration-content transliteration-content'></div><div class='tlid-show-more-link truncate-link' style='display:none'>" + R(b.SHOW_MORE) + "</div><div class='tlid-show-less-link truncate-link' style='display:none'>" + R(b.SHOW_LESS) + "</div></div>")
}
  , lK = function(a) {
    var b = a.La
      , c = "<div class='";
    a = a.We;
    for (var d = a.length, e = 0; e < d; e++)
        c += S(a[e]) + " ";
    c += "ttsbutton jfk-button-flat source-or-target-footer-button' aria-label='" + S(b.LISTEN) + "' data-tooltip='" + S(b.LISTEN) + "'><div class='jfk-button-img'></div></div>";
    return P(c)
}
  , jK = function(a) {
    var b = a.className
      , c = a.identifier
      , d = a.ni;
    a = a.selected;
    b = '<div class="' + S(b) + '-selector lang_list"><div class="lang-btn"><a class="ls-select new-ls-select ' + S(b) + "-button tlid-open-small-" + S(c) + '-language-list"';
    c = "";
    for (var e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        c += Bn(g.Code, a) ? "" + g.Name : ""
    }
    b += ' aria-label="' + S(c) + '" tabindex="0">' + R(c) + "</a></div></div>";
    return P(b)
}
  , pK = function(a) {
    var b = a.La;
    a = a.fn;
    return P('<div class="tlid-gender-promo gender-promo"><div class="gender-promo-graphic"></div><div class="gender-promo-content"><div class="gender-promo-pre-title">' + R(b.NEW_FEATURE) + '</div><div class="gender-promo-title">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TITLE) + '</div><span class="gender-promo-message gender-promo-message-short-phrase">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT) + '</span><span class="gender-promo-message gender-promo-message-single-word">' + R(b.GENDER_SPECIFIC_TRANSLATIONS_PROMO_TEXT_SINGLE_WORD) + "</span>" + (a ? '<a class="gender-promo-learn-more" target="_blank" href="https://www.blog.google/products/translate/reducing-gender-bias-google-translate/">' + R(b.LEARN_MORE) + "</a>" : "") + "</div><div class='tlid-gender-promo-dismiss-button gender-promo-dismiss-button'></div></div>")
};
pK.a = "trans.mobile.widget.genderPromo";
var qK = function(a) {
    var b = a.jg, c = a.hg, d = a.im, e = a.lm, f = a.La, g = P, h;
    a.Hc ? h = P('<div class="starbutton jfk-button-flat" aria-label="' + S(e) + '" data-tooltip="' + S(e) + '"><div class="jfk-button-img"></div></div>') : h = "";
    return g('<div class=\'tlid-result result-dict-wrapper\'><div class="result tlid-copy-target"><div class="result-header">' + h + '</div><div class="text-wrap tlid-copy-target"><div class="result-shield-container tlid-copy-target" tabindex="0"><span class="tlid-translation translation"></span><span class="tlid-translation-gender-indicator translation-gender-indicator"></span><span class="tlid-trans-verified-button trans-verified-button" style="display:none" role="button"></span></div></div>' + kK({
        containerId: "tlid-result-transliteration-container",
        La: f,
        Si: "result-transliteration-container"
    }) + '<div class="result-footer source-or-target-footer tlid-copy-target"><div class="tlid-share-translation-button share-translation-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(f.SHARE_TRANSLATION) + "' data-tooltip=\"" + S(f.SHARE_TRANSLATION) + '"><div class="jfk-button-img"></div></div><div class="tlid-suggest-edit-button suggest-edit-button jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(f.SUGGEST_AN_EDIT) + "' data-tooltip=\"" + S(f.SUGGEST_AN_EDIT) + '"><div class="jfk-button-img"></div></div><div class="more-wrapper"><div class="morebutton jfk-button-flat source-or-target-footer-button tlid-result-footer-more-button right-positioned" data-tooltip="' + S(f.MORE) + '"><div class="jfk-button-img"></div></div><div class="moremenu"></div></div>' + (c ? '<div class="tlid-copy-translation-button copybutton jfk-button-flat source-or-target-footer-button right-positioned" aria-label=\'' + S(d) + "' data-tooltip=\"" + S(d) + '"><div class="jfk-button-img"></div></div>' : "") + lK({
        We: ["res-tts", "ttsbutton-res", "left-positioned"],
        La: f
    }) + (b ? '<div class="result-search"><div class="result-search-icon"></div></div>' : "") + '</div></div><div class="gt-edit" style="display:none"><div class="gt-clear" tabindex="0"><div class="jfk-button-img"></div></div><textarea class="contribute-target"></textarea></div></div>')
};
qK.a = "trans.mobile.widget.result";
var rK = function(a) {
    var b = a.Um;
    return P("<span class='tlid-translation-page-link translation-page-link'><a href='" + S(On(a.Tm)) + "' target='_blank'>" + R(b) + "<span class='open-translated-page-icon'></span></a></span>")
};
rK.a = "trans.mobile.widget.resultHyperlink";
var sB = function(a) {
    var b = a.le
      , c = a.$l;
    a = a.bm;
    return P('<div class="language-list-search-box"><div class="back-image-black language-picker-toolbar-image"></div><div class="clear-image-black language-picker-toolbar-image"></div><div class="language_list_search_box_container"><input id="' + S(c) + '-search-box" type="text" oninput="_e(event, \'' + S(Yn(b)) + "', '" + S(Yn(c)) + '\')" placeholder="' + S(a) + '"></div></div>')
};
sB.a = "trans.mobile.widget.languageListSearchBox";
var jB = function(a) {
    var b = a.id
      , c = a.le
      , d = a.name;
    a = a.code;
    b = '<div class="language_list_item_wrapper language_list_item_wrapper-' + S(a) + " " + (Bn(a, "auto") ? " detect_language " : "") + '" onclick="_e(event, \'' + S(Yn(c)) + "', '" + S(Yn(b)) + '\')" role="button" tabindex="0"><div class="language_list_item_icon ' + S(b) + '_checkmark"></div>';
    c = Bn(a, "auto") ? "language_list_item" : "language_list_item language_list_item_language_name";
    b += "<div class='" + S(c) + "'>" + R(d) + "</div>" + (Bn(a, "auto") ? '<div class="detect_language_row_icon"></div>' : "") + "</div>";
    return P(b)
};
jB.a = "trans.mobile.widget.languageListItem";
var GB = function(a) {
    return P('<div class="language_list_section"><div class="language_list_section_header">' + R(a.text) + "</div></div>")
};
GB.a = "trans.mobile.widget.languageListSection";
var sK = function(a) {
    var b = a.On
      , c = a.La
      , d = a.pk
      , e = a.vk
      , f = a.Un;
    a = a.Ll;
    return P('<div class="share-module"><div class="tlid-share-panel share-panel" aria-hidden="true" tabindex="0"><div class="share-panel-wrap"><h3>' + R(c.SHARE_MODULE_TITLE) + "</h3>" + (Cn(e) && Cn(f) ? '<div id="not_installed"><span class="warning-icon"></span><span class="warning-msg">' + R(f) + "</span></div>" : "") + "<ul>" + (d ? '<li><a href="sms:' + (a ? "&body=" + S(b) : "?body=" + Kn(b)) + '" class="sms"><span class="share-link-icon"></span><span> ' + R(c.SHARE_MODULE_SMS) + " </span></a></li>" : "") + '<li><a href="mailto:?body=' + Kn(b) + '" target="_top" class="email"><span class="share-link-icon"></span><span> ' + R(c.SHARE_MODULE_EMAIL) + " </span></a></li>" + (Cn(e) && Cn(f) ? '<li><a href="whatsapp://send?text=' + Kn(b) + '" class="whatsapp"><span class="share-link-icon"></span><span> WhatsApp </span></a></li>' : "") + '<li><a href="https://twitter.com/intent/tweet?text=' + Kn(b) + '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li></ul></div></div></div>')
};
sK.a = "trans.mobile.widget.shareModule";
var tK = function(a) {
    var b = a.xn
      , c = a.Cn
      , d = a.yn
      , e = a.ke
      , f = a.Ym;
    return P('<div class="gsa-interstitial"><div class="clear-wrap"><div class="clear jfk-button-flat" aria-label="' + S(a.La.CLEAR_TEXT) + '"><div class="jfk-button-img"></div></div></div><div><span class="gsa-icon"></span></div><div class="gsa-int-text">' + R(b) + (c ? "<b>" + R(c) + "</b>" : "") + R(d) + '</div><div class="gsa-int-button">' + R(e) + '</div><div class="gsa-int-second-choice">' + R(f) + "</div></div>")
};
tK.a = "trans.mobile.widget.iGSAInterstitial";
var uK = function(a) {
    var b = a.message;
    return P("<span class='survey-option survey-option-" + S(a.Hm) + "'><span class='survey-option-text'>" + R(b) + "</span></span>")
};
uK.a = "trans.mobile.widget.surveyOption";
var vK = function(a) {
    return P("<span class='ink-container " + S(a.Tj) + "'></span>")
};
vK.a = "trans.mobile.widget.inkContainer";
var wK = function() {
    var a = DATA.Messages.CLOSE_SEARCH
      , b = DATA.Messages.CLEAR_TEXT
      , c = DATA.Messages.RECENT_LANGUAGES
      , d = DATA.Messages.ALL_LANGUAGES
      , e = DATA.Messages.CHECKED_LANGUAGE;
    this.o = DATA.Messages.SEARCH_LANGUAGES;
    this.b = a;
    this.a = b;
    this.h = c;
    this.c = d;
    this.g = e
};
var DK = function(a, b, c, d, e, f) {
    var g = this;
    K.call(this);
    this.c = e;
    this.V = f;
    this.v = a;
    this.bb = b;
    this.T = E("tlid-open-small-source-language-list", this.v);
    this.Ya = E("tlid-open-small-target-language-list", this.v);
    a = new wK;
    this.b = new oF("sl_list",a);
    this.g = new oF("tl_list",a);
    this.b.C = this.T;
    this.b.K(Ob(DATA.SourceLanguageCodeNameList));
    this.g.C = this.Ya;
    this.g.K(Ob(DATA.TargetLanguageCodeNameList));
    this.a = new Yv("",!0);
    this.a.ia(D("orig", this.v));
    ur(this.a, "orig-ios", Je);
    gt() || (this.a.j().placeholder = DATA.Messages.ENTER_TEXT);
    this.Ic = new ws("");
    a = E("swap", this.v);
    this.Ic.ia(a);
    gt() && this.Ic.rd(De ? DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_MAC : DATA.Messages.TOOLTIP_SWAP_LANGUAGES_SHORTCUT_NOTMAC);
    DA(this.V, {
        Ic: this.Ic
    });
    os(a, 1);
    xK(this);
    this.Ba = fb(D("source-header", this.v));
    yK(this, c);
    this.C = null;
    c = D("go-button", this.v);
    null != c && (this.C = new ws(""),
    this.C.ia(c),
    qH(c),
    H(this.C.j(), "mousedown", function() {
        g.dispatchEvent("translateButtonClicked")
    }, !1));
    this.K = new ws("");
    c = E("clear", this.v);
    this.K.ia(c);
    this.K.setVisible(!1);
    qH(c);
    this.L = new ws("",void 0,4);
    this.L.Oa(16, !0);
    this.L.Oa(1, !0);
    c = E("src-tts", this.v);
    this.L.ia(c);
    qH(c);
    this.o = new bv(this.L,"&client=webapp&prev=input",1,!0,!0,DATA.Messages.LISTEN,DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    this.F = M.M();
    this.Kb = new SG;
    this.X = new UG;
    this.X.ia(D("gt-is-mobile", this.v));
    this.X.setVisible(!1);
    this.G = null;
    gt() && (this.G = new dz(D("source-input-tools", this.v),D("orig", this.v),D("source-input-tools", this.v),DATA.DisplayLanguage,DATA.InChina),
    H(this.G, "change", function() {
        zK(g)
    }, !1));
    this.R = new jD(this.Kb,this.X,{
        Nl: this.a,
        cn: null,
        Ol: this.G,
        na: this.c,
        qn: new RG,
        Pn: new np("webapp"),
        client: "webapp",
        Sa: DATA.DisplayLanguage,
        hn: !DATA.DisableOtf,
        em: 4,
        Nn: !0,
        Pj: !1,
        Ak: "",
        Rl: !1,
        Pl: !1,
        Fq: DATA.Messages.QUICK_TRANSLATION,
        nn: DATA.Messages.DID_YOU_MEAN,
        vq: DATA.Messages.LANGUAGE_CORRECTION,
        Vj: new Bw
    });
    this.ma = new $J(fb(D("tlid-source-transliteration-container", this.v)),1);
    this.vb = Dm.M();
    this.w = !1;
    this.aa = "";
    this.h = new DG(this.a,this.V,DATA.TopLevelDomain.substr(DATA.TopLevelDomain.lastIndexOf(".") + 1),DATA.DisplayLanguage,!0,DATA.Messages.VOICE_INPUT_UNAVAILABLE,DATA.Messages.VOICE_INPUT_UNAVAILABLE_GENERIC,!0,DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
    this.m = fb(D("speech-wrap", this.v));
    AK(this);
    DATA.UrlTranslation && (this.Y = new gK(this.c),
    c = D("url-input-wrap", this.v),
    this.Y.ia(c),
    hK(this.Y));
    BK(this);
    CK(this)
};
w(DK, K);
var xK = function(a) {
    var b = new yA(fb(D("sl-sugg", a.v)),v(mI, a),3,!0,!0,!0)
      , c = new yA(fb(D("tl-sugg", a.v)),v(nI, a),3,!1,!1,!0);
    DA(a.V, {
        Oi: b,
        Xi: c
    });
    nw(a.c);
    p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_sl) && lw(a.c);
    p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_tl) && mw(a.c);
    fw(a.c);
    gw(a.c);
    a = b.a;
    c = c.a;
    for (b = 0; b < a.length; b++)
        H(a[b].j(), "click", function(d) {
            EK(d)
        }, !1);
    for (a = 0; a < c.length; a++)
        H(c[a].j(), "click", function(d) {
            EK(d)
        }, !1)
}
  , EK = function(a) {
    var b = a.target;
    b.blur();
    var c = D("ink-container", b);
    c || (c = Sp(vK, {
        Tj: "language-selector-ripple"
    }),
    b.insertBefore(c, b.firstChild));
    U(c, "ink-ripple-animation");
    if (!c.offsetHeight && !c.offsetWidth) {
        var d = Math.max(b.offsetHeight, b.offsetWidth);
        c.style.height = d + "px";
        c.style.width = d + "px"
    }
    b = b.getBoundingClientRect();
    d = a.clientX - (b.left + document.body.scrollLeft) - c.offsetWidth / 2;
    c.style.top = a.clientY - (b.top + document.body.scrollTop) - c.offsetHeight / 2 + "px";
    c.style.left = d + "px";
    T(c, "ink-ripple-animation")
}
  , AK = function(a) {
    if (no && "webkitSpeechRecognition"in window) {
        var b = a.h;
        if (null != b.a) {
            var c = Jf("gt-src-tools-l");
            b.h = a.m || fb(c);
            c = b.h;
            b.b = new Et(MSG_SPEECH_INPUT_TURN_ON,MSG_SPEECH_INPUT_TURN_OFF,new Jt("speech-button",!1));
            b.b.ia(F("DIV", {
                id: "gt-speech",
                tabindex: "0"
            }));
            gg(c, b.b.j(), 1);
            b.g = new BG(b.b.j());
            b.g.Ua(b.b.j());
            b.a.onresult = v(b.N, b);
            b.a.onstart = v(b.yl, b);
            b.a.onspeechstart = v(b.Hn, b);
            b.a.onend = v(b.Vk, b);
            b.a.onspeechend = v(b.wl, b);
            b.a.onerror = v(b.ba, b);
            b.a.onnomatch = v(b.R, b);
            H(b.b, "action", b.Fn, !1, b);
            H(b.h, "click", b.Gn, !1, b)
        }
        b = F("span", ["speech-border", "speech-background"]);
        gg(a.m, b, 1);
        FK(a)
    } else
        W(a.m, !1)
}
  , BK = function(a) {
    H(a.a, "change", function(b) {
        CK(a, b.Gd)
    }, !1, a);
    H(a.a.j(), "focus", a.N, !1, a);
    H(a.a.j(), "blur", a.N, !1, a);
    H(a.a.j(), "focus", v(a.Na, a, !1), !1, a);
    H(a.a.j(), "blur", v(a.Na, a, !0), !1, a);
    H(a.a.j(), "focus", a.F.c, !1, a.F);
    H(window, "resize", a.ba, !1, a);
    H(a.c, "srcEmphasizeUpdated", a.ya, !1, a);
    H(a.c, "tgtEmphasizeUpdated", a.nb, !1, a);
    H(a.c, "srcLanguageUpdated", a.Pa, !1, a);
    H(a.c, "detectSrcUpdated", a.sa, !1, a);
    H(a.K, "action", a.wb, !1, a);
    a.h && (H(a.h, "start", a.vl, !1, a),
    H(a.h, "speechStart", a.Ln, !1, a),
    H(a.h, "end", a.ul, !1, a),
    H(a.h, "userInteractionWhileDisabled", a.El, !1, a),
    H(a.o, "userInteractionWhileDisabled", a.Mn, !1, a));
    H(E("tlid-input-full-height-wrapper", a.v), "click", function(b) {
        var c = a.ma;
        [c.c, c.a, c.h, c.g].includes(b.target) || Eg(document) === a.a.j() || zK(a)
    }, !1)
}
  , GK = {
    "small-font": 2
};
DK.prototype.j = function() {
    return this.v
}
;
var HK = function(a) {
    var b = a.c.a;
    a.o.update(a.a.Z(), b, void 0, mI(b))
};
DK.prototype.N = function(a) {
    a = a ? "focus" == a.type : Eg(document) === this.a.j();
    var b = !!this.a.Z();
    this.K.setVisible(a || b);
    null != this.C && this.C.setVisible(a)
}
;
var zK = function(a) {
    a.a.j().focus()
}
  , IK = function(a) {
    var b = hq(a.Ba).a
      , c = Wp(rq(a.a.j())).bottom
      , d = eq(document).a;
    d > b - 10 && c > d || Bi(v(window.scrollTo, window, 0, b - 8), 100, a)
}
  , FK = function(a) {
    if (a.h) {
        var b = a.c.a;
        a = a.h;
        var c = mI(b);
        if (null != a.a) {
            a.Gb && a.a.stop();
            var d = a.V.get(b);
            a.a.lang = null != d ? d : "";
            null != d ? (a.G = d,
            a.b.qa(!0),
            W(a.h, !0)) : (x(null != a.m || null != a.L, "Cannot disable button without providing a tooltip explanation"),
            "auto" === b && null != a.C ? (b = a.b,
            b.b = a.C,
            b.qa(!1)) : null != a.m ? (b = a.b,
            c = a.aa.a(a.m, c),
            b.b = c,
            b.qa(!1)) : (b = a.b,
            b.b = a.L,
            b.qa(!1)),
            a.ma || W(a.h, !1))
        }
    }
};
k = DK.prototype;
k.vl = function() {
    this.w = !0;
    JK(this)
}
;
k.Ln = function() {
    T(this.m, "speech-data")
}
;
k.ul = function() {
    this.w = !1;
    U(this.m, "speech-data");
    JK(this);
    CK(this)
}
;
k.El = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceInput")
}
;
k.Mn = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
}
;
var JK = function(a) {
    var b = "";
    a.w ? a.aa = $v(a.a) : b = $v(a.a) || a.aa;
    a.a.b(b);
    a.a.j().disabled = a.w;
    b = a.a;
    b.zd = a.w ? MSG_SPEAK_NOW : DATA.Messages.ENTER_TEXT;
    b.j() && Uv(b);
    a.a.j().blur()
};
DK.prototype.Na = function(a) {
    for (var b = Mf("show-panel"), c = 0; c < b.length; c++)
        Bi(Ta(W, b[c], a), 100, this)
}
;
DK.prototype.wb = function() {
    var a = this.F;
    N(a, O(a, 23));
    "" === this.a.Z() ? this.a.j().blur() : (this.a.b(""),
    zK(this));
    this.h && (this.h.c = "");
    this.o && this.o.stop();
    Lm(this.vb, "clearbtn", 1, "accumulate");
    this.dispatchEvent("inputCleared")
}
;
var CK = function(a, b) {
    a.ba();
    a.N();
    HK(a);
    "paste" === b && a.dispatchEvent("inputPasted")
}
  , KK = function(a) {
    var b = a.c.a;
    "auto" == b && (b = a.c.c);
    b && (b = kc(b) ? "rtl" : "ltr",
    Yp(a.a.j(), "direction", b),
    a = D("gt-hl-layer", a.v),
    null != a && Yp(a, "direction", b))
};
DK.prototype.Pa = function() {
    var a = this.c.a;
    "auto" != a && yK(this, a);
    KK(this);
    FK(this);
    this.o.update(this.a.Z(), a, void 0, mI(a));
    null != this.G && gz(this.G, a)
}
;
DK.prototype.ya = function(a) {
    this.b.L = a.data
}
;
DK.prototype.nb = function(a) {
    this.g.L = a.data
}
;
DK.prototype.sa = function() {
    KK(this)
}
;
var yK = function(a, b) {
    var c = mI(b);
    a.b.V(c, b)
};
DK.prototype.update = function(a, b, c) {
    var d = this.ma;
    if (p(b)) {
        var e = [];
        if (b.$a(0))
            for (var f = 0; f < b.cc(); f++) {
                var g = b.$a(f);
                1 === d.b ? J(g, 3) && e.push(J(g, 3)) : 2 === d.b && J(g, 2) && e.push(J(g, 2))
            }
        e = e.join("")
    } else
        e = "";
    aK(d, e);
    V(this.v, "has-transliteration", 0 !== this.ma.a.textContent.length);
    d = J(kp(b), 1);
    e = J(b, 2);
    this.o.update(c ? d : a, e, void 0, mI(e));
    "auto" == this.c.a && ((a = J(b, 2)) && "auto" != a ? (a = mI(a),
    a = source_language_detected.replace(/%\d\$s/g, a),
    G(this.T, a)) : G(this.T, mI("auto")))
}
;
DK.prototype.ba = function() {
    var a = this.a;
    a.Qg = 0;
    Tv(a);
    a = D("text-dummy", this.v);
    var b = D("text-dummy", this.v);
    this.a.Z().endsWith("\n") ? G(b, this.a.Z() + "\n") : G(b, this.a.Z());
    Bg(a) ? (b = Dq(a),
    a = (a.scrollHeight - b.top - b.bottom) / 32) : a = 1;
    V(this.bb, "small-font", a > GK["small-font"]);
    Tv(this.a)
}
;
var LK = function(a) {
    K.call(this);
    this.v = a;
    this.a = null
};
ka(LK, K);
LK.prototype.c = function() {
    this.dispatchEvent("close_requested")
}
;
LK.prototype.b = function() {
    this.dispatchEvent("sign_in_requested")
}
;
var MK = function(a, b, c, d, e, f) {
    var g = iv();
    cF.call(this, a, c, d, e, g);
    this.R = f;
    this.w = b
};
ka(MK, cF);
MK.prototype.m = function() {
    this.h.style.left = Math.round(this.coords[0]) + "px";
    this.h.style.bottom = Math.round(this.coords[1]) + "px"
}
;
MK.prototype.g = function() {
    (new fF(this.w,this.R)).play()
}
;
var NK = function() {
    X.call(this);
    this.h = null
};
ka(NK, X);
NK.prototype.b = function() {
    return ""
}
;
NK.prototype.setVisible = function(a, b) {
    var c = this
      , d = this.j();
    if (tq(d) != a) {
        var e = D(this.b(), this.j());
        a ? (Yp(d, {
            opacity: 1
        }),
        Yp(e, {
            opacity: 0
        }),
        W(d, !0),
        (new MK(d,e,OK,PK,225,100)).play(),
        b && (this.h = window.setTimeout(function() {
            return c.setVisible(!1)
        }, b))) : ((new gF(d,195)).play(),
        this.h && (window.clearTimeout(this.h),
        this.h = null))
    }
}
;
var OK = [0, -48]
  , PK = [0, 0];
var QK = function() {
    NK.call(this)
};
ka(QK, NK);
QK.prototype.b = function() {
    return "ntfcn-ctr"
}
;
QK.prototype.Rc = function(a) {
    if (!a || "DIV" != a.tagName)
        return !1;
    a = D("ntfcn-ctr", a);
    return a && "DIV" == a.tagName ? (a = D("snck-msg", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
}
;
QK.prototype.ea = function() {}
;
var RK = function() {};
ka(RK, sr);
RK.prototype.Uc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
}
;
var SK = function(a, b, c, d) {
    NK.call(this);
    this.m = a;
    this.c = b;
    this.T = c;
    this.N = d;
    this.X = new uv("######");
    this.V = new OF(DATA.Messages.CHARACTER_LIMIT);
    this.Y = new OF(DATA.Messages.TRANSLATE_NEXT);
    this.g = "";
    this.w = null;
    this.C = new Dm;
    this.C.c = "webapp";
    this.F = M.M()
};
ka(SK, NK);
SK.prototype.b = function() {
    return "ovfl-ctr"
}
;
SK.prototype.Rc = function(a) {
    return a && "DIV" == a.tagName ? (a = D(this.b(), a)) && D("snck-msg", a) && D("ovfl-xlt", a) ? !0 : !1 : !1
}
;
SK.prototype.ea = function() {
    var a = D("ovfl-xlt", this.j());
    this.w = new Or(null,new RK);
    this.w.ia(a);
    H(this.w, "action", this.K, !1, this)
}
;
SK.prototype.K = function() {
    var a = this.c.c;
    "" == a && (a = this.c.a);
    var b = this.g.length
      , c = Math.max(b - this.N, 0);
    nm(this.F, b, c);
    Im(this.C, "webapp", "xm", "1", {
        sl: this.c.a,
        tl: this.c.b,
        dl: a,
        hl: this.T,
        ql: b,
        ol: c
    });
    this.m.a.b(this.g);
    IK(this.m);
    var d = this.m.a
      , e = d.j();
    Bi(function() {
        e.focus();
        var f = d.Z().length;
        if (qw(e))
            e.selectionStart = f,
            e.selectionEnd = f;
        else if (rw()) {
            f = uw(e, f);
            var g = e.createTextRange();
            g.collapse(!0);
            g.move("character", f);
            g.select()
        }
    }, 0)
}
;
var WK = function(a) {
    var b = DATA.DisplayLanguage;
    this.g = Dm.M();
    this.F = M.M();
    this.b = a;
    this.h = TK[1];
    this.a = UK[1];
    this.o = E("tlid-promo-notification-link", this.b);
    this.c = b;
    VK(this)
}
  , XK = function(a, b) {
    b ? (pm(a.F, a.a),
    a.g.log("bbarshow", {
        hl: a.c,
        type: a.h
    })) : V(a.b, "hidden", !0)
}
  , VK = function(a) {
    H(a.o, "click", function() {
        XK(this, !1);
        qm(this.F, this.a);
        this.g.log("bbarlm", {
            hl: this.c,
            type: this.h
        })
    }, !1, a)
}
  , UK = {
    1: 20
}
  , TK = {
    1: "hiring"
};
var YK = function(a, b) {
    this.a = a;
    this.F = b;
    a: {
        b = DATA.Messages.LEARN_MORE_ABOUT_THIS;
        var c = ""
          , d = "";
        28 > a.length && (c = DATA.Messages.LEARN_MORE_ABOUT.indexOf("%1$s"),
        -1 != c && (b = DATA.Messages.LEARN_MORE_ABOUT.slice(0, c),
        d = DATA.Messages.LEARN_MORE_ABOUT.slice(c + 4, DATA.Messages.LEARN_MORE_ABOUT.length)),
        c = a);
        a = Sp(tK, {
            xn: b,
            Cn: c,
            yn: d,
            ke: DATA.Messages.TRY_IT.toUpperCase(),
            Ym: DATA.Messages.SEARCH_IN_BROWSER,
            La: DATA.Messages
        });
        break a;
        throw Error("Missing render function for GSA interstitial type gsaIntGsaWeb");
    }
    this.v = a;
    a: {
        break a;
        throw Error("Missing Promotion for GSA interstitial type gsaIntGsaWeb");
    }
}
  , $K = function(a, b) {
    hg(a.v);
    a.v = null;
    ZK(b)
};
YK.prototype.h = function() {
    $K(this, "dismissbg")
}
;
YK.prototype.g = function() {
    qm(this.F, 21);
    hI();
    $K(this, "accept");
    Hm(cI, "/translate/uc?ua=dismiss&uav=searchgsa");
    fI(this.a, 2)
}
;
YK.prototype.c = function() {
    qm(this.F, 22);
    hI();
    $K(this, "webapp");
    Hm(cI, "/translate/uc?ua=dismiss&uav=gsaint");
    gI(this.a)
}
;
YK.prototype.b = function() {
    var a = this.F;
    N(a, om(a, 74, 21));
    hI();
    $K(this, "dismiss")
}
;
var ZK = function(a) {
    Im(cI, "webapp", "gsaIntGsaWeb", a, void 0);
    Bh("gsa", "gsaIntGsaWeb:" + a, "", 1)
};
var bL = function(a) {
    this.a = a;
    this.b = (new Date).getTime();
    aL(this, 1)
}
  , aL = function(a, b) {
    Bi(function() {
        (new Date).getTime() - this.b > 500 * b + 200 ? this.a(!0) : 8 > b ? aL(this, b + 1) : this.a(!1)
    }, 500, a)
};
var cL = function(a, b, c, d, e, f, g, h, l) {
    K.call(this);
    this.ra = a;
    this.v = b;
    this.o = c;
    this.a = new zF(d,e,f,g);
    this.nb = h;
    this.b = null;
    a = D("starbutton", this.j());
    null != a && (this.b = new Ht,
    this.b.ia(a),
    qH(a),
    H(this.b, "action", this.ba, !1, this),
    a = this.b,
    a.b = l || !1,
    Gt(a));
    this.c = M.M()
};
ka(cL, K);
cL.prototype.j = function() {
    return this.v
}
;
cL.prototype.ve = function() {
    return this.a.oa()
}
;
var dL = function(a) {
    if (a.v.parentElement && a.v.parentElement.childNodes)
        for (var b = a.v.parentElement.childNodes, c = 0; c < b.length; c++)
            if (b[c] == a.v)
                return c;
    return -1
};
cL.prototype.Za = function() {
    return this.a.Za()
}
;
cL.prototype.ba = function() {
    if (!DATA.InChina) {
        var a = null != this.b && this.b.b ? "unst" : "st"
          , b = new Xm
          , c = {};
        b.g((c.op = "star",
        c.sl = this.a.Qa(),
        c.tl = this.ve(),
        c.text = this.a.a,
        c.page = this.o,
        c));
        kI(a, cI, this.Ya.bind(this), Fa, b.toString())
    }
}
;
cL.prototype.Ya = function() {
    if (null != this.b) {
        var a = !(null != this.b && this.b.b);
        if (iG(this.nb, this.a, a ? 0 : 1)) {
            var b = this.b;
            b.b = a;
            Gt(b);
            eI(a ? "star" : "unstar", this.ra, AF(this.a), this.a.oa(), this.a.a);
            if ("home" == this.o) {
                b = this.c;
                a = O(b, a ? 67 : 180);
                var c = b.a.a;
                if (null != c) {
                    var d = new Nk;
                    C(d, 1, c || []);
                    mf(a, 83, d)
                }
                N(b, a)
            } else
                "history" == this.o ? (b = this.c,
                N(b, Am(b, 64, dL(this), a))) : "saved" == this.o && (cI.log("sli=us", {}),
                b = this.c,
                N(b, Cm(b, 46)))
        }
    }
}
;
var iL = function(a, b, c, d, e, f) {
    cL.call(this, "main", eL(f), "home", "", {}, "", "", b);
    var g = this;
    a.appendChild(this.j());
    this.V = fL();
    this.L = new ws("",void 0,4);
    this.L.Oa(16, !0);
    a = E("res-tts", this.j());
    this.L.ia(a);
    qH(a);
    this.K = new bv(this.L,"&client=webapp",2,!0,!0,DATA.Messages.LISTEN,DATA.Messages.VOICE_OUTPUT_UNAVAILABLE);
    H(this.K, "userInteractionWhileDisabled", this.Pa, !1, this);
    this.ma = c;
    this.sa = d;
    this.R = null;
    DATA.InChina || (this.R = E("tlid-trans-verified-button", this.j()),
    Ah(this.R, function() {
        g.dispatchEvent("verifiedTranslationButtonClicked")
    }));
    this.G = this.w = null;
    gL(this);
    this.ya = e;
    this.N = new $J(fb(D("tlid-result-transliteration-container", this.j())),2);
    this.C = new Ov("");
    this.C.ia(D("contribute-target", this.j()));
    this.h = null;
    this.Na = new np("webapp");
    this.g = this.m = null;
    this.T = this.Y = !1;
    this.bb = E("tlid-translation-gender-indicator", this.j());
    this.aa = new $z(hL(this),"trans",14,"webapp",void 0,void 0,this.X.bind(this));
    new WG(hL(this),Array.from(Mf("tlid-copy-target", this.j())))
};
ka(iL, cL);
iL.prototype.W = function() {
    this.aa.Ja();
    hg(this.j());
    cL.prototype.W.call(this)
}
;
iL.prototype.Ba = function() {
    var a = this.a.Qa()
      , b = this.a.oa()
      , c = this.a.a.length
      , d = DATA.DisplayLanguage
      , e = hL(this);
    Yz(e);
    e = lz(window).toString();
    e = Zz(e);
    var f = "";
    try {
        document.execCommand("copy") ? (f = "success",
        oo && this.g ? gm(M.M(), Bl(this.g, 0, 0)) : gm(M.M()),
        this.dispatchEvent("translationCopied")) : (f = "failure",
        jm(M.M(), 157))
    } catch (g) {
        f = "error",
        jm(M.M(), 158)
    } finally {
        hg(e),
        Im(cI, "webapp", "copy", f, {
            sl: a,
            tl: b,
            hl: d,
            ql: c
        })
    }
}
;
iL.prototype.Pa = function() {
    this.dispatchEvent("userInteractionWithDisabledVoiceOutput")
}
;
var jL = function(a, b, c) {
    Im(cI, "webapp", a, b, c);
    Bh("gsa", a + ":" + b, "", 1)
}
  , gL = function(a) {
    kL(a);
    lL(a, "copybutton", a.Ba);
    lL(a, "tlid-share-translation-button", a.bi);
    lL(a, "tlid-suggest-edit-button", a.di);
    if (a.V) {
        var b = D("result-search", a.j());
        H(b, "click", function() {
            var c = a.c
              , d = O(c, 224);
            C(d, 52, "");
            N(c, d);
            jL("search" + DATA.CampaignTrackerId, "click", {
                sl: a.a.Qa(),
                tl: a.a.oa(),
                hl: DATA.DisplayLanguage,
                ql: a.a.a.length
            });
            c = a.Za();
            switch (DATA.ActionAfterSearch) {
            case 0:
                c = new YK(c,a.c);
                document.body.appendChild(c.v);
                ZK("show");
                pm(c.F, 21);
                iI(v(c.h, c));
                d = c.g;
                var e = c.c;
                H(D("gsa-int-button", c.v), "click", d, !1, c);
                H(D("gsa-int-second-choice", c.v), "click", e, !1, c);
                H(D("clear", c.v), "click", c.b, !1, c);
                break;
            case 2:
                gI(c);
                break;
            case 3:
                fI(c, 3);
                break;
            default:
                throw Error("Invalid value for DATA.ActionAfterSearch");
            }
        }, !1, a)
    }
}
  , kL = function(a) {
    var b = E("moremenu", a.j());
    a.G = new sx;
    a.G.ia(b);
    b = E("morebutton", a.j());
    a.w = new Bx(null,a.G);
    a.w.ia(b);
    Dr(a.w, DATA.Messages.MORE);
    Gx(a.w, new Up(-8,8,0,8));
    H(b, "click", function() {
        var c = this.c;
        N(c, O(c, 265));
        jL("more", "click");
        this.w.Wa(!0)
    }, !1, a);
    qH(b);
    b = new nx(DATA.Messages.SUGGEST_AN_EDIT);
    b.Ka();
    H(b, "action", a.di, !1, a);
    T(b.j(), "tlid-suggest-edit-menu-item");
    a.G.gb(b, !0);
    b = new nx(DATA.Messages.SHARE_TRANSLATION);
    b.Ka();
    H(b, "action", a.bi, !1, a);
    T(b.j(), "tlid-share-translation-menu-item");
    a.G.gb(b, !0)
}
  , lL = function(a, b, c) {
    b = D(b, a.j());
    if (b) {
        var d = new ws("");
        d.ia(b);
        H(d, "action", c, !1, a);
        qH(b)
    }
}
  , mL = function(a) {
    var b = new Or("Clear text",new Jt("clear-button"));
    b.ia(D("gt-clear", a.j()));
    b.setVisible(!1);
    var c = Yf("DIV");
    W(c, !1);
    fg(c, a.C.j());
    var d = new vE(DATA.Messages.SUBMIT_TRANSLATION_SUGGESTION,DATA.Messages.CANCEL_EDITS,DATA.Messages.EDIT_TRANSLATION_DISCLAIMER,a.sa,!0);
    d.ia(c);
    c = hL(a);
    b = new tE(a.C,D("gt-edit", a.j()),D("result", a.j()),a.j(),a.N.a,b);
    var e = void 0
      , f = void 0
      , g = !1
      , h = !0;
    gt() && (e = DATA.LowConfidenceThreshold,
    f = DATA.MaxRoundTripResults,
    g = !0,
    h = !1,
    iE = DATA.Messages.IMPROVE_TRANSLATION);
    a.h = new xE(void 0,g,void 0,e,f,d,b,void 0,h);
    a.h.ia(c);
    d = a.h;
    d.N.c = "webapp";
    d.ya = "webapp";
    DATA.EnablePhraseHighlighting && (d = a.h,
    c = a.ya,
    d.ba = c,
    d.b.C = c);
    H(a.h, "action", a.Kk, !1, a)
}
  , nL = function(a) {
    var b = a.m ? a.m.yb() : void 0;
    GE(a.h, b, a.a.Qa(), a.a.oa(), DATA.DisplayLanguage) || (b = Ed(a.Za()),
    Ud(hL(a), b))
};
iL.prototype.update = function(a, b, c, d, e, f) {
    var g = this;
    this.a.a = a;
    BF(this.a, b);
    this.a.o = c;
    "auto" === c.toLowerCase() && (this.a.h = b.src);
    this.a.m = d;
    this.m = e || null;
    this.g = oo && f ? f : null;
    oL(this, d, this.m);
    f = D("result-shield-container", this.j());
    var h = kc(d);
    V(f, "result-rtl", h);
    hL(this).lang = d;
    this.C && Yp(this.C.j(), "direction", h ? "rtl" : "ltr");
    this.h || mL(this);
    Xu(a) ? (f = new Pm(n.location.href.split("#")[0]),
    Tm(f, "translate"),
    fn(f, "sl", [c ? c : "auto"]),
    fn(f, "tl", [d]),
    fn(f, "u", [a]),
    hL(this).appendChild(Rp(rK, {
        Tm: f,
        Um: a
    }))) : oo && this.g ? (pL(this, pI(Bl(this.g, 0, 0))),
    G(hL(this), this.Za())) : (G(hL(this), this.Za()),
    this.m && this.h && nL(this));
    bK(this.N, b);
    (a = D("copybutton", this.j())) && W(a, !0);
    (a = D("starbutton", this.j())) && W(a, !0);
    (a = D("result-search", this.j())) && W(a, !0);
    this.V && (um(this.c),
    jL("search" + DATA.CampaignTrackerId, "show"),
    this.Y && !this.T && Bi(function() {
        return qL(g)
    }, 0));
    this.R && null != e && (W(this.R, av(e)),
    av(e) && cI.log("community-promo", "show-webapp-served-community"))
}
;
var qL = function(a) {
    a.T = !0;
    Hm(Dm.M(), "/translate/uc?ua=dismiss&uav=stooltip");
    var b = F("DIV");
    G(b, DATA.Messages.SEARCH_THIS_TRANSLATION);
    Yp(b, "white-space", "nowrap");
    var c = D("result-search-icon", a.j())
      , d = new tG;
    d.c.b = c;
    yG(d);
    xG(d, b);
    uG(d, 0, 0, -20);
    d.c.Ef = !0;
    vG(d, !0);
    d.h = !0;
    d.Ua();
    T(d.j(), "trans-bubble");
    d.setVisible(!0);
    Im(cI, "webapp", "searchtooltip", "show");
    Bh("gsa", "searchtooltip:show", "", 1);
    H(D("jfk-bubble-closebtn", d.j()), "click", function() {
        Im(cI, "webapp", "searchtooltip", "dismiss");
        Bh("gsa", "searchtooltip:dismiss", "", 1)
    }, !1, a);
    window.onresize = function() {
        d.lc || yG(d)
    }
};
iL.prototype.Za = function() {
    return oo && this.g ? this.g.rb() : cL.prototype.Za.call(this)
}
;
var hL = function(a) {
    return E("tlid-translation", a.j())
};
iL.prototype.X = function() {
    return this.g ? Bl(this.g, 0, 0) : void 0
}
;
var pL = function(a, b) {
    G(a.bb, b)
}
  , rL = function(a, b, c) {
    if (!(xd() && re() && se(9)))
        var d = setTimeout(function() {
            c(!0);
            new bL(function(f) {
                f && c(!1)
            }
            )
        }, 200)
          , e = H(document, b, function() {
            clearTimeout(d);
            oh(e)
        }, !1, a)
};
k = iL.prototype;
k.bi = function() {
    var a = this;
    D("share-module", this.j()) && hg(D("share-module", this.j()));
    var b = Ce && (!Ge || Ge && 0 <= Lc(Ur, 8)), c = sL(), d;
    DATA.Messages.SHARE_MODULE_TITLE && c && (d = DATA.Messages.SHARE_APP_NOT_INSTALLED.replace("%1$s", "WhatsApp"));
    b = Sp(sK, {
        On: this.Za(),
        La: DATA.Messages,
        Un: d,
        pk: b,
        vk: Ce,
        Ll: Ge || He
    });
    gg(D("result-footer", this.j()), b, 0);
    At(this.ma, this.a.Qa(), this.a.oa(), this.a.a, !1, "share");
    b = D("tlid-share-panel", this.j());
    T(b, "show-share-panel");
    iI(v(this.gi, this));
    Pf(b, {
        "aria-hidden": !1
    });
    b.focus();
    H(b, "keydown", function(e) {
        27 === e.keyCode && (hI(),
        a.gi())
    }, !1);
    Im(cI, "webapp", "share", "share", {
        sl: this.a.Qa(),
        tl: this.a.oa(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    vm("share");
    b = D("share-panel-wrap", this.j());
    b = Lf(document, "a", "", b);
    z(b, function(e) {
        H(e, "click", v(this.Ok, this, e), !1, this)
    }, this)
}
;
k.gi = function() {
    var a = D("tlid-share-panel", this.j());
    U(a, "show-share-panel");
    Pf(a, {
        "aria-hidden": !0
    });
    sL() && (a = Jf("not_installed")) && tq(a) && W(a, !1);
    At(this.ma, this.a.Qa(), this.a.oa(), this.a.a, !1)
}
;
k.Ok = function(a) {
    a = a.className.split(" ")[0];
    Im(cI, "webapp", "share", a, {
        sl: this.a.Qa(),
        tl: this.a.oa(),
        hl: DATA.DisplayLanguage,
        ql: this.a.a.length
    });
    vm(a);
    var b = sL();
    if (b) {
        var c = Jf("not_installed");
        c && tq(c) && "whatsapp" !== a ? W(c, !1) : "whatsapp" === a && rL(this, b, function(d) {
            d ? (d = c.style,
            d.position = "relative",
            B && !Re("8") ? (d.zoom = "1",
            d.display = "inline") : d.display = "inline-block") : W(c, !1)
        })
    }
}
;
k.di = function() {
    Im(cI, "webapp", "editclk", "1", {
        sl: this.a.Qa(),
        tl: this.a.oa()
    });
    var a = this.c;
    N(a, O(a, 26));
    KE(this.h)
}
;
k.Kk = function(a) {
    var b = HE(a.target);
    a = a.target.ve();
    b != this.Za() && W(D("trans-verified-button", this.j()), !1);
    CF(this.a, b);
    rp(this.Na, b, a, function(c) {
        aK(this.N, c)
    }
    .bind(this));
    this.K.update(b, a);
    this.dispatchEvent("resultTextEdited")
}
;
var sL = function() {
    var a = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    }, b;
    for (b in a)
        if (b in document) {
            var c = a[b];
            break
        }
    return c
}
  , oL = function(a, b, c) {
    a.K.update(a.Za(), b, c, tL(b), a.X())
}
  , tL = function(a) {
    for (var b = "", c = Ob(DATA.TargetLanguageCodeNameList), d = 0; d < c.length; d++)
        c[d].Code === a && (b = c[d].Name);
    return b
};
function fL() {
    var a = re() && se(9);
    return DATA.EnableSearchIcon && a
}
function eL(a) {
    a = void 0 === a ? {} : a;
    var b = void 0 === a.hg ? gt() || Ze && Ak(43) || re() && se(10) : a.hg
      , c = void 0 === a.jg ? fL() : a.jg;
    return Sp(qK, {
        La: DATA.Messages,
        im: "Copy translation",
        lm: "Star translation",
        hg: b,
        jg: c,
        Hc: void 0 === a.Hc ? !DATA.InChina : a.Hc
    })
}
;var uL = function(a) {
    var b = this;
    this.v = a;
    this.a = !1;
    this.b = E("tlid-gender-promo-dismiss-button", this.v);
    H(this.b, "click", function() {
        b.a = !0;
        b.setVisible(!1);
        Hm(Dm.M(), "/translate/uc?ua=dismiss&uav=genderpromo");
        var c = M.M()
          , d = O(c, 341);
        N(c, d)
    })
};
uL.prototype.setVisible = function(a, b) {
    b = void 0 === b ? !1 : b;
    a && !this.a ? (V(this.v, "gender-promo-is-single-word", b),
    V(this.v, "gender-promo-visible", !0),
    a = M.M(),
    b = O(a, 340),
    N(a, b)) : V(this.v, "gender-promo-visible", !1)
}
;
var wL = function(a, b, c, d, e, f) {
    K.call(this);
    this.v = a;
    this.b = b;
    this.R = c;
    this.K = d;
    this.N = e;
    this.L = E("tlid-result-error", this.b);
    this.h = E("tlid-translation-error", this.v);
    this.C = E("tlid-translation-error-message", this.v);
    this.G = D("tlid-result-view-error-button", this.v) || null;
    this.w = D("tlid-result-container-error-button", this.b) || null;
    this.g = E("gt-lc", this.v);
    this.m = new zw(DATA.Messages.COMMUNITY_CARD_LEARN_MORE,"",DATA.Messages.THANKS_FOR_CONTRIBUTING,DATA.Messages.CONTRIBUTION_BENEFIT,DATA.InChina ? "" : "/community?source=webapp-user-edit","webapp-user-edit",15);
    this.m.ia(E("cp-promo-wrapper", this.v));
    this.o = f ? new uL(f) : null;
    this.c = null;
    this.a = [];
    this.F = M.M();
    vL(this)
};
ka(wL, K);
wL.prototype.W = function() {
    xL(this);
    this.v = null;
    K.prototype.W.call(this)
}
;
var vL = function(a) {
    null != a.w && Ah(fb(a.w), function() {
        a.dispatchEvent("g")
    });
    null != a.G && Ah(fb(a.G), function() {
        a.dispatchEvent("g")
    })
}
  , yL = function(a) {
    if (!a.a[0])
        throw Error("getTranslationData called without calling hasTranslationData first");
    return a.a[0].a
};
wL.prototype.j = function() {
    return this.v
}
;
var zL = function(a) {
    return oo && oI(a.c) ? qI(a.c).map(function(b) {
        return b.rb()
    }).join("\n") : a.a[0] ? yL(a).Za() : ""
};
wL.prototype.update = function(a, b, c, d, e) {
    var f = this;
    xL(this);
    this.c = e || null;
    hI();
    W(this.h, !1);
    AL(this, 2);
    U(this.b, "result-error");
    oo && oI(this.c) && qo(J(this.c, 2), d) ? (BL(this, !0, !("tr" === J(this.c, 2) && "en" === d)),
    e = qI(this.c),
    zm(this.F, e),
    this.a = e.map(function(g, h) {
        h = CL(f, {
            Hc: 0 === h
        });
        h.update(a, b, c, d, f.c, g);
        return h
    })) : (BL(this, !1),
    e = CL(this),
    e.update(a, b, c, d, this.c),
    this.a = [e]);
    DL(this, !1);
    W(this.g, !0)
}
;
var CL = function(a, b) {
    b = new iL(a.b,a.R,a.K,a.m,a.N,b);
    b.Bd(a);
    return b
}
  , AL = function(a, b) {
    switch (b) {
    case 1:
        U(a.b, "result-error");
        T(a.b, "translating");
        a = ba(a.a);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            b.L.qa(!1);
            var c = Bg(hL(b));
            0 != c.length && G(hL(b), c + "...")
        }
        break;
    case 2:
        U(a.b, "translating")
    }
}
  , xL = function(a) {
    for (var b = ba(a.a), c = b.next(); !c.done; c = b.next())
        c = c.value,
        c.K.stop(),
        c.Ja();
    a.a = [];
    a.c = null
}
  , EL = function(a, b, c) {
    if (a.a[0] && DF(yL(a), b)) {
        for (var d = ba(a.a), e = d.next(); !e.done; e = d.next())
            e = e.value,
            null != e.b && (e = e.b,
            e.b = c,
            Gt(e));
        b = b.c;
        null != b && (yL(a).c = b)
    }
}
  , FL = function(a) {
    a = ba(a.a);
    for (var b = a.next(); !b.done; b = a.next())
        b.value.Y = !0
}
  , DL = function(a, b) {
    V(a.b, "empty", b);
    V(a.v, "empty", b)
}
  , BL = function(a, b, c) {
    V(a.b, "gendered-translations", b);
    a.o && a.o.setVisible(b, c)
};
var HL = function(a, b, c) {
    var d = DATA.DisplayLanguage
      , e = DATA.Messages
      , f = this;
    this.a = a;
    this.C = E("tlid-survey-contents", this.a);
    this.L = E("tlid-dismiss-survey", this.a);
    this.o = E("tlid-before-survey", this.a);
    this.h = E("tlid-after-survey", this.a);
    this.m = E("tlid-more-feedback", this.a);
    this.R = GL(this, e);
    z(this.R, function(g) {
        return f.C.appendChild(g)
    });
    this.K = d;
    this.c = c;
    this.Fa = b;
    this.F = M.M();
    this.g = Dm.M();
    H(this.L, "click", v(this.b, this, 0), !1, this);
    H(this.m, "click", this.w, !1, this)
}
  , GL = function(a, b) {
    b = [[b.HAPPINESS_SURVEY_OPTION1, 0], [b.HAPPINESS_SURVEY_OPTION2, 1], [b.HAPPINESS_SURVEY_OPTION3, 2], [b.HAPPINESS_SURVEY_OPTION4, 3], [b.HAPPINESS_SURVEY_OPTION5, 4]];
    for (var c = [], d = 0; d < b.length; d++) {
        var e = b[d]
          , f = e[1];
        e = Sp(uK, {
            message: e[0],
            Hm: f
        });
        c.push(e);
        H(e, "click", v(a.G, a, f), !1, a)
    }
    return c
};
HL.prototype.G = function(a) {
    var b = this.F
      , c = O(b, 262)
      , d = new el;
    C(d, 1, a + 1);
    mf(c, 72, d);
    N(b, c);
    IL(this, "select" + a);
    W(this.o, !1);
    W(this.h, !0);
    this.b(1E4)
}
;
HL.prototype.w = function() {
    this.b(0);
    this.Fa.call()
}
;
var IL = function(a, b) {
    var c = {}
      , d = a.c.a
      , e = a.c.c;
    "auto" === d && "" !== e && (d = e);
    c.sl = d;
    c.tl = a.c.b;
    c.hl = a.K;
    c.e = b;
    a.g.log("survey", c)
};
HL.prototype.b = function(a) {
    var b = this;
    Hm(this.g, "/translate/uc?ua=dismiss&uav=survey");
    Bi(function() {
        (new gF(b.a,300)).play()
    }, null != a ? a : 0, this)
}
;
var KL = function(a) {
    K.call(this);
    this.F = M.M();
    this.v = a;
    this.h = E("tlid-toast-message", this.v);
    this.c = E("tlid-toast-action", this.v);
    a = Nf("A", "tlid-toast-action-link", this.c);
    this.b = fb(a);
    this.o = E("tlid-toast-action-text", this.c);
    this.g = new Qr(this.m,5E3,this);
    this.a = null;
    JL(this)
};
ka(KL, K);
var ML = function(a, b) {
    T(a.v, "with-message");
    U(a.v, "with-action");
    G(a.h, b);
    LL(a)
}
  , LL = function(a) {
    a.g.jb() || ((new hF(a.v,218)).play(),
    a = a.g,
    a.jb() || a.start(void 0))
};
KL.prototype.m = function() {
    (new gF(this.v,218)).play()
}
;
var JL = function(a) {
    H(a.b, "click", v(function() {
        null != a.a && a.dispatchEvent(a.a)
    }, a), !1, a)
};
var NL = function() {};
ka(NL, sr);
NL.prototype.Uc = function(a) {
    return a && "SPAN" == a.tagName ? !0 : !1
}
;
var OL = function(a) {
    NK.call(this);
    this.g = a;
    this.m = new Dm;
    this.m.c = "webapp";
    this.c = null
};
ka(OL, NK);
OL.prototype.b = function() {
    return "cmty-ctr"
}
;
OL.prototype.Rc = function(a) {
    if (!a || "DIV" != a.tagName)
        return !1;
    a = D("cmty-ctr", a);
    if (!a || "DIV" != a.tagName)
        return !1;
    var b = D("snck-msg", a);
    return b && "SPAN" == b.tagName ? (a = D("cmty-btn", a)) && "SPAN" == a.tagName ? !0 : !1 : !1
}
;
OL.prototype.ea = function() {
    D("snck-msg", this.j()).textContent = MSG_VERIFIED_BY_COMMUNITY;
    var a = D("cmty-btn", this.j());
    a.textContent = MSG_JOIN;
    this.c = new Or(null,new NL);
    this.c.ia(a);
    H(this.c, "action", this.w, !1, this)
}
;
OL.prototype.w = function() {
    this.m.log("community-promo", "click-" + this.g);
    this.setVisible(!1);
    $d("/community?source=" + this.g)
}
;
Vi("wireless.events.ListenerCoalescer");
var PL = function(a) {
    Al(this, a, 2)
};
w(PL, zl);
var QL = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    }
};
PL.prototype.a = function() {
    return QL
}
;
PL.prototype.Ea = function() {
    return Dh(this, 1)
}
;
var RL = function(a) {
    Al(this, a, 4)
};
w(RL, zl);
var SL = {
    language: {
        H: 0,
        J: !1
    },
    state: {
        H: 1,
        J: !1
    },
    tool_id: {
        H: 2,
        J: !1
    },
    element_id: {
        H: 3,
        J: !1
    }
};
RL.prototype.a = function() {
    return SL
}
;
RL.prototype.Ea = function() {
    return Dh(this, 1)
}
;
var TL = function(a) {
    Al(this, a, 19)
};
w(TL, zl);
var UL = {
    vkeyboard: {
        H: 0,
        wa: function(a) {
            return Gl(PL, a)
        },
        va: function(a) {
            return Fl(new PL(a))
        },
        J: !0
    },
    source_romanization: {
        H: 1,
        wa: function(a) {
            return Gl(PL, a)
        },
        va: function(a) {
            return Fl(new PL(a))
        },
        J: !0
    },
    result_romanization: {
        H: 2,
        wa: function(a) {
            return Gl(PL, a)
        },
        va: function(a) {
            return Fl(new PL(a))
        },
        J: !0
    },
    input_t13n: {
        H: 3,
        wa: function(a) {
            return Gl(PL, a)
        },
        va: function(a) {
            return Fl(new PL(a))
        },
        J: !0
    },
    default_source_romanization: {
        H: 4,
        J: !1
    },
    default_result_romanization: {
        H: 5,
        J: !1
    },
    dismiss_chrome_promotion: {
        H: 6,
        J: !1
    },
    source_example: {
        H: 7,
        J: !1
    },
    result_example: {
        H: 8,
        J: !1
    },
    input_tool: {
        H: 9,
        wa: function(a) {
            return Gl(RL, a)
        },
        va: function(a) {
            return Fl(new RL(a))
        },
        J: !0
    },
    dismiss_phrasebook_promo: {
        H: 10,
        J: !1
    },
    dismiss_survey: {
        H: 11,
        J: !1
    },
    dismiss_gsa_pure_ad: {
        H: 12,
        J: !1
    },
    dismiss_search_tooltip: {
        H: 13,
        J: !1
    },
    dismiss_gsa_interstitial: {
        H: 14,
        J: !1
    },
    dismiss_gsa_prompt: {
        H: 15,
        J: !1
    },
    search_direct_gsa: {
        H: 16,
        J: !1
    },
    dismiss_android_translate: {
        H: 17,
        J: !1
    },
    dismiss_android_translate5: {
        H: 18,
        J: !1
    }
};
TL.prototype.a = function() {
    return UL
}
;
var VL = function(a) {
    Al(this, a, 2)
};
w(VL, zl);
var WL = {
    source_language: {
        H: 0,
        J: !1
    },
    target_language: {
        H: 1,
        J: !1
    }
};
VL.prototype.a = function() {
    return WL
}
;
VL.prototype.ve = function() {
    return J(this, 1)
}
;
var XL = function(a) {
    Al(this, a, 6)
};
w(XL, zl);
var YL = {
    recent_sl: {
        H: 0,
        J: !0
    },
    recent_tl: {
        H: 1,
        J: !0
    },
    recent_lp: {
        H: 2,
        wa: function(a) {
            return Gl(VL, a)
        },
        va: function(a) {
            return Fl(new VL(a))
        },
        J: !0
    },
    sel_auto: {
        H: 3,
        J: !1
    },
    default_sl: {
        H: 4,
        J: !1
    },
    default_tl: {
        H: 5,
        J: !1
    }
};
XL.prototype.a = function() {
    return YL
}
;
var ZL = function(a) {
    Al(this, a, 3)
};
w(ZL, zl);
var $L = {
    recent_lang: {
        H: 0,
        wa: function(a) {
            return Gl(XL, a)
        },
        va: function(a) {
            return Fl(new XL(a))
        },
        J: !1
    },
    eotf: {
        H: 1,
        J: !1
    },
    stickiness_data: {
        H: 2,
        wa: function(a) {
            return Gl(TL, a)
        },
        va: function(a) {
            return Fl(new TL(a))
        },
        J: !1
    }
};
ZL.prototype.a = function() {
    return $L
}
;
var aM = function(a, b, c) {
    a.timeOfStartCall = (new Date).getTime();
    var d = c || n
      , e = d.document
      , f = Ca(d);
    f && (a.nonce = f);
    if ("help" == a.flow) {
        var g = Ea("document.location.href", d);
        !a.helpCenterContext && g && (a.helpCenterContext = g.substring(0, 1200));
        g = !0;
        if (b && JSON && JSON.stringify) {
            var h = JSON.stringify(b);
            (g = 1200 >= h.length) && (a.psdJson = h)
        }
        g || (b = {
            invalidPsd: !0
        })
    }
    b = [a, b, c];
    d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
    c = a.serverUri || "//www.google.com/tools/feedback";
    if (g = d.GOOGLE_FEEDBACK_START)
        g.apply(d, b);
    else {
        d = c + "/load.js?";
        for (var l in a)
            b = a[l],
            null != b && !Ma(b) && (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
        a = Fg(If(e), "SCRIPT");
        f && a.setAttribute("nonce", f);
        Xd(a, Hw(d));
        e.body.appendChild(a)
    }
};
za("userfeedback.api.startFeedback", aM);
var fM = PA("showhistory")
  , gM = PA("showinstant")
  , hM = PA("showsaved")
  , iM = PA("showfeedback")
  , jM = PA("showlanguagepicker")
  , kM = PA("urltranslation")
  , yM = function(a, b) {
    var c = lM
      , d = mM
      , e = nM
      , f = oM
      , g = this;
    this.K = rl();
    this.F = M.M();
    am(this.F);
    this.K.c = c;
    this.K.g = d;
    this.w = Dm.M();
    this.nb = new eG(this.jj.bind(this),this.oj.bind(this),this.Rn.bind(this),this.w);
    this.Ya = a;
    this.c = b;
    this.c.c = this;
    this.Cj = e;
    this.Ej = f;
    this.Zc = new np("webapp");
    this.fd = new Tu;
    this.na = new cw(v(this.Zn, this),!0);
    this.L = new AA(this.na);
    a = pM() ? "\u5373\u523b\u4e0b\u8f7dGoogle\u7ffb\u8bd1 app\uff01" : .5 > Math.random() ? DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK : DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ;
    this.$n = Xy.M();
    qM(this);
    this.v = Sp(nK, {
        Nj: a,
        Uj: gM,
        Yj: c,
        Zj: d,
        dk: DATA.InChina && "zh-CN" === DATA.DisplayLanguage,
        ek: !DATA.InChina,
        gk: DATA.DisplayHappinessSurvey,
        hk: DATA.EnableHiringPromo,
        Sa: DATA.DisplayLanguage,
        ik: !DATA.InChina,
        lk: DATA.EnableCommunityInstant && DATA.SignedIn,
        nk: DATA.CompareProdTrans,
        qk: gt(),
        rk: DATA.UrlTranslation,
        Kl: fM,
        uq: DATA.InChina,
        La: DATA.Messages,
        jm: DATA.Messages.NO_THANKS.toUpperCase(),
        mm: DATA.Messages.TRY_THE_APP.toUpperCase(),
        Om: pM() || rM(),
        Pm: !gt(),
        Qm: sM(),
        Rm: DATA.SignedIn,
        Vm: hM,
        jn: Ob(DATA.SourceLanguageCodeNameList),
        An: Ob(DATA.TargetLanguageCodeNameList),
        Wn: kM
    });
    a = kc(DATA.DisplayLanguage);
    V(document.body, "rtl-display-lang", a);
    this.g = E("tlid-homepage", this.v);
    T(document.body, "displaying-homepage");
    this.R = new WJ(E("tlid-history-page", this.v),this.nb);
    this.ma = DATA.EnableCommunityInstant && DATA.SignedIn ? new LK(E("tlid-instant-page", this.v)) : null;
    this.Vb = this.b = null;
    this.$d = E("tlid-language-picker-page", this.v);
    this.ee = E("tlid-source-target", this.v);
    this.a = new DK(E("tlid-input", this.g),this.ee,c,d,this.na,this.L);
    this.kj = new XD(this.a.a.j());
    this.qh = new QK;
    this.qh.ia(D("ntfcn", this.a.j()));
    this.hd = new OL("webapp-served-community");
    this.hd.ia(D("cmty", this.a.j()));
    a = this.vb = null;
    DATA.EnableGenderedTranslationsPromo && (a = Sp(pK, {
        fn: "en" === DATA.DisplayLanguage,
        La: DATA.Messages
    }));
    this.h = new wL(E("tlid-result-view", this.v),E("tlid-results-container", this.ee),this.nb,this.c,this.kj,a);
    this.bb = this.Wb = null;
    if (this.sa = D("tlid-input-button-container", this.g))
        this.Wb = E("tlid-input-button-text", this.sa),
        this.bb = E("tlid-input-button-docs", this.sa);
    (b = D("tlid-app-download-bar", this.g)) && new lH(b);
    this.ae = null;
    DATA.CompareProdTrans && (this.ae = E("tlid-prod-translation", this.g));
    this.aa = null;
    DATA.CompareProdTrans && (this.aa = new mH(E("tlid-brain-logos-container", this.g)));
    this.X = null;
    this.G = new kv(DATA.DisplayLanguage,this.Zc,this,!0);
    this.Fd = new Js(DATA.DisplayLanguage,[DATA.Messages.COMMON_TRANSLATION, DATA.Messages.UNCOMMON_TRANSLATION, DATA.Messages.RARE_TRANSLATION, MSG_N_MORE_TRANSLATIONS_LABEL],!0,!1,!0,DATA.Messages.TRANSLATION_FREQUENCY,DATA.Messages.TRANSLATION_FREQUENCY_HELP_TEXT);
    this.Ed = new Dw(DATA.DisplayLanguage,!0,!0,!0);
    this.jd = new Iw(DATA.DisplayLanguage,!0,!0);
    this.Mm = new iF(DATA.DisplayLanguage,!0,!0);
    this.ao = new VG(DATA.DisplayLanguage,!0,!0);
    this.Kb = [];
    b = {
        Ic: this.a.Ic,
        Yi: this.a.a,
        Za: function() {
            return zL(g.h)
        }
    };
    e = D("outer-wrap", this.$d);
    e.appendChild(this.a.b.j());
    e.appendChild(this.a.g.j());
    this.wb = D("tlid-language-list-toolbar", this.$d);
    this.fm = D("tlid-language-list-back-button", this.wb);
    this.nh = new ws;
    this.nh.ia(this.fm);
    this.ph = D("tlid-language-list-label", this.wb);
    this.ya = new ws;
    this.ya.ia(D("tlid-language-list-search-button", this.wb));
    this.ya.rd(DATA.Messages.SEARCH_LANGUAGES);
    BA(this.a.b, function() {
        g.T({})
    }, this);
    BA(this.a.g, function() {
        g.T({})
    }, this);
    e = this.a.b;
    f = this.a.g;
    Xb(b, {
        Ni: e,
        Wi: f,
        Ki: this.ya,
        Mi: e.G,
        Vi: f.G
    });
    DA(this.L, b);
    this.na.g(c);
    this.na.h(d);
    c = D("ovfl", this.a.j());
    this.vh = new SK(this.a,this.na,DATA.DisplayLanguage,DATA.MaxSingleQueryLength);
    this.vh.ia(c);
    this.Pa = null;
    if (c = D("tlid-character-count", this.g))
        this.Pa = new Gv(DATA.MaxSingleQueryLength,"normal","overflow"),
        this.Pa.ia(c),
        Jv(this.Pa);
    this.Dj = new vw(this.a.a,this.na,this.vh,null != this.Pa ? this.Pa : void 0);
    ww(this.Dj);
    c = D("tlid-spelling-correction", this.a.j());
    this.V = new IG(this,DATA.Messages.LANGUAGE_CORRECTION,DATA.Messages.DID_YOU_MEAN,DATA.Messages.SPELLING_AUTO_CORRECTION,DATA.Messages.SPELLING_REVERT_CORRECTION,v(this.a.b.V, this.a.b));
    this.V.ia(c);
    this.G.ia(D("gt-lc", this.h.j()));
    a && this.G.b.j().appendChild(a);
    this.G.b.gb(this.Fd, !0);
    this.G.c.gb(this.Ed, !0);
    this.G.c.gb(this.jd, !0);
    this.G.c.gb(this.ao, !0);
    this.G.c.gb(this.Mm, !0);
    this.Lm = new LD(this.a.a,!DATA.DisableOtf,v(this.Y, this, !0),v(this.Zc.m, this.Zc));
    this.Wm = new Gq(this);
    this.Wm.O(If().a, "scroll", this.lj);
    this.Me = Tf(document).a;
    this.ce = {};
    this.C || (this.C = new dB(this,"Controller"),
    fB(this.C, fM, this.Oj),
    fB(this.C, hM, this.yk),
    fB(this.C, gM, this.jk),
    fB(this.C, iM, this.Ba),
    fB(this.C, jM, this.T),
    fB(this.C, kM, this.Vn),
    eB.a.push(this.C));
    this.Vl = re() && se(9);
    pM() ? tM(this, "http://www.gstatic.cn/translate/dl/android.html", 11) : DATA.InChina || (sM() ? uM(this, "gsa-promo", "gsaAd", "gsaad", 12, Ta(Bh, "gsa", "gsaAd:show", "", 1), Ta(Bh, "gsa", "gsaAd:dismiss", "", 1), v(this.Hj, this)) : rM() ? tM(this, "https://play.google.com/store/apps/details?id=com.google.android.apps.translate&referrer=utm_source%3DMobileWebBanner%26utm_content%3DPureAd%26utm_campaign%3DTranslateAndroid&pcampaignid=Translate_022016", 9) : DATA.EnableHiringPromo && XK(new WK(E("tlid-magnet-promo", this.v)), !0));
    c = D("tlid-survey", this.v);
    this.uh = null;
    c && (this.uh = new HL(c,v(this.Ba, this),this.na),
    Bi(function() {
        var h = this.uh;
        U(h.a, "hidden");
        var l = h.F;
        N(l, O(l, 261));
        IL(h, "show")
    }, 6E4, this));
    this.m = null;
    c = E("tlid-send-feedback-link", this.v);
    H(c, "click", this.Ba, !1, this);
    this.ed = this.fe = 0;
    this.kd = this.Ne = this.o = "";
    p(DATA.RecentLanguages) && p(DATA.RecentLanguages.recent_sl) && (CB(this.a.b, DATA.RecentLanguages.recent_sl),
    CB(this.a.g, DATA.RecentLanguages.recent_tl));
    this.Na = "";
    this.N = new KL(E("tlid-toast", this.v));
    vM();
    wM(this);
    xM(this)
}
  , wM = function(a) {
    a.Wb && Ah(a.Wb, function() {
        var c = yt(a.c);
        $s(c, a.na.a, a.na.b);
        a.c.a(c.toString(), !0);
        zM(a)
    });
    a.bb && Ah(a.bb, function() {
        var c = yt(a.c)
          , d = a.na.a
          , e = a.na.b;
        Ws(c);
        c.a.set("op", "docs");
        null != d && c.a.set("sl", d);
        null != e && c.a.set("tl", e);
        a.c.a(c.toString(), !0);
        AM(a)
    });
    a.sa && H(a.sa, "keydown", function(c) {
        zh(c, [a.Wb, a.bb])
    }, !1);
    H(a.wb, "touchmove", BM);
    H(a.nh, "action", function() {
        a.T({})
    }, !1, a);
    H(a.ya, "action", a.tm, !1, a);
    H(a.ya.j(), "keydown", a.Lj, !1, a);
    H(a.a, "translateButtonClicked", a.tj, !1, a);
    H(a.R, "history_entry_selected", function(c) {
        vt(a, c.eb, c.fb, c.text)
    }, !1);
    H(a.R, "close_requested", a.Fa, !1, a);
    H(a.R, "history_cleared", a.Ej, !1, a);
    a.ma && (H(a.ma, "close_requested", a.Fa, !1, a),
    H(a.ma, "sign_in_requested", a.uj, !1, a));
    H(a.a.a, "clear", a.rh, !1, a);
    H(document, "click", a.Jj, !0, a);
    var b = Jf("trans-onebar-feedback");
    b && (H(b, "click", a.Ba, !1, a),
    H(b, "keypress", function(c) {
        13 == c.keyCode && this.Ba()
    }, !1, a));
    H(a.na, "srcSuggestionUpdated", a.vn, !1, a);
    H(a.na, "languageSelected", a.Ij, !1, a);
    H(a.na, "tgtLanguageUpdated", a.Il, !1, a);
    H(a.c, "c", function(c) {
        CM(a, c.eh)
    }, !1);
    a.L.h && (H(a.L.h, "clickSelected", a.Ek, !1, a),
    H(a.L.h, "click", a.ba, !1, a));
    a.L.m && (H(a.L.m, "clickSelected", a.Ml, !1, a),
    H(a.L.m, "click", a.ba, !1, a),
    H(a.a.Ic, "action", a.ba, !1, a));
    Ah(E("tlid-open-source-language-list", a.g), a.lh.bind(a));
    Ah(E("tlid-open-target-language-list", a.g), a.mh.bind(a));
    Ah(E("tlid-open-small-source-language-list", a.g), a.lh.bind(a));
    Ah(E("tlid-open-small-target-language-list", a.g), a.mh.bind(a));
    DATA.CompareProdTrans && H(a.a, "inputCleared", function() {
        G(this.ae, "")
    }, !1, a);
    H(a.h, "verifiedTranslationButtonClicked", function() {
        a.hd.setVisible(!0, 8E3);
        a.w.log("community-promo", "open-webapp-served-community")
    });
    H(a.h, "g", function() {
        a.Y(!1)
    }, !1);
    H(a.h, "resultTextEdited", function() {
        DM(a)
    }, !1);
    H(a.h, "translationCopied", function() {
        ML(this.N, "Translation copied")
    }, !1, a);
    H(a.a, "userInteractionWithDisabledVoiceInput", function() {
        if ("auto" === this.na.a)
            ML(this.N, DATA.Messages.CHOOSE_LANGUAGE_TO_ENABLE_VOICE_INPUT);
        else {
            var c = mI(this.na.a);
            ML(this.N, this.fd.a(DATA.Messages.VOICE_INPUT_UNAVAILABLE, c))
        }
    }, !1, a);
    H(a.a, "userInteractionWithDisabledVoiceOutput", function() {
        var c = mI(this.na.a);
        ML(this.N, this.fd.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
    }, !1, a);
    H(a.h, "userInteractionWithDisabledVoiceOutput", function() {
        var c = nI(this.na.b);
        ML(this.N, this.fd.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, c))
    }, !1, a);
    H(a.N, "unsupported_filetype_learn_more_clicked", function() {
        var c = a.F
          , d = O(c, 309)
          , e = new Xk;
        C(e, 1, 1);
        mf(d, 79, e);
        N(c, d);
        Im(a.w, "webapp", "lm", "dtft", {});
        $d("https://support.google.com/translate/answer/2534559?hl=" + DATA.DisplayLanguage)
    }, !1);
    b = new nG([a.a.a.j()],[E("tlid-results-container", a.ee)]);
    H(b, "select", a.G.fl, !1, a.G);
    H(window, "beforeunload", function(c) {
        EM(a, c.type);
        a.m && FM(a, a.m.a, a.m.w, a.m.Qa(), a.m.oa())
    }, !1);
    H(a.a, "inputPasted", function() {
        GM(a, $v(a.a.a)) ? a.fe++ : a.ed++
    }, !1);
    H(a.G, "translationRefreshed", function() {
        window.scrollTo(0, 0)
    }, !1, a);
    new wA(a.L)
}
  , zM = function(a) {
    var b = a.F;
    N(b, O(b, 295));
    Im(a.w, "webapp", "ib", "t", {});
    T(a.g, "translate-text");
    U(a.g, "translate-docs")
}
  , AM = function(a) {
    var b = a.F;
    N(b, O(b, 296));
    Im(a.w, "webapp", "ib", "d", {});
    null != a.vb || HM(a);
    U(a.g, "translate-text");
    T(a.g, "translate-docs")
};
yM.prototype.Lj = function(a) {
    var b = this.a.b.isVisible() ? this.a.b : this.a.g.isVisible() ? this.a.g : void 0;
    if (b)
        switch (a.keyCode) {
        case 27:
            b.close();
            a.preventDefault();
            break;
        case 40:
            b.a[0].j().focus();
            a.preventDefault();
            break;
        default:
            b.Y && b.Y(a)
        }
}
;
yM.prototype.Jj = function(a) {
    var b = fb(a.target);
    b.classList.contains("tlid-trans-verified-button") || ng(this.hd.j(), b) || this.hd.setVisible(!1);
    ng(this.$d, b) || ng(E("tlid-language-bar"), b) || this.ba(a)
}
;
var CM = function(a, b) {
    var c = new Us(b);
    "history" === c.b ? IM() || JM(a) : "instant" === c.b ? KM() || LM(a) : "saved" === c.b ? MM() || NM(a) : (x("home" === c.b, "Invalid view token in the URL fragment"),
    Lp(document.body, "displaying-homepage") || a.Fa());
    if (ct(c, "star"))
        "history" === c.b ? (a.Na = "",
        XJ(a.R, c.Qa(), c.oa(), bt(c, "text"))) : (x("home" === c.b, "Invalid view token in the URL fragment for STAR operation"),
        a.na.g(c.Qa()),
        a.na.h(c.oa()),
        a.a.a.g(bt(c, "text")),
        a.Y(!1),
        kD(a.a.R),
        a.sh = !0);
    else if (ct(c, "docs")) {
        Lp(a.g, "translate-docs") || AM(a);
        c = Ob(DATA.SourceLanguageCodeNameList).map(function(e) {
            return e.Code
        });
        var d = Ob(DATA.TargetLanguageCodeNameList).map(function(e) {
            return e.Code
        });
        xt(a.c, b, c, d)
    } else
        ct(c, "translate") && (Lp(a.g, "translate-text") || zM(a),
        c = Ob(DATA.SourceLanguageCodeNameList).map(function(e) {
            return e.Code
        }),
        d = Ob(DATA.TargetLanguageCodeNameList).map(function(e) {
            return e.Code
        }),
        wt(a.c, b, c, d),
        $v(a.a.a) && HK(a.a))
}
  , pM = function() {
    return Fe && DATA.InChina && "zh-CN" === DATA.DisplayLanguage && DATA.EnableChinaAndroidPromo
};
yM.prototype.lh = function(a) {
    this.T(a, "sl")
}
;
yM.prototype.mh = function(a) {
    this.T(a, "tl")
}
;
yM.prototype.Ek = function(a) {
    this.T(a, "sl")
}
;
yM.prototype.Ml = function(a) {
    this.T(a, "tl")
}
;
var sM = function() {
    return !DATA.InChina && DATA.EnableGSAPureAd && re() && se(9) && xd()
}
  , rM = function() {
    return !DATA.InChina && Fe && "en" == DATA.DisplayLanguage && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_SPEAK && !!DATA.Messages.TRANSLATE_PURE_AD_TEXT_READ
};
yM.prototype.Zn = function(a) {
    a: {
        var b = this.a.R.a;
        if ("ltr" == a)
            var c = "left";
        else if ("rtl" == a)
            c = "right";
        else
            break a;
        Yp(b.j(), "direction", a);
        Yp(b.j(), "text-align", c)
    }
}
;
var BM = function(a) {
    a.preventDefault()
};
yM.prototype.Ij = function() {
    var a = this.na.a
      , b = this.na.b;
    this.K.c = a;
    this.K.g = b;
    var c = this.Ya;
    hH(c, c.a, a);
    c = this.Ya;
    hH(c, c.b, b);
    this.Y(!1, "ls");
    gt() && zK(this.a);
    this.aa && pH(this.aa, a, b)
}
;
yM.prototype.Il = function() {
    for (var a = this.na.b, b = ba(this.h.a), c = b.next(); !c.done; c = b.next())
        oL(c.value, a)
}
;
yM.prototype.j = function() {
    return this.v
}
;
var MM = function() {
    return Lp(document.body, "displaying-saved-page")
}
  , KM = function() {
    return Lp(document.body, "displaying-instant-page")
}
  , IM = function() {
    return Lp(document.body, "displaying-history-page")
};
yM.prototype.Fa = function() {
    hI();
    var a = D("tlid-share-panel", this.v);
    a && U(a, "show-share-panel");
    U(document.body, "with-lang-list");
    U(document.body, "with-sl-list");
    U(document.body, "with-tl-list");
    if (!Lp(document.body, "displaying-homepage")) {
        a = MM();
        T(document.body, "displaying-homepage");
        U(document.body, "displaying-history-page");
        U(document.body, "displaying-saved-page");
        U(document.body, "displaying-instant-page");
        var b = yt(this.c);
        Vs(b, "home");
        this.c.a(b.toString(), !0);
        b = this.F;
        N(b, O(b, 216));
        eI("show", "homepage", "", "", "");
        a && (a = this.F,
        N(a, O(a, 41)))
    }
}
;
yM.prototype.Oj = function() {
    if (IM()) {
        var a = this.R;
        a.a && DI(a.a);
        this.Fa()
    } else
        a = yt(this.c),
        this.Na = a.toString(),
        Vs(a, "history"),
        this.c.a(a.toString(), !0),
        JM(this)
}
;
var JM = function(a) {
    U(document.body, "displaying-homepage");
    T(document.body, "displaying-history-page");
    U(document.body, "displaying-saved-page");
    U(document.body, "displaying-instant-page");
    YJ(a.R);
    eI("show", "history", "", "", "");
    a = a.F;
    N(a, O(a, 60))
};
yM.prototype.jk = function() {
    if (this.ma)
        if (KM())
            this.Fa();
        else {
            var a = yt(this.c);
            this.Na = a.toString();
            Vs(a, "instant");
            this.c.a(a.toString(), !0);
            LM(this)
        }
}
;
var LM = function(a) {
    if (a.ma) {
        U(document.body, "displaying-homepage");
        U(document.body, "displaying-history-page");
        U(document.body, "displaying-saved-page");
        T(document.body, "displaying-instant-page");
        var b = a.ma;
        if (null == b.a && null != b.v) {
            var c = D("tlid-community-instant-container", b.v);
            if (null != c) {
                var d = Sp(JI, {
                    Tl: DATA.SignedIn,
                    La: DATA.Messages
                });
                c.appendChild(d);
                b.a = new II(d);
                H(b.a, "close_requested", b.c, !1, b);
                H(b.a, "sign_in_requested", b.b, !1, b)
            }
        }
        eI("show", "instant", "", "", "");
        a = a.F;
        N(a, O(a, 361))
    }
};
yM.prototype.T = function(a, b) {
    var c = this;
    if (Lp(document.body, "with-lang-list"))
        this.ba(a);
    else {
        if (null == b)
            throw Error("No language picker class to show provided");
        MM() && this.b && (IJ(this.b),
        this.Fa());
        "sl" === b ? (G(this.ph, DATA.Messages.TRANSLATE_FROM),
        this.a.b.setVisible(!0),
        this.a.g.setVisible(!1),
        AB(this.a.b),
        T(document.body, "with-sl-list")) : "tl" === b && (G(this.ph, DATA.Messages.TRANSLATE_TO),
        this.a.b.setVisible(!1),
        this.a.g.setVisible(!0),
        AB(this.a.g),
        T(document.body, "with-tl-list"));
        T(document.body, "with-lang-list");
        Bi(function() {
            gt() && ("sl" === b ? FB(c.a.b) : "tl" === b && FB(c.a.g))
        }, 0);
        n.scrollTo(0, 0);
        a = D("language-list-unfiltered-langs-" + b + "_list");
        null != a && (a.scrollTop = 0)
    }
}
;
yM.prototype.ba = function(a) {
    "click" == a.type && a.defaultPrevented || !Lp(document.body, "with-lang-list") || (this.a.b.setVisible(!1),
    this.a.g.setVisible(!1),
    this.Fa(),
    gt() && zK(this.a))
}
;
yM.prototype.tm = function() {
    this.a.b.isVisible() && EB(this.a.b);
    this.a.g.isVisible() && EB(this.a.g)
}
;
yM.prototype.yk = function() {
    if (MM() && null != this.b)
        IJ(this.b),
        this.Fa();
    else {
        var a = yt(this.c);
        this.Na = a.toString();
        Vs(a, "saved");
        this.c.a(a.toString(), !0);
        NM(this)
    }
}
;
var NM = function(a) {
    DATA.InChina || kI("lnk", a.w, a.Tn.bind(a), a.c.a.bind(a.c, a.Na, !0), yt(a.c).toString())
};
yM.prototype.Tn = function() {
    eI("show", "starred", "", "", "");
    var a = this.F;
    N(a, O(a, 40));
    U(document.body, "displaying-homepage");
    U(document.body, "displaying-history-page");
    T(document.body, "displaying-saved-page");
    U(document.body, "displaying-instant-page");
    this.b || OM(this)
}
;
var OM = function(a) {
    var b = E("tlid-phrasebook-outer-wrap", a.v)
      , c = Sp(MJ, {
        Sa: DATA.DisplayLanguage,
        La: DATA.Messages
    });
    b.appendChild(c);
    a.b = new DJ(c,a.nb);
    H(a.b, "close_requested", function() {
        IJ(a.b);
        a.Fa()
    }, !1);
    H(a.b, "phrasebook_entry_selected", function(d) {
        Lp(a.g, "translate-text") || zM(a);
        vt(a, d.eb, d.fb, d.text)
    }, !1);
    H(a.b, "interaction_with_disabled_voice_output", function(d) {
        ML(a.N, a.fd.a(DATA.Messages.VOICE_OUTPUT_UNAVAILABLE, d.Jb))
    }, !1, a);
    a.Vb && VI(a.b.a, a.Vb)
};
yM.prototype.Ba = function() {
    var a = {
        productId: "101820",
        locale: DATA.DisplayLanguage,
        version: DATA.VersionLabel
    }
      , b = {};
    0 < EXPERIMENT_IDS.length && (b.EXP = EXPERIMENT_IDS.join(","));
    b.SOURCE_LANGUAGE = this.na.a;
    b.TARGET_LANGUAGE = this.na.b;
    window.JS_ERR_COUNT && (b.JS_ERR_COUNT = window.JS_ERR_COUNT,
    b.JS_ERR_ARR = window.JS_ERR_ARR);
    this.g.scrollIntoView(!0);
    aM(a, b);
    eI("show", "feedback", "", "", "")
}
;
var HM = function(a) {
    var b = Sp(oK, {
        Sa: DATA.DisplayLanguage,
        zk: DATA.FileTranslationPath,
        La: DATA.Messages
    });
    E("tlid-select-file-page-container", a.g).appendChild(b);
    a.vb = new QJ(b,a.na);
    H(a.vb, "file_too_big", function() {
        ML(a.N, DATA.Messages.FILE_TOO_BIG)
    }, !1);
    H(a.vb, "unsupported_filetype", function() {
        var c = a.N
          , d = DATA.Messages.CANT_READ_FILE
          , e = DATA.Messages.LEARN_MORE;
        T(c.v, "with-action");
        U(c.v, "with-message");
        G(c.h, d);
        G(c.o, e);
        c.b.removeAttribute("href");
        c.a = "unsupported_filetype_learn_more_clicked";
        LL(c)
    }, !1)
};
yM.prototype.Vn = function() {
    var a = this.a;
    if (DATA.UrlTranslation) {
        var b = D("source-wrap", a.v);
        W(b, !1);
        W(a.Y.j(), !0)
    }
}
;
var PM = function(a) {
    var b = [];
    if (oo && oI(a))
        b = [{
            trans: qI(a).map(function(g) {
                return g.rb()
            }).join("\n"),
            orig: J(a.$a(0), 1),
            translit: "",
            src_translit: J(a.$a(0), 3)
        }];
    else
        for (var c = 0; c < a.cc(); c++) {
            var d = {
                trans: a.$a(c).Nc(),
                orig: J(a.$a(c), 1),
                translit: J(a.$a(c), 2),
                src_translit: J(a.$a(c), 3)
            };
            b[c] = d
        }
    d = [];
    for (c = 0; c < I(a, 1); c++) {
        for (var e = [], f = 0; f < I(Ch(a, c), 1); f++)
            e[f] = Oo(Ch(a, c), f);
        e = {
            pos: J(Ch(a, c), 0),
            terms: e
        };
        d[c] = e
    }
    return {
        sentences: b,
        src: J(a, 2),
        dict: d
    }
};
yM.prototype.qj = function(a, b, c, d, e) {
    this.V.setVisible(!1);
    this.ce = {};
    var f = PM(e);
    if (this.m) {
        var g = this.m.w
          , h = this.m.Qa()
          , l = this.m.oa()
          , m = this.m.a;
        h === b && l === c && vc(d, m) || FM(this, m, g, h, l);
        h === b && l === c && vc(m, d) || (this.m = new zF(d,f,b,c))
    } else
        this.m = new zF(d,f,b,c);
    a || (FM(this, d, f, b, c),
    this.m = new zF(d,f,b,c));
    if (Dh(e, 7)) {
        a = J(kp(e), 1);
        g = Cl(kp(e), 5);
        h = this.V;
        l = J(kp(e), 0);
        m = $v(this.a.a);
        var q = kp(e);
        q = wl(q.Ra, 2);
        JG(h, {
            Wj: l,
            oe: a,
            Ih: g,
            Ei: m,
            ag: q,
            Pi: this.na.a,
            result: e
        });
        this.V.C = !0
    }
    "auto" == this.na.a && hw(this.na, J(e, 2));
    a = this.na;
    jw(a.a, a.o);
    jw(a.b, a.m);
    new Vo(e.Ra[8]);
    a = [];
    for (g = 0; g < I(new Vo(e.Ra[8]), 0); ++g)
        h = new Vo(e.Ra[8]),
        h = Fh(h, 0, g),
        a.push(h);
    dw(this.na, a);
    a = this.na;
    g = "auto" == a.a ? "" : a.a;
    h = pw(a.o, g);
    h.push(a.a);
    a.X = yb(h);
    h = h.concat(pw(a.L.a, g));
    a.ba.update(h);
    a = this.na;
    g = pw(a.m, a.b);
    g.push(a.b);
    a.Y.update(g);
    T(document.body, "show-result");
    this.a.update(d, e, this.V.b);
    Zu(e);
    this.h.update(d, f, b, c, e);
    B && zK(this.a);
    b = yL(this.h);
    this.sh ? (this.sh = !1,
    iG(this.nb, b, 0)) : DM(this);
    !this.X && D("tlid-debug-information", document.body) && (this.X = new NJ);
    if (this.X && (b = this.X,
    OJ(b),
    b.w && b.a && b.c && b.b && b.o && b.g && b.m && b.h && b.L && b.G && b.C)) {
        f = [];
        a = Jf("backend-models-used");
        g = Jf("backend-models-checksum");
        h = Jf("backend-models-launch-doc");
        if (e.$a(0))
            for (l = 0; l < e.cc(); l++) {
                m = e.$a(l);
                Dh(m, 0) && m.Nc() && f.push(Bl(m, 4, 0));
                if (0 < I(m, 5)) {
                    for (q = 0; q < I(m, 5); q++)
                        PJ(a, "https://cnsviewer.corp.google.com" + Fh(m, 5, q), Fh(m, 5, q));
                    a.appendChild(Yf("br"))
                }
                if (0 < I(m, 8)) {
                    for (q = 0; q < I(m, 8); q++) {
                        var r = new Rl((new Tl(Dl(m, 8, q))).Ra[0]);
                        PJ(g, "http://go/bleu-eval-dashboard?fb=Checksum:in:" + J(r, 0), J(r, 0));
                        "" != J(r, 1) && "TODO" != J(r, 1) ? PJ(h, "https://g3doc.corp.google.com/nlp/nmt/models/g3doc/" + J(r, 1), J(r, 1)) : PJ(h, "http://go/no-launch-doc-doc", "Temp_Doc")
                    }
                    g.appendChild(Yf("br"));
                    h.appendChild(Yf("br"))
                }
            }
        for (r = q = m = l = h = g = a = 0; r < f.length; r++)
            0 === f[r] ? a++ : 3 === f[r] ? g++ : 4 === f[r] ? h++ : 1 === f[r] ? l++ : 2 === f[r] ? m++ : 10 === f[r] && q++;
        f = a + g;
        r = l + m;
        G(b.o, a.toString());
        G(b.g, g.toString());
        G(b.m, h.toString());
        G(b.b, f.toString());
        G(b.a, l.toString());
        G(b.c, m.toString());
        G(b.w, r.toString());
        G(b.h, q.toString())
    }
    b = this.G;
    f = J(e, 2);
    b.g.reset();
    b.g.push(d, f, c, e);
    this.Me = Tf(document).a;
    d = ba(this.Kb);
    for (b = d.next(); !b.done; b = d.next())
        b.value.Ja();
    this.Kb = [];
    this.Kb.push(new $z(this.a.a.j(),"orig",13,"webapp"));
    QM(this, this.Fd);
    QM(this, this.Ed);
    QM(this, this.jd);
    (d = D("show-panel", this.v)) && U(d, "show-panel");
    FA(this.L, !1);
    this.aa && pH(this.aa, J(e, 2), c)
}
;
var DM = function(a) {
    var b = yL(a.h);
    lG(a.nb, b, function(c) {
        EL(a.h, b, c);
        null != a.b ? c ? VI(a.b.a, b) : hJ(a.b.a) : c && (a.Vb = b)
    })
}
  , FM = function(a, b, c, d, e) {
    var f = a.R;
    if (null == f.a) {
        var g = new zF(b,c,d,e);
        f.c.push(g)
    } else
        f.a && (g = new zF(b,c,d,e),
        f = f.a,
        xI(f, g),
        V(f.v, "empty", !1),
        yI(f, f.a.length));
    a.Cj(b, c, d, e)
};
yM.prototype.Ul = function(a) {
    var b = this.h;
    a = 413 == a ? MSG_REQUEST_TOO_BIG : MSG_TRANSLATION_ERROR;
    T(b.b, "empty");
    T(b.b, "result-error");
    U(b.b, "translating");
    G(b.L, a);
    G(b.C, a);
    W(b.h, !0);
    W(b.g, !1)
}
;
var vt = function(a, b, c, d, e) {
    null != e && tl(a.K, e);
    a.a.a.b(d);
    if (b) {
        var f = void 0;
        "tws_lsugg" == e && (f = 3);
        a.na.g(b, f);
        a.K.c = b;
        f = a.Ya;
        hH(f, f.a, b)
    }
    c && ("auto" !== c && a.na.h(c),
    c = a.na.b,
    a.K.g = c,
    b = a.Ya,
    hH(b, b.b, c));
    c = a.a.R;
    b = a.na.a;
    f = a.na.b;
    c.h = tD(d);
    c.b = b;
    c.c = f;
    kD(c);
    e && Lm(a.w, "source", e);
    a.Y(!1, e)
};
yM.prototype.jj = function(a) {
    null != this.b && CJ(this.b, a);
    a = this.R;
    null == a.a ? a.g = !0 : a.a && FI(a.a)
}
;
yM.prototype.oj = function(a, b) {
    EL(this.h, a, b);
    var c = this.R;
    if (null != c.a && c.a) {
        c = c.a;
        for (var d = 0; d < c.a.length; d++) {
            var e = c.a[d];
            DF(e.a, a) && e.Rg(b)
        }
    }
    if (null != this.b)
        if (b)
            b = this.b.a,
            c = GF(a),
            b.a.push(c),
            gJ(b, c) && b.h.push(c),
            XI(b, b.N),
            TI(b, AF(c), c.oa()),
            1 === b.a.length && b.dispatchEvent("list_no_longer_empty"),
            this.h.a[0] && DF(yL(this.h), a) && VI(this.b.a, a);
        else {
            b = this.b.a;
            d = !1;
            for (c = b.a.length - 1; 0 <= c; c--)
                if (e = b.a[c],
                DF(e, a)) {
                    d = eJ(e);
                    e = b.R[d];
                    b.b === e && (b.b = null);
                    ph(e);
                    delete b.R[d];
                    b.a.splice(c, 1);
                    d = !0;
                    e = b;
                    var f = AF(a)
                      , g = a.oa()
                      , h = f + "|" + g
                      , l = e.m.get(h);
                    l && (1 === l ? (e.m.delete(h),
                    e.dispatchEvent({
                        type: "language_pair_removed",
                        eb: f,
                        fb: g
                    })) : e.m.set(h, l - 1))
                }
            d && (b.L || (b.w && null != b.c && null != b.g ? ZI(b, b.c, b.g) : b.G ? YI(b, b.C) : (a = b.o,
            0 < b.o && b.o + 1 > bJ(b) && (a = b.o - 1),
            UI(b, a))),
            0 === aJ(b).length && b.dispatchEvent("last_displayed_entry_deleted"),
            0 === b.a.length && (b.dispatchEvent("list_empty"),
            b.L && (b.b = null,
            UI(b, 0),
            b.dispatchEvent("delete_all_complete"),
            b.L = !1)))
        }
    else
        b && (this.Vb = a)
}
;
yM.prototype.tj = function() {
    var a = this;
    Bi(function() {
        return RM(a)
    }, 0)
}
;
var RM = function(a) {
    var b = $v(a.a.a)
      , c = a.na.a
      , d = a.na.b;
    if (Xu(b)) {
        var e = new Pm(n.location.href.split("#")[0]);
        Tm(e, "translate");
        fn(e, "sl", [c ? c : "auto"]);
        fn(e, "tl", [d]);
        fn(e, "u", [b]);
        $d(e.toString())
    } else
        Lm(a.w, "source", "btn"),
        tl(a.K, "btn"),
        a.Y(!1),
        Bi(function() {
            kD(a.a.R)
        }, 0),
        n.scrollTo(0, 0),
        DATA.EnableSearchTooltip && a.Vl && FL(a.h)
}
  , xM = function(a) {
    var b = a.na.a
      , c = a.na.b;
    U(document.body, "show-result");
    JG(a.V, {
        oe: ""
    });
    a.G.update("", b, c, new ip);
    dw(a.na, null);
    a.a.update("", new ip, !1);
    b = a.h;
    BL(b, !1);
    DL(b, !0);
    xL(b);
    a.X && OJ(a.X)
};
yM.prototype.rh = function() {
    null != this.b && hJ(this.b.a);
    xM(this)
}
;
yM.prototype.Y = function(a, b) {
    this.Lm.reset(a);
    var c = $v(this.a.a)
      , d = xc(le(c));
    this.K.G = c.substring(0, 64);
    this.K.a = null;
    var e = this.na.a
      , f = this.na.b;
    !gt() && a || "bh" === b || d && "ls" !== b || At(this.c, e, f, c, a);
    if (d)
        this.rh();
    else if (MA(this.L),
    b = new Xm(Om(this.w)),
    b.g(new Xm(Yu())),
    b.add("kc", aw(this.a.a)),
    FA(this.L, !0),
    AL(this.h, 1),
    xm(this.F),
    tp(this.Zc, e, f, DATA.DisplayLanguage, c, v(this.qj, this, a, e, f, c), !0, void 0, b, v(this.Ul, this)),
    a = !1,
    GM(this, c) ? (EM(this),
    a = !0) : c.length >= this.o.length && (a = !0),
    a && (this.o = c,
    this.Ne = e,
    this.kd = f),
    DATA.CompareProdTrans) {
        a = Vm(b);
        a.add("internal", 1);
        a.add("expflags", "NMT__enable_nmt_level:0");
        b = new np("webapp","https://translate.google.com");
        var g = this.ae;
        tp(b, e, f, DATA.DisplayLanguage, c, function(h) {
            dg(g);
            W(g, !!h);
            if (h) {
                for (var l = [], m = 0; m < h.cc(); m++)
                    l.push(h.$a(m).Nc());
                G(g, l.join(""))
            }
        }, !0, void 0, a)
    }
}
;
yM.prototype.vn = function(a) {
    if (a && a.data && 0 < a.data.length) {
        a = a.data[0];
        var b = mI(a);
        if (b) {
            this.K.o = a;
            var c = this.Ya;
            hH(c, c.a, a);
            JG(this.V, {
                oe: b,
                $g: a,
                Ei: $v(this.a.a),
                Pi: this.na.a
            })
        }
    }
}
;
var uM = function(a, b, c, d, e, f, g, h) {
    var l = E(b, a.v);
    b = E("tlid-dismiss-promo", l);
    var m = E("tlid-accept-promo", l);
    d = "/translate/uc?ua=dismiss&uav=" + d;
    n.setTimeout(function() {
        T(l, "show-panel")
    }, 400);
    Im(cI, "webapp", c, "show");
    pm(a.F, e);
    f();
    H(b, "click", v(a.Gj, a, l, d, c, e, g), !1, a);
    H(m, "click", v(a.Fj, a, l, d, c, e, h), !1, a)
};
yM.prototype.Fj = function(a, b, c, d, e) {
    qm(this.F, d);
    U(a, "show-panel");
    Hm(this.w, b);
    Im(cI, "webapp", c, "accept");
    e()
}
;
yM.prototype.Gj = function(a, b, c, d, e) {
    var f = this.F;
    N(f, om(f, 74, d));
    U(a, "show-panel");
    Hm(this.w, b);
    Im(cI, "webapp", c, "dismiss");
    e()
}
;
yM.prototype.ym = function(a) {
    Yd(n.location, a)
}
;
var tM = function(a, b, c) {
    uM(a, "at-promo", "atPromo", "at", c, Fa, Fa, v(a.ym, a, b))
};
yM.prototype.Hj = function() {
    Bh("gsa", "gsaAd:accept", "", 1);
    fI(void 0, 0)
}
;
yM.prototype.lj = function() {
    SM(this, this.Fd);
    SM(this, this.Ed);
    SM(this, this.jd);
    return !1
}
;
var SM = function(a, b) {
    var c = b.j();
    if (null != c) {
        var d = hq(c).a;
        c = d + qq(c).height;
        c > n.innerHeight + a.Me && (TM(a, d, !0, b),
        TM(a, c, !1, b))
    }
}
  , TM = function(a, b, c, d) {
    var e = c ? "top" : "bot"
      , f = d.Ib()
      , g = f + "_" + e
      , h = Tf(document).a;
    b > h && b < h + n.innerHeight && !a.ce[g] && (a.ce[g] = !0,
    a.w.log("card_scroll", {
        card: f,
        position: e
    }),
    a = a.F,
    b = d.Jd(),
    e = d.ib(),
    N(a, bm(a, c ? 213 : 214, b, e, d.mc, 0)))
}
  , QM = function(a, b) {
    var c = b.j();
    c && a.Kb.push(new $z(c,b.Ib(),b.Jd(),"webapp"))
};
yM.prototype.Rn = function(a) {
    var b = Jf("gt-ntfcn-msg");
    b && (b.innerHTML = a,
    this.qh.setVisible(!0, 2E3))
}
;
yM.prototype.uj = function() {
    $u(yt(this.c).toString())
}
;
var vM = function() {
    var a = window.gapi;
    a && a.load("client", function() {
        var b = a.client
          , c = a.config;
        c.update("googleapis.config/auth/useFirstPartyAuth", !0);
        c.update("googleapis.config/auth/useFirstPartyAuthV2", !0);
        c.update("client/xd4", !0);
        b.setApiKey("AIzaSyA8PX4bTrtr1-DtDsGJSbTXQkfWbWkCjTM")
    })
}
  , EM = function(a, b) {
    if ("" !== a.o) {
        var c = a.F
          , d = a.o
          , e = a.kd
          , f = a.ed
          , g = O(c, 246);
        C(g, 1, e);
        C(g, 74, d.length);
        C(g, 52, d.substring(0, 64));
        d = new Lk;
        C(d, 1, f);
        mf(g, 70, d);
        N(c, g);
        64 < a.o.length && (a.o = a.o.substr(0, 64));
        c = {
            sl: a.Ne,
            tl: a.kd,
            ql: a.o.length,
            q: a.o,
            pc: a.ed
        };
        b && (c[b] = 1);
        a.ed = a.fe;
        a.fe = 0;
        a.w.log("fq", c);
        a.o = ""
    }
}
  , GM = function(a, b) {
    return "" !== a.o && b[0] !== a.o[0] && b[b.length - 1] !== a.o[a.o.length - 1]
}
  , qM = function(a) {
    if (DATA.FeatureStickiness) {
        var b = JSON.parse(DATA.FeatureStickiness);
        null != b || (b = []);
        b = new ZL(b);
        if (Dh(b, 2)) {
            a = a.$n;
            b = new TL(b.Ra[2]);
            a.a = {};
            a.a["gt-input-tool"] = new Wy;
            for (var c, d = 0; d < I(b, 3); ++d)
                if (c = new PL(Dl(b, 3, d)),
                0 == !!Cl(c, 1))
                    for (var e in a.a)
                        a.a[e].update(J(c, 0), !1, "");
            a.c = {};
            for (d = 0; d < I(b, 1); ++d)
                c = new PL(Dl(b, 1, d)),
                a.c[J(c, 0)] = !!Cl(c, 1);
            a.b = {};
            for (d = 0; d < I(b, 2); ++d)
                c = new PL(Dl(b, 2, d)),
                a.b[J(c, 0)] = !!Cl(c, 1);
            for (d = 0; d < I(b, 9); ++d)
                e = new RL(Dl(b, 9, d)),
                (Dh(e, 3) ? $y(a, J(e, 3), !0) : $y(a, "gt-input-tool", !0)).update(J(e, 0), Cl(e, 1), J(e, 2))
        }
    }
};
var UM = {}
  , VM = null
  , WM = function(a, b, c) {
    if (a = UM[c])
        "history" == a.o ? (b = a.c,
        N(b, Am(b, 61, dL(a), null != a.b && a.b.b))) : "saved" == a.o && (cI.log("sli=sl", {}),
        b = a.c,
        N(b, Cm(b, 48))),
        a.dispatchEvent({
            type: "translate_requested",
            eb: a.a.Qa(),
            fb: a.a.oa(),
            text: a.a.a
        }),
        eI("populate", c, a.a.Qa(), a.a.oa(), a.a.a)
}
  , XM = PA("translate");
var ty = null
  , YM = null
  , lM = DATA.MaybeDefaultSourceLanguageCode || "auto"
  , mM = DATA.MaybeDefaultTargetLanguageCode
  , $M = function() {
    var a = new ii(function(c) {
        xF(function() {
            c()
        })
    }
    )
      , b = new ii(function(c) {
        zy(function(d, e) {
            d ? (ty = e,
            ZM(c)) : c()
        })
    }
    );
    oi([b, a])
}
  , ZM = function(a) {
    xy(ty.a, null, null, null, 100, function(b, c) {
        if (b) {
            b = [];
            for (var d = c.length - 1; 0 <= d; d--) {
                var e = c[d]
                  , f = e.sl
                  , g = e.tl
                  , h = e.src;
                e = e.trg;
                0 == d && (lM = f,
                mM = g);
                b.push({
                    sl: f,
                    tl: g,
                    orig: h,
                    result: e
                })
            }
            c = YM.R;
            if (c.a) {
                d = [];
                for (f = 0; f < b.length; f++)
                    g = b[f],
                    d.push(new zF(g.orig,g.result,g.sl,g.tl));
                zI(c.a, d)
            }
        }
        a()
    })
}
  , nM = function(a, b, c, d) {
    ty && vy(c, d, a, b)
}
  , oM = function() {
    ty && uy(ty.a, void 0, void 0, void 0, void 0)
};
za("init", function() {
    var a = new gH;
    hH(a, a.c, DATA.DisplayLanguage);
    hH(a, a.a, lM);
    hH(a, a.b, mM);
    var b = Yf("INPUT");
    b.id = "history-input";
    W(b, !1);
    var c = Yf("IFRAME");
    c.id = "history-frame";
    c.src = "about:blank";
    W(c, !1);
    document.body.appendChild(b);
    document.body.appendChild(c);
    b = new ut(!0,b,c);
    YM = new yM(a,b);
    document.body.appendChild(YM.j());
    VM || (VM = new dB(null,"TranslationItem"),
    fB(VM, XM, WM),
    eB.a.push(VM));
    qB || (qB = new dB(null,"LanguageListItem"),
    fB(qB, kB, pB),
    fB(qB, rB, xB),
    eB.a.push(qB));
    window.location.hash.substr(1) && CM(YM, window.location.hash.substr(1));
    b.b.qa(!0);
    $M();
    DATA.UserInputQuery && vt(YM, lM, mM, DATA.UserInputQuery)
});
if (window.jstiming) {
    window.jstiming.je = {};
    window.jstiming.Wg = 1;
    var aN = function(a, b, c) {
        var d = a.t[b]
          , e = a.t.start;
        if (d && (e || c))
            return d = a.t[b][0],
            void 0 != c ? e = c : e = e[0],
            Math.round(d - e)
    }
      , bN = function(a, b, c) {
        var d = "";
        window.jstiming.srt && (d += "&srt=" + window.jstiming.srt,
        delete window.jstiming.srt);
        window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt,
        delete window.jstiming.pt);
        try {
            window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
        } catch (r) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes)) {
            e().wasFetchedViaSpdy && (d += "&p=s");
            if (e().wasNpnNegotiated) {
                d += "&npn=1";
                var f = e().npnNegotiatedProtocol;
                f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
            }
            e().wasAlternateProtocolAvailable && (d += "&apa=1")
        }
        var g = a.t
          , h = g.start;
        e = [];
        f = [];
        for (var l in g)
            if ("start" != l && 0 != l.indexOf("_")) {
                var m = g[l][1];
                m ? g[m] && f.push(l + "." + aN(a, l, g[m][0])) : h && e.push(l + "." + aN(a, l))
            }
        delete g.start;
        if (b)
            for (var q in b)
                d += "&" + q + "=" + b[q];
        (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [b, "?v=3", "&s=" + (window.jstiming.sn || "translate_mobileweb") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
    }
      , cN = function(a, b, c) {
        a = bN(a, b, c);
        if (!a)
            return "";
        b = new Image;
        var d = window.jstiming.Wg++;
        window.jstiming.je[d] = b;
        b.onload = b.onerror = function() {
            window.jstiming && delete window.jstiming.je[d]
        }
        ;
        b.src = a;
        b = null;
        return a
    };
    window.jstiming.report = function(a, b, c) {
        var d = document.visibilityState
          , e = "visibilitychange";
        d || (d = document.webkitVisibilityState,
        e = "webkitvisibilitychange");
        if ("prerender" == d) {
            var f = !1
              , g = function() {
                if (!f) {
                    b ? b.prerender = "1" : b = {
                        prerender: "1"
                    };
                    if ("prerender" == (document.visibilityState || document.webkitVisibilityState))
                        var h = !1;
                    else
                        cN(a, b, c),
                        h = !0;
                    h && (f = !0,
                    document.removeEventListener(e, g, !1))
                }
            };
            document.addEventListener(e, g, !1);
            return ""
        }
        return cN(a, b, c)
    }
}
;