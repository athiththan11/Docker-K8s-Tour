# Kubernetes ClusterIP

In steps `12--k8s-deployment-foo-server` and `11--k8s-pod-foo-server-nodeport`, we configured NodePort to expose the internal communication to the external network. Which helped and routed the API request from an external network to the kubernetes cluster and the service. The ClusterIP service on the other hand is used to only expose the service within the kubernetes cluster and allowing the services only can be accessed by the nodes within the cluster. Therefore, to access our `Foo` server it is required to configure a loadbalancer service to communicate with the ClusterIP service.

This repo contains the configurations of `ClusterIP` service and `Ingress` controller service used to deploy the `Foo` server in a Kubernetes cluster. Please find the basic commands used to apply and delete the deployments below.

## Kubectl Commands

### Apply

```sh
# deploy the namespace configurations
kubectl apply -f foo-server--namespace.yaml

# deploy the deployment configurations
kubectl apply -f foo-server--deployment.yaml

# deploy the nodeport configurations
kubectl apply -f foo-server--clusterip.yaml
```

### Delete

```sh
# single delete command to bring down the deployment referred by the namespace
kubectl delete -f foo-server--namespace.yaml
```
