/* eslint-disable no-unused-vars */
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Accordion, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/common/Pagination";
import "../styles/ProfileListing2.css";
import PageHeader from "../components/common/PageHeader";

// 👉 Mock data (replace with real static values as needed)
const mockCategories = [
    { id: 1, name: "category-1" },
    { id: 2, name: "category-2" },
];

const mockFilters = [
    {
        title: "Maritial Status",
        options: [
            {
                id: 101,
                label: "Unmarried",
                type: "typology",
            },
            {
                id: 102,
                label: "Divorcee",
                type: "typology",
            },
        ],
    },
    {
        title: "Native Place",
        options: [
            {
                id: 201,
                label: "Pune",
                type: "material",
            },
            {
                id: 201,
                label: "Nagpur",
                type: "material",
            },
            {
                id: 201,
                label: "Kolhapur",
                type: "material",
            },
        ],
    },
];

const mockProducts = [
    {
        id: 1,
        name: "Saurabh Deshmukh",
        slug: "saurabh-deshmukh",
        dob: "03/05/1997",
        location: "Kolhapur",
        education: "BSC COMPUTER SCIENCE",
        category_id: 1,
        thumbnail: "/images/user/listing/male-user.webp",
        is_active: true,
    },
    {
        id: 2,
        name: "Vishal Patil",
        slug: "vishal-patil",
        dob: "13/05/1995",
        location: "Pune",
        education: "BSC COMPUTER SCIENCE",
        category_id: 2,
        thumbnail: "/images/user/listing/male-user-1.webp",
        is_active: true,
    },
    {
        id: 3,
        name: "Mahesh Jadhav",
        slug: "mahesh-jadhav",
        dob: "07/04/1997",
        location: "Nagpur",
        education: "BSC COMPUTER SCIENCE",
        category_id: 2,
        thumbnail: "/images/user/listing/male-user-2.webp",
        is_active: true,
    },
    {
        id: 2,
        name: "Vishal Patil",
        slug: "vishal-patil",
        dob: "13/05/1995",
        location: "Pune",
        education: "BSC COMPUTER SCIENCE",
        category_id: 2,
        thumbnail: "/images/user/listing/male-user-1.webp",
        is_active: true,
    },
    {
        id: 1,
        name: "Saurabh Deshmukh",
        slug: "saurabh-deshmukh",
        dob: "03/05/1997",
        location: "Kolhapur",
        education: "BSC COMPUTER SCIENCE",
        category_id: 1,
        thumbnail: "/images/user/listing/male-user.webp",
        is_active: true,
    },
    {
        id: 3,
        name: "Mahesh Jadhav",
        slug: "mahesh-jadhav",
        dob: "07/04/1997",
        location: "Nagpur",
        education: "BSC COMPUTER SCIENCE",
        category_id: 2,
        thumbnail: "/images/user/listing/male-user-2.webp",
        is_active: true,
    },
    {
        id: 1,
        name: "Saurabh Deshmukh",
        slug: "saurabh-deshmukh",
        dob: "03/05/1997",
        location: "Kolhapur",
        education: "BSC COMPUTER SCIENCE",
        category_id: 1,
        thumbnail: "/images/user/listing/male-user.webp",
        is_active: true,
    },
    {
        id: 2,
        name: "Vishal Patil",
        slug: "vishal-patil",
        dob: "13/05/1995",
        location: "Pune",
        education: "BSC COMPUTER SCIENCE",
        category_id: 2,
        thumbnail: "/images/user/listing/male-user-1.webp",
        is_active: true,
    },
    {
        id: 3,
        name: "Mahesh Jadhav",
        slug: "mahesh-jadhav",
        dob: "07/04/1997",
        location: "Nagpur",
        education: "BSC COMPUTER SCIENCE",
        category_id: 2,
        thumbnail: "/images/user/listing/male-user-2.webp",
        is_active: true,
    },
];

