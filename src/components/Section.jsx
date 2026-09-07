const Section = ({ label, children, id }) => {
  return (
    <section id={id}>
      <h2 className="mb-3.5 select-none text-sm font-bold uppercase tracking-wider text-muted">
        {label}
      </h2>
      {children}
    </section>
  );
};

export default Section;
