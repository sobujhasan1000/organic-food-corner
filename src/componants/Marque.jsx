const Marque = () => {
  return (
    <div className="relative overflow-hidden  py-2">
      <marquee
        // eslint-disable-next-line react/no-unknown-property
        behavior="scroll"
        direction="left"
        className="text-lg font-medium text-[#f57171]"
      >
        <span className="mx-4">
          For any inquiries, please contact our members.
        </span>
        <span className="mx-4">Phone Number: 01740-121418</span>
        <span className="mx-4">We are here to help!</span>
      </marquee>
    </div>
  );
};

export default Marque;
