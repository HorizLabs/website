import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json({
        "name": "Horizon Labs, Inc.",
        "apiVersion": "1.0.0B"
    });
}