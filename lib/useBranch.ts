"use client";

import { useState, useEffect } from "react";
import { BranchConfig, getBranchByDomain, defaultBranch } from "./branchConfig";

export function useBranch(): BranchConfig {
  const [branch, setBranch] = useState<BranchConfig>(defaultBranch);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      setBranch(getBranchByDomain(hostname));
    }
  }, []);

  return branch;
}
