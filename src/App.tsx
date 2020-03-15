import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, HeaderPage } from "./components";
import { NotFoundPage } from "./components/shell";
import { CoursePage, Speakers } from "./components/exercises";

export const App = () => (
  <div className="font-sans bg-grey-200 flex flex-col min-h-screen w-full">
    <HeaderPage />
    <main className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course" component={CoursePage} />
        <Route path="/conference" component={Speakers} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  </div>
);