const ProfileListing2 = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [isHiddenSectionVisible, setHiddenSectionVisible] = useState(false);
    const queryParam = useParams();
    const productListingRef = useRef(null);
    const [hideFilter, setHideFilter] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const categoryObject = mockCategories.find(item => item.name === queryParam.category_slug);

    const [tablePayload, setTablePayload] = useState({ page: 1, per_page_limit: 24, filters: { typology: [], material: [], finishes: [], category: categoryObject ? [categoryObject.id] : [], }, });

    const allProducts = mockProducts.filter(product => product.is_active);

    const toggleFilters = () => { setShowFilters((prev) => !prev); };

    const handleFilterChange = (event) => {
        const { id, checked, value } = event.target;
        const cat = id.split('-')[1];
        setTablePayload((prev) => ({ ...prev, page: 1, filters: { ...prev.filters, [value]: checked ? [...prev.filters[value], cat] : prev.filters[value].filter((item) => item !== cat), }, }));
    };

    const clearFilters = () => { setTablePayload((prev) => ({ ...prev, filters: { typology: [], material: [], finishes: [], category: categoryObject ? [categoryObject.id] : [], }, })); };

    const handlePageChange = (page) => { setTablePayload((prev) => ({ ...prev, page, })); };

    const handleCardClick = (card) => {
        setActiveCard(card);
        setHiddenSectionVisible(true);
    };

    const closeHiddenSection = () => { setHiddenSectionVisible(false); };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setHideFilter(!entry.isIntersecting); },
            { threshold: 0 }
        );

        const currentRef = productListingRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    const printCategories = (filter) => {
        if (!filter.options) return null;

        return filter.options.map((item, subIndex) => {
            return (
                <Form.Check
                    type="checkbox"
                    id={`checkbox-${item.id}`}
                    label={item.label}
                    value={item.type}
                    key={item.id}
                    className="mb-2"
                    checked={tablePayload.filters[item.type]?.includes?.(item.id) || false}
                    onChange={handleFilterChange}
                />
            );
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Maratha Grooms</title>
                <meta name="description" content="This is the description of my page." />
            </Helmet>
            <PageHeader
                title="Unmarried Grooms"
                backgroundImage="/images/user/page-banner/listing.webp"
            />
            <section id="productListing" className="productListing" ref={productListingRef}>

                <div className="product-outer-wrapper side-space section-space">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className={`filter-wrapper ${hideFilter ? 'filter-hidden' : ''}`}>
                                <div className={`filter-accordion-wrapper ${showFilters ? "up" : "down"}`}>
                                    <Accordion className="filter-accordion" defaultActiveKey="0">
                                        {mockFilters.map((filter, index) => (
                                            <Accordion.Item eventKey={index.toString()} key={filter.title}>
                                                <Accordion.Header className="filter-main">
                                                    <div className="filter-heading">
                                                        <p className="m-0">{filter.title}</p>
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <Form>
                                                        <Accordion>
                                                            {printCategories(filter)}
                                                        </Accordion>
                                                    </Form>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className="filter-toggle-wrapper d-xl-none">
                                    <Button className="filter-btn" onClick={toggleFilters}>
                                        Filters
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="product-main-wrapper">
                                <div className="filter-top-row mb-2">
                                    <div className="clear-filter">
                                        {Object.values(tablePayload.filters).some(filterArray => filterArray.length > 0) && (
                                            <button type="button" className="cle-btn-filter" onClick={clearFilters}>
                                                Clear Filter
                                            </button>
                                        )}
                                    </div>
                                    <div className="records-details">
                                        Displaying {allProducts.length} out of {allProducts.length} items.
                                    </div>
                                </div>
                                <div className="product-wrapper">
                                    <div className="row">
                                        {allProducts.map((product) => {
                                            const productCategory = mockCategories.find(cat => cat.id === product.category_id);
                                            return (
                                                <div className="col-xl-4 col-md-3 col-6" key={product.id}>
                                                    <Link to={`/products/${product.slug}`} className="product-box">
                                                        <div className="product-image">
                                                            <img
                                                                src={product.thumbnail}
                                                                alt={product.name}
                                                                loading="lazy"
                                                                crossOrigin="allow"
                                                            />
                                                        </div>
                                                        <div className="product-meta">
                                                            <h4 className="product-title text-ellipsis single m-0">{product.name}</h4>
                                                            <p className="product-date text-ellipsis single m-0">{product.dob}</p>
                                                            <Link to={`/products/${product.slug}`} className="product-btn">Visit Profile</Link>
                                                        </div>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Pagination
                                        totalRecords={allProducts.length}
                                        perPage={tablePayload.per_page_limit}
                                        currentPage={tablePayload.page}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};

export default ProfileListing2;
