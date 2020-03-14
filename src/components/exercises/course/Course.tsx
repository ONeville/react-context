import React from "react";

export class CoursePage extends React.Component<any, any> {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = (event: any) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="my-5 text-3xl font-semibold">Course</h2>
        <h3 className="font-medium text-xl">Add Course</h3>
        <div className="border w-1/3 flex justify-between">
          <input
            type="text"
            onChange={this.handleChange}
            className="border border-gray-600 w-full px-2"
          />
          <button
            type="submit"
            className="py-2 px-10 bg-red-300 font-semibold rounded"
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}
