**規則來源**
https://github.com/PaPerseller/chn-iplist/tree/master/SagerNet

**路由説明**
https://www.v2fly.org/config/routing.html#ruleobject

**規則優先級由上至下**

**一般順序**

Block.txt

Block ip.txt

Proxy.txt

Proxy ip.txt

[按需求新增自定義Proxy - 如有需要]

Direct.txt

Direct ip.txt

[按需求新增自定義Direct - 如有需要]

**Final - 如走Proxy則上方Direct和Proxy順序互換包含ip段**

上方規則走完添加新Rule配置port為[0-65535]

規則外走Proxy則設定outbound為Proxy

規則外走Direct則設定outbound為Direct
