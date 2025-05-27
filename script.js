document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const studentInfo = {
        name: "Goutham Chandra Nakka",
        shortName: "G.C.N.",
        tagline: "Data Engineer | Building Scalable Data Solutions",
        subTagline: "Welcome to my personal portfolio. Explore my projects, experience, and skills in data engineering.",
        bio: "Versatile Data Engineer with 5+ years of experience in building robust data pipelines, implementing data governance frameworks, and optimizing big data workflows. Proficient in leveraging Hadoop, Spark, Databricks, and cloud platforms (AWS, Azure) to deliver scalable and efficient data solutions. Skilled in transforming complex data sets into actionable insights using Python, SQL, and Power BI, with expertise in data lake architectures, ETL development, and data quality automation. Adept at collaborating with stakeholders across various domains to align data solutions with business objectives, ensuring seamless integration and impactful decision-making.",
        skills: [
            "Unix", "Shell Scripting", "T-SQL", "SQL", "PL/SQL", "C++", "Python", "Pandas", "NumPy", "SciPy", "Scikit-learn", "Matplotlib", "PySpark", "Scala", "Java",
            "Hadoop", "Apache Kafka", "HBase", "Hive", "Control-M", "HDFS", "Airflow", "DBT", "REST API", "ML/AI concepts",
            "MS SQL Server", "Teradata", "Oracle", "MongoDB",
            "Informatica IICS", "Informatica Power Center", "Informatica Data Quality", "Talend", "SSIS", "Cloud Dataflow",
            "Azure", "Azure Blob", "Cosmos DB", "Data Factory", "Synapse Analytics", "Event Hubs",
            "AWS", "S3", "Glue", "Athena", "Kinesis", "EMR", "Redshift", "DynamoDB",
            "Terraform", "Jenkins", "Github", "Kubernetes",
            "Tableau", "PowerBI", "Jupyter Notebook", "Snowflake", "Data Vault"
        ],
        email: "GouthamChandraNakka@gmail.com",
        linkedin: "https://linkedin.com/in/gouthamchnakka", // PLEASE UPDATE THIS
        github: "https://github.com/gouthamchnakka",       // PLEASE UPDATE THIS
        phone: "+1(334)895-5586"
    };

    const projectsData = [
      {
        id: 1,
        title: "Big Data Analysis on Airline Dataset",
        description: "This project focuses on processing and analyzing large airline datasets using Hadoop, Hive, Pig, and AWS Athena to extract valuable business insights. The dataset is stored and processed in a distributed manner using AWS EMR and HDFS, enabling efficient handling of vast amounts of structured and unstructured data. The analysis involves querying flight performance, delays, demand forecasting, and route profitability. Pig is used for data preprocessing, while Hive facilitates structured querying through HiveQL. AWS Athena, a serverless query service, is leveraged for interactive analysis of data stored in Amazon S3. Insights extracted include flight delays, customer segmentation, and route performance, helping optimize airline operations. The project demonstrates the power of big data technologies in driving data-driven decisions within the airline industry.",
        technologies: ["Hadoop", "Hive", "Pig", "AWS Athena", "AWS EMR", "HDFS", "Amazon S3", "Big Data"],
        imageUrl: "https://placehold.co/600x400/1E40AF/FFFFFF?text=Airline+Data+Analysis",
        liveLink: null,
        githubLink: null, 
        category: "Big Data & Analytics",
        icon: "bar-chart-3"
      },
      {
        id: 2,
        title: "Real-time Data Pipeline: AWS Kinesis, Snowflake, and Airflow",
        description: "Developed an end-to-end data pipeline to process and analyze EC2 logs using AWS Kinesis Firehose, Apache Airflow, and Snowflake, enabling efficient data ingestion, transformation, and storage. Designed and implemented a real-time data pipeline using AWS Kinesis Firehose to capture EC2 logs. Processed and transformed customer and order datasets using Apache Airflow DAGs. Established data storage in Amazon S3 and Snowflake, ensuring efficient and scalable data management. Deployed and managed Amazon MWAA for orchestrating ETL workflows. Created Snowflake databases, tables, and stages for structured data storage and processing. Automated data movement through Landing, Processing, and Processed Zones in S3 for optimized storage. Improved real-time analytics capabilities by integrating AWS EC2, Kinesis, and Snowflake for seamless data flow.",
        technologies: ["AWS Kinesis", "Apache Airflow", "Snowflake", "Amazon S3", "AWS EC2", "Amazon MWAA", "ETL"],
        imageUrl: "https://placehold.co/600x400/047857/FFFFFF?text=Real-time+Pipeline",
        liveLink: null,
        githubLink: null, 
        category: "Data Engineering & Cloud",
        icon: "zap"
      }
    ];

    const experiencesData = [
        {
          role: "Data Engineer",
          company: "Tata Consulting Services (TCS)",
          location: "Dallas, TX",
          duration: "Dec 2023 - Present",
          icon: "server",
          responsibilities: [
            "Migrated structured and semi-structured data from Hive, Teradata, and MongoDB to an AWS S3 data lake, ensuring a 98% success rate with optimized Informatica IICS ETL pipelines.",
            "Developed and integrated REST APIs to enable seamless data ingestion from third-party sources, improving real-time data processing in AWS S3 and Redshift.",
            "Designed and implemented Databricks Unity Catalog tables and ETL pipelines using Databricks Workflows, job clusters, and custom Scala/PySpark transformations.",
            "Integrated DBT with Databricks to automate SQL-based transformations, ensuring scalability, modularity, and version control.",
            "Developed high-performance ETL processes for AWS Redshift using Talend, Informatica IICS, and SQL-based transformations.",
            "Maintained and optimized a robust S3 data lake architecture with governance, encryption, access controls, and data masking.",
            "Optimized Spark jobs using advanced partitioning, data serialization, and caching strategies, reducing processing times by 30%.",
            "Automated CI/CD pipelines with Jenkins and Terraform for infrastructure provisioning, deployment, and monitoring.",
            "Designed and deployed Apache Airflow DAGs to automate workflows across AWS Glue, S3, and Redshift.",
            "Developed and maintained Power BI and Tableau dashboards for interactive business intelligence.",
            "Improved data lineage tracking by implementing Apache Atlas and Data Quality validation with Informatica Data Quality.",
            "Reduced operational costs by 25% through workload optimization in Databricks and Redshift using Terraform and Control-M."
          ]
        },
        {
          role: "Software Developer",
          company: "Flipkart",
          location: "Hyderabad",
          duration: "May 2018 – Jul 2022",
          icon: "code-2",
          responsibilities: [
            "Designed and developed ETL pipelines using Apache Hive and Pig for efficient data processing and transformation.",
            "Built and optimized data ingestion pipelines leveraging Azure Data Factory and Azure Synapse Analytics.",
            "Implemented data lake solutions on Azure, integrating data from MS SQL Server, Oracle, and Teradata.",
            "Developed PySpark scripts for large-scale data transformations, improving processing efficiency by 40%.",
            "Automated data validation and quality checks using Informatica Data Quality and Talend.",
            "Optimized query performance and storage strategies for Hive-managed and external tables.",
            "Collaborated with cross-functional teams to integrate data solutions with Power BI and Tableau.",
            "Maintained documentation on ETL workflows, performance tuning, and data governance best practices."
          ]
        }
    ];

    const certificationsData = [
        { name: "Azure Data Engineer Associate", issuer: "Microsoft", icon: "cloud-cog" },
        { name: "Databricks Data Engineer", issuer: "Databricks", icon: "database" },
        { name: "Microsoft Power BI Certified", issuer: "Microsoft", icon: "layout-dashboard" }
    ];

    // --- POPULATE FUNCTIONS ---
    function populatePersonalInfo() {
        document.getElementById('doc-title').textContent = `${studentInfo.name} | Portfolio`;
        document.getElementById('nav-logo').textContent = studentInfo.shortName;
        document.getElementById('hero-name').innerHTML = `Hi, I'm <span class="text-blue-500">${studentInfo.name}</span>`;
        document.getElementById('hero-tagline').textContent = studentInfo.tagline;
        document.getElementById('hero-subtagline').textContent = studentInfo.subTagline;
        document.getElementById('about-bio').textContent = studentInfo.bio;
        
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = ''; // Clear existing
        studentInfo.skills.slice(0, 30).forEach(skill => { // Limit initial display
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
        if (studentInfo.skills.length > 30) {
            const moreSkills = document.createElement('span');
            moreSkills.className = 'skill-tag';
            moreSkills.textContent = `+ ${studentInfo.skills.length - 30} more`;
            skillsContainer.appendChild(moreSkills);
        }

        document.getElementById('contact-email').href = `mailto:${studentInfo.email}`;
        document.getElementById('contact-email-text').textContent = studentInfo.email;
        document.getElementById('contact-phone-text').textContent = studentInfo.phone;
        document.getElementById('contact-linkedin').href = studentInfo.linkedin;
        document.getElementById('contact-github').href = studentInfo.github;
        document.getElementById('footer-copyright').innerHTML = `&copy; ${new Date().getFullYear()} ${studentInfo.name}. All rights reserved.`;
    }

    function renderProjects(projectsToRender) {
        const projectsGrid = document.getElementById('projects-grid');
        const noProjectsMessage = document.getElementById('no-projects-message');
        projectsGrid.innerHTML = ''; // Clear existing projects

        if (projectsToRender.length === 0) {
            noProjectsMessage.style.display = 'block';
            return;
        }
        noProjectsMessage.style.display = 'none';

        projectsToRender.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/94A3B8/FFFFFF?text=Image+Not+Found';">
                <div class="project-card-content">
                    <div class="category">
                        <i data-lucide="${project.icon || 'code'}"></i>
                        <span>${project.category}</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p class="description">${project.description}</p>
                    ${project.description.length > 200 ? `<button class="toggle-description">Show More <i data-lucide="chevron-down"></i></button>` : ''}
                    <h4>Technologies:</h4>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"><i data-lucide="github"></i> GitHub</a>` : ''}
                        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
        lucide.createIcons(); // Re-scan for new icons

        // Add event listeners for "Show More/Less"
        document.querySelectorAll('.toggle-description').forEach(button => {
            button.addEventListener('click', (e) => {
                const description = e.target.closest('.project-card-content').querySelector('.description');
                description.classList.toggle('expanded');
                if (description.classList.contains('expanded')) {
                    e.target.innerHTML = `Show Less <i data-lucide="chevron-up"></i>`;
                } else {
                    e.target.innerHTML = `Show More <i data-lucide="chevron-down"></i>`;
                }
                lucide.createIcons();
            });
        });
    }
    
    function populateProjectFilters() {
        const categories = ['All', ...new Set(projectsData.map(p => p.category))];
        const categoryFilter = document.getElementById('project-category-filter');
        categoryFilter.innerHTML = '';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    function filterAndSearchProjects() {
        const searchTerm = document.getElementById('project-search').value.toLowerCase();
        const selectedCategory = document.getElementById('project-category-filter').value;

        const filtered = projectsData.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                                  project.description.toLowerCase().includes(searchTerm) ||
                                  project.technologies.join(' ').toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        renderProjects(filtered);
    }


    function populateExperience() {
        const container = document.getElementById('experience-container');
        container.innerHTML = '';
        experiencesData.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'experience-item';
            item.innerHTML = `
                <div class="experience-item-header">
                    <div class="experience-item-icon"><i data-lucide="${exp.icon || 'briefcase'}"></i></div>
                    <div>
                        <h3>${exp.role}</h3>
                        <p class="company">${exp.company} <span class="location">(${exp.location})</span></p>
                        <p class="duration">${exp.duration}</p>
                    </div>
                </div>
                <ul>
                    ${exp.responsibilities.slice(0,5).map(res => `<li>${res}</li>`).join('')} 
                    ${exp.responsibilities.length > 5 ? `<li>...and more</li>` : ''}
                </ul>
            `;
            // Consider adding a "show more" for responsibilities if needed
            container.appendChild(item);
        });
    }

    function populateCertifications() {
        const grid = document.getElementById('certifications-grid');
        grid.innerHTML = '';
        certificationsData.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'certification-card';
            card.innerHTML = `
                <div class="cert-icon-container">
                    <i data-lucide="${cert.icon || 'award'}"></i>
                </div>
                <h3>${cert.name}</h3>
                <p class="issuer">Issuer: ${cert.issuer}</p>
            `;
            grid.appendChild(card);
        });
    }

    // --- EVENT LISTENERS & INITIALIZATION ---
    populatePersonalInfo();
    populateProjectFilters();
    renderProjects(projectsData); // Initial render of all projects
    populateExperience();
    populateCertifications();
    lucide.createIcons(); // Initial icon rendering

    // Project Search and Filter Listeners
    document.getElementById('project-search').addEventListener('input', filterAndSearchProjects);
    document.getElementById('project-category-filter').addEventListener('change', filterAndSearchProjects);

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileNavMenu.classList.toggle('open');
        mobileMenuButton.innerHTML = !isExpanded ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });

    // Smooth scroll for nav links & active state & close mobile menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (mobileNavMenu.classList.contains('open')) {
                mobileMenuButton.click(); // Simulate click to toggle and update icon
            }

            // Active state for main nav (and mobile nav by extension as they share class)
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Smooth scroll (already handled by CSS html scroll-behavior: smooth for simple #hash links)
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('.main-nav ul li a, .mobile-nav-menu ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset for sticky header, 80 is an example value
            if (pageYOffset >= (sectionTop - sectionHeight / 3 - 80)) { 
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        // Ensure "Home" is active if no other section is current (e.g., at the very top)
        if (current === '' && pageYOffset < sections[0].offsetTop - 80) {
             document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
             document.querySelector('.nav-link[href="#home"]').classList.add('active');
        }
    });

});