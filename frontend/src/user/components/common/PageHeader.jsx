import styles from '../../styles/UserGeneral.module.css';

const PageHeader = ({ title, backgroundImage }) => {
    const sectionStyle = {
        background: `url(${backgroundImage}) no-repeat center/cover`,
    };

    return (
        <div className={`${styles.page_header_area}`}>
            <div className={styles.page_header_background} style={sectionStyle}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="header-page">
                            <h1 style={{ textShadow: '4px 1px 2px #000', color: '#fff' }}>
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
