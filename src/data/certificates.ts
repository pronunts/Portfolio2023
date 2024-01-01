interface Certificate {
    title : string
    image: string
    certifier: string
    file: string
    date: string
}

const certificates : Certificate[] = [
    {
        title : 'Curso de FastAPI: Introducción, Operaciones, Validaciones y Autenticación',
        image: 'platzi',
        certifier: 'Platzi',
        file: 'diploma-fastapi.pdf',
        date: 'Mar 2023'
    },        
    {
        title : 'GitLab 101',
        image: 'gitlab',
        certifier: 'Gitlab',
        file: 'gitlab-101.pdf',
        date: 'Jan 2023'
    },  
    {
        title : 'Remote Foundations Certification',
        image: 'gitlab',
        certifier: 'Gitlab',
        file: 'remote-foundations-certification.pdf',
        date: 'Jan 2023'
    },  
    {
        title : 'TeamOps Certification',
        image: 'gitlab',
        certifier: 'Gitlab',
        file: 'teamops-certification.pdf',
        date: 'Jan 2023'
    },              
    {
        title : 'Curso de Azure Cache para Redis',
        image: 'platzi',
        certifier: 'Platzi',
        file: 'diploma-azure-redis-cache.pdf',
        date: 'Sep 2022'
    },      
    {
        title : 'Stream Processing with Kafka',
        image: 'confluent',
        certifier: 'Confluent',
        file: 'stream-processing-with-kafka.pdf',
        date: 'Jul 2022'
    },  
    {
        title : 'Apache Kafka® Architecture: Kafka Internal Components and How They Work',
        image: 'confluent',
        certifier: 'Confluent',
        file: 'apache-kafka-architecture-kafka-internal-components-and-how-they-work.pdf',
        date: 'Jul 2022'
    },     
    {
        title : 'Build an Apache Kafka® Event Streaming Pipeline',
        image: 'confluent',
        certifier: 'Confluent',
        file: 'build-an-apache-kafka-event-streaming-pipeline.pdf',
        date: 'Jul 2022'
    }, 
    {
        title : 'GitOps Fundamentals',
        image: 'codefresh',
        certifier: 'GitOps Fundamentals',
        file: 'gitops-fundamentals.pdf',
        date: 'Mar 2022'
    },            
    {
        title : 'Apache kafka fundamentals',
        image: 'confluent',
        certifier: 'Confluent',
        file: 'apache-kafka-fundamentals.pdf',
        date: 'Oct 2021'
    }, 
    {
        title : 'Red Hat Delivery Specialist - Container Platform (ISV)',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-delivery-specialist-container-platform.pdf',
        date: 'Apr 2021'
    },       
    {
        title : 'Red Hat Delivery Specialist - Container Platform Application Deployment',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-delivery-specialist-container-platform-application-deployment.pdf',
        date: 'Apr 2021'
    },         
    {
        title : 'Red Hat Delivery Specialist - Container Platform Deployment',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-delivery-specialist-containerp-latform-deployment.pdf',
        date: 'Apr 2021'
    },       
    {
        title : 'Red Hat Sales Engineer Specialist - Container Platform',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-sales-engineer-specialist-container-platform.pdf',
        date: 'Apr 2021'
    },        
    {
        title : 'Red Hat Sales Specialist - Cloud-Native Development',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-sales-specialist-cloud-native-development.pdf',
        date: 'Apr 2021'
    },   
    {
        title : 'Red Hat Sales Specialist - Hybrid Cloud Infrastructure',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-sales-specialist-hybrid-cloud-infrastructure.pdf',
        date: 'Apr 2021'
    },
    {
        title : 'Red Hat Sales Specialist - IT Automation and Management',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-sales-specialist-it-automation-and-management.pdf',
        date: 'Apr 2021'
    },  
    {
        title : 'Red Hat Sales Specialist - Red Hat Ansible Automation Platform',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-sales-specialist-red-hat-ansible-automation-platform.pdf',
        date: 'Apr 2021'
    },        
    {
        title : 'Red Hat Sales Specialist - Red Hat OpenShift',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'red-hat-sales-specialist-red-hat-openshift.pdf',
        date: 'Dec 2020'
    },                           
    {
        title : 'How to sell red hat openshift container storage',
        image: 'redhat',
        certifier: 'Redhat',
        file: 'how-to-sell-red-hat-openshift-container-storage.pdf',
        date: 'Dic 2020'
    },       
    {
        title : 'Preparing for the google cloud associate cloud engineer',
        image: 'coursera',
        certifier: 'Coursera',
        file: 'preparing-for-the-google-cloud-associate-cloud-engineer.pdf',
        date: 'May 2020'
    },         
    {
        title : 'Elastic google cloud infrastructure scaling and automation',
        image: 'coursera',
        certifier: 'Coursera',
        file: 'elastic-google-cloud-infrastructure-scaling-and-automation.pdf',
        date: 'May 2020'
    },     
    {
        title : 'Essential google cloud infrastructure foundation',
        image: 'coursera',
        certifier: 'Coursera',
        file: 'essential-google-cloud-infrastructure-foundation.pdf',
        date: 'May 2020'
    },             
    {
        title : 'Essential google cloud infrastructure core services',
        image: 'coursera',
        certifier: 'Coursera',
        file: 'essential-google-cloud-infrastructure-core-services.pdf',
        date: 'May 2020'
    },          
    {
        title : 'Google cloud platform fundamentals core infrastructure',
        image: 'coursera',
        certifier: 'Coursera',
        file: 'google-cloud-platform-fundamentals-core-infrastructure.pdf',
        date: 'May 2020'
    },       
    {
        title : 'VMware Server Virtualization Fundamentals',
        image: 'vmware',
        certifier: 'VMware',
        file: 'vmware-server-virtualization-fundamentals.pdf',
        date: 'Jun 2022'
    },    
    {
        title : 'Curso de pruebas automatizadas en una web con docker',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-pruebas-automatizadas-en-una-web-con-docker.pdf',
        date: 'May 2021'
    },
    {
        title : 'Curso de monitorización con grafana y prometheus',
        image: 'openwebinars',
        certifier: 'openwebinars',
        file: 'curso-de-monitorizacion-con-grafana-y-prometheus.pdf',
        date: 'Oct 2021'
    },
    {
        title : 'Introduccion a kubernetes',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'introduccion-a-kubernetes.pdf',
        date: 'Feb 2020'
    },
    {
        title : 'Fundamentos generales orquestación y automatización IT',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'fundamentos-generales-orquestacion-y-automatizacion-it.pdf',
        date: 'Jul 2020'
    },
    {
        title : 'Virtualización de servidores',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'virtualizacion-de-servidores.pdf',
        date: 'Feb 2020'
    },
    {
        title : 'Fundamentos generales orquestación y automatización it',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'fundamentos-generales-orquestacion-y-automatizacion-it.pdf',
        date: 'Jul 2020'
    },

    {
        title : 'ElasticSearch, logStash y kibana - framework bigdata',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'elasticsearch-logstash-y-kibana-framework-bigdata.pdf',
        date: 'May 2021'
    },
    {
        title : 'Curso de testing de apis con jmeter',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-testing-de-apis-con-jmeter.pdf',
        date: 'Jun 2021'
    },
    {
        title : 'Curso de terraform',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-terraform.pdf',
        date: 'Jul 2020'
    },      
    {
        title : 'Introducción a cloud computing',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'introduccion-a-cloud-computing.pdf',
        date: 'Jul 2020'
    },             
    {
        title : 'Curso de serverless',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-serverless.pdf',
        date: 'Jul 2021'
    },
    {
        title : 'Curso de product owner en la prácticar',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-product-owner-en-la-practica.pdf',
        date: 'Abr 2021'
    },
    {
        title : 'Curso de openShift',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-openshift.pdf',
        date: 'Feb 2020'
    },
    {
        title : 'Curso de maven',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-maven.pdf',
        date: 'Ene 2021'
    },                
    {
        title : 'Curso de loadrunner',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-loadrunner.pdf',
        date: 'Dic 2020'
    },
    {
        title : 'Curso de jenkins usuarios y jobs',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-jenkins-usuarios-y-jobs.pdf',
        date: 'Ago 2021'
    },
    {
        title : 'Curso de jenkins pipelines y herramientas',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-jenkins-pipelines-y-herramientas.pdf',
        date: 'Ago 2021'
    },
    {
        title : 'Curso de jenkins para principiantes.pdf',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-jenkins-para-principiantes.pdf',
        date: 'Ago 2021'
    },            
    {
        title : 'Curso de liderazgo de equipos',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-liderazgo-de-equipos.pdf',
        date: 'Mar 2021'
    },
    {
        title : 'Curso de kafka',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-kafka.pdff',
        date: 'Ago 2021'
    },
    {
        title : 'Curso de jmeter para la implementación de pruebas de rendimiento',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-jmeter-para-la-implementacion-de-pruebas-de-rendimiento.pdf',
        date: 'May 2021'
    },
    {
        title : 'Curso de istio',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-istio.pdf',
        date: 'Nov 2020'
    },
    {
        title : 'Curso de introducción al testing',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-introduccion-al-testing.pdf',
        date: 'Jun 2021'
    },
    {
        title : 'Curso de inteligencia emocional aplicada a equipos de alto rendimiento',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-Inteligencia-emocional-aplicada-a-equipos-de-alto-rendimiento.pdf',
        date: 'Abr 2021'
    },
    {
        title : 'Curso de helm',
        image: 'openwebinars',
        certifier: 'Openwebinars',
        file: 'curso-de-helm.pdf',
        date: 'Nov 2019'
    },
    {
        title : 'Curso de gestión de equipos con management 3.0',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-gestion-de-equipos-con-management-3-0.pdf',
        date: 'Mar 2021'
    },
    {
        title : 'Curso de fundamentos de lean change management',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-fundamentos-de-lean-change-management.pdf',
        date: 'Abr 2021'
    },
    {
        title : 'Curso de big data',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-big-data.pdf',
        date: 'Feb 2021'
    },
    {
        title : 'Curso de arquitecturas monolíticas basadas en microservicios',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-arquitecturas-monoliticas-basadas-en-microservicios.pdf',
        date: 'Ago 2021'
    },
    {
        title : 'Curso de amazon web services para desarrolladores',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-amazon-web-services-para-desarrolladores.pdf',
        date: 'May 2021'
    },
    {
        title : 'Curso de amazon web services para sysadmin',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-amazon-web-services-para-sysadmin.pdf',
        date: 'Jun 2021'
    },
    {
        title : 'Curso de design thinking',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-design-thinking.pdf',
        date: 'May 2022'
    },
    {
        title : 'Curso de ansible',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'ansible.pdf',
        date: 'Feb 2020'
    },
    {
        title : 'Curso de arquitectura hexagonal',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'curso-de-arquitectura-hexagonal.pdf',
        date: 'Abr 2021'
    },
    {
        title : 'Docker devops profesional',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'docker-devops-profesional.pdf',
        date: 'Jul 2020'
    },
    {
        title : 'Docker para desarrolladores',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'docker-para-desarrolladores.pdf',
        date: 'Jul 2020'
    },    
    {
        title : 'Introducción a docker',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'introduccion-a-docker.pdf',
        date: 'Jul 2020'
    },
    {
        title : 'SSH',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'ssh.pdf',
        date: 'Jul 2020'
    },  
    {
        title : 'Virtualización de servidores',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'virtualizacion-de-servidores.pdf',
        date: 'Feb 2020'
    },           
    {
        title : 'Linux desde cero',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'linux-desde-cero.pdf',
        date: 'Feb 2020'
    },
    {
        title : 'Administración de sitios Web con WordPress',
        image: 'openwebinars',
        certifier: 'OpenWebinars',
        file: 'administracion-de-sitios-web-con-wordpress.pdf',
        date: 'Feb 2020'
    },        
]
export default certificates