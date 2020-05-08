import pymysql


def getConnection():
    conn = pymysql.connect(host='localhost', port=3306, user='root', password='*lsy1tkdduq',
                           db='nice_movie', charset='utf-8', autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    return conn
