# Kubernetes init Containers

This repo contains the configurations to deploy both `Foo V2` and a `Postgres` DB instance in the Kubernetes cluster including the configurations of `initContainers`. Please find a brief about `initContainers` and the basic commands to apply and delete the configurations below.

## Init Containers

Init containers are a special kind of containers in the Kubernetes that gets executed prior to the deployment of the intended containers. They get executed in sequential manner, and runs until its completion of execution. Below given are a few set of usages of the Init containers

- Execute a set of init scripts to run the main container
- Perform health check and service availability of dependent containers and services to start the main containers

You can learn more about the usages and depth in [here](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/).

In this repo, we have used the `initContainers` to perform a check of service availability of our `Postgres` deployment. Once confirming the availability, then to start the `Foo V2` containers in the deployment.

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
