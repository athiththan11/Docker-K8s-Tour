# Kubernetes Deployment: Foo Server

This repo contains the `yaml` configuration developed to deploy a Deployment for the `Foo` server in Kubernetes along with the `NodePort` configurations and `Namespace`. The configurations uses and refers to the Docker image built and pushed in `02--foo-server-docker` step. Please find the `kubectl` commands used to deploy the configurations in the minikube environment.

## Concepts

### Namespace

Namespaces in Kubernetes realm used to group and manage deployments that are related to one set. `Namespace` makes it easier to delete a complete deployment with a single `delete` command. Moving forward, we will be creating and using namespaces for each deployment for ease of handling.

### NodePort

NodePort service is used to configure and open a specific set of ports on all applicable nodes and to route any traffic that is sent to this port to the appropriate container service.

## Kubectl Commands

### Apply

```sh
# deploy the namespace configurations
kubectl apply -f foo-server--namespace.yaml

# deploy the deployment configurations
kubectl apply -f foo-server--deployment.yaml

# deploy the nodeport configurations
kubectl apply -f foo-server--nodeport.yaml
```

### Delete

```sh
# single delete command to bring down the deployment referred by the namespace
kubectl delete -f foo-server--namespace.yaml
```
