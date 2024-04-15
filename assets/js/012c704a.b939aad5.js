"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4015],{3328:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(4848),r=i(8453);const a={title:"Installing Kiali and Jaeger",sidebar_position:50},t=void 0,o={id:"setup/installing-istio-addons",title:"Installing Kiali and Jaeger",description:"What is Kiali?",source:"@site/docs/10-setup/50-installing-istio-addons.md",sourceDirName:"10-setup",slug:"/setup/installing-istio-addons",permalink:"/istio-service-mesh-on-eks/docs/setup/installing-istio-addons",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-setup/50-installing-istio-addons.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Installing Kiali and Jaeger",sidebar_position:50},sidebar:"setupSidebar",previous:{title:"Exposing ISTIO Metrics to Prometheus",permalink:"/istio-service-mesh-on-eks/docs/setup/expose-istio-metrics"}},l={},c=[{value:"What is Kiali?",id:"what-is-kiali",level:3},{value:"What is Jager?",id:"what-is-jager",level:3}];function d(e){const n={code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"what-is-kiali",children:"What is Kiali?"}),"\n",(0,s.jsx)(n.p,{children:"Kiali is an observability console for Istio with service mesh configuration and validation capabilities. It helps you understand the structure and health of your service mesh by monitoring traffic flow to infer the topology and report errors. Kiali provides detailed metrics and a basic Grafana integration, which can be used for advanced queries. Distributed tracing is provided by integration with Jaeger."}),"\n",(0,s.jsx)(n.p,{children:"To install Kilai run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -o ./kiali.yaml https://raw.githubusercontent.com/istio/istio/master/samples/addons/kiali.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After downloading it, open it for editing and define the ",(0,s.jsx)(n.code,{children:"external_services"})," section as follow for the ",(0,s.jsx)(n.code,{children:"configMap"})," ",(0,s.jsx)(n.em,{children:"Kiali"})," under ",(0,s.jsx)(n.code,{children:"config.yaml: |"}),". Here you are defining the namespace of Istio, the url endpoint of Grafana and Prometheus."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  name: kiali\r\n  namespace: istio-system\r\n...\r\ndata:\r\n  config.yaml: |\r\n    external_services:\r\n      custom_dashboards:\r\n        enabled: true\r\n      istio:\r\n        root_namespace: istio-system\r\n      grafana:\r\n        # Grafana service name is "prometheus-grafana" and is in the "prometheus" namespace, running on port 80.   \r\n        url: "http://prometheus-grafana.prometheus:80/"\r\n        in_cluster_url:        \r\n      prometheus:\r\n        # Prometheus service name is "prometheus-kube-prometheus-prometheus" and is in the "prometheus" namespace, running on port 9090. \r\n        url: "http://prometheus-kube-prometheus-prometheus.prometheus:9090/"   \r\n        cache_enabled: true\r\n        # Per-query expiration in seconds\r\n        cache_duration: 10\r\n        # Global cache expiration in seconds. Think of it as\r\n        # the "reset" or "garbage collection" interval.\r\n        cache_expiration: 300   \r\n...\n'})}),"\n",(0,s.jsx)(n.p,{children:"Save changes, and apply it to your cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f ./kiali.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"what-is-jager",children:"What is Jager?"}),"\n",(0,s.jsx)(n.p,{children:"Jaeger is an open source end to end distributed tracing system, allowing users to monitor and troubleshoot transactions in complex distributed systems."}),"\n",(0,s.jsx)(n.p,{children:"To install Jaeger run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/istio/istio/master/samples/addons/jaeger.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, we need to expose both Jager and Kiali services on AWS with ALB. To do that we create the following two ingress resources."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f - <<EOF\r\napiVersion: networking.k8s.io/v1\r\nkind: Ingress\r\nmetadata:\r\n  annotations:\r\n    alb.ingress.kubernetes.io/scheme: internet-facing\r\n    alb.ingress.kubernetes.io/target-type: ip\r\n  name: kiali\r\n  namespace: istio-system\r\nspec:\r\n  ingressClassName: alb\r\n  rules:\r\n  - http:\r\n      paths:\r\n      - backend:\r\n          service:\r\n            name: kiali\r\n            port:\r\n              number: 20001\r\n        path: /\r\n        pathType: Prefix\r\n---\r\napiVersion: networking.k8s.io/v1\r\nkind: Ingress\r\nmetadata:\r\n  annotations:\r\n    alb.ingress.kubernetes.io/scheme: internet-facing\r\n    alb.ingress.kubernetes.io/target-type: ip\r\n  name: jaeger\r\n  namespace: istio-system\r\nspec:\r\n  ingressClassName: alb\r\n  rules:\r\n  - http:\r\n      paths:\r\n      - backend:\r\n          service:\r\n            name: tracing\r\n            port:\r\n              number: 80\r\n        path: /\r\n        pathType: Prefix\r\nEOF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Wait a minute or so for AWS to provision an ALB for Kiali and Jaeger, and then browse the dns name of each one.\r\n",(0,s.jsx)(n.img,{alt:"kiali-jaeger-lb",src:i(909).A+"",width:"840",height:"195"})]}),"\n",(0,s.jsxs)(n.p,{children:["Kiali:\r\n",(0,s.jsx)(n.img,{alt:"kiali",src:i(4311).A+"",width:"1134",height:"764"})]}),"\n",(0,s.jsxs)(n.p,{children:["Jaeger:\r\n",(0,s.jsx)(n.img,{alt:"jaeger",src:i(3777).A+"",width:"951",height:"823"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3777:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/jaeger-13519d2d0ddd2b4e83cf50a7384b9ea7.png"},909:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/kiali-jaeger-lb-8b59f8bb50a09b8ef3970e000551e9cf.png"},4311:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/kiali-048992dcc380bc0f280fa6bddc9f06e8.png"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(6540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);