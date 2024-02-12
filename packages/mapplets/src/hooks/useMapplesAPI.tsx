import { useEffect, useRef, useState } from 'react';

import { MappletsDOM } from '@mapples/mapplets-types';
import { RenderComponentType } from '@mapples/mapplets-components';
import MappletsOpenApi from '@mapples/mapplets-open-api';

const useMapplesAPI = (id: string) => {
  const pending = useRef(false);
  const [loading, setLoading] = useState(false);

  const [dom, setDom] = useState<MappletsDOM<RenderComponentType>>();

  const getPage = async (pageID: string) => {
    setLoading(true);
    try {
      const response = await MappletsOpenApi.Page.getPage<RenderComponentType>(pageID);
      setDom(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!pending.current) {
      pending.current = true;
      getPage(id).finally(() => {
        pending.current = false;
      });
    }
  }, []);

  return {
    dom,
    loading
  }
}

export default useMapplesAPI;
