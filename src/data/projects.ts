interface Project {
    title : string
    type: string
    desc: string
    from: string
    to: string|null
    techs: string[]
    link: string|null
}
type Projects = {
    [key in 'es' | 'en']: Project[]
}

const projects : Projects = {
    'es' : [
        {
            title: 'Microsoft Certified: Azure AI Engineer Associate',
            type: 'Certificación',
            from: 'Sep 2023',
            to: 'Sep 2024',
            desc: 'As a Microsoft Azure AI engineer, you will create AI solutions using Azure Cognitive Services and Applied AI Services, covering all development phases. Proficiency in Python and C#, utilizing SDK/REST APIs, and applying responsible AI principles are required.',
            techs: ['azure'],
            link: 'https://learn.microsoft.com/en-us/users/danieljsaldana/credentials/1655b468218af0a'
        },         
        {
            title: 'Microsoft Certified: Azure Cosmos DB Developer Specialty',
            type: 'Certificación',
            from: 'Aug 2023',
            to: 'Aug 2024',
            desc: 'This certification signifies a profound grasp of crafting strategic technical solutions to meet specific business goals. Demonstrating an adept balance of best practices and contextual trade-offs, holders excel in designing cross-platform solutions, with a specialized emphasis on harnessing Microsoft Azure Cosmos DBs capabilities for cloud-native applications.',
            techs: ['azure'],
            link: 'https://learn.microsoft.com/en-us/users/danieljsaldana/credentials/e9d53a8fc378fb76'
        },           
        {
            title: 'AWS Certified Solutions Architect – Professional',
            type: 'Certificación',
            from: 'Aug 2023',
            to: 'Aug 2026',
            desc: 'Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices and trade-offs based on business context. Badge owners are able to design solutions across multiple platforms and providers.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/872b2f1a-a56d-4351-a901-d6ca6904e11f'
        },           
        {
            title: 'Oracle Cloud Infrastructure 2023 Multicloud Architect Certified Associate',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Jun 2025',
            desc: 'The Oracle Cloud Infrastructure 2023 Multicloud Architect Associate certification is designed to test an individuals expertise in designing and implementing Oracle Cloud Infrastructure (OCI) multicloud solutions. This certification aims to evaluate the candidates ability to use a combination of cloud services to build a multicloud environment.',
            techs: ['oracle'],
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CFE2F62ECAB9B9D9C63A6578116C6AF3546F990058223C6D66E9543E4645A7A0'
        },            
        {
            title: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Jun 2025',
            desc: 'The Oracle Cloud Infrastructure (OCI) Foundations certification is for individuals who intend to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI). This certification is for candidates with non-technical backgrounds, such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications.',
            techs: ['oracle'],
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=524190EC86E8752386E9DB188282F849565A8A488AD6DD98C038FF6E2F88591A'
        },            
        {
            title: 'Microsoft Certified: Cybersecurity Architect Expert',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Abr 2024',
            desc: 'Earning Cybersecurity Architect Expert validates subject matter expertise in designing and evolving the cybersecurity strategy to protect an organization’s mission and business processes across all aspects of the enterprise architecture.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/1c2bfadf-23e9-4472-a76e-83844cddf5e3'
        },                    
        {
            title: 'SC-100: Microsoft Cybersecurity Architect',
            type: 'Certificación',
            from: 'Abr 2023',
            to: null,
            desc: 'Passing Exam SC-100: Microsoft Cybersecurity Architect validates the skills and advanced experience and knowledge in a wide range of security engineering areas, including identity and access, platform protection, security operations, securing data, and securing applications. Candidates have experience with hybrid and cloud implementations.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/0a508fed-e128-4e2b-b4e2-7940e0c07936'
        },            
        {
            title: 'Intermediate Flux',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Flux is a data language used in the InfluxDB time series platform. This course provides a hands-on introduction to the Flux data language. Using an IoT use case, this intermediate course teaches more advanced principles and functions for working in Flux. Participants learn to write their own Flux queries, visualize data, and apply these principles to a real-world problem.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/efeab75b-818c-4ebb-a6fa-d0ec60885242'
        },        
        {
            title: 'Data Collection with Telegraf',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Telegraf is an open source data collection agent that allows users to collect time series data from hundreds of different sources. This course covers the fundamentals of what Telegraf is, how to install and configure it, how to perform data transformations and finally some tips and tricks on how to avoid common mistakes.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/628395d3-ffd3-4373-852e-8b3db4fc0f7d'
        },            
        {
            title: 'Beginner Flux',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Flux is a data language used in the InfluxDB time series platform. This course provides a hands-on introduction to the Flux data language. Using an IoT use case, this course teaches some of the basic principles and functions for working in Flux. Participants learn to write their own Flux queries, visualize data, and apply these principles to a real-world problem.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/f0d8e099-776e-421d-8d34-e86fa480346b'
        },           
        {
            title: 'Exploring InfluxDB Cloud',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'This course covers the basics of the InfluxDB Cloud time series data platform including a tour of the user interface components and basic administration. It also teaches how to ingest and visualize data as well as how to replicate data from the edge. Learners must complete a hands-on assignment to show their comprehension of the skills presented in the course.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/26a84329-bd56-45e3-a1e6-4bc98a853f4a'
        },              
        {
            title: 'InfluxDB Essentials',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'This course covers the fundamentals of InfluxDB. It walks through the various components of the platform, and introduces the InfluxDB data model and how to map raw data onto it. You will also learn about Flux, a scripting and querying language, and how to use it for basic transformation and analysis of time series data. Finally, it examines different methods for visualizing data in InfluxDB and how to use tasks to automate different workflows and processes.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/7dcc3341-1e9a-4fb7-b18e-b0a862c84bc8'
        },          
        {
            title: 'Microsoft Certified: Azure Network Engineer Associate',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Abr 2024',
            desc: 'Earning Azure Network Engineer Associate validates skills and subject matter expertise in planning, implementing, and maintaining Azure networking solutions, including hybrid networking, connectivity, routing, security, and private access to Azure services. Professionals in this role deploy networking solutions using Azure Portal and other methods, including PowerShell, Azure Command-Line Interface (CLI), and Azure Resource Manager templates (ARM templates).',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/27d26914-5bf5-4b00-914d-2063240481ed'
        },              
        {
            title: '(ISC)² Candidate',
            type: 'Certificación',
            from: 'Mar 2023',
            to: 'Mar 2024',
            desc: '(ISC)² Candidates are individuals pursuing or considering a cybersecurity certification. To become a Candidate, the individual must apply online and provide minimum identifying information, as well as affirm that they will abide by the (ISC)² Code of Ethics and Privacy Policy.',
            techs: ['isc'],
            link: 'https://www.credly.com/badges/15402b80-2c68-47c5-9ddb-365ad471b84d'
        },           
        {
            title: 'Microsoft Certified: Information Protection Administrator Associate',
            type: 'Certificación',
            from: 'Mar 2023',
            to: 'Mar 2023',
            desc: 'Earning the Information Protection Administrator Associate certification validates the skills and knowledge to plan and implement controls that meet organizational compliance needs. Candidates are responsible for translating requirements and compliance controls into technical implementation. They are responsible for creating policies and rules for content classification, data loss prevention, governance, and protection.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/0d84a1b7-e11b-4378-a7c3-1d4cf777a21b'
        },         
        {
            title: 'Microsoft Certified: Dynamics 365 Fundamentals (CRM)',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Earners of Dynamics 365 Fundamentals (CRM) demonstrate relevant work experience in an Information Technology (IT) environment. Candidates have a fundamental understanding of the customer engagement capabilities of Dynamics 365.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/44216d31-d4cc-404a-b6bc-e879553ff0dc'
        },         
        {
            title: 'Microsoft 365 Certified: Fundamentals',
            type: 'Certificación',
            from: 'Ene 2024',
            to: null,
            desc: 'Earning the Microsoft 365 Fundamentals certification demonstrates an understanding of the options available in Microsoft 365 and the benefits of adopting cloud services, the Software as a Service (SaaS) cloud model, and implementing Microsoft 365 cloud service.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/c1cf03d4-a8cd-40c6-b81b-62ad58bee529'
        },  
        {
            title: 'Achieve CI&CD With Jenkins',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2025',
            desc: 'This course introduces the basic concepts, features and benifits of CI/CD compared with traditional software developing mode. Then we have a detailed introduction about the features and benefits of Jenkins software and also the installation of Jenkins based on Ubuntu operating system. Finally we introduced the detailed operations on Jenkins console with a brief demonstration.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/achieve-ci-cd-with-jenkins.png'
        },             
        {
            title: 'Alibaba Cloud Analysis Architecture and Case Studies',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2024',
            desc: 'Through this course, you will learn the core services of Alibaba Cloud Analysis Architecture (E-MapReduce, MaxCompute, Table Store). By studying some classic use cases, you can understand how to build an analysis architecture in Alibaba Cloud.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/alibaba-cloud-analysis-architecture-and-case-studies.png'
        },          
        {
            title: 'Alibaba Hybrid Cloud Solution',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2024',
            desc: 'This course helps you undertsand the components and services in Alibaba Cloud that will help you build a Hybrid Cloud solution. The course will also introduce 4 Hybrid reference architectures.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/alibaba-hybrid-cloud-solution.png'
        },          
        {
            title: 'Alibaba Cloud Fundamental Architecture and Case Analysis',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2024',
            desc: 'Through this course, you will learn the core services of Alibaba Cloud Fundamental Architecture (ECS, SLB, OSS and RDS). By studying some classic use cases, you can understand how to build a basic architecture in Alibaba Cloud.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/alibaba-cloud-fundamental-architecture-and-case-analysis.png'
        },          
        {
            title: 'Operate and Manage a Cloud Server',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2024',
            desc: 'Understand the advantage of a cloud server. Learn how to purchase ECS on Alibaba Cloud, manage the server on our console, backup critical data and ensure your system can adjust according to business needs.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/operate-and-manage-a-cloud-server.png'
        },            
        {
            title: 'An Introduction of DevOps',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2024',
            desc: 'What is DevOps? Its a combination of cultural philosophies, practices, and tools that increases a team’s ability to rapidly deliver services. In this clouder course, you’ll learn the concept and history of DevOps, how it works compared with traditional methodology, tools that support DevOps and recap the ideas with some classic case studies.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/an-introduction-of-devops.png'
        },            
        {
            title: 'Microsoft Certified: Dynamics 365 Fundamentals (ERP)',
            type: 'Certificación',
            from: 'Ene 2023',
            to: null,
            desc: 'Earners of Dynamics 365 Fundamentals (ERP) demonstrate relevant work experience and exposure to the enterprise resource planning (ERP) capabilities of Dynamics 365. Candidates have a fundamental understanding of how finance and operations apps fit within the overall Microsoft ecosystem.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/b3e7e7a0-da29-4bc0-97e3-1b072bfdf4d5'
        },          
        {
            title: 'AWS Cloud Quest: Cloud Practitioner',
            type: 'Certificación',
            from: 'Ene 2023',
            to: null,
            desc: 'Earners of this badge have demonstrated basic solution building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database and security services.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/dc7dfe47-5ce1-47fc-b22d-2891a5c3b3d9'
        },    
        {
            title: 'Microsoft Certified: Azure Security Engineer Associate',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2024',
            desc: 'Earning Azure Security Engineer Associate certification validates the skills and knowledge to implement security controls and threat protection, manage identity and access, and protect data, applications, and networks in cloud and hybrid environments as part of end-to-end infrastructure.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/6f094529-1efa-40ff-8b7d-bca6228b308d'
        },                    
        {
            title: 'Microsoft Certified: Azure Solutions Architect Expert',
            type: 'Certificación',
            from: 'Dic 2022',
            to: 'Dic 2023',
            desc: 'Earning the Azure Solutions Architect Expert certification demonstrates subject matter expertise in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security. Candidates have advanced experience and knowledge across IT operations, including networking, virtualization, identity, security, business continuity, disaster recovery, data platforms, and governance.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/33d8bce2-bf89-4225-b244-cae4add890cf'
        },         
        {
            title: 'AZ-305: Designing Microsoft Azure Infrastructure Solutions',
            type: 'Certificación',
            from: 'Ago 2022',
            to: null,
            desc: 'Passing Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions validates the skills and advanced experience and knowledge of IT operations, including networking, virtualization, identity, security, business continuity, disaster recovery, data platforms, and governance. Candidates have experience in Azure administration, Azure development, and DevOps processes.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/19451f57-fbf9-4464-8543-d446fa0a4b3d'
        },        
        {
            title: 'Microsoft Certified: DevOps Engineer Expert',
            type: 'Certificación',
            from: 'Ago 2022',
            to: 'Ago 2023',
            desc: 'Earning the DevOps Engineer Expert certification demonstrates the ability to combine people, process, and technologies to continuously deliver valuable products and services that meet end user needs and business objectives. DevOps professionals streamline delivery by optimizing practices, improving communications and collaboration, and creating automation.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/53cafd70-78b5-47f0-ba79-cda141af4502'
        },         
        {
            title: 'Microsoft Certified: Azure Administrator Associate',
            type: 'Certificación',
            from: 'Ago 2022',
            to: 'Ago 2023',
            desc: 'Earning Azure Administrator Associate certification validates the skills and knowledge to implement, manage, and monitor an organization’s Microsoft Azure environment. Candidates have a deep understanding of each implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in a cloud environment, plus provision, size, monitor, and adjust resources, when needed.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/934f07ee-6aaa-47dd-aaa1-95522a7f11ec'
        },             
        {
            title: 'CyberArk Trustee Certification Level-1',
            type: 'Certificación',
            from: 'Jul 2022',
            to: null,
            desc: 'The course Introduction to CyberArk Privileged Access Management is designed for anyone who is interested in learning about privileged account management. It is highly recommended for any professional who will be part of a CyberArk project.',
            techs: ['cyberark'],
            link: 'https://danieljsaldana.dev/certificates/level-1-trustee-exam-certification.pdf'
        },           
        {
            title: 'AZ-400: Designing and Implementing Microsoft DevOps Solutions',
            type: 'Certificación',
            from: 'Jul 2022',
            to: null,
            desc: 'Passing exam AZ-400: Designing and Implementing Microsoft DevOps Solutions validates the skills and knowledge to combine people, processes, and technologies to deliver valuable products and services that meet end-user needs and business objectives. Candidates optimize practices, improve communications, and create automation to streamline delivery. They design and implement strategies for application code and infrastructure for continuous integration, testing, delivery, monitoring and feedback.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/93d936cb-09f2-4611-ab6a-545ab699faef'
        },        
        {
            title: 'Oracle Cloud Infrastructure Foundations 2021 Associate',
            type: 'Certificación',
            from: 'Jun 2022',
            to: 'Dic 2023',
            desc: 'The Oracle Cloud Infrastructure (OCI) Foundations certification is intended for individuals looking to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure. This certification is targeted towards candidates with non-technical backgrounds such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications.',
            techs: ['oracle'],
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=82F0E94E34541E5828584308E88CE4EF27C4EAC6A8AFB80F4A8CA26FC5394F22'
        },
        {
            title: 'WS Learning: Object Storage',
            type: 'Certificación',
            from: 'Jun 2022',
            to: null,
            desc: 'Earners of this badge have developed the technical skills and knowledge of AWS storage services with a focus on Amazon Simple Storage Service (S3).',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/b634d8af-48ec-4c0c-85e3-0fb6b48f46ba'
        },
        {
            title: 'Lifelong Learning',
            type: 'Certificación',
            from: 'May 2022',
            to: null,
            desc: 'Earners with this badge have proven their unwavering commitment to lifelong learning, vitally important in todays ever-changing and expanding digital world. It also identifies the qualities of an open-minded, disciplined, and constantly evolving mind, capable of using and contributing its knowledge to develop a more equal and better world.',
            techs: ['certiprof'],
            link: 'https://www.credly.com/badges/73f9cf3d-cf43-4c38-bad0-bb453c3f48e7',
        },
        {
            title: 'Microsoft Certified: Azure AI Fundamentals',
            type: 'Certificación',
            from: 'Abr 2022',
            to: null,
            desc: 'Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/b0b84311-ec76-41e6-8482-0de53cbdc4d6',
        },
        {
            title: 'Microsoft Certified: Power Platform Fundamentals',
            type: 'Certificación',
            from: 'Abr 2022',
            to: null,
            desc: 'Earners of the Power Platform Fundamentals certification are users who aspire to improve productivity by automating business processes, analyzing data to produce business insights, and acting more effectively by creating simple app experiences.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/e8a1e70c-34a8-435b-b9c4-1a49de62fa40',
        },
        {
            title: 'Microsoft Certified: Azure Data Fundamentals',
            type: 'Certificación',
            from: 'Mar 2022',
            to: null,
            desc: 'Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/7382e0e7-1bcb-4995-8031-7b5eb5dce1b3',
        },
        {
            title: 'LFS169: Introduction to GitOps',
            type: 'Certificación',
            from: 'Ene 2022',
            to: null,
            desc: 'Earners of the LFS169: Introduction to GitOp badge can explain what GitOps is, along with its key principles, practices and technologies within the context of setting up Continuous Delivery on Kubernetes. They understand the two reconciliation models and three main tools used to implement GitOps on Kubernetes. They understand the benefits of GitOps: how to set up infrastructure, roll out applications and recover from a disaster, all using developer-friendly git-based workflows.',
            techs: ['linux_foundation'],
            link: null,
        },
        {
            title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
            type: 'Certificación',
            from: 'Ene 2022',
            to: null,
            desc: 'Earners of the Security, Compliance, and Identity Fundamentals demonstrate a functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/659ab939-293b-440f-9b1b-69520a68a88f',
        },
        {
            title: 'Cybersecurity Essentials',
            type: 'Certificación',
            from: 'Nov 2021',
            to: null,
            desc: 'The holder of this credential has a foundational knowledge of cybersecurity, including the basics of network security, DevSecOps (Development, Security, Operations), encryption and cybersecurity laws. The holder has been introduced to tactics and techniques used by Black Hats, and the principles of Confidentiality, Integrity and Availability (CIA) used by White Hats to defend networks. This credential also certifies that the holder has practiced critical thinking and problem solving skills.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/b188b838-136f-44e4-8ca9-6ae5e2d6b072',
        },
        {
            title: 'Introduction to Cybersecurity',
            type: 'Certificación',
            from: 'Nov 2021',
            to: null,
            desc: 'The holder of this credential has introductory knowledge of cybersecurity, including the global implications of cyber threats, the impact of cyber attacks on industries, and why cybersecurity is a growing profession. The holder has an understanding of the ways in which networks are vulnerable to attack and Cisco’s approach to threat detection and defense. They also have insight into opportunities available for pursuing network security certifications.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/af81e96b-c04e-4201-96c2-c5155747720d',
        },
        {
            title: 'Introduction to IoT',
            type: 'Certificación',
            from: 'Nov 2021',
            to: null,
            desc: 'The holder of this credential has introductory knowledge of Internet of Things and has an understanding how it enables the Digital Transformation along with emerging technologies such as data analytics, artificial intelligence and the increased attention to cybersecurity. The holder understands the importance of the new Intent Based Networking that uses a software-driven approach and machine learning to be able to connect and secure tens of billions of new devices with ease.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/db40e633-3a87-4617-a0a7-ff5aa6b4cf94',
        },
        {
            title: 'Networking Essentials',
            type: 'Certificación',
            from: 'Nov 2021',
            to: null,
            desc: 'Cisco verifies the earner of this badge successfully completed the Networking Essentials course and achieved this student level credential. Earner has knowledge of fundamentals of networking, how devices communicate, network addressing and services, how to build a home or small office network and configure basic security, basics of configuring Cisco devices, and the basics of testing and troubleshooting network problems. Participated in up to 19 labs and 24 Cisco Packet Tracer activities.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/147c24cf-3c8b-4faf-a5fa-2a3291f650d2',
        },
        {
            title: 'Scrum Fundamentals Certified (SFC™)',
            type: 'Certificación',
            from: 'Nov 2021',
            to:  null,
            desc: 'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.            ',
            techs: [''],
            link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=882413',
        },
        {
            title: 'confluent Fundamentals Accreditation',
            type: 'Certificación',
            from: 'Oct 2021',
            to:  null,
            desc: 'confluent Fundamentals Accreditation',
            techs: ['confluent'],
            link: 'https://www.credential.net/b92d85bf-b725-4a03-9b98-c7a9147c0b18',
        },
        {
            title: 'Microsoft Certified: Azure Fundamentals',
            type: 'Certificación',
            from: 'Sep 2021',
            to:  null,
            desc: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/93cbe9df-0c1d-40e2-93a8-25edfc31242d',
        },
        {
            title: 'AWS Certified Solutions Architect – Associate',
            type: 'Certificación',
            from: 'Sep 2021',
            to:  'Sep 2024',
            desc: 'Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/cb1af97f-cab2-4504-8f1f-b8abb4c6ca0e',
        },
        {
            title: 'AWS Certified Cloud Practitioner',
            type: 'Certificación',
            from: 'Sep 2021',
            to:  'Sep 2024',
            desc: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/4070db58-f1fd-4a48-a0b4-ef4aa5e36e21',
        },
        {
            title: 'Associate Cloud Engineer',
            type: 'Certificación',
            from: 'Oct 2021',
            to:  'Oct 2023',
            desc: 'Un Associate Cloud Engineer se encarga de implementar aplicaciones, supervisar operaciones y administrar soluciones empresariales. También sabe cómo usar Google Cloud Console y la interfaz de línea de comandos para realizar tareas comunes en la plataforma a fin de mantener una o más soluciones implementadas que aprovechen los servicios administrados por Google o autoadministrados que se encuentran en Google Cloud.',
            techs: ['gcp'],
            link: 'https://www.credential.net/7ab2a600-a1da-4359-9d45-a900024233c7',
        },
        {
            title: 'Dynatrace Partner Foundation Certification',
            type: 'Certificación',
            from: 'Ago 2021',
            to:  'Ago 2023',
            desc: 'Dynatrace Partner Foundation Certification',
            techs: ['dynatrace'],
            link: 'https://www.credly.com/badges/18fbdec5-b709-4a5d-8fcd-e107fe39d239',
        },
    ],
    'en' : [
        {
            title: 'Microsoft Certified: Azure AI Engineer Associate',
            type: 'Certificación',
            from: 'Sep 2023',
            to: 'Sep 2024',
            desc: 'As a Microsoft Azure AI engineer, you will create AI solutions using Azure Cognitive Services and Applied AI Services, covering all development phases. Proficiency in Python and C#, utilizing SDK/REST APIs, and applying responsible AI principles are required.',
            techs: ['azure'],
            link: 'https://learn.microsoft.com/en-us/users/danieljsaldana/credentials/1655b468218af0a'
        },           
        {
            title: 'Microsoft Certified: Azure Cosmos DB Developer Specialty',
            type: 'Certificación',
            from: 'Aug 2023',
            to: 'Aug 2024',
            desc: 'This certification signifies a profound grasp of crafting strategic technical solutions to meet specific business goals. Demonstrating an adept balance of best practices and contextual trade-offs, holders excel in designing cross-platform solutions, with a specialized emphasis on harnessing Microsoft Azure Cosmos DBs capabilities for cloud-native applications.',
            techs: ['azure'],
            link: 'https://learn.microsoft.com/en-us/users/danieljsaldana/credentials/e9d53a8fc378fb76'
        },          
        {
            title: 'AWS Certified Solutions Architect – Professional',
            type: 'Certificación',
            from: 'Aug 2023',
            to: 'Aug 2026',
            desc: 'Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices and trade-offs based on business context. Badge owners are able to design solutions across multiple platforms and providers.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/872b2f1a-a56d-4351-a901-d6ca6904e11f'
        },         
        {
            title: 'Oracle Cloud Infrastructure 2023 Multicloud Architect Certified Associate',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Jun 2025',
            desc: 'The Oracle Cloud Infrastructure 2023 Multicloud Architect Associate certification is designed to test an individuals expertise in designing and implementing Oracle Cloud Infrastructure (OCI) multicloud solutions. This certification aims to evaluate the candidates ability to use a combination of cloud services to build a multicloud environment.',
            techs: ['oracle'],
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CFE2F62ECAB9B9D9C63A6578116C6AF3546F990058223C6D66E9543E4645A7A0'
        },            
        {
            title: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Jun 2025',
            desc: 'The Oracle Cloud Infrastructure (OCI) Foundations certification is for individuals who intend to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI). This certification is for candidates with non-technical backgrounds, such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications.',
            techs: ['oracle'],
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=524190EC86E8752386E9DB188282F849565A8A488AD6DD98C038FF6E2F88591A'
        },          
        {
            title: 'Microsoft Certified: Cybersecurity Architect Expert',
            type: 'Certificación',
            from: 'Abr 2023',
            to: 'Abr 2024',
            desc: 'Earning Cybersecurity Architect Expert validates subject matter expertise in designing and evolving the cybersecurity strategy to protect an organization’s mission and business processes across all aspects of the enterprise architecture.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/1c2bfadf-23e9-4472-a76e-83844cddf5e3'
        },                    
        {
            title: 'SC-100: Microsoft Cybersecurity Architect',
            type: 'Certificación',
            from: 'Abr 2023',
            to: null,
            desc: 'Passing Exam SC-100: Microsoft Cybersecurity Architect validates the skills and advanced experience and knowledge in a wide range of security engineering areas, including identity and access, platform protection, security operations, securing data, and securing applications. Candidates have experience with hybrid and cloud implementations.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/0a508fed-e128-4e2b-b4e2-7940e0c07936'
        },         
        {
            title: 'Intermediate Flux',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Flux is a data language used in the InfluxDB time series platform. This course provides a hands-on introduction to the Flux data language. Using an IoT use case, this intermediate course teaches more advanced principles and functions for working in Flux. Participants learn to write their own Flux queries, visualize data, and apply these principles to a real-world problem.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/efeab75b-818c-4ebb-a6fa-d0ec60885242'
        },        
        {
            title: 'Data Collection with Telegraf',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Telegraf is an open source data collection agent that allows users to collect time series data from hundreds of different sources. This course covers the fundamentals of what Telegraf is, how to install and configure it, how to perform data transformations and finally some tips and tricks on how to avoid common mistakes.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/628395d3-ffd3-4373-852e-8b3db4fc0f7d'
        },            
        {
            title: 'Beginner Flux',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'Flux is a data language used in the InfluxDB time series platform. This course provides a hands-on introduction to the Flux data language. Using an IoT use case, this course teaches some of the basic principles and functions for working in Flux. Participants learn to write their own Flux queries, visualize data, and apply these principles to a real-world problem.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/f0d8e099-776e-421d-8d34-e86fa480346b'
        },           
        {
            title: 'Exploring InfluxDB Cloud',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'This course covers the basics of the InfluxDB Cloud time series data platform including a tour of the user interface components and basic administration. It also teaches how to ingest and visualize data as well as how to replicate data from the edge. Learners must complete a hands-on assignment to show their comprehension of the skills presented in the course.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/26a84329-bd56-45e3-a1e6-4bc98a853f4a'
        },              
        {
            title: 'InfluxDB Essentials',
            type: 'Certificación',
            from: 'Mar 2023',
            to: null,
            desc: 'This course covers the fundamentals of InfluxDB. It walks through the various components of the platform, and introduces the InfluxDB data model and how to map raw data onto it. You will also learn about Flux, a scripting and querying language, and how to use it for basic transformation and analysis of time series data. Finally, it examines different methods for visualizing data in InfluxDB and how to use tasks to automate different workflows and processes.',
            techs: ['influxdata'],
            link: 'https://www.credly.com/badges/7dcc3341-1e9a-4fb7-b18e-b0a862c84bc8'
        },           
        {
            title: 'Microsoft Certified: Azure Network Engineer Associate',
            type: 'Certificación',
            from: 'Apr 2023',
            to: 'Apr 2024',
            desc: 'Earning Azure Network Engineer Associate validates skills and subject matter expertise in planning, implementing, and maintaining Azure networking solutions, including hybrid networking, connectivity, routing, security, and private access to Azure services. Professionals in this role deploy networking solutions using Azure Portal and other methods, including PowerShell, Azure Command-Line Interface (CLI), and Azure Resource Manager templates (ARM templates).',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/27d26914-5bf5-4b00-914d-2063240481ed'
        },          
        {
            title: '(ISC)² Candidate',
            type: 'Certificación',
            from: 'Mar 2023',
            to: 'Mar 2024',
            desc: '(ISC)² Candidates are individuals pursuing or considering a cybersecurity certification. To become a Candidate, the individual must apply online and provide minimum identifying information, as well as affirm that they will abide by the (ISC)² Code of Ethics and Privacy Policy.',
            techs: ['(ISC)²'],
            link: 'https://www.credly.com/badges/15402b80-2c68-47c5-9ddb-365ad471b84d'
        },          
        {
            title: 'Microsoft Certified: Information Protection Administrator Associate',
            type: 'Certificación',
            from: 'Mar 2024',
            to: 'Mar 2024',
            desc: 'Earning the Information Protection Administrator Associate certification validates the skills and knowledge to plan and implement controls that meet organizational compliance needs. Candidates are responsible for translating requirements and compliance controls into technical implementation. They are responsible for creating policies and rules for content classification, data loss prevention, governance, and protection.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/0d84a1b7-e11b-4378-a7c3-1d4cf777a21b'
        },          
        {
            title: 'Microsoft Certified: Dynamics 365 Fundamentals (CRM)',
            type: 'Certificación',
            from: 'Mar 2024',
            to: null,
            desc: 'Earners of Dynamics 365 Fundamentals (CRM) demonstrate relevant work experience in an Information Technology (IT) environment. Candidates have a fundamental understanding of the customer engagement capabilities of Dynamics 365.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/44216d31-d4cc-404a-b6bc-e879553ff0dc'
        },          
        {
            title: 'Microsoft 365 Certified: Fundamentals',
            type: 'Certificación',
            from: 'Ene 2024',
            to: null,
            desc: 'Earning the Microsoft 365 Fundamentals certification demonstrates an understanding of the options available in Microsoft 365 and the benefits of adopting cloud services, the Software as a Service (SaaS) cloud model, and implementing Microsoft 365 cloud service.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/c1cf03d4-a8cd-40c6-b81b-62ad58bee529'
        },  
        {
            title: 'Achieve CI&CD With Jenkins',
            type: 'Certificación',
            from: 'Ene 2024',
            to: 'Ene 2025',
            desc: 'This course introduces the basic concepts, features and benifits of CI/CD compared with traditional software developing mode. Then we have a detailed introduction about the features and benefits of Jenkins software and also the installation of Jenkins based on Ubuntu operating system. Finally we introduced the detailed operations on Jenkins console with a brief demonstration.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/achieve-ci-cd-with-jenkins.png'
        },         
        {
            title: 'Alibaba Cloud Analysis Architecture and Case Studies',
            type: 'Certificación',
            from: 'Ene 2024',
            to: 'Ene 2025',
            desc: 'Through this course, you will learn the core services of Alibaba Cloud Analysis Architecture (E-MapReduce, MaxCompute, Table Store). By studying some classic use cases, you can understand how to build an analysis architecture in Alibaba Cloud.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/alibaba-cloud-analysis-architecture-and-case-studies.png'
        },         
        {
            title: 'Alibaba Hybrid Cloud Solution',
            type: 'Certificación',
            from: 'Ene 2024',
            to: 'Ene 2025',
            desc: 'This course helps you undertsand the components and services in Alibaba Cloud that will help you build a Hybrid Cloud solution. The course will also introduce 4 Hybrid reference architectures.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/alibaba-hybrid-cloud-solution.png'
        },             
        {
            title: 'Alibaba Cloud Fundamental Architecture and Case Analysis',
            type: 'Certificación',
            from: 'Ene 2024',
            to: 'Ene 2025',
            desc: 'Through this course, you will learn the core services of Alibaba Cloud Fundamental Architecture (ECS, SLB, OSS and RDS). By studying some classic use cases, you can understand how to build a basic architecture in Alibaba Cloud.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/alibaba-cloud-fundamental-architecture-and-case-analysis.png'
        },          
        {
            title: 'Operate and Manage a Cloud Server',
            type: 'Certificación',
            from: 'Ene 2024',
            to: 'Ene 2025',
            desc: 'Understand the advantage of a cloud server. Learn how to purchase ECS on Alibaba Cloud, manage the server on our console, backup critical data and ensure your system can adjust according to business needs.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/operate-and-manage-a-cloud-server.png'
        },         
        {
            title: 'An Introduction of DevOps',
            type: 'Certificación',
            from: 'Ene 2023',
            to: 'Ene 2023',
            desc: 'What is DevOps? Its a combination of cultural philosophies, practices, and tools that increases a team’s ability to rapidly deliver services. In this clouder course, you’ll learn the concept and history of DevOps, how it works compared with traditional methodology, tools that support DevOps and recap the ideas with some classic case studies.',
            techs: ['alibabacloud'],
            link: 'https://danieljsaldana.dev/certificates/an-introduction-of-devops.png'
        },          
        {
            title: 'Microsoft Certified: Dynamics 365 Fundamentals (ERP)',
            type: 'Certificación',
            from: 'Jan 2023',
            to: null,
            desc: 'Earners of Dynamics 365 Fundamentals (ERP) demonstrate relevant work experience and exposure to the enterprise resource planning (ERP) capabilities of Dynamics 365. Candidates have a fundamental understanding of how finance and operations apps fit within the overall Microsoft ecosystem.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/b3e7e7a0-da29-4bc0-97e3-1b072bfdf4d5'
        },             
        {
            title: 'AWS Cloud Quest: Cloud Practitioner',
            type: 'Certification',
            from: 'Jan 2023',
            to: null,
            desc: 'Earners of this badge have demonstrated basic solution building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database and security services.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/dc7dfe47-5ce1-47fc-b22d-2891a5c3b3d9'
        },    
        {
            title: 'Microsoft Certified: Azure Security Engineer Associate',
            type: 'Certification',
            from: 'Jan 2023',
            to: 'Jan 2024',
            desc: 'Earning Azure Security Engineer Associate certification validates the skills and knowledge to implement security controls and threat protection, manage identity and access, and protect data, applications, and networks in cloud and hybrid environments as part of end-to-end infrastructure.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/6f094529-1efa-40ff-8b7d-bca6228b308d'
        },           
        {
            title: 'Microsoft Certified: Azure Solutions Architect Expert',
            type: 'Certification',
            from: 'Dec 2022',
            to: 'Dec 2023',
            desc: 'Earning the Azure Solutions Architect Expert certification demonstrates subject matter expertise in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security. Candidates have advanced experience and knowledge across IT operations, including networking, virtualization, identity, security, business continuity, disaster recovery, data platforms, and governance.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/33d8bce2-bf89-4225-b244-cae4add890cf'
        },         
        {
            title: 'AZ-305: Designing Microsoft Azure Infrastructure Solutions',
            type: 'Certification',
            from: 'Aug 2022',
            to: null,
            desc: 'Passing Exam AZ-305: Designing Microsoft Azure Infrastructure Solutions validates the skills and advanced experience and knowledge of IT operations, including networking, virtualization, identity, security, business continuity, disaster recovery, data platforms, and governance. Candidates have experience in Azure administration, Azure development, and DevOps processes.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/19451f57-fbf9-4464-8543-d446fa0a4b3d'
        },          
        {
            title: 'Microsoft Certified: DevOps Engineer Expert',
            type: 'Certificación',
            from: 'Aug 2022',
            to: 'Aug 2023',
            desc: 'Earning the DevOps Engineer Expert certification demonstrates the ability to combine people, process, and technologies to continuously deliver valuable products and services that meet end user needs and business objectives. DevOps professionals streamline delivery by optimizing practices, improving communications and collaboration, and creating automation.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/53cafd70-78b5-47f0-ba79-cda141af4502'
        },         
        {
            title: 'Microsoft Certified: Azure Administrator Associate',
            type: 'Certification',
            from: 'Aug 2022',
            to: 'Aug 2023',
            desc: 'Earning Azure Administrator Associate certification validates the skills and knowledge to implement, manage, and monitor an organization’s Microsoft Azure environment. Candidates have a deep understanding of each implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in a cloud environment, plus provision, size, monitor, and adjust resources, when needed.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/934f07ee-6aaa-47dd-aaa1-95522a7f11ec'
        },            
        {
            title: 'CyberArk Trustee Certification Level-1',
            type: 'Certification',
            from: 'Jul 2022',
            to: null,
            desc: 'The course Introduction to CyberArk Privileged Access Management is designed for anyone who is interested in learning about privileged account management. It is highly recommended for any professional who will be part of a CyberArk project.',
            techs: ['cyberark'],
            link: 'https://danieljsaldana.dev/certificates/level-1-trustee-exam-certification.pdf'
        },          
        {
            title: 'AZ-400: Designing and Implementing Microsoft DevOps Solutions',
            type: 'Certification',
            from: 'Jul 2022',
            to: null,
            desc: 'Passing exam AZ-400: Designing and Implementing Microsoft DevOps Solutions validates the skills and knowledge to combine people, processes, and technologies to deliver valuable products and services that meet end-user needs and business objectives. Candidates optimize practices, improve communications, and create automation to streamline delivery. They design and implement strategies for application code and infrastructure for continuous integration, testing, delivery, monitoring and feedback.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/93d936cb-09f2-4611-ab6a-545ab699faef'
        },            
        {
            title: 'Oracle Cloud Infrastructure Foundations 2021 Associate',
            type: 'Certification',
            from: 'Jun 2022',
            to: 'Dic 2023',
            desc: 'The Oracle Cloud Infrastructure (OCI) Foundations certification is intended for individuals looking to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure. This certification is targeted towards candidates with non-technical backgrounds such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications.',
            techs: ['oracle'],
            link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=82F0E94E34541E5828584308E88CE4EF27C4EAC6A8AFB80F4A8CA26FC5394F22'
        },
        {
            title: 'WS Learning: Object Storage',
            type: 'Certificación',
            from: 'Jun 2022',
            to: null,
            desc: 'Earners of this badge have developed the technical skills and knowledge of AWS storage services with a focus on Amazon Simple Storage Service (S3).',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/b634d8af-48ec-4c0c-85e3-0fb6b48f46ba'
        },
        {
            title: 'Lifelong Learning',
            type: 'Certification',
            from: 'May 2022',
            to: null,
            desc: 'Earners with this badge have proven their unwavering commitment to lifelong learning, vitally important in todays ever-changing and expanding digital world. It also identifies the qualities of an open-minded, disciplined, and constantly evolving mind, capable of using and contributing its knowledge to develop a more equal and better world.',
            techs: ['certiprof'],
            link: 'https://www.credly.com/badges/73f9cf3d-cf43-4c38-bad0-bb453c3f48e7',
        },
        {
            title: 'Microsoft Certified: Azure AI Fundamentals',
            type: 'Certification',
            from: 'Apr 2022',
            to: null,
            desc: 'Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/b0b84311-ec76-41e6-8482-0de53cbdc4d6',
        },
        {
            title: 'Microsoft Certified: Power Platform Fundamentals',
            type: 'Certification',
            from: 'Apr 2022',
            to: null,
            desc: 'Earners of the Power Platform Fundamentals certification are users who aspire to improve productivity by automating business processes, analyzing data to produce business insights, and acting more effectively by creating simple app experiences.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/e8a1e70c-34a8-435b-b9c4-1a49de62fa40',
        },
        {
            title: 'Microsoft Certified: Azure Data Fundamentals',
            type: 'Certification',
            from: 'Mar 2022',
            to: null,
            desc: 'Earners of the Azure Data Fundamentals certification have demonstrated foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/7382e0e7-1bcb-4995-8031-7b5eb5dce1b3',
        },
        {
            title: 'LFS169: Introduction to GitOps',
            type: 'Certification',
            from: 'Jan 2022',
            to: null,
            desc: 'Earners of the LFS169: Introduction to GitOp badge can explain what GitOps is, along with its key principles, practices and technologies within the context of setting up Continuous Delivery on Kubernetes. They understand the two reconciliation models and three main tools used to implement GitOps on Kubernetes. They understand the benefits of GitOps: how to set up infrastructure, roll out applications and recover from a disaster, all using developer-friendly git-based workflows.',
            techs: ['linux_foundation'],
            link: null,
        },
        {
            title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
            type: 'Certification',
            from: 'Jan 2022',
            to: null,
            desc: 'Earners of the Security, Compliance, and Identity Fundamentals demonstrate a functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/659ab939-293b-440f-9b1b-69520a68a88f',
        },
        {
            title: 'Cybersecurity Essentials',
            type: 'Certification',
            from: 'Nov 2021',
            to: null,
            desc: 'The holder of this credential has a foundational knowledge of cybersecurity, including the basics of network security, DevSecOps (Development, Security, Operations), encryption and cybersecurity laws. The holder has been introduced to tactics and techniques used by Black Hats, and the principles of Confidentiality, Integrity and Availability (CIA) used by White Hats to defend networks. This credential also certifies that the holder has practiced critical thinking and problem solving skills.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/b188b838-136f-44e4-8ca9-6ae5e2d6b072',
        },
        {
            title: 'Introduction to Cybersecurity',
            type: 'Certification',
            from: 'Nov 2021',
            to: null,
            desc: 'The holder of this credential has introductory knowledge of cybersecurity, including the global implications of cyber threats, the impact of cyber attacks on industries, and why cybersecurity is a growing profession. The holder has an understanding of the ways in which networks are vulnerable to attack and Cisco’s approach to threat detection and defense. They also have insight into opportunities available for pursuing network security certifications.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/af81e96b-c04e-4201-96c2-c5155747720d',
        },
        {
            title: 'Introduction to IoT',
            type: 'Certification',
            from: 'Nov 2021',
            to: null,
            desc: 'The holder of this credential has introductory knowledge of Internet of Things and has an understanding how it enables the Digital Transformation along with emerging technologies such as data analytics, artificial intelligence and the increased attention to cybersecurity. The holder understands the importance of the new Intent Based Networking that uses a software-driven approach and machine learning to be able to connect and secure tens of billions of new devices with ease.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/db40e633-3a87-4617-a0a7-ff5aa6b4cf94',
        },
        {
            title: 'Networking Essentials',
            type: 'Certification',
            from: 'Nov 2021',
            to: null,
            desc: 'Cisco verifies the earner of this badge successfully completed the Networking Essentials course and achieved this student level credential. Earner has knowledge of fundamentals of networking, how devices communicate, network addressing and services, how to build a home or small office network and configure basic security, basics of configuring Cisco devices, and the basics of testing and troubleshooting network problems. Participated in up to 19 labs and 24 Cisco Packet Tracer activities.',
            techs: ['cisco'],
            link: 'https://www.credly.com/badges/147c24cf-3c8b-4faf-a5fa-2a3291f650d2',
        },
        {
            title: 'Scrum Fundamentals Certified (SFC™)',
            type: 'Certification',
            from: 'Nov 2021',
            to:  null,
            desc: 'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.            ',
            techs: [''],
            link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=882413',
        },
        {
            title: 'confluent Fundamentals Accreditation',
            type: 'Certification',
            from: 'Oct 2021',
            to:  null,
            desc: 'confluent Fundamentals Accreditation',
            techs: ['confluent'],
            link: 'https://www.credential.net/b92d85bf-b725-4a03-9b98-c7a9147c0b18',
        },
        {
            title: 'Microsoft Certified: Azure Fundamentals',
            type: 'Certification',
            from: 'Sep 2021',
            to:  null,
            desc: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
            techs: ['azure'],
            link: 'https://www.credly.com/badges/93cbe9df-0c1d-40e2-93a8-25edfc31242d',
        },
        {
            title: 'AWS Certified Solutions Architect – Associate',
            type: 'Certification',
            from: 'Sep 2021',
            to:  'Sep 2024',
            desc: 'Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/cb1af97f-cab2-4504-8f1f-b8abb4c6ca0e',
        },
        {
            title: 'AWS Certified Cloud Practitioner',
            type: 'Certification',
            from: 'Sep 2021',
            to:  'Sep 2024',
            desc: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
            techs: ['aws'],
            link: 'https://www.credly.com/badges/4070db58-f1fd-4a48-a0b4-ef4aa5e36e21',
        },
        {
            title: 'Associate Cloud Engineer',
            type: 'Certification',
            from: 'Oct 2021',
            to:  'Oct 2023',
            desc: 'Un Associate Cloud Engineer se encarga de implementar aplicaciones, supervisar operaciones y administrar soluciones empresariales. También sabe cómo usar Google Cloud Console y la interfaz de línea de comandos para realizar tareas comunes en la plataforma a fin de mantener una o más soluciones implementadas que aprovechen los servicios administrados por Google o autoadministrados que se encuentran en Google Cloud.',
            techs: ['gcp'],
            link: 'https://www.credential.net/7ab2a600-a1da-4359-9d45-a900024233c7',
        },
        {
            title: 'Dynatrace Partner Foundation Certification',
            type: 'Certification',
            from: 'Aug 2021',
            to:  'Aug 2023',
            desc: 'Dynatrace Partner Foundation Certification',
            techs: ['dynatrace'],
            link: 'https://www.credly.com/badges/18fbdec5-b709-4a5d-8fcd-e107fe39d239',
        },
    ],
}

export default projects
