import { ProviderQueryClient } from "@/components/providers/TanstackProvider";
import {
  QUERY_Auth_KEY,
  QUERY_REVIEWED_CODE_KEY,
} from "@/constants/query.constant";

import { iResponse } from "@/interface/common";
import {
  getAllCodeReviewById,
  getAllCodesReviewBUserId,
  isAuth,
  sendCodeForReview,
  updateCodeForReview,
} from "@/services/api";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

export const useCodeReviewQuery = () => {
  const createMutation = useMutation({
    mutationFn: sendCodeForReview,
    onSuccess: async () => {
      await ProviderQueryClient.invalidateQueries({
        queryKey: [QUERY_REVIEWED_CODE_KEY],
      });
    },
  });

  const usePrefetchAllById = (
    _id: string
  ): UseQueryResult<iResponse, Error> => {
    return useQuery({
      queryKey: [QUERY_REVIEWED_CODE_KEY, _id],
      queryFn: async () => await getAllCodeReviewById({ _id }),
    });
  };

  const usePrefetchByUserId = () => {
    return useQuery({
      queryKey: [QUERY_REVIEWED_CODE_KEY],
      queryFn: getAllCodesReviewBUserId,
    });
  };

  const updateMutation = useMutation({
    mutationFn: updateCodeForReview,
    onSuccess: async () => {
      await ProviderQueryClient.invalidateQueries({
        queryKey: [QUERY_REVIEWED_CODE_KEY],
      });
    },
  });

  // -------------------------------------------  Prescription Config start -------------------------------------------

  // -------------------------------------------  Prescription Config end -------------------------------------------

  return {
    createMutation,
    usePrefetchAllById,
    usePrefetchByUserId,
    updateMutation,
  };
};

export const useAuth = () => {
  const query = useQuery({
    queryFn: isAuth,
    queryKey: [QUERY_Auth_KEY],
    staleTime: 1000 * 60 * 5,
  });

  return { query };
};
