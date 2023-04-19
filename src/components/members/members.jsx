import "./members.css";

const Members = () => {
    return (
        <div id="members" className="container members-container">
            <h1 className="member-txt">References</h1>
            <div className="member member-1">
                <div className="member-img"></div>
                <div className="member-info">
                    <h1 className="name">Ferhat MOUSAVİ</h1>
                    <h3 className="position">Technology Consultant & Instructor, Author</h3>
                    <h4 className="about">
                        Strategy development, leadership, project and program management, product and business
                        operations.

                        Enterprise Applications. Software Architect. Systems Analysis/Design and Maintenance. Project
                        and Team Management using PMI methodologies. Full Life-cycle IT Solutions Development Team
                        Management. Mentoring. Startups.

                        More than 22 years of Information technologies diversified expertise experiences in a
                        professional context, and involved in numerous software projects throughout Retail, Banking, IT
                        and cryptocurrency and blockchain.
                    </h4>
                    <a href="mailto:ferhat.mousavi@gmail.com" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className="member member-2">
                <div className="member-img2"></div>
                <div className="member-info">
                    <h1 className="name">Oğulcan YAĞIZ</h1>
                    <h3 className="position">Software Developer</h3>
                    <h4 className="about">
                        Structured several custom REST APIs built in Python which comprise manipulating and
                        transferring the data for the TSM project.
                        Worked on designing horizontally scalable non-relational database using Sharded Cluster
                        property which consists of Sharding & Replication components of MongoDB.
                        Deployed services on Linux and virtualized environments using Docker. Besides,
                        orchestrated those services using Kubernetes.
                        Expert on HSM in order to perform data transfer safely.
                    </h4>

                    <a href="mailto:yahyacan17@hotmail.com" className="contact-member">
                        <span>contact</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Members;
