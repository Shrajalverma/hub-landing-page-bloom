
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-smh-dark mb-2">
            <span className="text-smh-purple">Smart</span>
            <span className="text-smh-blue">Money</span>
            <span className="text-smh-mint">Hub</span>
          </h2>
          <p className="text-muted-foreground">Log in to manage your finances</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              className="mt-2"
            />
          </div>
          <Button type="submit" className="w-full btn-primary">
            Log In
          </Button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account? {' '}
            <Link to="/signup" className="text-smh-purple hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
