export class ProjectNotFoundError extends Error {
  constructor() {
    super("Couldn't find a KIQR project in the current folder.")

    // assign the error class name in your custom error (as a shortcut)
    this.name = this.constructor.name

    // capturing the stack trace keeps the reference to your error class
    Error.captureStackTrace(this, this.constructor)
  }
}
