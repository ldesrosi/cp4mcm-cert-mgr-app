
# Deploying the Node App
This basic node.js application demonstrate the use of MCM/RHACM to deploy an application which leverages the capability of cert-manager to take a `Certificate` and automatically convert it to a `Secret`.  

## Installing the components

### Managed Clusters
1. Manually deploy the cert-manager operator  
This step needs to be performed on each managed cluster. From the `Operator Hub` menu in the OpenShift Admin console, search for `cert-manager`, click the tile and then from the panel that shows up, click `install`

### Hub Clusters
1. Import the clusters you want to manage
2. Add a label to your cluster:
`mcm-managed`=`true`
3. Create the necessary namespaces 
From a terminal, `oc login` to your managed cluster and run the following commands: 
``` 
oc apply -f namespace.yaml
oc apply -f common/subscription
oc apply -f nodeapp/subscription
```

## Cleaning up

From a terminal, `oc login` to your managed cluster and run the following commands: 
``` 
oc delete -f namespace.yaml
oc delete -f common/subscription
oc delete -f nodeap/subscription
```