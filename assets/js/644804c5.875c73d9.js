"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3553],{6722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(4848),i=t(8453);const r={title:"Exposing a service with ISTIO Ingress Gateway",sidebar_position:30,weight:5},a=void 0,o={id:"traffic-management/expose_a_service",title:"Exposing a service with ISTIO Ingress Gateway",description:"It's common to us a Kubernetes Ingress to access an internal kubernetes service from the outside. In this module, you configure the traffic to enter through an Istio ingress gateway, in order to apply Istio control on traffic to your microservices.",source:"@site/docs/20-traffic-management/20-expose_a_service.md",sourceDirName:"20-traffic-management",slug:"/traffic-management/expose_a_service",permalink:"/docs/traffic-management/expose_a_service",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/20-traffic-management/20-expose_a_service.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Exposing a service with ISTIO Ingress Gateway",sidebar_position:30,weight:5},sidebar:"trafficManagementSidebar",previous:{title:"Overview",permalink:"/docs/traffic-management/overview"},next:{title:"Canary/Traffic Split",permalink:"/docs/traffic-management/canary-split-traffic"}},c={},l=[{value:"Enable Istio in a Namespace",id:"enable-istio-in-a-namespace",level:3},{value:"Verifying it:",id:"verifying-it",level:4},{value:"Expose a service",id:"expose-a-service",level:3},{value:"Verify it:",id:"verify-it",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"It's common to us a Kubernetes Ingress to access an internal kubernetes service from the outside. In this module, you configure the traffic to enter through an Istio ingress gateway, in order to apply Istio control on traffic to your microservices."}),"\n",(0,s.jsx)(n.p,{children:"By default, kubernetes services running in namespaces managed by Istio service mesh are not exposed outside the cluster. For the Kubernetes service you want to expose externally, you must deploy an Istio Ingress Gateway as a LoadBalancer for it, and then define an Istio VirtualService with the necessary routes. Let's see how that works."}),"\n",(0,s.jsx)(n.h3,{id:"enable-istio-in-a-namespace",children:"Enable Istio in a Namespace"}),"\n",(0,s.jsx)(n.p,{children:"You must manually enable Istio in each namespace that you want to track or control with Istio. When Istio is enabled in a namespace, the Envoy sidecar proxy is injected into all new workloads deployed in that namespace."}),"\n",(0,s.jsx)(n.p,{children:"This namespace setting will only affect new workloads in the namespace. Any preexisting workloads will need to be re-deployed to leverage the sidecar auto injection."}),"\n",(0,s.jsx)(n.p,{children:"let's create a new namespace to play with."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl create ns test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's label this namespace to automatically inject Envoy sidecar proxy into all pods going to run in this namespace."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl label namespace test istio-injection=enabled\n"})}),"\n",(0,s.jsx)(n.h4,{id:"verifying-it",children:"Verifying it:"}),"\n",(0,s.jsx)(n.p,{children:"Let's verify that automatic Istio sidecar injection is enabled, by deploying the book-info sampe app into this namespace"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -n test -f https://raw.githubusercontent.com/istio/istio/master/samples/bookinfo/platform/kube/bookinfo.yaml \n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"service/details created\r\nserviceaccount/bookinfo-details created\r\ndeployment.apps/details-v1 created\r\nservice/ratings created\r\nserviceaccount/bookinfo-ratings created\r\ndeployment.apps/ratings-v1 created\r\nservice/reviews created\r\nserviceaccount/bookinfo-reviews created\r\ndeployment.apps/reviews-v1 created\r\ndeployment.apps/reviews-v2 created\r\ndeployment.apps/reviews-v3 created\r\nservice/productpage created\r\nserviceaccount/bookinfo-productpage created\r\ndeployment.apps/productpage-v1 created\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, if you get pods running, you will see 2 containers running per pod. That's because the Envoy proxy container has been injected automatically to all of them. This envoy proxy has not been defined in the ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/istio/istio/master/samples/bookinfo/platform/kube/bookinfo.yaml",children:"manifest"})," used to deply this book-info sample app."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get po -n test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"NAME                             READY   STATUS    RESTARTS   AGE\r\ndetails-v1-698b5d8c98-9f2sz      2/2     Running   0          27s\r\nproductpage-v1-bf4b489d8-7d44d   2/2     Running   0          26s\r\nratings-v1-5967f59c58-g7877      2/2     Running   0          27s\r\nreviews-v1-9c6bb6658-s97gt       2/2     Running   0          27s\r\nreviews-v2-8454bb78d8-f9r25      2/2     Running   0          27s\r\nreviews-v3-6dc9897554-5fnqp      2/2     Running   0          27s\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Note:"})})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to ",(0,s.jsx)(n.strong,{children:"exclude"})," a workload from getting injected with the Istio sidecar, use the following annotation on the workload:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"sidecar.istio.io/inject: \u201cfalse\u201d\n"})}),"\n",(0,s.jsx)(n.h3,{id:"expose-a-service",children:"Expose a service"}),"\n",(0,s.jsx)(n.p,{children:"If you listed services into this namespace, you will notice that the service type of all of them is ClusterIP, which means that they can only be seen into the cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get svc -n test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\r\ndetails       ClusterIP   172.20.188.169   <none>        9080/TCP   51m\r\nproductpage   ClusterIP   172.20.146.158   <none>        9080/TCP   51m\r\nratings       ClusterIP   172.20.89.160    <none>        9080/TCP   51m\r\nreviews       ClusterIP   172.20.0.229     <none>        9080/TCP   51m\n"})}),"\n",(0,s.jsx)(n.p,{children:"How we can expose a service outside the cluster? Let's see how we can do that with the productpage for example."}),"\n",(0,s.jsxs)(n.p,{children:["To do so we define two Istio resources, ",(0,s.jsx)(n.code,{children:"Gateway"})," and ",(0,s.jsx)(n.code,{children:"VirtualService"}),".\r\nGateway configurations are applied to standalone Envoy proxies that are running at the edge of the mesh."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'kubectl apply -n test -f - <<EOF\r\napiVersion: networking.istio.io/v1alpha3\r\nkind: Gateway\r\nmetadata:\r\n  name: bookinfo-gateway\r\nspec:\r\n  selector:  \r\n    istio: ingressgateway \r\n  servers: \r\n  - port:\r\n      number: 80 \r\n      name: http\r\n      protocol: HTTP   \r\n    hosts: # The addresses that can be used by a client when attempting to connect to a service.\r\n    - "*"\r\nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here we point to the default istio ",(0,s.jsx)(n.code,{children:"ingressgateway"})," proxy service running in ",(0,s.jsx)(n.code,{children:"istio-system"})," namespace to expose the service throug the AWS ELB created for this ingress gateway."]}),"\n",(0,s.jsx)(n.p,{children:"This gateway is a loadbalancer that listens or accept incoming traffic on port 80 that uses HTTP protocol (could be HTTP,HTTPS,GRPC,HTTP2,MONGO or TCP)"}),"\n",(0,s.jsx)(n.p,{children:"This gateway configuration here, allows clients to connect on port 80 and to use any address (*) when attemting to connect to a service"}),"\n",(0,s.jsxs)(n.p,{children:["The gateway here, does not specify any traffic routing rules for the kuberenets service ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"productpage"})}),'. To make the gateway work as intended, you must also create a virtual service that defines traffic routing rules for the intended kuberenets service "productpage" and bind it to the gateway.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'kubectl apply -n test -f - <<EOF\r\napiVersion: networking.istio.io/v1alpha3\r\nkind: VirtualService\r\nmetadata:\r\n  name: bookinfo\r\nspec:\r\n  hosts:\r\n  - "*"\r\n\r\n  gateways:\r\n  - bookinfo-gateway \r\n  \r\n  http:\r\n  - match:\r\n    - uri:\r\n        exact: /productpage    \r\n    - uri:\r\n        prefix: /static\r\n    - uri:\r\n        exact: /login\r\n    - uri:\r\n        exact: /logout\r\n    - uri:\r\n        prefix: /api/v1/products\r\n    route:\r\n    - destination:\r\n        # Provide the destination service name using either a relative or an absolute path.\r\n        host: productpage # productpage.test.svc.cluster.local \r\n        port:\r\n          number: 9080\r\nEOF\n'})}),"\n",(0,s.jsx)(n.p,{children:"In VirtualService, you can define the routing rules for the external traffic."}),"\n",(0,s.jsxs)(n.p,{children:["In this example, traffic will be directed to the ",(0,s.jsx)(n.code,{children:"destination"})," service, if it meets any of the listed rules. For instance, they will be directed to the destination service ",(0,s.jsx)(n.em,{children:"productpage"})," if the uri provided was ",(0,s.jsx)(n.em,{children:"/productpage"}),", ",(0,s.jsx)(n.em,{children:"/static"}),", ",(0,s.jsx)(n.em,{children:"/login"}),", etc."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"hosts"})," field contains a list of the destinations/addresses that the client uses when sending requests to the service where routing rules listed below apply."]}),"\n",(0,s.jsxs)(n.p,{children:['As in this example, you can make a single set of routing rules that apply to all matching services by using wildcard ("*") prefixes under ',(0,s.jsx)(n.code,{children:"hosts"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To make the gateway to work as intended with those routing rules, you must bind/link this virtual service resource to the gateway resource name ",(0,s.jsx)(n.strong,{children:"bookinfo-gateway"})," you created in the previous step."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Note:"})})}),"\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"hosts"})," attribue in ",(0,s.jsx)(n.em,{children:"Gateway"})," and ",(0,s.jsx)(n.em,{children:"virtualService"}),' resources, you can remove "*", and only allow the dns name of the ',(0,s.jsx)(n.strong,{children:"istio-ingressgateway"})," servcie running in istio-ststem namespace, which is the AWS LB dns name that Istio created during the installation of Istio. Or to only allow dns cname/alias records (in Route53 for example) pointing to the dns name of the ",(0,s.jsx)(n.strong,{children:"istio-ingressgateway"})," servcie. Check this ",(0,s.jsx)(n.a,{href:"https://istio.io/v1.14/docs/tasks/traffic-management/ingress/ingress-control/#determining-the-ingress-ip-and-ports",children:"page"})," for more info."]}),"\n",(0,s.jsx)(n.h4,{id:"verify-it",children:"Verify it:"}),"\n",(0,s.jsx)(n.p,{children:"Let's verify that the service has been exposed as intended with the routing rules that have been set."}),"\n",(0,s.jsxs)(n.p,{children:["Because the gateway we created is binded to the ",(0,s.jsx)(n.strong,{children:"istio-ingressgateway"})," service running in ",(0,s.jsx)(n.strong,{children:"istio-system"})," namespace, you can reach the endpoint of this gateway using the same domain name of the AWS ELB that Istio created for this istio-ingressgateway service. Let's see how that works?"]}),"\n",(0,s.jsxs)(n.p,{children:["Execute the following command to the dns hostname of the AWS load balancer of the ",(0,s.jsx)(n.strong,{children:"istio-ingressgateway"})," service, and then assign it to an environment variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export ISTIO_IG_HOSTNAME=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')\r\necho $ISTIO_IG_HOSTNAME\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-buttonless",children:"ac8bed13fd78247e995b42664063ce47-1403049919.us-east-1.elb.amazonaws.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Remember, the gateway you created earlier is exposed throug this istio-ingressgateway service which is in turn exposed throug an AWS Loadbalancer. and the destination service of the virtualService you created was ",(0,s.jsx)(n.em,{children:"productpage"})]}),"\n",(0,s.jsxs)(n.p,{children:["So to access it we hit the same dns name of the istio-ingressgateway loadbalancer, by using the path ",(0,s.jsx)(n.em,{children:"/productpage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl $ISTIO_IG_HOSTNAME/productpage\n"})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title>Simple Bookstore App</title>\r\n...\r\n      <dl>\r\n        <dt>Reviews served by:</dt>\r\n        <u>reviews-v2-8454bb78d8-f9r25</u>\r\n...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also test accessing the page using the browser:\r\n",(0,s.jsx)(n.img,{alt:"productpage",src:t(1327).A+"",width:"1190",height:"569"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Congratulations!"})," By reaching this point, you have successfully exposed the kubernetes service productpage externally through the Istio ingress gateway."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1327:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/productpage-55271aa782d72e80d44d1bbf8756e149.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);