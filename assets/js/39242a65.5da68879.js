"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[681],{2732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(4848),i=n(8453);const o={title:"Circuit Breaking",sidebar_position:50,weight:5},s=void 0,c={id:"traffic-management/circuit-breaking",title:"Circuit Breaking",description:"Building resilient microservice applications requires the use of circuit breaking, which is a critical design pattern. Circuit breaking allows you to build applications that reduce the impact of network failures, latency spikes, and other undesirable network effects.",source:"@site/docs/20-traffic-management/50-circuit-breaking.md",sourceDirName:"20-traffic-management",slug:"/traffic-management/circuit-breaking",permalink:"/istio-service-mesh-on-eks/docs/traffic-management/circuit-breaking",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/20-traffic-management/50-circuit-breaking.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Circuit Breaking",sidebar_position:50,weight:5},sidebar:"trafficManagementSidebar",previous:{title:"Identity Based Routing",permalink:"/istio-service-mesh-on-eks/docs/traffic-management/identity-based-routing"},next:{title:"Mirroring",permalink:"/istio-service-mesh-on-eks/docs/traffic-management/mirroring"}},a={},l=[{value:"Configuring the circuit breaker",id:"configuring-the-circuit-breaker",level:3},{value:"Load Testing Using Fortio",id:"load-testing-using-fortio",level:3},{value:"Tripping the circuit breaker",id:"tripping-the-circuit-breaker",level:3}];function u(e){const t={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Building resilient microservice applications requires the use of circuit breaking, which is a critical design pattern. Circuit breaking allows you to build applications that reduce the impact of network failures, latency spikes, and other undesirable network effects."}),"\n",(0,r.jsx)(t.p,{children:"This task will show you how to configure circuit breaking for connections, requests, and outlier detection."}),"\n",(0,r.jsx)(t.p,{children:'You will configure circuit breaking rules in this task and then test the configuration by intentionally "tripping" the circuit breaker.'}),"\n",(0,r.jsx)(t.h3,{id:"configuring-the-circuit-breaker",children:"Configuring the circuit breaker"}),"\n",(0,r.jsxs)(t.p,{children:["Create a destination rule to apply circuit breaking settings when calling the ",(0,r.jsx)(t.em,{children:"productpage"})," service:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"kubectl apply -n test -f - <<EOF\r\napiVersion: networking.istio.io/v1alpha3\r\nkind: DestinationRule\r\nmetadata:\r\n  name: productpage\r\nspec:\r\n  host: productpage\r\n  trafficPolicy:\r\n    connectionPool:\r\n      tcp:\r\n        maxConnections: 1\r\n      http:\r\n        http1MaxPendingRequests: 1\r\n        maxRequestsPerConnection: 1\r\n    outlierDetection:\r\n      consecutiveErrors: 1\r\n      interval: 1s\r\n      baseEjectionTime: 3m\r\n      maxEjectionPercent: 100\r\nEOF\n"})}),"\n",(0,r.jsx)(t.h3,{id:"load-testing-using-fortio",children:"Load Testing Using Fortio"}),"\n",(0,r.jsx)(t.p,{children:'Fortio allows you to control the number of connections, concurrency, and delay for outgoing HTTP calls. This client will be used to "trip" the destination rule\'s circuit breaker policies.'}),"\n",(0,r.jsx)(t.p,{children:"Deploy the Fortio application"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"kubectl apply -n test -f - <<EOF\r\napiVersion: v1\r\nkind: Service\r\nmetadata:\r\n  name: fortio\r\n  labels:\r\n    app: fortio\r\nspec:\r\n  ports:\r\n  - port: 8080\r\n    name: http\r\n  selector:\r\n    app: fortio\r\n---\r\napiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: fortio-deploy\r\nspec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      app: fortio\r\n  template:\r\n    metadata:\r\n      annotations:\r\n        # This annotation causes Envoy to serve cluster.outbound statistics via 15000/stats\r\n        # in addition to the stats normally served by Istio.  The Circuit Breaking example task\r\n        # gives an example of inspecting Envoy stats.\r\n        sidecar.istio.io/statsInclusionPrefixes: cluster.outbound,cluster_manager,listener_manager,http_mixer_filter,tcp_mixer_filter,server,cluster.xds-grpc\r\n      labels:\r\n        app: fortio\r\n    spec:\r\n      containers:\r\n      - name: fortio\r\n        image: fortio/fortio:latest_release\r\n        imagePullPolicy: Always\r\n        ports:\r\n        - containerPort: 8080\r\n          name: http-fortio\r\n        - containerPort: 8079\r\n          name: grpc-ping\r\nEOF\n"})}),"\n",(0,r.jsx)(t.h3,{id:"tripping-the-circuit-breaker",children:"Tripping the circuit breaker"}),"\n",(0,r.jsxs)(t.p,{children:["In your DestinationRule above, you specified ",(0,r.jsx)(t.code,{children:"maxConnections: 1"})," and ",(0,r.jsx)(t.code,{children:"http1MaxPendingRequests: 1"}),". According to these rules, if you attempt to open more than one connection and request at the same time, you should experience some failures when the istio-proxy opens the circuit for additional requests and connections."]}),"\n",(0,r.jsxs)(t.p,{children:["Log in to ",(0,r.jsx)(t.em,{children:"Fortio"})," pod and use the fortio tool to call the ",(0,r.jsx)(t.em,{children:"productpage"})," service. Call the service with two concurrent connections and send 20 requests:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"FORTIO_POD_NAME=$(kubectl get pod -n test | grep fortio | awk '{ print $1 }')\r\nkubectl exec -n test -it $FORTIO_POD_NAME  -c fortio -- /usr/bin/fortio load -c 2 -qps 0 -n 20 http://productpage:9080\n"})}),"\n",(0,r.jsx)(t.p,{children:"Output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"...\r\n15:04:22 W http_client.go:922> [1] Non ok http code 503 (HTTP/1.1 503)\r\n15:04:22 W http_client.go:922> [1] Non ok http code 503 (HTTP/1.1 503)\r\n15:04:22 W http_client.go:922> [1] Non ok http code 503 (HTTP/1.1 503)\r\n15:04:22 W http_client.go:922> [1] Non ok http code 503 (HTTP/1.1 503)\r\n...\r\nCode 200 : 16 (80.0 %)\r\nCode 503 : 4 (20.0 %)\r\n...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You probably get surprised that most of the requests (80%) were successful. That's because ",(0,r.jsx)(t.code,{children:"istio-proxy"})," allows for some flexibility."]}),"\n",(0,r.jsx)(t.p,{children:"Let's see, how it will look like when you increase the number of concurrent connections up to 10 and number of requests to 100."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl exec -n test -it $FORTIO_POD_NAME  -c fortio -- /usr/bin/fortio load -c 10 -qps 0 -n 100 http://productpage:9080\n"})}),"\n",(0,r.jsx)(t.p,{children:"Output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"...\r\nCode 200 : 10 (10.0 %)\r\nCode 503 : 90 (90.0 %)\r\n...\n"})}),"\n",(0,r.jsx)(t.p,{children:"This time, you can see the expected circuit breaking behavior. Only 10% of the requests were successful, and the rest were trapped by circuit breaking."}),"\n",(0,r.jsx)(t.p,{children:"To get more details, you can query the stats of GET requests on the istio-proxy"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl exec -n test $FORTIO_POD_NAME -c istio-proxy -- pilot-agent request GET stats | grep productpage | grep pending\n"})}),"\n",(0,r.jsx)(t.p,{children:"Output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cluster.outbound|9080||productpage.test.svc.cluster.local.circuit_breakers.default.remaining_pending: 1\r\ncluster.outbound|9080||productpage.test.svc.cluster.local.circuit_breakers.default.rq_pending_open: 0\r\ncluster.outbound|9080||productpage.test.svc.cluster.local.circuit_breakers.high.rq_pending_open: 0\r\ncluster.outbound|9080||productpage.test.svc.cluster.local.upstream_rq_pending_active: 0\r\ncluster.outbound|9080||productpage.test.svc.cluster.local.upstream_rq_pending_failure_eject: 0\r\ncluster.outbound|9080||productpage.test.svc.cluster.local.upstream_rq_pending_overflow: 1594\r\ncluster.outbound|9080||productpage.test.svc.cluster.local.upstream_rq_pending_total: 469\n"})}),"\n",(0,r.jsx)(t.p,{children:"You can see 1594 for the upstream_rq_pending_overflow value which means 1594 calls so far have been flagged for circuit breaking."}),"\n",(0,r.jsx)(t.p,{children:"Now, because you have completed this task, there is no need to keep the destinationRule you created at the begining of this task. So go ahead and delete it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ kubectl delete -n test destinationrule productpage\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);