import React, { useEffect, useMemo, useState } from 'react';
import { Popover } from 'antd';
import styles from './index.less';

interface IMenuInfo {
  name: string;
  key: string;
  path: string;
  icon?: any;
  level: number;
  children?: IMenuInfo[];
}
interface IProps {
  menuList: IMenuInfo[];
  defaultKey: string;
  currentKey: string;
  onChange: (menu: IMenuInfo) => void;
}

// 示例数据
const menuListMock = [
  {
    name: 'home',
    key: 'home',
    path: '/home',
    icon: '',
    level: 1,
  },
  {
    name: 'settings',
    key: 'settings',
    path: '/settings',
    icon: '',
    level: 1,
    children: [
      {
        name: 'settings-userinfo',
        key: 'settings-userinfo',
        path: '/settings/userinfo',
        icon: '',
        level: 2,
        children: [
          {
            name: 'settings-userinfo-info',
            key: 'settings-userinfo-info',
            path: '/settings/userinfo/info',
            icon: '',
            level: 3,
          },
          {
            name: 'settings-userinfo-info2',
            key: 'settings-userinfo-info2',
            path: '/settings/userinfo/info2',
            icon: '',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'settings2',
    key: 'settings2',
    path: '/settings2',
    icon: '',
    level: 1,
    children: [
      {
        name: 'settings2-userinfo',
        key: 'settings2-userinfo',
        path: '/settings2/userinfo',
        icon: '',
        level: 2,
        children: [
          {
            name: 'settings2-userinfo-info',
            key: 'settings2-userinfo-info',
            path: '/settings2/userinfo/info',
            icon: '',
            level: 3,
          },
        ],
      },
      {
        name: 'settings2-userinfo2',
        key: 'settings2-userinfo2',
        path: '/settings2/userinfo2',
        icon: '',
        level: 2,
      },
    ],
  },
  {
    name: 'settings3',
    key: 'settings3',
    path: '/settings3',
    icon: '',
    level: 1,
    children: [
      {
        name: 'settings3-userinfo',
        key: 'settings3-userinfo',
        path: '/settings3/userinfo',
        icon: '',
        level: 2,
      },
    ],
  },
];

const findSelectKeyListByKey = (
  key: string,
  menuList: IMenuInfo[] = [],
): [IMenuInfo[], boolean] => {
  let keyList: IMenuInfo[] = [];
  let isFind = false;
  for (let i of menuList) {
    keyList = [];
    keyList.push(i);
    if (i.key === key) {
      isFind = true;
      break;
    }
    if (i.children?.length) {
      const [list, find] = findSelectKeyListByKey(key, i.children);
      if (find) {
        keyList = [...keyList, ...list];
        isFind = true;
        break;
      }
    }
  }
  return [keyList, isFind];
};
// console.log(findSelectKeyListByKey('home', menuListMock));
// console.log(findSelectKeyListByKey('settings-userinfo', menuListMock));
// console.log(findSelectKeyListByKey('settings2-userinfo-info', menuListMock));

const Menu = (props: IProps) => {
  const { onChange, currentKey, menuList } = props;
  const [selectKeySet, setSelectSet] = useState<Set<string>>(new Set());
  const [unfoldKeySet, setUnfoldSet] = useState<Set<string>>(new Set());

  const newMenuList = useMemo(() => {
    return menuList || menuListMock;
  }, [menuList]);

  const caculateMenu = (currentKey: string) => {
    if (!currentKey) {
      setUnfoldSet(new Set([newMenuList[0].key]));
      return;
    }
    const [keyList, find] = findSelectKeyListByKey(currentKey, newMenuList);
    if (find) {
      switch (keyList.length) {
        case 3:
          setUnfoldSet(new Set([keyList[0].key]));
          setSelectSet(new Set([keyList[1].key, keyList[2].key]));
          break;
        case 2:
          setUnfoldSet(new Set([keyList[0].key]));
          setSelectSet(new Set([keyList[1].key]));
          break;
        case 1:
          setUnfoldSet(new Set([]));
          setSelectSet(new Set([keyList[0].key]));
          break;
        default:
          break;
      }
    }
  };

  const onItemClick = (menu: IMenuInfo) => {
    switch (menu.level) {
      case 1:
        if (menu.children?.length) {
          if (unfoldKeySet.has(menu.key)) {
            unfoldKeySet.delete(menu.key);
            setUnfoldSet(new Set([...unfoldKeySet]));
          } else {
            setUnfoldSet(new Set([menu.key]));
          }
        } else {
          setSelectSet(new Set([menu.key]));
          setUnfoldSet(new Set());
          onChange && onChange(menu);
        }
        break;
      case 2:
        if (!menu.children?.length) {
          setSelectSet(new Set([menu.key]));
          onChange && onChange(menu);
        }
        break;
      case 3:
        const [keyList] = findSelectKeyListByKey(menu.key, newMenuList);
        setUnfoldSet(new Set([keyList[0].key]));
        setSelectSet(new Set([keyList[1].key, menu.key]));
        onChange && onChange(menu);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    caculateMenu(currentKey);
  }, [currentKey]);

  return (
    <div className={styles.menuWrapper}>
      <ul className={styles.level1}>
        {newMenuList.map((menu: IMenuInfo) => {
          return (
            <li
              className={`${menu.children?.length ? '' : styles.commonLi} ${
                selectKeySet.has(menu.key) ? styles.select : ''
              }`}
              key={menu.key}
            >
              <div className={styles.layer1} onClick={() => onItemClick(menu)}>
                <div className={styles.icon}></div>
                <div className={styles.name}>{menu.name}</div>
                <div className={styles.arrow}>
                  <i
                    className={`v-arrow ${
                      unfoldKeySet.has(menu.key) ? 'up' : ''
                    }`}
                    style={{
                      display: menu.children?.length ? '' : 'none',
                    }}
                  ></i>
                </div>
              </div>
              {menu.children && (
                <ul
                  className={styles.level2}
                  style={{
                    height: unfoldKeySet.has(menu.key)
                      ? menu.children.length * 60 + 'px'
                      : '0',
                  }}
                >
                  {menu.children.map((subMenu) => {
                    return (
                      <li
                        className={`${styles.commonLi} ${
                          selectKeySet.has(subMenu.key) ? styles.select : ''
                        }`}
                        key={subMenu.key}
                      >
                        {subMenu.children?.length ? (
                          <Popover
                            placement="rightTop"
                            title={null}
                            trigger="hover"
                            autoAdjustOverflow
                            overlayClassName={styles.popover}
                            content={
                              <ul className={styles.level3}>
                                {subMenu.children.map((item) => (
                                  <li
                                    key={item.key}
                                    className={`${
                                      selectKeySet.has(item.key)
                                        ? styles.select
                                        : ''
                                    }`}
                                  >
                                    <div
                                      className={styles.layer3}
                                      onClick={() => onItemClick(item)}
                                    >
                                      {item.name}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            }
                          >
                            <div
                              className={styles.layer2}
                              onClick={() => onItemClick(subMenu)}
                            >
                              <div className={styles.icon}></div>
                              <div className={styles.name}>{menu.name}</div>
                              <div className={styles.arrow}>
                                <i
                                  className="h-arrow"
                                  style={{
                                    display:
                                      subMenu.children?.length &&
                                      unfoldKeySet.has(menu.key)
                                        ? ''
                                        : 'none',
                                  }}
                                ></i>
                              </div>
                            </div>
                          </Popover>
                        ) : (
                          <div
                            className={styles.layer2}
                            onClick={() => onItemClick(subMenu)}
                          >
                            <div className={styles.icon}></div>
                            <div className={styles.name}>{menu.name}</div>
                            <div className={styles.arrow}></div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
