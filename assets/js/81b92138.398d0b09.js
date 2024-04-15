"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5271],{4132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),s=n(8453);const o={title:"Overview",sidebar_position:10,weight:5},a=void 0,r={id:"authentication-and-authorization/overview",title:"Overview",description:"ISTIO comes with a couple of custom resource definitions (CRDs) for configuring user and service to service authentication as well as authorization policies.",source:"@site/docs/30-authentication-and-authorization/10-overview.md",sourceDirName:"30-authentication-and-authorization",slug:"/authentication-and-authorization/overview",permalink:"/istio-service-mesh-on-eks/docs/authentication-and-authorization/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/30-authentication-and-authorization/10-overview.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Overview",sidebar_position:10,weight:5},sidebar:"authzAuthnSidebar",next:{title:"Setting Up Auth0 Application",permalink:"/istio-service-mesh-on-eks/docs/authentication-and-authorization/setting-up-auth0-application"}},c={},l=[{value:"What is authentication?",id:"what-is-authentication",level:3},{value:"Mutual TLS (mTLS)",id:"mutual-tls-mtls",level:3},{value:"PeerAuthentication (Service to Service communication)",id:"peerauthentication-service-to-service-communication",level:3},{value:"Users Authentication (RequestAuthentication)",id:"users-authentication-requestauthentication",level:3},{value:"Authorization (AuthorizationPolicy)",id:"authorization-authorizationpolicy",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"ISTIO comes with a couple of custom resource definitions (CRDs) for configuring user and service to service authentication as well as authorization policies."}),"\n",(0,i.jsxs)(t.p,{children:["The key three access control components here are the ",(0,i.jsx)(t.code,{children:"principle"}),", ",(0,i.jsx)(t.code,{children:"action"}),", and ",(0,i.jsx)(t.code,{children:"object"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Principle"})," in kubernetes is a kubernetes ",(0,i.jsx)(t.code,{children:"service"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Action"}),", assuming we're talking about http, this can be a GET request, a POST request, DELETE, PUT request and so on."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Object"})," is a service as well."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"what-is-authentication",children:"What is authentication?"}),"\n",(0,i.jsx)(t.p,{children:"Authentication is all about the identity of the principle or service."}),"\n",(0,i.jsx)(t.p,{children:"When you perform authentication, you are validating some kind of credential and ensuring that it is valid and trustworthy. Once the authentication succeeds, we can talk about an authenticated principle."}),"\n",(0,i.jsx)(t.p,{children:"If the credential is invalid or cannot be trusted, you have an unauthenticated principle or none at all."}),"\n",(0,i.jsx)(t.p,{children:"Each workload in kubernetes is assigned a unique identity. This identity is then used when the workloads communicate with one another."}),"\n",(0,i.jsxs)(t.p,{children:["In kubernetes, the identity is represented by a kubernetes service account. This service account is the identity that pods use and then present at run time. Istio uses the x509 certificate from that service account to create a new identity in accordance with the ",(0,i.jsx)(t.a,{href:"https://spiffe.io/",children:"SPIFFE"})," spec."]}),"\n",(0,i.jsx)(t.p,{children:"SPIFFE takes that identity and encodes it into an x 509 certificate."}),"\n",(0,i.jsx)(t.h3,{id:"mutual-tls-mtls",children:"Mutual TLS (mTLS)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"TLS-MTLS",src:n(3579).A+"",width:"711",height:"211"})}),"\n",(0,i.jsx)(t.p,{children:"So, now that we've created and obtained these identities for our workloads, we can use these certificates to perform mutual tls at runtime."}),"\n",(0,i.jsx)(t.p,{children:"So, what exactly is mutual tls?\r\nWhen doing tls, it's usually one way. So you open your browser. You go to google.com and you'll see that lock, and you can check the certificate and all that stuff."}),"\n",(0,i.jsx)(t.p,{children:"However, when I do this, I do not provide Google with any proof of my identity. I only have a request. So this is one-way tls, but this is also where mutual tls differs fundamentally."}),"\n",(0,i.jsx)(t.p,{children:"So, when two services try to communicate with mutual tls, they must both provide certificates to each other. So both parties, the client and the server, know who they're talking to."}),"\n",(0,i.jsx)(t.p,{children:"So you should have it enabled for all of your services. However, there are some scenarios where you are likely to have some legacy applications. They don't yet support mutual tls, and there's also a timing issue."}),"\n",(0,i.jsx)(t.p,{children:"So, what if we wanted to enable mutual tls in all of our deployments?\r\nAs a result, clients connecting to a server via mutual tls will fail if the server does not accept mutual tls. And the server attempting to serve mutual tls where the client wants plain text communication will also fail."}),"\n",(0,i.jsx)(t.p,{children:"That means that if we just want to enable mutual tls, we'll have to redeploy the clients and servers simultaneously."}),"\n",(0,i.jsx)(t.p,{children:"All of this is impossible; you can't do it consistently, and even if you can, you won't be able to repeat it."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"permissive-mtls",src:n(5417).A+"",width:"341",height:"341"})}),"\n",(0,i.jsx)(t.p,{children:"Now, ISTIO has solved this problem because it has a graceful mode where you can opt into mutual tls, which is known as permissive mode."}),"\n",(0,i.jsx)(t.p,{children:"When you install Istio, this permissive mode is enabled by default. If a client attempts to connect to me using mutual tls while permissive mode is enabled, I will serve mutual tls. If the client does not use mutual TLS and calls the server, the server can also respond in plain text."}),"\n",(0,i.jsx)(t.p,{children:"So I'm giving the client the option of doing mutual tls or not. As a result of using this mode, you can gradually roll out mutual tls across your entire mesh. You can opt in one service at a time. If you want, you can do it for one service per namespace and then mesh wide."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"only-mtls",src:n(1208).A+"",width:"341",height:"341"})}),"\n",(0,i.jsx)(t.p,{children:"Once you've transferred all of your services, you can switch from permissive to strict mode."}),"\n",(0,i.jsx)(t.p,{children:"With the strict mode you can only do mutual tls. As a result, any client attempting to connect will need to perform mutual tls and present their certificate. If they don't, the connection will be rejected."}),"\n",(0,i.jsx)(t.h3,{id:"peerauthentication-service-to-service-communication",children:"PeerAuthentication (Service to Service communication)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"apiVersion: security.istio.io/v1beta1\r\nkind: PeerAuthentication\r\nmetadata:\r\n  name: default\r\n  namespace: test # namespace-wide policy\r\nspec:\r\n  selector:\r\n    matchLabels:\r\n      teir: frontend # <---- config applied to incoming request to pods with this label\r\n  mtls:\r\n    mode: STRICT # only accept requests encrypted with TLS\n"})}),"\n",(0,i.jsx)(t.p,{children:"This brings us to the first security resource in istio, known as PeerAuthentication that you can use to configure the communication between workloads. Basically, you can use this resource to configure the mutual tls mode when the workloads communicate."}),"\n",(0,i.jsx)(t.p,{children:"As previously stated, the default mode is permissive. The mutual tls mode can be controlled at the mesh level, namespace level, or even more granularly by using labels to set mutual tls only for specific workloads. If that isn't enough, you can also control mutual tls mode for specific ports. For example, you could configure strict mutual mode for some workloads but disable mutual tls for communication on a specific port."}),"\n",(0,i.jsx)(t.h3,{id:"users-authentication-requestauthentication",children:"Users Authentication (RequestAuthentication)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'apiVersion: security.istio.io/v1beta1\r\nkind: RequestAuthentication\r\nmetadata:\r\n name: customers\r\n  namespace: test\r\nspec:\r\n  selector:\r\n    matchLabels:\r\n      app: customers\r\n  jwtRules:\r\n  - issuer: "https://minasys.us.auth0.com/"\r\n    jwksUri: "https://minasys.us.auth0.com/.well-known/jwks.json"\n'})}),"\n",(0,i.jsx)(t.p,{children:"So far, we've discussed how services communicate, but now how do you authenticate users in Istio?\r\nThis is where RequestAuthentication comes into play. This resource is used for end-user authentication and validates the credentials attached to the request."}),"\n",(0,i.jsx)(t.p,{children:"In this case, the JWT token is used for request level authentication. So, just as we used the SIFEFE identity to authenticate services, we use JWT tokens to authenticate users."}),"\n",(0,i.jsx)(t.p,{children:"This sample example above applies to all workloads in the test namespace that have the label app set to customers. As a result, any request made to these workloads will require a JWT token on the request (in the header)."}),"\n",(0,i.jsx)(t.p,{children:"So the requestAuthentication resource configures how the token is generated and how the signature is authenticated using the provided key set."}),"\n",(0,i.jsx)(t.p,{children:"If a request to this specific workload does not include a valid JWT token, the token will not conform to those rules, and the request will be rejected."}),"\n",(0,i.jsx)(t.p,{children:"However, if we do not provide a token, the request will not be rejected; it will simply not be authenticated."}),"\n",(0,i.jsx)(t.h3,{id:"authorization-authorizationpolicy",children:"Authorization (AuthorizationPolicy)"}),"\n",(0,i.jsx)(t.p,{children:"So, assuming we have authenticated the request, we can talk about performing an action on an object, which is what authorization is all about."}),"\n",(0,i.jsx)(t.p,{children:"So authorization is an authenticated principle that allows a user to perform an action on an object. For example, can (user a) send a GET request to a specific path on (service b)."}),"\n",(0,i.jsx)(t.p,{children:"Now note, that the principle could be authenticated. However, it may not be permitted to perform an action."}),"\n",(0,i.jsx)(t.p,{children:"Now that we have an authenticated principle, we can use another resource called authorizationPolicy to control access based on it."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'apiVersion: security.istio.io/v1beta1\r\nkind: AuthorizationPolicy\r\nmetadata:\r\n  name: customers\r\n  namespace: test\r\nspec:\r\n  selector:\r\n    matchLabels:\r\n      app: customers\r\n  action: ALLOW\r\n  rules:\r\n  - from:\r\n    - source:\r\n       requestPrincipals: ["*"]\n'})}),"\n",(0,i.jsx)(t.p,{children:"This is the resource where we can apply the principle from the peerAuthentication policies and the requestAuthentication policies."}),"\n",(0,i.jsxs)(t.p,{children:["Remember that there are principles when the services communicate, but there is also a principle when you do requestAuthentication. If you want to write policies based on peer or service identities, you can use a field called ",(0,i.jsx)(t.code,{children:"principles"}),". And if we're making decisions based on the requestAuthentication or the users, we can use the field ",(0,i.jsx)(t.code,{children:"requestPrinciples"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You can also write more complex rules in the authorizationPolicies like the follwoing example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'apiVersion: security.istio.io/v1beta1\r\nkind: AuthorizationPolicy\r\nmetadata:\r\n  name: customers\r\n  namespace: test\r\nspec:\r\n  action: ALLOW\r\n  rules:\r\n  - from:\r\n    - source:\r\n        principals: ["cluster.local/ns/default/sa/sleep"]\r\n    - source:\r\n        namespaces: ["test"]\r\n    to:\r\n    - operation:\r\n        methods: ["GET"]\r\n        paths: ["/info*"]\r\n    - operation:\r\n        methods: ["POST"]\r\n        paths: ["/data"]\r\n    when:\r\n    - key: request.auth.claims[iss]\r\n      values: ["https://accounts.google.com"]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["With the ",(0,i.jsx)(t.code,{children:"from"})," field you can define a list of source identities, source namespaces, and principles that are allowed to call the services that the policy applies to."]}),"\n",(0,i.jsx)(t.p,{children:"This example allows calls from the services that use the sleep service account. so that's under source principles, and they come from the test namespace."}),"\n",(0,i.jsxs)(t.p,{children:["The second field is called the ",(0,i.jsx)(t.code,{children:"to"})," field, and this is where you can specify what paths and what operations and methods can be used when making the calls to the service. This example shows that we can call ",(0,i.jsx)(t.code,{children:"/info"})," and use the ",(0,i.jsx)(t.code,{children:"GET"})," method and we can also call ",(0,i.jsx)(t.code,{children:"POST"})," method on ",(0,i.jsx)(t.code,{children:"/data"})," path."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally the ",(0,i.jsx)(t.code,{children:"when"})," field, this one allows us to specify different conditions based on the attributes from the request itself, things like headers or values from authenticated principles. This example shows that we can only make calls, from, and to, when that request has a valid JWT token that was issues by accounts.google.com."]}),"\n",(0,i.jsx)(t.p,{children:"In this chapter, we will talk about authentication and authorization and will explain the differences between them, and will see the istio resources that you can use to configure them."}),"\n",(0,i.jsx)(t.p,{children:"You will understand the following topics by the end of this chapter."}),"\n",(0,i.jsx)(t.p,{children:"What are the differences between Authentication and Authorization?\r\nWhich ISTIO resources you can use to configure them?\r\nWhat access control in ISTIO is? How it works?\r\nHow they work together to restrict service A from performing an action on service B."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3579:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TLS-MTLS-fb931047c9da9dc00fdc700c1113c051.png"},1208:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/only-mtls-4d8d3eab94ebcabf2e78bb491966bae9.png"},5417:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/permissive-mtls-4136c4390b1a30ab320e04e067b1ada5.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);