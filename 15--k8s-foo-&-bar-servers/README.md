# Kubernetes Foo & Bar Servers

This repo contains the configurations of `ClusterIP` service and `Ingress` controller service used to deploy both `Foo` and `Bar` server in a Kubernetes cluster. Please find the basic commands used to apply and delete the deployments below.

## Kubectl Commands

### Apply

```sh
# deploy the namespace configurations
kubectl apply -f foo-bar--namespace.yaml

# deploy the deployment configurations
kubectl apply -f foo-server--deployment.yaml

# deploy the cluster ip configurations
kubectl apply -f foo-server--clusterip.yaml

# deploy the deployment configurations
kubectl apply -f bar-server--deployment.yaml

# deploy the cluster ip configurations
kubectl apply -f bar-server--clusterip.yaml

# deploy the ingress configurations
kubectl apply -f foo-bar--ingress.yaml
```

### Delete

```sh
# single delete command to bring down the deployment referred by the namespace
kubectl delete -f foo-bar--namespace.yaml
```
