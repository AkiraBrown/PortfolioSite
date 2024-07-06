function ModeToggler() {
  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        type="button"
        aria-expanded="false"
      ></button>
    </div>
  );
}

export default ModeToggler;
