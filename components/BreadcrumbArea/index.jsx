const BreadCrumbArea = ({ title, url }) => {
    return (
        <section className="breadcrumb-area bg-no-repeat bg-cover pb-14 pt-96 relative z-10 bg-center" style={{ backgroundImage: url }}>
            <div className="container mx-auto text-center">
                <h1 className='text-white text-2xl md:text-4xl font-semibold leading-9 uppercase'>{title}</h1>
            </div>
        </section>
    );
}

export default BreadCrumbArea;
