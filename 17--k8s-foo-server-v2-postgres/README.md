# Kubernetes Foo Server V2 & Postgres

This repo contains the configurations to deploy both `Foo V2` and a `Postgres` DB instance in the Kubernetes cluster. Please find the basic commands to apply and delete the configurations below.

## Kubectl Commands

### Apply

```sh
# deploy the namespace configurations
kubectl apply -f foo-server--namespace.yaml

# deploy the configurations related to postgres
kubectl apply -f ./postgres/

# deploy the foo v2 configurations
kubectl apply -f .
```

### Delete

```sh
# single delete command to bring down the deployment referred by the namespace
kubectl delete -f foo-server--namespace.yaml
```
