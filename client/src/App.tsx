import { Switch, Route } from "wouter";
import Welcome from "@/pages/Welcome";
import Terms from "@/pages/Terms";
import Description from "@/pages/Description";
import Categories from "@/pages/Categories";
import SubTopics from "@/pages/SubTopics";
import Player from "@/pages/Player";
import MainLayout from "@/components/MainLayout";

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Welcome} />
        <Route path="/terms" component={Terms} />
        <Route path="/description" component={Description} />
        <Route path="/categories" component={Categories} />
        <Route path="/subtopics/:category" component={SubTopics} />
        <Route path="/player/:category/:topic" component={Player} />
      </Switch>
    </MainLayout>
  );
}

export default App;
