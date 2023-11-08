
const ServiceContent = () => {
    return (
        <div className="service">
            <div className="service-left">
            <div><h3 className="font-color">Web Development</h3></div>
            <div className="service-img ">
                <img src="https://www.cloudifyapps.com/assets/images/slider/web-development.svg" alt="" />
            </div>
            <div className="service-details">
                <p className="font-color">CMS or content management systems are becoming increasingly popular in imparting superb functionality to websites along with aesthetics while keeping their custom offerings intact. CMS web development is stylish, faster, and provides efficient management.</p>
            </div>
            </div>

            <div className="service-right">
                <div className="service-right-item">
                    <h3 className="font-color">Wordpress Development</h3>
                    <div className="devImage">
                        <img src="	https://www.cloudifyapps.com/assets/images/icons/wordpress-icon.svg" alt="" />
                    </div>
                </div>
                <div className="service-right-item">
                    <h3 className="font-color">Joomla Development</h3>
                    <div className="devImage">
                        <img src="https://www.cloudifyapps.com/assets/images/icons/joomla-icon.svg" alt="" />
                    </div>
                </div>
                <div className="service-right-item">
                    <h3 className="font-color">Drupal Development</h3>
                    <div className="devImage">
                        <img src="https://www.cloudifyapps.com/assets/images/icons/drupal-icon.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceContent;