import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Info } from '../interfaces/actorInterface';

interface ActorInfoDetails {
    isLoading: boolean;
    actorInfo?: Info;
}

export const useActorInfo = ( actorId: number) => {

    const [state, setState] = useState<ActorInfoDetails>({
        isLoading: true,
        actorInfo: undefined,
    });

    const getActorInfoDetails = async() => {

        const actorPromise = await movieDB.get<Info>(`/person/${ actorId }`);

        const [ actorPromiseResp ] = await Promise.all([
            actorPromise,
        ]);

        setState({
            isLoading: false,
            actorInfo: actorPromiseResp.data,
        })
    }

    useEffect(() => {
        getActorInfoDetails();
    }, []);

    return {
        ...state
    }
}
