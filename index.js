const rust = import("./hello_webassembly");

rust.then(func => {
  func.create_stuff();
  func.run_alert("Javascript");
});
