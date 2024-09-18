"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export const CreateSurveyButton = ({ user, isLoggedIn, learnMode = true, size = "", setError }: any) => {
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setError("")
        setLoading(true)
        console.log("Do something")
        console.log(user)
        setLoading(false)
    };



    return (
        <div className="flex items-center justify-between space-x-4">

            {isLoggedIn ? (
                <>
                    <Button onClick={handleConfirm} size={size} disabled={loading} >
                        {loading ? "Creating survey" : "Start Survey"}
                    </Button>
                </>
            ) : (
                <Link href="/login">
                    <Button disabled={loading}>Start Survey</Button>
                </Link>
            )}
            {learnMode && (
                <Button variant="outline" disabled={loading}>Learn More</Button>
            )}

        </div>
    );
};
